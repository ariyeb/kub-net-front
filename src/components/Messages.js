import React, { useEffect, useState } from 'react';
import { getMessages, sendMessage } from '../server/messages';

const Messages = ({ userId, token }) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        getMessages(userId, token)
            .then(newMessages => {
                setMessages(newMessages);
            });
    }, [userId, token]);

    const onSubmitForm = (event) => {
        event.preventDefault();
        const title = event.target.children[0].value;
        const body = event.target.children[1].value;
        console.log(title, body);
        sendMessage(userId, token, title, body)
            .then(() => {
                return getMessages(userId, token);
            })
            .then(newMessages => {
                setMessages(newMessages);
            })
            .catch(err => console.log(err));
    };
    return (
        <div >
            <h3>Messages</h3>
            <form onSubmit={ onSubmitForm }>
                <input type="text" placeholder="title" />
                <input type="text" placeholder="body" />
                <button type="submit">Submit</button>
            </form>
            {
                messages.map(message => (
                    <div key={ message._id }>
                        <h3>{ message.title }</h3>
                        <p>{ message.body }</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
};

export default Messages;