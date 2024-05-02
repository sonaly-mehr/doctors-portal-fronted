import { baseApi } from "./baseApi";

export const appointmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAppointment: build.query({
      query: (id) => ({
        url: `/appointments/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
    useGetAppointmentQuery
} = appointmentApi;
