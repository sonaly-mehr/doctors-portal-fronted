import React from "react";
import styles from "../../../app/styles/index.module.css";
import Image from "next/image";
import chair from "../../../assets/chair 1.png";
import clock from "../../../assets/clock.png";
import location from "../../../assets/Path 7199.png";
import phone from "../../../assets/Path 7196.png";
import Button from "@/components/Ui/Button";
import Link from "next/link";

const Hero = () => {
  const cards = [
    {
      icon: clock,
      heading: "Opening Hours",
      descp: "Lorem Ipsum is simply dummy text of the pri",
      classN: "gradient__effect",
      dataAos: "fade-right",
      dataAosDuration: '1000'
    },
    {
      icon: location,
      heading: "Visit our location",
      descp: "Brooklyn, NY 10036, United States",
      classN: "dark__bg",
    },
    {
      icon: phone,
      heading: "Contact us now",
      descp: "+000 123 456789",
      classN: "gradient__effect",
      dataAos: "fade-left",
      dataAosDuration: '1000'
    },
  ];
  return (
    <div>
      <div className={`${styles.hero__bg} h-screen`}>
        <div className="w-[90%] m-auto flex justify-between items-center py-40">
          <div className="basis-1/2 mr-4">
            <h2
              className="heading w-[90%]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Your New Smile Starts Here
            </h2>
            <p
              className="paragraph mt-3 mb-5"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <Link
              href="/appointment"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <Button text="GET STARTED" px="4" py="3" />
            </Link>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Image src={chair} alt="" />
          </div>
        </div>
      </div>
      <div className="px-4 flex gap-4">
        {cards?.map(({ icon, heading, descp, classN }, index) => (
          <div
            key={index}
            className={`basis-1/3 flex gap-5 ${classN} items-center px-7 py-10 rounded-lg`}
            data-aos={`${cards?.dataAos && dataAos}`}
            data-aos-duration={`${cards?.dataAosDuration && dataAosDuration}`}
          >
            <div>
              <Image src={icon} alt="" />
            </div>
            <div>
              <h5 className="font-bold text-xl text-white">{heading}</h5>
              <p className="text-base text-white my-3">{descp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
