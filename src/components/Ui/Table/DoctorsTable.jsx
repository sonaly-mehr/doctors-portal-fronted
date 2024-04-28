"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";
import { MdEdit, MdOutlineDelete } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserHeading from "../UserHeading";
import ReactPaginate from "react-paginate";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";

const TABLE_HEAD = ["Name", "Specialization", "Availability", "Employed", ""];

const DoctorsTable = ({ doctors }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  console.log("search value", search);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    router.push(`/admin/doctors?searchTerm=${search}`);
  };

  //pagination
  const [pageNum, setPageNum] = useState(1);
  const [sizeNum, setSizeNum] = useState(8);

  useEffect(()=> {
    router.push(`/admin/doctors?page=${pageNum}`)
  }, [router, pageNum, sizeNum])

  const pageCount = doctors?.meta?.total / sizeNum;

  const onPaginationChange = (data) => {
    setPageNum(data.selected + 1);
  };
  return (
    <div>
      <Card className="h-full w-full">
        <UserHeading
          handleSearch={handleSearch}
          userlist="Doctors list"
          info="See information about all doctors"
          search={search}
          createRoute="/admin/doctors/create"
        />
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
            {doctors?.data?.map(
              (
                { availability, fullName, email, specialization, createdAt },
                index
              ) => (
                <tr key={fullName} className="even:bg-blue-gray-50/50">
                  <td className="p-4 flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {fullName}
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {specialization?.name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td className="p-4 flex gap-5">
                    <Link href="/" className="text-[#19D3AE]">
                      <MdEdit />
                    </Link>
                    <MdOutlineDelete className="text-[#b60000]" />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
      <ReactPaginate
        breakLabel={<span>...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-full">
            <MdKeyboardArrowRight className="text-[#757575] font-bold text-xl" />
          </span>
        }
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
    </div>
  );
};

export default DoctorsTable;
