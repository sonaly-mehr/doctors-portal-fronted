import { baseApi } from "./baseApi";


export const servicesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createService: build.mutation({
      query: (serviceData) => ({
        url: "/services/create-service",
        method: "POST",
        data: serviceData
      }),
      invalidatesTags: ["services"],
    }),
    getService: build.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["services"],
    }),
    updateService: build.mutation({
      query: (data) => ({
        url: `/services/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["services"],
    }),
  }),
});

export const { useCreateServiceMutation, useGetServiceQuery, useDeleteServiceMutation, useUpdateServiceMutation } = servicesApi;
