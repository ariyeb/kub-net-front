import axios from 'axios';

export const sendUsersRequest = async (email, password, isLogin) => {
    const url = `http://localhost:8000/${isLogin ? "login" : "subscribe"}`;
    try {
        const { data } = await axios.post(url, { email, password });
        return data;
    } catch (err) {
        console.log(err);
    }
};