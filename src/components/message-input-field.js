import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';

const useStyles =  makeStyles({
    root:{
        gridRow: 2,
        margin: '26px',
    }
})

const MessageListInputField = () =>{
    const Classes = useStyles();
    return(
        <div className = {Classes.root}>
        <Grid container>
            <Grid xs={1}>
                <Avatar />
            </Grid>
            <Grid xs={10}>
                入力
            </Grid>
            <Grid xs={1}>
                ボタン
            </Grid>
        </Grid>
        </div>
    )
}

export default  MessageListInputField;