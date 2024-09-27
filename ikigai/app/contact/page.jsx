export default function Contact() {
    return (
        <>
            <header className="header">
                <div className="odr-img">
                    <img src="images/order-food.webp" alt="sushi-with chopsticks" />
                </div>

                <div className="hdr-content">
                    <h2 className="header-h2">
                        Välkommen till<span className="header-red"> Ikigai</span>Sushi!
                    </h2>
                    <p className="header-p">
                        Sugen på lite sushi? Du är på rätt ställe! Oavsett om du är sugen på en California-rulle eller en sashimi-tallrik, så har vi det du behöver.
                    </p>
                    
                    <h3 className="header-h3">Sushi levererad till din dörr🍣</h3>

                    <div className="header-btns">
                        <a className="hdr-a" href="tel:+46854601700">
                            <button className="header-btn2">
                                +46 8 546 017 00
                            </button>
                        </a>
                        <a href="https://www.foodora.se/en/restaurant/zbmp/ikigai-sushi" className="hdr-a" target="_blank">    
                            <button className="header-btn">Foodora 🛵</button>
                        </a>
                    </div>
                </div>
            </header>

            <hr className="hr-1" />

            <section className="odr-section">
                <div className="odr-div menu">
                    <h2>Våra Menyer</h2>
                    <a href="meny.html#menu-section" target="_blank">Varm Rätter 🍵</a>
                    <a href="meny.html#menu-section" target="_blank">Poké Bowl 🥗</a>
                    <a href="meny.html#menu-section" target="_blank">Sushi 🍣</a>
                </div>
                <div className="action-div">
                    <h2>Beställ Nu!</h2>
                    <a className="hdr-a" href="tel:+46854601700">
                        <button className="header-btn2">
                            +46 8 546 017 00
                        </button>
                    </a>
                    <a href="https://www.foodora.se/en/restaurant/zbmp/ikigai-sushi" className="hdr-a" target="_blank">    
                            <button className="header-btn">Foodora 🛵</button>
                    </a>
                </div>
                <div className="odr-div contact">
                    <h2>Kontakt Information</h2>
                    <div className="contacts-info">
                        <h3>Telefon:</h3>
                        <a href="tel:+46854601700">+46 8 546 017 00</a>
                    </div>
                    <div className="contacts-info">
                        <h3>E-post:</h3>
                        <a href="mailto:info@ikigaisushi.se">info@ikigaisushi.se </a>
                    </div>
                    <div className="contacts-info last">
                        <h3>Adress:</h3>
                        <a href="https://www.google.com/maps/place/Stationsgatan+2c,+195+40+M%C3%A4rsta/@59.6283521,17.8571806,17z/data=!3m1!4b1!4m6!3m5!1s0x465fbc17139b2471:0xfedfe82cd3d1cddf!8m2!3d59.6283494!4d17.8597555!16s%2Fg%2F11t2q5h8lj?entry=ttu" target="_blank">
                            Stationsgatan 2c, 195 40 Märsta
                        </a>
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
        </>
    )
}