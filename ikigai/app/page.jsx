import React from 'react'
import "@styles/styles.css"
import "@styles/globals.css"
import Imagescroll from '@components/imagescroll'

const Home = () => {
return (
    <>
    <header className="header">
        <div className="hdr-content">
            <h2 className="header-h2">
            Färsk <span className="header-red"> Hälsosam</span> Smakfull
            <span className="header-red">Sushi</span>
            </h2>
            <p className="header-p">
            Njut av vårt sortiment av färsk, hälsosam och smakfull sushi,
            tillverkad med omsorg och kvalitetsingredienser. Upplev en smakrik
            resa med varje tugga!
            </p>
            <div className="header-btns">
                <a href="https://www.foodora.se/en/restaurant/zbmp/ikigai-sushi" target="_blank">
                    <button className="header-btn2">Beställ Nu</button>                           
                </a>
                
                <a href='/menu'>
                    <button className="header-btn">Läs Mer</button>
                </a>
            </div>
        </div>
        <div className="hdr-img">
            <img src="images/headerimg.webp" alt="sushi-with chopsticks" />
        </div>
    </header>

    <hr className="hr-1" />

    <Imagescroll />

    <hr className="hr-2" />

    <section className="modern-food">
        <div className="mdrn-content">
            <h2 className="mdrn-h2">
            Unna Dig med <span className="header-red"> Fräsch</span> Sushi
            <span className="header-red">Upplevelse</span>
            </h2>
            <p className="mdrn-p">
            Upplev vår färska, hälsosamma och smakfulla sushi. Utforska en
            kulinarisk resa med varje tugga!
            </p>

            <div className="mdrn-btns">
                <button className="mdrn-btn2">Följ Oss</button>
                <a href="/menu" className="btn-a">
                    <button className="mdrn-btn">Upptäck Mer</button>
                </a>
            </div>
        </div>

        <div className="mdrn-imgs">
            <img className="mdrn-img1" src="images/modern-food-img.webp" alt="sushi-with chopsticks"/>
        </div>
    </section>

    <hr className="hr-1" />
    <section className="testimonial-box">
        <h2 className="testimonialH2">Kundrecensioner från våra sushiälskande gäster</h2>
        <div className="outerdiv">
            <div className="innerdiv">
                {/* Div 1 */}
                <div className="div1 eachdiv">
                    <div className="userdetails">
                        <div className="imgbox">
                            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.webp" alt=""/>
                        </div>
                        <div className="detbox">
                            <p className="name">Johan Andersson</p>
                        </div>
                    </div>
                    <div className="review">
                        <h4>
                            Väldigt god och fräsch sushi
                        </h4>
                        <p>
                            “Ny sushirestaurang i Märsta. Väldigt fint inredd och fräsch interiör. Hur trevlig personal som helst, både på plats och i telefon. Sushin är jättegod. Avokadon var lite för mogen, men man ser att de använder sig av seriösa grejer vid själva tillagningen och beredningen. Rekommenderar starkt! ✨️”
                        </p>
                    </div>
                </div>
                {/* Div 2 */}
                <div className="div2 eachdiv">
                    <div className="userdetails">
                        <div className="imgbox">
                            <img
                            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.webp"
                            alt=""
                            />
                        </div>
                        <div className="detbox">
                            <p className="name">Erik Nilsson</p>
                        </div>
                    </div>
                    <div className="review">
                        <h4>Fantastisk mat för alla smaker</h4>
                        <p>
                            “Åt vego sushi, och min sambo åt lax nigirii. Vi var båda lika nöjda 👌🏻 Rekommenderar starkt!”
                        </p>
                    </div>
                </div>
                {/* Div 3 */}
                <div className="div3 eachdiv">
                    <div className="userdetails">
                        <div className="imgbox">
                            <img
                            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.webp"
                            alt=""
                            />
                        </div>
                        <div className="detbox">
                            <p className="name dark">Lisa Andersson</p>
                        </div>
                    </div>
                    <div className="review dark">
                        <h4>En upplevelse av fräschhet och trevlig atmosfär</h4>
                        <p>
                            &quot;Otroligt gott, fräscht och fint upplagt. Trevlig personal, snyggt och fräscha lokaler. Hit går jag gärna igen istället för att rusa till pendeltåget för att åka in till stan. Jag blev helt överväldigad av den fantastiska smaken och kvaliteten på varje bit av sushi jag smakade. Varje tugga var en explosion av färska smaker som verkligen visade upp restaurangens kärlek.&quot;
                        </p>
                    </div>
                </div>
                {/* Div 4 */}
                <div className="div4 eachdiv">
                    <div className="userdetails">
                        <div className="imgbox">
                            <img
                            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.webp"
                            alt=""
                            />
                        </div>
                        <div className="detbox">
                            <p className="name">Maria Lundqvist</p>
                        </div>
                    </div>
                    <div className="review">
                        <h4>En smakresa värd att göra</h4>
                        <p>
                            “Riktigt god sushi och väldigt trevlig personal. Trevligt och fräscht ställe! Rekommenderas!!”
                        </p>
                    </div>
                </div>
                {/* Div 5 */}
                <div className="div5 eachdiv">
                    <div className="userdetails">
                        <div className="imgbox">
                            <img
                            src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.webp"
                            alt=""
                            />
                        </div>
                        <div className="detbox">
                            <p className="name">Magnus Lindström</p>
                        </div>
                    </div>
                    <div className="review">
                        <h4>
                            Välkommen till Märstas bästa sushirestaurang
                        </h4>
                        <p>
                            “ Med en stilfull och välkomnande atmosfär är denna nyöppnade sushirestaurang ett måste för alla sushiälskare. Den moderna inredningen skapar en behaglig miljö där gäster kan njuta av både god mat och trevlig service. Med varje rätt noggrant tillagad för att locka fram de mest utsökta smakerna. Rekommenderas varmt för en minnesvärd matupplevelse! ”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr className="hr-2" />

    <div className="ggl-maps">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2017.2811916368737!2d17.857196076180408!3d59.62832668705261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fbdd129aa3f49%3A0x8462a7da50262468!2sIkigai%20sushi!5e0!3m2!1ssv!2sse!4v1706409526575!5m2!1ssv!2sse"
            width={600}
            height={450}
            style={{border: 0}}
            allowFullScreen=""
            // loading={lazy}
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    </>  
)
}

export default Home