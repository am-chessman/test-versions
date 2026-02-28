export default function NavigationBar() {
  return (
    <nav aria-label="Huvudnavigering">
      <a className="logo" href="/" aria-label="Ikigai Sushi startsida">
        <img src="/images/logo.webp" alt="Ikigai Sushi" />
      </a>

      <input type="checkbox" id="check" aria-label="Öppna meny" />
      <label htmlFor="check" className="checkbtn" aria-hidden="true">
        <i className="fas fa-bars"></i>
      </label>

      <ul className="responsive-nav">
        <li><a href="/">Hem</a></li>
        <li><a href="/menu">Meny</a></li>
        <li><a href="/contact">Kontakt</a></li>
        <li>
          <a
            href="https://www.foodora.se/en/restaurant/zbmp/ikigai-sushi"
            target="_blank"
            rel="noreferrer"
            className="buy-now"
          >
            Beställ Nu
          </a>
        </li>
      </ul>
    </nav>
  )
}
