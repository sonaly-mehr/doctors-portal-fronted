import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userRegister: build.mutation({
      query: (registerData) => ({
        url: "/auth/user/register",
        method: "POST",
        data: registerData,
      }),
      invalidatesTags: ["user"],
    }),
    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/auth/user/login",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    getUser: build.query({
      query: (userEmail) => ({
        url: `/auth/user/${userEmail}`,
        method: "GET",
      }),
    }),
    getUsers: build.query({
      query: () => ({
        url: `/auth/user`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: `/auth/user/${data.userEmail}/change/password`,
        method: "PATCH",
        data: data.body,
      }),
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url: `/auth/user/${data.userEmail}/update/profile`,
        method: "PATCH",
        data: data.body,
      }),
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useUserLoginMutation,
  useChangePasswordMutation,
  useUpdateProfileMutation
} = authApi;
