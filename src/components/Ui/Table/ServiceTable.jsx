"use client";
import React, { useEffect, useState } from "react";
import {
  MdEdit,
  MdKeyboardArrowRight,
  MdOutlineDelete,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import Link from "next/link";
import { useDeleteServiceMutation } from "@/redux/api/servicesApi";
import ReactPaginate from "react-paginate";
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import UserHeading from "../UserHeading";
import { useRouter } from "next/navigation";

const TABLE_HEAD = ["Name", "Description", "Date", ""];

const ServiceTable = ({ serviceData }) => {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    router.push(`/admin/services?searchTerm=${search}`);
  };

  const { data, meta } = serviceData;

  const [deleteService] = useDeleteServiceMutation();

  const handleDeleteService = (id) => {
    try {
      const res = deleteService(id);
      console.log("res data", res?.data);
      if (res?.data) {
        toast.success(`${res?.data?.message}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        router.refresh();
      }
    } catch (err) {
      console.error(err.message);
      toast.error(`${err.message}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  //pagination
  const [pageNum, setPageNum] = useState(1);
  const [sizeNum, setSizeNum] = useState(8);

  useEffect(()=> {
    router.push(`/admin/services?page=${pageNum}`)
  }, [router, pageNum, sizeNum])

  const pageCount = meta?.total / sizeNum;

  const onPaginationChange = (data) => {
    setPageNum(data.selected + 1);
  };

  return (
    <div>
      <Card className="h-full w-full">
      <UserHeading
          handleSearch={handleSearch}
          userlist="Services list"
          info="See information about all services"
          search={search}
          createRoute="/admin/services/create"
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
            {data?.map(({ id, name, description, createdAt }, index) => {
              const isLast = index === serviceData.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {description?.slice(0, 30)}...
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td className={`${classes} flex gap-5 bg-blue-gray-50/50`}>
                    <Link
                      href={`/admin/services/edit/${id}`}
                      className="text-[#19D3AE]"
                    >
                      <MdEdit />
                    </Link>
                    <MdOutlineDelete
                      className="text-[#b60000] cursor-pointer"
                      onClick={() => handleDeleteService(id)}
                    />
                  </td>
                </tr>
              );
            })}
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

      <div>
        <Button onClick={handleOpen} variant="gradient">
          Open Dialog
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default ServiceTable;
