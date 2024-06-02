import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const slides = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-2xl py-4 px-2">
      <div>
        <p className="text-2xl text-center font-bold mb-4">
          We are Engineers defined By Our Work
        </p>
      </div>
      <Carousel autoSlide={true}>
        {slides.map((s, i) => (
          <img key={i} src={s} />
        ))}
      </Carousel>
      <div className="mt-10">
        <p className="font-bold text-xl mb-5">Featured Work</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://i.pinimg.com/564x/31/56/bf/3156bf02ee049f9d015a6996eaa47c97.jpg"
                alt=""
              />
            </div>
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://i.pinimg.com/564x/9f/9d/39/9f9d3923ba865bfe67da3ac3e6924769.jpg"
                alt=""
              />
            </div>
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://i.pinimg.com/564x/99/57/5d/99575d7e034ce037631f2c9ac8444e9c.jpg"
                alt=""
              />
            </div>
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </div>
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://i.pinimg.com/736x/ec/15/3a/ec153abf547a93ae5a4049f3f2db1db8.jpg"
                alt=""
              />
            </div>
            <div className="hover:z-50">
              <img
                class="custom"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
