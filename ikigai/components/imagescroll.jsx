"use client";
import React, { useRef, useState } from 'react';
import "@styles/styles.css";
import imageList from './imagemanager';

const ImageItem = ({ imgSrc, id }) => {
    return <img className="image-item" src={imgSrc} alt={id} />;
};

const Imagescroll = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handlePrevScroll = () => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;

        scrollElement.scrollBy({
            left: -scrollElement.clientWidth, 
            behavior: "smooth"
        });
    };

    const handleNextScroll = () => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;

        scrollElement.scrollBy({
            left: scrollElement.clientWidth, 
            behavior: "smooth"
        });
    };

    return (
        <section className="container">
            <h2>Kom ät med oss</h2>
            <div className="slider-wrapper">
                <button
                    id="prev-slide"
                    className="slide-button material-symbols-rounded"
                    onClick={handlePrevScroll}
                >
                    chevron_left
                </button>
                <ul className="image-list">
                    <div className="image-list-content" 
                        ref={scrollRef}
                        onMouseDown={(e) => {
                            setIsDragging(true);
                            const scrollElement = scrollRef.current;
                            scrollElement.classList.add("dragging");
                            setStartX(e.pageX - scrollElement.offsetLeft);
                            setScrollLeft(scrollElement.scrollLeft);
                        }}
                        onMouseUp={() => {
                            setIsDragging(false);
                            scrollRef.current.classList.remove("dragging");
                        }}
                        onMouseLeave={() => {
                            setIsDragging(false);
                            scrollRef.current.classList.remove("dragging");
                        }}
                        onMouseMove={(e) => {
                            if (!isDragging) return;
                            e.preventDefault();
                            const scrollElement = scrollRef.current;
                            const x = e.pageX - scrollElement.offsetLeft;
                            const walk = (x - startX) * 2; 
                            scrollElement.scrollLeft = scrollLeft - walk;
                        }}
                        onMouseOver={() => {
                            scrollRef.current.style.cursor = "grab";
                        }}
                    >                        
                        {imageList.map((element, index) => (
                            <ImageItem imgSrc={element.src} id={element.id} />
                        ))}
                    </div>
                </ul>
                <button
                    id="next-slide"
                    className="slide-button material-symbols-rounded"
                    onClick={handleNextScroll}
                >
                    chevron_right
                </button>
            </div>
        </section>
    );
};

export default Imagescroll;
