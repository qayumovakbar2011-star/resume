import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const crudApi = createApi({
    reducerPath: "crudApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:7777",
    }),
    tagTypes: ["Crud"],
    endpoints: (build: any) => {
        return {
            getUsers: build.query({
                query: (api: any) => api,
                providesTags: (result: any) =>
                    result
                        ? [
                            ...result.map(({ id }) => ({ type: "User", id })),
                            { type: "User", id: "LIST" },
                        ] : [{ type: "User", id: "LIST" }]
            }),
            getProps: build.query({
                query() {
                    return {
                        url: `/resume`,
                        method: "GET"
                    };
                }
            }),
            addUser: build.mutation({
                query(data: any) {
                    return {
                        url: "/users",
                        method: "POST",
                        body: data,
                    };
                },
                invalidatesTags: [{ type: "User", id: "LIST" }],
            }),
            addUser1: build.mutation({
                query(data: any) {
                    return {
                        url: "/resume",
                        method: "POST",
                        body: data,
                    };
                },
                invalidatesTags: [{ type: "Resume", id: "LIST" }],
            })
        }
    }
})

export const { useGetUsersQuery, useAddUserMutation, useAddUser1Mutation, useGetPropsQuery } = crudApi