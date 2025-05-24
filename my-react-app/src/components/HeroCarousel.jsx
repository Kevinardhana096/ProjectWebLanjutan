import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImg1 from "../assets/images/coto.png";
import heroImg2 from "../assets/images/rendang.png";
import styles from "./HeroCarousel.module.css";

const carouselData = [
    {
        id: 1,
        image: heroImg1,
        title: "Warisan Selera Nusantara",
        description: "Jelajahi kekayaan kuliner Indonesia",
    },
    {
        id: 2,
        image: heroImg2, // You can replace with different images
        title: "Resep Autentik",
        description: "Temukan rahasia masakan tradisional",
    },
];

const HeroCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: "linear",
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className={styles.heroCarousel}>
            <Slider {...settings}>
                {carouselData.map((slide) => (
                    <div key={slide.id} className={styles.slide}>
                        <img src={slide.image} alt={slide.title} />
                        <div className={styles.content}>
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                            <button className={styles.exploreButton}>Jelajahi Sekarang</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroCarousel;