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
                        <h2>Ava Williams</h2>
                        <p>"I recently used Atlantis Towing for a tire change service, and I was thoroughly impressed with their professionalism and efficiency. The technician arrived promptly and had my tire changed in no time. He was knowledgeable and took the time to explain the process to me. I felt very confident in the quality of the service provided. Highly recommend Atlantis Towing for their exceptional service and friendly staff!"</p>
                    </div>
                    <div class = "review r2">
                        <h2>Ethan Brown</h2>
                        <p>"After a minor fender bender, I took my car to Atlantis Towing for collision repair. The team was incredibly understanding and went above and beyond to ensure my car was repaired to perfection. From the moment I walked in, I was greeted with a warm welcome and reassured that my car was in good hands. The staff kept me updated throughout the repair process, which I greatly appreciated.</p>
                        <p>The final result was astounding. The paint job was flawless, and my car looked brand new, as if the accident had never happened. Their attention to detail and commitment to customer satisfaction really stood out. I'm grateful for their hard work and would definitely return for any future needs. Atlantis Towing has earned my trust and recommendation for anyone in need of high-quality collision repair."</p>
                    </div>
                    <div class = "review r3">
                        <h2>Sophia Martinez</h2>
                        <p>"I needed a reliable place to store my classic car, and Atlantis Towing's car storage service was the perfect solution. The facility is secure, clean, and well-maintained. The staff was very accommodating and made sure my car was well taken care of. It's great to have peace of mind knowing my car is in good hands. I would recommend their storage services to anyone looking for a safe and convenient option."</p>
                    </div>
                    <div class = "review r4">
                        <h2>Liam Thompson</h2>
                        <p>"Atlantis Towing provided me with top-notch mechanical work when my car started having engine troubles. The mechanics were very knowledgeable and transparent about the repairs needed. They completed the work in a timely manner and at a reasonable price. My car has been running smoothly ever since. I appreciate their honesty and professionalism. I'll definitely be using Atlantis Towing for any future mechanical needs."</p>
                    </div>
                </div>
            </div>
        </div>
    );
}