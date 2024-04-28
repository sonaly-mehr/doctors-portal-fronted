import { baseApi } from "./api/baseApi";

export const reducer = {
   // search : searchReducer,
   [baseApi.reducerPath]: baseApi.reducer,
}

