import "./Main.css";

export default function Main() {
    return (
        <div class = "main-container">
            <div class = "hero-container">
                <div class = "company-name">
                    <h1>Atlanits Towing</h1>
                    <h2>We met by accident</h2>
                    <h3>Reliable towing for the New England area.</h3>
                    <a href = "tel:7814851800">Contact Us Now!</a> 
                </div>
            </div>
            <div class="about-container">
                <div class="about">
                    <div class="about-image"/>
                    <div class="about-text">
                        <h1>About Us</h1>
                        <p>Atlantis Towing is a family owned and operated business that has been providing towing services in the Massachusetts area for over 20 years. We are a fully licensed and insured company that is committed to providing our customers with the highest level of service. We offer a wide range of services including towing, roadside assistance, and more. Our team of professionals will work with you to find the best solution for your needs. Contact us today for more information!</p>
                    </div>
                </div> 
            </div>
            <div class="services-container">
                <h1>We Offer Most Services:</h1>
                <div class="services-cards">
                    <div class="services-card">
                        <div class="services-card-icon towing"/>
                        <div class="card-text">
                            <h2>Towing</h2>
                            <p>With our reliable towing service and wide fleet of veichles, we can tow: cars, trucks, SUV's, minivans, and even trucks that transport water tanks.</p>
                            <a href = "#">Get a Quote!</a>
                        </div>
                    </div>
                    <div class="services-card">
                        <div class="services-card-icon garage"/>
                        <div class="card-text">
                            <h2>Storage</h2>
                            <p>Benefit from our secure vehicle storage services, offering advanced security and full legal compliance for both short-term and long-term needs.</p>
                            <a href = "#">Store with us today!</a>
                        </div>
                    </div>
                    <div class="services-card">
                        <div class="services-card-icon battery"/>
                        <div class="card-text">
                            <h2>Tire Changes</h2>
                            <p>Our rapid roadside assistance service efficiently handles flat tires, battery jumps, and fuel deliveries, ensuring you're back on the road swiftly!</p>
                            <a href = "#">Call us Today!</a>
                        </div>
                    </div>
                    <div class="services-card">
                        <div class="services-card-icon wrench"/>
                        <div class="card-text">
                            <h2>Vehicle Repairs</h2>
                            <p>Our in-house mechanic shop features skilled technicians for comprehensive repair and maintenance, ensuring your vehicle's optimal performance.</p>
                            <a href = "#">Contact Us Today!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="guarantee-container" id = "testimonials">
                <div class="guarantee-text">
                    <h1>Professional Roadside Assistance Services Is One Phone Call Away in Revere, MA</h1>
                    <p>At Atlantis Towing, we are committed to providing our customers with the highest level of service. Our team of professionals will work with you to find the best solution for your needs. We are available 24/7 to assist you with all of your towing and roadside assistance needs. Contact us today for more information!</p>
                </div>
                <div class = "reviews-container">
                    <div class = "review-head">
                        <h1>See What Our Customers Have to Say</h1>
                    </div>
                    <div class = "review r1">
                        <h2>Test Name</h2>
                        <div class = "five-star"/>
                        <p>"I was very impressed with the service I received from Atlantis Towing. They were very professional and efficient. I would definitely recommend them to anyone in need of towing services."</p>
                    </div>
                    <div class = "review r2">
                        <h2>Test Name</h2>
                        <div class = "five-star"/>
                        <p>"I was very impressed with the service I received from Atlantis Towing. They were very professional and efficient. I would definitely recommend them to anyone in need of towing services."</p>
                    </div>
                    <div class = "review r3">
                        <h2>Test Name</h2>
                        <div class = "five-star"/>
                        <p>"I was very impressed with the service I received from Atlantis Towing. They were very professional and efficient. I would definitely recommend them to anyone in need of towing services."</p>
                    </div>
                    <div class = "review r4">
                        <h2>Test Name</h2>
                        <div class = "five-star"/>
                        <p>"I was very impressed with the service I received from Atlantis Towing. They were very professional and efficient. I would definitely recommend them to anyone in need of towing services."</p>
                    </div>
                </div>
            </div>
        </div>
    );
}