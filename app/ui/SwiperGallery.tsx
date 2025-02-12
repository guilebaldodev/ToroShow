"use client"

import { useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
  "/products/bulls/product-1.webp",
  "/products/bulls/product-2.webp",
  "/products/bulls/product-3.webp",
  "/products/bulls/product-4.webp",
  "/products/bulls/product-5.webp",
];

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="gallery">
      {/* Slider principal */}
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="main-slider"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Imagen ${index + 1}`}
              width={800}
              height={600}
              className="main-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider de miniaturas */}
      <Swiper
        modules={[Navigation, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        className="thumb-slider"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Miniatura ${index + 1}`}
              width={150}
              height={100}
              className="thumb-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}