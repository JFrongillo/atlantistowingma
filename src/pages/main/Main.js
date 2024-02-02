import "./Main.css";

export default function Main() {
    return (
        <div class = "main-container">
            <div class = "hero-container">
                <div class = "company-name">
                    <h1>Atlanits Towing</h1>
                    <h2>We met by accident</h2>
                    <h3>Reliable towing for the New England area.</h3>
                </div>
                <div className="hero-tagline-container">
                    <div className="hero-tagline">
                        <h2>Reliable towing for the New England area.</h2>
                        <p></p>
                       <a href = "tel:7814851800">Contact Us Now!</a> 
                    </div>
                </div>
            </div>
            <div class="about-container">
                <div class="about">
                    <div className="about-image"/>
                    <div className="about-text">
                        <h1>About Us</h1>
                        <p>Atlantis Towing is a family owned and operated business that has been providing towing services in the Massachusetts area for over 20 years. We are a fully licensed and insured company that is committed to providing our customers with the highest level of service. We offer a wide range of services including towing, roadside assistance, and more. Our team of professionals will work with you to find the best solution for your needs. Contact us today for more information!</p>
                    </div>
                </div> 
            </div>
            <div class="services-container">
                <h1>We Offer Most Services:</h1>
                <div class="services-cards">
                    <div class="services-card">
                        <div class="services-card-icon towing"></div>
                        <h2>Towing</h2>
                        <p>With our reliable towing service and wide fleet of veichles, we can tow: cars, trucks, SUV's, minivans, and even trucks that transport water tanks.</p>
                    </div>
                    <div class="services-card">
                        <div class="services-card-icon garage"></div>
                        <h2>Storage</h2>
                        <p>Benefit from our secure vehicle storage services, offering advanced security and full legal compliance for both short-term and long-term needs.</p>
                    </div>
                    <div class="services-card">
                        <div class="services-card-icon battery"></div>
                        <h2>Tire Changes and Jumpstarts</h2>
                        <p>Our rapid roadside assistance service efficiently handles flat tires and battery jumps, ensuring you're back on the road swiftly!</p>
                    </div>
                    <div class="services-card">
                        <div class="services-card-icon wrench"></div>
                        <h2>Vehicle Repairs</h2>
                        <p>Our in-house mechanic shop features skilled technicians for comprehensive repair and maintenance, ensuring your vehicle's optimal performance.</p>
                    </div>
                </div>
            </div>
            <div class="screenshots-container">

            </div>
            <hr />
        </div>
    );
}