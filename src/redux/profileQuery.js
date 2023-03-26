import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "users",
    }),
    getUserProfileByID: builder.query({
      query: (id) => `users/${id}`,
    }),
    createUser: builder.mutation({
      query: (todo) => ({
        url: "users",
        method: "POST",
        body: todo,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const {
  useGetUserProfileByIDQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = profileApi;
