"use client";
import React, { Children } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import Link from "next/link";

const Sidebar = ({ children, items }) => {
  return (
    <div className="flex">
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          {items?.map((item) => (
            <Link href={`${item?.href}`} key={item?.key}>
              <ListItem>
                <ListItemPrefix>
                  <span className="h-5 w-5">{item?.icon}</span>
                </ListItemPrefix>
                {item?.label}
              </ListItem>
            </Link>
          ))}
        </List>
      </Card>

      <div className="bg-[#F1F5F9] p-8 w-full">{children}</div>
    </div>
  );
};

export default Sidebar;
