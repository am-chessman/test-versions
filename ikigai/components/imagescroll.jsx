import React from 'react'
import "@styles/styles.css"
import imageList from './imagemanager'

const ImageItem = ({imgSrc, id}) => {
    return (
        <>
            <img className="image-item" src={imgSrc} alt={id} />
        </>
    )
}

const Imagescroll = () => {

    return (
    <>
        <section className="container">
            <h2>Kom ät med oss</h2>
            <div className="slider-wrapper">
                <button id="prev-slide" className="slide-button material-symbols-rounded" >
                </button>
                <ul className="image-list">
                    {imageList.map((element, index) => (
                        <ImageItem key={index} imgSrc={element.src} id={element.id}/>
                    ))}
                </ul>
                <button id="next-slide" className="slide-button material-symbols-rounded">
                    chevron_right
                </button>
            </div>
        </section>
    </>
)
}

export default Imagescroll