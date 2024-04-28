import React from "react";
import styles from "../../../app/styles/index.module.css";
import Image from "next/image";
import doctor from "../../../assets/doctor-small 1.png";
import Button from "@/components/Ui/Button";
import Link from "next/link";

const MakeAppointment = () => {
  return (
    <div className={`${styles.appointment__bg} py-28`}>
      <div className="w-[70%] m-auto relative">
        <div className="absolute top-[-220px] left-[-80px]">
          <Image
            src={doctor}
            alt=""
            className="max-w-[597px]"
            unoptimized={true}
          />
        </div>
        <div className="flex justify-end">
          <div className="w-1/2">
            <h6 className="subHeading mb-3">Appointment</h6>
            <h4 className="font-semibold text-4xl text-white">
              Make an appointment Today
            </h4>
            <p className="font-base text-white mt-5 mb-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Link  href="/appointment">
            <Button text="GET STARTED" px="4" py="3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
