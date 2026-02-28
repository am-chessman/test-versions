export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Utforska</h4>
            <ul>
              <li><a href="/menu">Meny</a></li>
              <li><a href="/contact">Kontakt</a></li>
              <li><a href="https://www.foodora.se/en/restaurant/zbmp/ikigai-sushi" target="_blank" rel="noreferrer">Beställ online</a></li>
              <li><a href="https://www.google.com/maps/dir/59.6209787,17.8275386/ikigai+sushi/@59.6223814,17.7981888,5647m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x465fbdd129aa3f49:0x8462a7da50262468!2m2!1d17.859771!2d59.628324?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">Vägbeskrivning</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Öppettider</h4>
            <ul>
              <li><a href="/contact">Mån–Fre: 11:00–21:00</a></li>
              <li><a href="/contact">Lör–Sön: 12:00–21:00</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kontakta oss</h4>
            <ul>
              <li><a href="mailto:info@ikigaisushi.se">info@ikigaisushi.se</a></li>
              <li><a href="tel:+46854601700">+46 8 546 017 00</a></li>
              <li><a href="/contact">Stationsgatan 2c, Märsta</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Följ oss</h4>
            <div className="social-links">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
