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
    getPostByName: builder.query({
      query: (id) => `todos/${id}`,
    }),
  }),
});

export const { useGetPostByNameQuery, useGetPostQuery } = profileApi;

// export default profileApi
