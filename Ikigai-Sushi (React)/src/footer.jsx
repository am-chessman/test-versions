import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Utforska</h4>
                            <ul>
                                <li><Link>Meny</Link></li>
                                <li><Link to="https://www.foodora.se/en/restaurant/zbmp/ikigai-sushi" target="_blank">Beställ online</Link></li>
                                <li><Link to="https://www.google.com/maps/dir/59.6209787,17.8275386/ikigai+sushi/@59.6223814,17.7981888,5647m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x465fbdd129aa3f49:0x8462a7da50262468!2m2!1d17.859771!2d59.628324?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank">Vägbeskrivning</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Om Oss</h4>
                            <ul>
                                <li><a href="#">Vår historia</a></li>
                                <li><a href="#">Vårt team</a></li>
                                <li><a href="#">Hållbarhet</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Kontaka Oss</h4>
                            <ul>
                                <li><Link to="/contact">E-post</Link></li>
                                <li><Link to="/contact">Telefon</Link></li>
                                <li><Link to="/contact">Address</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Följ Oss</h4>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}