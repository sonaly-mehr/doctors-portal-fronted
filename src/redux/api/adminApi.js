import { baseApi } from "./baseApi";


export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdmin: build.mutation({
      query: (adminData) => ({
        url: "/auth/user/admin/register",
        method: "POST",
        data: adminData
      }),
    }),
    getAdmin: build.query({
      query: (id) => ({
        url: `/auth/user/admin/${id}`,
        method: "GET",
      }),
    }),
    getAdmins: build.query({
      query: (arg) => {
        return {
          url: "/auth/user/admins",
          method: "GET",
          params: arg,
        };
      },
    }),
    updateAdmin: build.mutation({
      query: (data) => ({
        url: `/auth/user/update/admin/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["user"],
    }),
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `/auth/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useCreateAdminMutation, useGetAdminsQuery, useDeleteAdminMutation, useUpdateAdminMutation, useGetAdminQuery } = adminApi;
