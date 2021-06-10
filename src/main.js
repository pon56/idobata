import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MessageList from './components/message'
import MessageListInputField from './components/message-input-field'

const useStyles = makeStyles({
    root : {
        display: 'grid',
        height: '100vh',
        gridTemplateRows: '1fr auto',
    }
})

const Main = (props)=>{
    const {name} = props
   
    const classes =  useStyles();
    
    console.log(name)

    return(
        <div className={classes.root}>
        <MessageList/>
        <MessageListInputField name={name}/>
        </div>
    )
}

export default Main;