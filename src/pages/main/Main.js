import "./Main.css";

export default function Main() {
    return (
        <div class = "main-container">
            <div class = "hero-container">
                <div class = "company-name">
                    <h1>Atlanits Towing</h1>
                    <h2>We met by accident</h2>
                    <p>Reliable towing for the New England area.</p>
                </div>
                <div className="hero-tagline-container">
                    <div className="hero-tagline">
                        <h2></h2>
                       <a href = "#">Contact Us Now!</a> 
                    </div>
                </div>
                
            </div>
            <hr />
            <div class="about-container">
                <h1>About Us</h1>
                <p>Atlantis Towing is a family owned and operated business that has been providing towing services in the Massachusetts area for over 20 years. We are a fully licensed and insured company that is committed to providing our customers with the highest level of service. We offer a wide range of services including towing, roadside assistance, and more. Our team of professionals will work with you to find the best solution for your needs. Contact us today for more information!</p>
            </div>
            <hr />
            <div class="services-container">
                <h1>Our Services</h1>
                <div class="services-cards">
                    <div class="services-card">
                        <div class="services-card-icon"></div>
                        <h2>Towing</h2>
                        <p>With our reliable towing service and wide fleet of veichles, we can tow: cars, trucks, SUV's, minivans, and even trucks that transport water tanks.</p>
                    </div>
                    <div class="services-card">
                        <div class="services-card-icon"></div>
                        <h2>Storage</h2>
                        <p>Enjoy peace of mind with our secure vehicle storage services, 
                        where advanced security systems ensure the safety of your vehicle. 
                        Our facility accommodates a variety of vehicles, 
                        providing reliable short-term or long-term storage with full legal compliance.</p>
                    </div>
                    <div class="services-card">
                        <div class="services-card-icon"></div>
                        <h2>Tire Changes and Jumpstarts</h2>
                        <p>Have a flat tire or need a quick battery jump?! Our swift roadside assistance service is here to help with flat tire changes and battery jumps, getting you back on the road in no time! </p>
                    </div>
                    <div class="services-card">
                        <div class="services-card-icon"></div>
                        <h2>Mechanical Works</h2>
                        <p>We offer an in house mechanic shop where experienced technicians provide a wide range of repair and maintenance services, ensuring your vehicle is running at its best.</p>
                    </div>
                    <div class="services-card">
                        <div class="services-card-icon"></div>
                        <h2>Collison Repair</h2>
                        <p>Our collision repair service specializes in restoring vehicles to their original condition after accidents. Utilizing advanced tools and techniques, we ensure your vehicle receives top-quality care for a flawless finish.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div class="screenshots-container">

            </div>
            <hr />
        </div>
    );
}