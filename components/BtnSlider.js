import React from "react";
import Image from 'next/image'


export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <Image src={direction === "next" ? "/right-arrow.svg" : "/left-arrow.svg"} layout='fill' alt=''/>
    </button>
  );
}