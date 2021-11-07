import axios from "axios";
import { Form, Post, Response } from "../types";

const server = "https://limitless-sierra-67996.herokuapp.com/v1";

const get = async (uri: string): Promise<any> => {
  try {
    return await axios.get(server + uri);
  } catch (error) {
    console.error(error);
  }
};

const post: <T>(uri: string, body: T) => Promise<any> = async (uri, body) => {
  try {
    return await axios.post(server + uri, body);
  } catch (error) {
    console.error(error);
  }
};

export const getPost = async (id: string): Promise<Post> => {
  const response = await get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (body: Form) => {
  const response = await post<Form>(`/posts`, body);
  return response.data;
};

export const getAllPosts = async (): Promise<Response<Post[]>> => {
  const response = await get("/posts?limit=100");
  return response.data;
};
