import React from "react";
import treatment from "../../../assets/treatment 1.png";
import Image from "next/image";
import Button from "@/components/Ui/Button";
import Link from "next/link";
const DentalCare = () => {
  return (
    <div className="w-[90%] lg:w-[70%] m-auto flex flex-col lg:flex-row gap-8  lg:items-center pb-20 lg:pb-40">
      <div className="basis-1/2">
        <Image src={treatment} alt="" unoptimized={true} />
      </div>

      <div className="basis-1/2 ">
        <h2 className="heading">Exceptional Dental Care, on Your Terms</h2>
        <p className="text-base mt-5 mb-7">
          {`It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page`}
        </p>
        <Link href="/appointment">
          <Button text="GET STARTED" px="4" py="3" />
        </Link>
      </div>
    </div>
  );
};

export default DentalCare;
