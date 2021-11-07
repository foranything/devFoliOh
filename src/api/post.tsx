import axios from "axios";
// import { Post, Response } from "../types";

const server = "https://limitless-sierra-67996.herokuapp.com/v1";

const get = async (uri: string): Promise<any> => {
    try {
        return await axios.get(server + uri);
    } catch (error) {
        console.error(error);
    }
};

export const getPost = async (id: string): Promise<any> => {
    try {
        const response = await get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getAllPosts = async (): Promise<any> => {
    try {
        const response = await get("/posts");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = async (id: string): Promise<any> => {
    try {
        const response = await axios.delete(`${server}/posts/${id}`);
        console.log("check");
        return response.status;
    } catch (error) {
        console.log(error);
    }
};
