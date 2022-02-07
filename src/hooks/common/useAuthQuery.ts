import { useQuery, QueryKey, QueryFunction, QueryOptions , UseQueryOptions } from "react-query"

//
// const useAuthQuery = <TQuery, TError>(queryKey: QueryKey, queryFn: QueryFunction<TQuery>, options?: Omit<UseQueryOptions<TQuery, TError, unknown, QueryKey>, "queryKey" | "queryFn"> | undefined) => {
//     const { data, isFetching, isSuccess, error } = useQuery<TQuery, TError>(queryKey , queryFn, options)
//
// }
//
