import React, { useState, useEffect } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { getCords, getDistance, getAddress } from "../../api";

const API_KEY = "AIzaSyAEaWgxrDc6poSuoswkQlBiG4cEoqBkl0o";

export default function CalculateTow() {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 0.0,
    lng: 0.0,
    address: "",
  });
  const [destination, setDestination] = useState({ lat: 0.0, lng: 0.0 });
  const [totalMiles, setMiles] = useState(0.0);
  const [isPositionLoaded, setIsPositionLoaded] = useState(false);
  const [address, setAddress] = useState("");

  /*Upon render of the page, geolocate the user and set their current location.*/
  /* Upon render of the page, geolocate the user and set their current location. */
useEffect(() => {
  var options = {
    enableHighAccuracy: true,
  };

  // Define a helper function to fetch the address
  async function fetchAddress(lat, lng) {
    console.log(lat,lng)
    const response = await getAddress({ lat:lat, lng:lng });
    return response.address;
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        console.log(position.coords);
        const { latitude: lat, longitude: lng } = position.coords;
        try {
          const address = await fetchAddress(lat, lng);
          setCurrentPosition({ lat, lng, address });
          setIsPositionLoaded(true);
        } catch (error) {
          console.error("Failed to fetch the address:", error);
        }
      },
      () => console.log("Unable to retrieve your current location"),
      options
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}, []);

 
  //Grabbing coordinates from the inputted destination address
  const fetchCoordinates = async () => {
    if (!address || address === undefined) {
      alert("Please enter a valid address.");
      return;
    }
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${API_KEY}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        const { lat, lng } = await data.results[0].geometry.location;
        setDestination({ lat, lng });
        fetchDistance(currentPosition, { lat, lng });
      } else {
        alert("Could not find this location, try again.");
      }
    } catch (error) {
      console.error("Error fetching geolcation data: ", error);
    }
  };

  const fetchDistance = async (startingPoint, endPoint) => {
    if (!startingPoint || !endPoint) {
      console.error("Invalid start or end points.");
      return;
    }

    try {
      const response = await fetch(
        `/maps/api/directions/json?origin=${startingPoint.lat},${startingPoint.lng}&destination=${endPoint.lat},${endPoint.lng}&key=${API_KEY}`
      );

      const data = await response.json();
      if (data.status === "OK") {
        const route = data.routes[0];
        console.log(data);
        const distance = route.legs[0].distance.text; // Distance in human-readable format
        const distanceValue = route.legs[0].distance.value; // Distance in meters

        //console.log("Road distance:", distance); 
        const result = distanceValue / 1609.34;
        const roundedResult = parseFloat(result.toFixed(1));
        setMiles(roundedResult);
      } else {
        console.error("Error fetching directions:", data.status);
      }
    } catch (error) {  
      console.error("Error fetching road distance:", error);
    }
  };

  const fetchCurrentlocation = () => {
    setCurrentPosition({ lat: 0, lng: 0 });
    var options = {
      enableHighAccuracy: true,
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          setCurrentPosition({ lat, lng });
          setIsPositionLoaded(true);
        },
        () => console.log("Unable to retreve your current location"),
        options
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <h1>Tow Cost Calculator</h1>
        <p>
          Ever wondered how much a roadside service would cost? Now you don't
          have to.
        </p>
      </div>
      <APIProvider apiKey={API_KEY}>
        {isPositionLoaded && (
          <Map
            style={{ width: "100vw", height: "50vh" }}
            defaultZoom={15}
            defaultCenter={currentPosition}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            mapId="dadfca6709ffa47"
          >
            <AdvancedMarker position={currentPosition} />
            {destination.lat !== 0.0 && destination.lng !== 0.0 && (
              <AdvancedMarker position={destination} />
            )}
          </Map>
        )}
      </APIProvider>

      <input
        type="text"
        placeholder="Enter destination address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={fetchCoordinates}>Get Coordianates</button>
      <button onClick={fetchCurrentlocation}>Refresh Location</button>
      <p>
        Destination Coordinates: {destination.lat}, {destination.lng}
      </p>
      <p>
        Current Coordinates: {currentPosition.lat}, {currentPosition.lng}
      </p>
      <p>Distance: {totalMiles} mi</p>
    </>
  );
}
