import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Marker,
} from "@vis.gl/react-google-maps";
import { getCords, getDistance, getAddress } from "../../api";
import "./CalcTow.css";

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;
const MAP_ID = process.env.REACT_APP_GOOGLE_MAP_ID;

export default function CalculateTow() {
  const MapWithRef = React.forwardRef((props, ref) => {
    return <Map {...props} forwardedRef={ref} />;
  });
  const [currentPosition, setCurrentPosition] = useState({
    lat: 0.0,
    lng: 0.0,
    address: "",
  });
  const [destination, setDestination] = useState({
    lat: 0.0,
    lng: 0.0,
    address: "",
  });

  const [isPositionLoaded, setIsPositionLoaded] = useState(false);
  const [address, setAddress] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");

  //price logic
  const [hasTolls, setHasTolls] = useState(false);
  //const [tollFee, setTollFee] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalMiles, setMiles] = useState(0.0);
  const mapRef = useRef(null);

  const PRICE_PER_MILE = 3.5;
  const DEADHEAD = 5;
  const TOLL_RATE = 5.5;
  // const TIRE_SERVICE = 75;
  // // const REFUEL = 50;
  const HOOKUP_FEE = 75;

  const mapLoaded = useMemo(() => {
    return (
      isPositionLoaded && destination.lat !== 0.0 && destination.lng !== 0.0
    );
  }, [isPositionLoaded, destination]);
  /*Upon render of the page, geolocate the user and set their current location.*/
  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
    };

    // Define a helper function to fetch the address
    async function fetchAddress(lat, lng) {
      console.log(lat, lng);
      const response = await getAddress({ lat: lat, lng: lng });
      console.log(response.data);
      return response.data.address;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          try {
            const address = await fetchAddress(lat, lng);
            setCurrentPosition({ lat, lng, address });
            setIsPositionLoaded(true);
          } catch (error) {
            console.error("Failed to fetch the address:", error);
          }
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            console.log("User denied geolocation access.");
            alert("Please enable location services in your device settings.");
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            console.log("Location data is unavailable.");
          } else if (error.code === error.TIMEOUT) {
            console.log("Request for location timed out.");
          } else {
            console.log("Unknown error:", error);
          }
        },
        options,
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    // Step 3: Update map bounds when markers change
    if (mapRef.current && destination.lat !== 0.0 && destination.lng !== 0.0) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(currentPosition);
      bounds.extend(destination);
      mapRef.current.fitBounds(bounds);
    }
  }, [currentPosition, destination]);

  async function fetchAddress(lat, lng) {
    console.log(lat, lng);
    const response = await getAddress({ lat: lat, lng: lng });
    console.log(response.data);
    return response.data.address;
  }

  //Grabbing coordinates from the inputted destination address
  const fetchDestinationCoordinates = async () => {
    if (!address || address === undefined) {
      alert("Please enter a valid address.");
      return;
    }
    try {
      const addressData = {
        address: address,
      };
      const response = await getCords(addressData);
      const data = await response.data;
      if (data !== undefined) {
        const { lat, lng, address } = data;
        const newDestination = { lat, lng, address };
        setDestination(newDestination);

        // Use updated destination to recalculate distance
        fetchDistance(currentPosition, newDestination);
        setAddress("");
      } else {
        alert("Could not find this location, try again.");
      }
    } catch (error) {
      console.error("Error fetching geolocation data: ", error);
    }
  };

  const calculateCost = (totalMiles, hasTolls) => {
    const baseDistance = Math.min(totalMiles, 10); // The first 10 miles
    const deadheadDistance = Math.max(totalMiles - 10, 0); // Miles beyond 10

    const baseCost = HOOKUP_FEE + baseDistance * PRICE_PER_MILE;
    const deadheadCost = deadheadDistance * DEADHEAD;

    const tollCost = hasTolls ? TOLL_RATE : 0;

    return baseCost + deadheadCost + tollCost;
  };

  const fetchDistance = async (startingPoint, endPoint) => {
    try {
      const response = await getDistance({
        lat1: startingPoint.lat,
        lng1: startingPoint.lng,
        lat2: endPoint.lat,
        lng2: endPoint.lng,
      });

      if (response.status === 200) {
        const { normalRouteDistance, hasTolls: tollsDetected } = response.data;

        setMiles(Number(normalRouteDistance) || 0); // Save the total distance
        setHasTolls(tollsDetected); // Update toll information

        // Recalculate cost
        const newTotalCost = calculateCost(normalRouteDistance, tollsDetected);
        setTotalCost(newTotalCost);
      } else {
        console.error("Error fetching distance:", response.data);
      }
    } catch (error) {
      console.error("Error fetching distance:", error);
    }
  };

  const refreshCurrentlocation = () => {
    var options = {
      enableHighAccuracy: true,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          try {
            const address = await fetchAddress(lat, lng);
            const newCurrentPosition = { lat, lng, address };
            setCurrentPosition(newCurrentPosition);

            // Use updated position to recalculate distance
            fetchDistance(newCurrentPosition, destination);
            setIsPositionLoaded(true);
          } catch (error) {
            console.error("Failed to fetch the address:", error);
          }
        },
        () => console.log("Unable to retrieve your current location"),
        options,
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  //Grabbing coordinates from the inputted destination address
  const manualCurrentLocation = async () => {
    if (!currentAddress || currentAddress === undefined) {
      alert("Please enter a valid address.");
      return;
    }
    try {
      const addressData = {
        address: currentAddress,
      };
      const response = await getCords(addressData);
      const data = await response.data;
      if (data !== undefined) {
        const { lat, lng, address } = data;
        const newCurrentPosition = { lat, lng, address };
        setCurrentPosition(newCurrentPosition);

        // Use updated position to recalculate distance
        fetchDistance(newCurrentPosition, destination);
        setCurrentAddress("");
      } else {
        alert("Could not find this location, try again.");
      }
    } catch (error) {
      console.error("Error fetching geolocation data: ", error);
    }
  };

  const calculateMidpoint = (start, end) => {
    const lat = (start.lat + end.lat) / 2;
    const lng = (start.lng + end.lng) / 2;
    return { lat, lng };
  };

  const calculateZoomLevel = (distanceInMiles) => {
    let zoomLevel = 5;
    const screenWidth = window.innerWidth; // Get screen width

    if (distanceInMiles < 1) {
      zoomLevel = screenWidth < 768 ? 16 : 18; // Adjust zoom based on mobile
    } else if (distanceInMiles < 10) {
      zoomLevel = screenWidth < 768 ? 12 : 14;
    } else if (distanceInMiles < 50) {
      zoomLevel = screenWidth < 768 ? 10 : 12;
    } else if (distanceInMiles < 100) {
      zoomLevel = screenWidth < 768 ? 8 : 10;
    } else {
      zoomLevel = screenWidth < 768 ? 4 : 5;
    }

    return zoomLevel;
  };

  return (
    <>
      <header class="tow-calc__header">
        <h1 class="tow-calc__heading">Tow Cost Calculator</h1>
        <p class="tow-calc__description">
          Before you call, calculate how much your service is going to cost!
        </p>
      </header>
      <main class="tow-calc__main">
        <section>
          <APIProvider apiKey={API_KEY}>
            {mapLoaded ? (
              <MapWithRef
                ref={mapRef}
                style={{ height: "60vh" }}
                zoom={calculateZoomLevel(totalMiles)}
                center={calculateMidpoint(currentPosition, destination)}
                gestureHandling={"none"}
                disableDefaultUI={true}
                mapId={MAP_ID || undefined}
                options={{
                  clickableIcons: false, // Disable clicking on icons/markers
                  draggable: false, // Disable dragging
                  zoomControl: false, // Disable zoom control
                  scrollwheel: false, // Disable scroll zooming
                  disableDoubleClickZoom: true, // Disable double-click zoom
                  styles: [
                    {
                      featureType: "poi",
                      elementType: "all",
                      stylers: [
                        {
                          visibility: "off",
                        },
                      ],
                    },
                    {
                      featureType: "poi.business",
                      elementType: "labels",
                      stylers: [
                        {
                          visibility: "off",
                        },
                      ],
                    },
                  ],
                }}
              >
                {MAP_ID ? (
                  <>
                    <AdvancedMarker position={currentPosition} />
                    {destination.lat !== 0.0 && destination.lng !== 0.0 && (
                      <AdvancedMarker position={destination} />
                    )}
                  </>
                ) : (
                  <>
                    <Marker position={currentPosition} />
                    {destination.lat !== 0.0 && destination.lng !== 0.0 && (
                      <Marker position={destination} />
                    )}
                  </>
                )}
              </MapWithRef>
            ) : (
              <div class="no-map">
                <h1>Enter in a destination Address to show map</h1>
                <p>
                  If your address shown is wrong, enter in a new pickup address.
                </p>
                <p>
                  Don't know your address? <br /> Press the refresh location
                  button to get your location <br /> Make sure you have location
                  services enabled on your device!
                </p>
              </div>
            )}
          </APIProvider>
          <div class="address-text-container">
            <p class="address-text">
              Current Address: {currentPosition.address}
            </p>
            <p class="address-text">
              Destination Address: {destination.address}
            </p>
            <div>
              <p>Distance: {totalMiles} mi</p>
            </div>
          </div>
          <div className="input-area">
            <div className="input-collection">
              <button
                onPointerDown={refreshCurrentlocation}
                onClick={refreshCurrentlocation}
              >
                Refresh Location
              </button>
              <input
                type="text"
                placeholder="Enter pickup address"
                value={currentAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
              />
              <button
                onPointerDown={manualCurrentLocation}
                onClick={manualCurrentLocation}
                disabled={!currentAddress.trim()} // Disable if empty
              >
                Confirm Pickup Location
              </button>
              <input
                type="text"
                placeholder="Enter destination address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button
                onPointerDown={fetchDestinationCoordinates}
                onClick={fetchDestinationCoordinates}
                disabled={!address.trim()} // Disable if empty
              >
                Confirm Destination
              </button>
            </div>
          </div>
        </section>
        <section class="total-cost-item">
          <h2>Total Charges</h2>
          <p>Total Miles: {Number(totalMiles).toFixed(2)} mi</p>
          <p>Base Miles (10 mi): {Math.min(totalMiles, 10).toFixed(2)} mi</p>
          <p>Deadhead Miles: {Math.max(totalMiles - 10, 0).toFixed(2)} mi</p>
          <p>Has Tolls? {hasTolls ? "Yes" : "No"}</p>
          <p>Total cost: ${totalCost.toFixed(2)}</p>
        </section>
      </main>
    </>
  );
}
