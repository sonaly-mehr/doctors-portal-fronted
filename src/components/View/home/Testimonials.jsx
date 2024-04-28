"use client"
import React from "react";
import quote from "../../../assets/quote.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client from '../../../assets/Group 13.png'

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const testimonials= [
    {
      id:1,
      review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img:client,
      name: "Winson Herry",
      location: "California"
    },
    {
      id:2,
      review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img:client,
      name: "Winson Herry",
      location: "California"
    },
    {
      id:3,
      review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img:client,
      name: "Winson Herry",
      location: "California"
    },
    {
      id:4,
      review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img:client,
      name: "Winson Herry",
      location: "California"
    }
  ]
  return (
    <div className="w-[90%] m-auto py-28">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h6 className="subHeading">Testimonial</h6>
          <p className="text-secondary text-4xl capitalize my-2">
            What Our Patients Says
          </p>
        </div>
        <div>
          <Image src={quote} alt="" />
        </div>
      </div>

      <div className="mt-16 mb-10">
        <Slider {...settings}>
          {
            testimonials?.map((testimonial)=> (
              <div key={testimonial?.id} className="w-[95%] p-5 rounded-[18px] bg-white shadow-[3px_4px_10px_2px_rgb(0,0,0,0.05)]">
              <p>{testimonial?.review}</p>
              <div className="flex gap-3 mt-8">
                <div>
                  <Image src={client} alt=""/>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="font-semibold text-xl text-secondary">{testimonial?.name}</h5>
                  <span className="">{testimonial?.location}</span>
                </div>
              </div>
            </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
