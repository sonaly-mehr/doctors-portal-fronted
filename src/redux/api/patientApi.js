import { baseApi } from "./baseApi";

export const patientApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    patientRegister: build.mutation({
      query: (registerData) => ({
        url: "/patients/create-patient",
        method: "POST",
        data: registerData,
      }),
      invalidatesTags: ["patient"],
    }),
    getPatient: build.query({
      query: (id) => ({
        url: `/patients/${id}`,
        method: "GET",
      }),
    }),
    updateMedicalProfile: build.mutation({
      query: (data) => ({
        url: `/medical-profiles/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
    }),
    // getUsers: build.query({
    //   query: () => ({
    //     url: `/auth/user`,
    //     method: "GET",
    //   }),
    //   providesTags: ["user"],
    // }),
    // changePassword: build.mutation({
    //   query: (data) => ({
    //     url: `/auth/user/${data.userEmail}/change/password`,
    //     method: "PATCH",
    //     data: data.body,
    //   }),
    // }),
    // updateProfile: build.mutation({
    //   query: (data) => ({
    //     url: `/auth/user/${data.userEmail}/update/profile`,
    //     method: "PATCH",
    //     data: data.body,
    //   }),
    // }),
  }),
});

export const {
  usePatientRegisterMutation,
  useGetPatientQuery,
  useUpdateMedicalProfileMutation
} = patientApi;
