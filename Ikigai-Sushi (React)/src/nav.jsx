import { Link } from "react-router-dom"
export default function NavigationBar() {
    return (
        <>
            <nav>
                <label className="logo">
                <img src="images/logo.webp" alt="logo" />
                </label>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
                </label>
                <ul>
                <li><Link to="/menu">Meny</Link></li>
                <li><Link to="/">Hemma</Link></li>
                <li>
                    <Link to="https://www.foodora.se/en/restaurant/zbmp/ikigai-sushi" target="_blank" className="buy-now">Beställ Nu</Link>
                </li>
                <li><Link to="/contact">Kontakta oss</Link></li>
                </ul>
            </nav>
        </>
    )
}