import { baseApi } from "./baseApi";

export const bookAppointmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: (bookingData) => ({
        url: "/appointments/book-appointment",
        method: "POST",
        data: bookingData,
      }),
      invalidatesTags: ["booking"],
    }),
    cancelAppointment: build.mutation({
      query: (id) => ({
        url: `/appointments/cancel-appointment/${id}`,
        method: "PATCH",
        // data: data.body,
      }),
    }),
    startAppointment: build.mutation({
      query: (id) => ({
        url: `/appointments/start-appointment/${id}`,
        method: "PATCH",
      }),
    }),
    completeAppointment: build.mutation({
      query: (id) => ({
        url: `/appointments/finish-appointment/${id}`,
        method: "PATCH",
      }),
    }),
    // getBookings: build.query({
    //   query: (arg) => ({
    //     url: "/booking",
    //     method: "GET",
    //     params: arg
    //   }),
    //   invalidatesTags: ["booking"],
    // }),
    // getBooking: build.query({
    //   query: (id) => ({
    //     url: `/booking/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["booking"],
    // }),
  }),
});

export const {
    useCreateBookingMutation,
    useCancelAppointmentMutation,
    useStartAppointmentMutation,
    useCompleteAppointmentMutation
} = bookAppointmentApi;
