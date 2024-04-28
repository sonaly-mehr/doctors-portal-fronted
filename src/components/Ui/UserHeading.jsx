"use client";
import React from "react";
import {
  Button,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const UserHeading = (props) => {
  return (
    <CardHeader floated={false} shadow={false} className="rounded-none pb-4">
      <div className="mb-2 flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            {props?.userlist}
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            {props?.info}
          </Typography>
        </div>

        <div className="w-full md:w-72">
          <Input
            label="Search"
            defaultValue={props?.search}
            onChange={props?.handleSearch}
            icon={<BsSearch className="h-4 w-4" />}
          />
        </div>

        <Link href={`${props?.createRoute}`}>
          <Button
            variant="gradient"
            size="sm"
            className="bg-secondary uppercase text-xs"
          >
            Create
          </Button>
        </Link>
      </div>
    </CardHeader>
  );
};

export default UserHeading;
