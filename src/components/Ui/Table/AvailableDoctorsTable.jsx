"use client";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";

const TABLE_HEAD = [
  "Doctors",
  "Availability",
  "Specialization",
  "Service Provided",
];

const AvailableDoctorsTable = ({ doctors}) => {

  const router = useRouter();
  const [pageNum, setPageNum] = useState(1);
  const [sizeNum, setSizeNum] = useState(3);

  useEffect(()=> {
    router.push(`/admin/available-doctors?page=${pageNum}`)
  }, [router, pageNum, sizeNum])

  const meta = doctors?.meta;
  const pageCount = meta?.total / sizeNum;

  const onPaginationChange = (data) => {
    setPageNum(data.selected + 1);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-2 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Available Doctors list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all doctors
            </Typography>
          </div>
          <div className="w-full md:w-72">
            <Input label="Search" icon={<BsSearch className="h-5 w-5" />} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {doctors?.data?.map(({ doctor, slot, availableDate }, index) => {
              const isLast = index === doctors.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={doctor?.fullName}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src="https://static.vecteezy.com/system/resources/previews/015/367/281/non_2x/doctor-icon-outline-style-vector.jpg" alt="" size="sm" />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {doctor?.fullName}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {doctor?.qualification}
                        </Typography>

                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70 mt-2"
                        >
                          {doctor?.email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                  <div className="flex flex-col gap-3" key={index}>
                    {doctor?.availability?.map((date, index) => (
                      <div className="flex flex-col gap-1" key={index}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          Available Date ({date?.availableDate})
                        </Typography>

                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          Slot: {date?.slot?.startTime}
                        </Typography>
                      </div>
                    ))}
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {doctor?.specialization?.name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col gap-3">
                      {doctor?.specialization?.services?.map(
                        (service, index) => (
                          <Typography
                            key={index}
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70 capitalize"
                          >
                            <span className="inline-block mr-2 text-[#1CB71C]">
                              +
                            </span>{" "}
                            {service?.name}
                          </Typography>
                        )
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>

      <ReactPaginate
        breakLabel={<span>...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-full">
            <MdKeyboardArrowRight className="text-[#757575] font-bold text-xl" />
          </span>
        }
        // onClick={router.push(`/admins/doctors?page=${page}&limit=${limit}`)}
        onPageChange={onPaginationChange}
        pageRangeDisplayed={0}
        pageCount={pageCount}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-rull mr-2">
            <MdKeyboardArrowLeft className="text-[#757575] font-bold text-xl" />
          </span>
        }
        containerClassName="flex items-center justify-center mt-8 mb-4 text-sm"
        pageClassName="block hover:bg-lightGray w-7 h-8 font-semibold rounded border-2 border-solid border-black text-black flex items-center justify-center mr-4"
        activeClassName="text-primary rounded border-2 border-solid border-primary"
      />
    </Card>
  );
};

export default AvailableDoctorsTable;
