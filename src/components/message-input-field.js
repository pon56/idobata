import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';
import {gravatarPath} from '../gravater'
import MessageField from './messageField'

const useStyles =  makeStyles({
    root:{
        gridRow: 2,
        margin: '26px',
    }
})

const MessageListInputField = ({name}) =>{
    const Classes = useStyles();
    const [text, setText] = useState('')

    return(
        <div className = {Classes.root}>
        <Grid container>
            <Grid item xs={1}>
                <Avatar src={gravatarPath(name)}/>
            </Grid>
            <Grid item xs={10}>
                <MessageField name={name} setText={setText} text={text}/>
            </Grid>
            <Grid item xs={1}>
                ボタン
            </Grid>
        </Grid>
        </div>
    )
}

export default  MessageListInputField;