import React, { useEffect, useState } from 'react';
import { getMessages, sendMessage } from '../server/messages';

const Messages = ({ userData }) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        if (userData) {
            getMessages(userData.user._id, userData.token)
                .then(newMessages => {
                    setMessages(newMessages);
                });
        }
    }, [userData]);

    const onSubmitForm = (event) => {
        event.preventDefault();
        const title = event.target.children[0].value;
        const body = event.target.children[1].value;
        console.log(title, body);
        sendMessage(userData.user._id, userData.token, title, body)
            .then(() => {
                return getMessages(userData.user._id, userData.token);
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