import axios from "axios";

// https://sge-task2-back-end.vercel.app
const axiosPublic = axios.create({
    baseURL:'https://sge-reg.vercel.app'
    // baseURL:'http://localhost:5000'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;