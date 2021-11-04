import axios from "axios";

export const getPost = async (id: string) => {
    const URL = "https://limitless-sierra-67996.herokuapp.com/v1";
    const response = await axios.get(`${URL}/posts/${id}`);
    return response.data;
};
