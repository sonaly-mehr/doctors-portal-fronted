"use client";

import { useGetAppointmentQuery } from "@/redux/api/appointments";

const GetAppointment = (id) => {
  const { data, isLoading } = useGetAppointmentQuery(id);
  return data;
};

export default GetAppointment;
