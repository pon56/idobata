import React, {useRef, useEffect} from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { gravatarPath } from '../gravater';

const useStyles = makeStyles(() => ({
    inline: {
        display: 'inline',
    },
}));

const MessageItem = ({isLastItem ,name, text }) => {
    const ref = useRef(null);
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    console.log(typeof name)

    useEffect(() => {
        if(isLastItem){
            // ここでスクロールする
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [isLastItem]);

    return (
        <ListItem divider={true} ref={ref}>
            <ListItemAvatar>
                <Avatar src={avatarPath} />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={

                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                        {text}
                        </Typography>
                }
            />
        </ListItem>

    )
};

export default MessageItem;