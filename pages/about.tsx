import { Carousel } from "react-bootstrap";
import { useEffect } from "react";
import Image from "next/image";

import slide1 from "/public/img/slide_3.png";
import slide2 from "/public/img/slide_1.png";
import slide3 from "/public/img/slide_2.png";

function About(){
    useEffect(() => {
        document.body.style.overflow = "unset";
    })

    return(
        <article id = "main">
        <h2 id = "head">About</h2>
        <h2 id = "head">About</h2>
        <h2 id = "head">About</h2>
        <Carousel fade>
            <Carousel.Item interval = {3000}>
                <Image
                src={slide1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval = {3000}>
                <Image
                src={slide2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval = {3000}>
                <Image
                src={slide3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <p>유구한 전통의 예시용 사진입니다.</p>
        <p>눈으로만 보세요</p>
        <style jsx>{`
            #main{
                align-item: center;
                text-align: center;
            }

            #head{
                text-align: left;
            }
        `}</style>
        </article>
    );
}

export default About;