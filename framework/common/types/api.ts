export type apiFetcherOption={
    url:string,
    query:string
}

export type apiFetcherResult<T> ={
data:T
}
export interface ApiConfig {
    apiUrl:string
    fetch<T> (
        options:apiFetcherOption
    ):Promise<apiFetcherResult<T>>
}