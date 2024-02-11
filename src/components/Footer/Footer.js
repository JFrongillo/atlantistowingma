import "./Footer.css";
export default function Footer() {
    return(
        <div class="footer-container">
            <div class = "footer-tagline">
                <h1>Atlanis Towing</h1>
                <h2>We met by accident</h2>
                <h3>Reliable towing for the New England area.</h3>
            </div>
            <div class = "footer-services">
                <h1>Services</h1>
                <ul>
                    <li><a href = "#">Towing</a></li>
                    <li><a href = "#">Storage</a></li>
                    <li><a href = "#">Tire Changes</a></li>
                    <li><a href = "#">Vehicle Repairs</a></li>
                </ul>
            </div>
            <div class = "footer-contact">
                <h1>Contact Us</h1>
                <ul>
                    <li>Phone: <a href = "tel:7814851800">781-485-1800</a></li>
                    <li>Email: <a href = "mailto:towline@gmx.com">towline@gmx.com</a></li>
                    <li>Address: <a href = "https://maps.app.goo.gl/xPYMUzgDzjmhjGSt9">851 Broadway, Revere, MA 02151</a></li>
                </ul>
            </div>
        </div>
    )
}