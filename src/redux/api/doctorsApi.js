import { baseApi } from "./baseApi";


export const doctorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (doctorsData) => ({
        url: "/doctors/create-doctor",
        method: "POST",
        data: doctorsData
      }),
      invalidatesTags: ["services"],
    }),
    // getService: build.query({
    //   query: (id) => ({
    //     url: `/services/${id}`,
    //     method: "GET",
    //   }),
    //   invalidatesTags: ["services"],
    // }),
    // updateService: build.mutation({
    //   query: (data) => ({
    //     url: `/services/${data.id}`,
    //     method: "PATCH",
    //     data: data.body,
    //   }),
    // }),
    // deleteService: build.mutation({
    //   query: (id) => ({
    //     url: `/services/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["services"],
    // }),
  }),
});

export const { useCreateDoctorMutation } = doctorsApi;
