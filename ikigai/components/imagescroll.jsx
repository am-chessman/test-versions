import React from 'react'

const Imagescroll = () => {
return (
    <>
        <section className="container">
            <h2>Kom ät med oss</h2>
            <div className="slider-wrapper">
                <button id="prev-slide" className="slide-button material-symbols-rounded">
                </button>
                <ul className="image-list">
                    <img className="image-item" src="images/Maki sushi.webp" alt="img-1" />
                    <img className="image-item" src="images/Hasomaki Sushi.webp" alt="img-2" />
                    <img className="image-item" src="images/Nigiri.webp" alt="img-3" />
                    <img className="image-item" src="images/Inarizushi.webp" alt="img-4" />
                    <img className="image-item" src="images/Salmon Sushi.webp" alt="img-5" />
                    <img className="image-item" src="images/Tuna Sushi.webp" alt="img-6" />
                    <img className="image-item" src="images/Maki sushi.webp" alt="img-7" />
                    <img className="image-item" src="images/Nigiri.webp" alt="img-8" />
                    <img className="image-item" src="images/Inarizushi.webp" alt="img-9" />
                </ul>
            </div>
            <div className="slider-scrollbar">
                <div className="scrollbar-track">
                    <div className="scrollbar-thumb"></div>
            </div>
        </div>
    </section>
    </>
)
}

export default Imagescroll