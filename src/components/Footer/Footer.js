import "./Footer.css";
export default function Footer() {
    return(
        <div class="footer-container">
            <div class = "footer-tagline">
                <ul>
                    <li><h1>Atlanis Towing</h1></li>
                    <li><h2>We met by accident</h2></li>
                    <li><h3>Reliable towing for the New England area.</h3></li>
                </ul>
            </div>
            <div class = "footer-services">
                <ul>
                    <li><h1>Services</h1></li>
                    <li><a href = "/services/towing">Towing</a></li>
                    <li><a href = "/services/storage">Storage</a></li>
                    <li><a href = "/services/tire-change">Tire Changes</a></li>
                    <li><a href = "/services/mechanical-works">Vehicle Repairs</a></li>
                </ul>
            </div>
            <div class = "footer-contact">
                <ul>
                    <li><h1>Contact</h1></li>
                    <li>Phone: <a href = "tel:7814851800">781-485-1800</a></li>
                    <li>Email: <a href = "mailto:towline@gmx.com">towline@gmx.com</a></li>
                    <li>Address: <a href = "https://maps.app.goo.gl/xPYMUzgDzjmhjGSt9">851 Broadway, Revere, MA 02151</a></li>
                </ul>
            </div>
        </div>
    )
}