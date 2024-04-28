import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAvailableService: build.mutation({
      query: (serviceData) => ({
        url: "/available-services/create-available-service",
        method: "POST",
        data: serviceData
      }),
      invalidatesTags: ["services"],
    }),
    getAvailableService: build.query({
      query: (id) => ({
        url: `/available-services/${id}`,
        method: "GET",
      }),
    }),
    updateAvailableService: build.mutation({
      query: (data) => ({
        url: `/available-services/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
    }),
  }),
});

export const {
  useCreateAvailableServiceMutation,
  useGetAvailableServiceQuery,
  useUpdateAvailableServiceMutation
} = authApi;
