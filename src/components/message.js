import React, { useState, useEffect } from "react";
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { messagesRef } from "../fireBase";
import { message } from "statuses";
import MessageItem from "./messageItem";


const useStyles = makeStyles({
    root: {
        gridRow: 1,
        width: '100%',
        overflow: 'auto',
    }
})

const MessageList = () => {
    const [messages, setMessages] = useState([{name: ""}]);
    const classes = useStyles()

    console.log(messages);

    useEffect(() => {
        messagesRef.orderByKey().limitToLast(15).on('value', (snapshot) => {
            const messages = snapshot.val();
            if (messages === null) {
                return
            }
            const entries = Object.entries(messages);
            const newMessages = entries.map(entry => {
                const [key, nameAndText] = entry;
                return { key, ...nameAndText };
            });
            setMessages(newMessages);
        })
    }, []);
    return (
        // <div>item</div>
        <List className={classes.root}>
            {messages.map(({key, name, text}) => {
                return <MessageItem key={key} name={name} text={text}>item</MessageItem>;
            })}
        </List>
    );
};

export default MessageList;