import React,{useState, useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';
import {gravatarPath} from '../gravater'
import MessageField from './messageField'
import MessageSubmitButton from './messageSubmitButton'

const useStyles =  makeStyles({
    root:{
        gridRow: 2,
        margin: '26px',
    }
})

const MessageListInputField = ({name}) =>{
    const inputEl = useRef(null)
    const Classes = useStyles();
    const [text, setText] = useState('');
    console.log(text)

    return(
        <div className = {Classes.root}>
        <Grid container>
            <Grid item xs={1}>
                <Avatar src={gravatarPath(name)}/>
            </Grid>
            <Grid item xs={10}>
                <MessageField 
                inputEl={inputEl}
                name={name} setText={setText} text={text}  />
            </Grid>
            <Grid item xs={1}>
                <MessageSubmitButton 
                inputEl={inputEl}
                name={name} setText={setText} text={text} />
            </Grid>
        </Grid>
        </div>
    )
}

export default  MessageListInputField;