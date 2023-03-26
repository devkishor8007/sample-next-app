import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => "todos",
    }),
    getUserProfileByID: builder.query({
      query: (id) => `users/${id}`,
    }),
    createPost: builder.mutation({
      query: (todo) => ({
        url: "todos",
        method: "POST",
        body: todo,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const {
  useGetUserProfileByIDQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useDeletePostMutation,
} = profileApi;
