import { Post, Response } from "./types";

const server = "https://limitless-sierra-67996.herokuapp.com/v1";

function get(uri: string): Promise<any> {
  return fetch(server + uri);
}

export function getAllPosts(): Promise<Response<Post[]>> {
  return get("/posts").then((res) => res.json());
}
