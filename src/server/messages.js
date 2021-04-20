import axios from 'axios';

const URL = "http://localhost:8080/";

const getMessages = async (userId, token) => {
    console.log(userId, token);
    try {
        const response = await axios.get(URL + "messages?userId=" + userId, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        return response.data;
    } catch (err) {
        console.log(err);
    }
};


const sendMessage = async (userId, token, title, body) => {
    try {
        const response = await axios.post(URL + "add-message",
            {
                userId,
                message: {
                    title,
                    body,
                    user: userId
                }
            },
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            });

        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export { getMessages, sendMessage };