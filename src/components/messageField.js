import React, { useState } from "react";
import { TextField } from '@material-ui/core';
import { pushMessage } from '../fireBase';

const MessageField = ({inputEl ,name, setText, text, }) => {

    const [isComposed, setIsComposed] = useState(false);
    console.log(text)

    return (
        <TextField
            autoFocus
            fullWidth={true}
            inputRef={inputEl}
            onChange={(e) => {
                setText(e.target.value)
            }}
            onKeyDown={(e) => {
                if (isComposed) return;

                const text = e.target.value;

                if (text === "") return;

                if (e.key === 'Enter') {
                    pushMessage({ name: 'erika', text })
                    setText("");
                    e.preventDefault();
                }
            }}
            onCompositionStart={() => {
                setIsComposed(true)
            }}
            onCompositionEnd={() => {
                setIsComposed(false)
            }}
            value={text}
        />
    )
}

export default MessageField;