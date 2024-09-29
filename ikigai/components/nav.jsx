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
                <ul className="responsive-nav">
                    <li><a href="/menu">Meny</a></li>
                    <li><a href="/">Hemma</a></li>
                    <li>
                        <a href="https://www.foodora.se/en/restaurant/zbmp/ikigai-sushi" target="_blank" className="buy-now">Beställ Nu</a>
                    </li>
                    <li><a href="/contact">Kontakta oss</a></li>
                </ul>
            </nav>
        </>
    )
}