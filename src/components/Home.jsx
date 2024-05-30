import { Link } from "react-router-dom";
import Carousel from './Carousel'

const slides = [

    "image1.jpg",
    "image3.jpg",
    "image2.jpg",
]

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-2xl py-4 px-2">
            <div>
                <p className="text-2xl text-center font-bold mb-4">We are Engineers defined By Our Work</p>
            </div>
            <Carousel autoSlide={true}>
                {slides.map((s)=>(
                    <img src={s}/>
                ))}
            </Carousel>
        </div>
    );
}
