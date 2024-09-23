import NavigationBar from "../nav"
import Footer from "../footer"

export default function Menu() {
    return (
        <>
            <NavigationBar/>
            <header className="img-slider">
                <div className="slide active">
                    <img src="images/menuSLider2.webp" alt="" />
                    <div className="info">
                        <h2>Välkommen till vår Sushi</h2>
                        <p>
                            Upptäck vår färska och utsökta sushi, tillagad med noggrant utvalda
                            råvaror. Smakupplevelser utöver det vanliga.
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <img src="images/menuSLider.webp" alt="" />
                    <div className="info">
                        <h2>Poké Bowl – En Fräsch Favorit</h2>
                        <p>
                            Njut av vår färgsprakande Poké Bowl, fylld med färska ingredienser
                            och balanserade smaker. En hälsosam njutning.
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <img src="images/menuSLider4.webp" alt="" />
                    <div className="info">
                        <h2>Nigiri – En Klassisk Favorit</h2>
                        <p>
                            Njut av vår Nigiri, perfekta bitar av färsk fisk på en bädd av
                            välsmakande ris. En symfoni av smaker.
                        </p>
                    </div>
                </div>

                <div className="slide">
                    <img src="images/menuSLider5.webp" alt="" />
                    <div className="info">
                        <h2>Sashimi – Ren och Äkta</h2>
                        <p>
                            För den sanna sushiälskaren, vår Sashimi erbjuder ren smak av färsk
                            fisk, skuren med precision.
                        </p>
                    </div>
                </div>

                <div className="slide">
                    <img src="images/menuSLider6.webp" alt="" />
                    <div className="info">
                        <h2>Uramaki – Inuti Utsökt</h2>
                        <p>
                            Vår Uramaki erbjuder en smakrik upplevelse med delikata fyllningar
                            och en utsökt yta. Perfektion i varje rullning.
                        </p>
                    </div>
                </div>

                <div className="navigation">
                    <div className="btn active"></div>
                    <div className="btn"></div>
                    <div className="btn"></div>
                    <div className="btn"></div>
                    <div className="btn"></div>
                </div>
            </header>
            
            <hr className="hr-1" />

            <section className="menu-section" id="menu-section">
                <h2 className="menu-h2">Våra Menyer</h2>
                <div className="menu-grid">
                    <div className="menu-item">
                        <img src="images/menySushSashimi.webp" alt="Menu Item 1" />
                    </div>
                    <div className="menu-item">
                        <img src="images/menyNigiriPokeDryck.webp" alt="Menu Item 2" />
                    </div>
                    <div className="menu-item">
                        <img src="images/menyUramaki.webp" alt="Menu Item 3" />
                    </div>
                    <div className="menu-item">
                        <img src="images/menyVarmFamilj.webp" alt="Menu Item 4" />
                    </div>
                    <div className="menu-item">
                        <img src="images/menyVarmFamilj.webp" alt="Menu Item 5" />
                    </div>
                </div>
            </section>

            <hr className="hr-1" />

            <div className="ggl-maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2017.2811916368737!2d17.857196076180408!3d59.62832668705261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fbdd129aa3f49%3A0x8462a7da50262468!2sIkigai%20sushi!5e0!3m2!1ssv!2sse!4v1706409526575!5m2!1ssv!2sse"
                    width={600}
                    height={450}
                    style={{border: 0}}
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <Footer/>
        </>
    )
}