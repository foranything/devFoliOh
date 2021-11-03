export interface Response<T> {
  results: T;
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}
