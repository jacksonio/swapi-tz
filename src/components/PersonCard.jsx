import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import {red} from '@material-ui/core/colors';
import PublicIcon from '@material-ui/icons/Public';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import {Favorite} from "@material-ui/icons";
import icon from '../assets/img/icon.png'

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 300,
    },
    media: {
        backgroundSize: "contain",
        paddingTop: '56.25%'
    },
    avatar: {
        backgroundColor: red[500],
    },
    like : {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    info: {
        display: "flex",
        marginTop: "20px",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "17px"
    },
    icon: {
        marginRight: '10px'
    }
}));


const PersonCard = ({isLiked = false}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title="Name"
            />
            <CardMedia
                className={classes.media}
                image={icon}
                title="User icon"
                s
            />
            <CardContent>
                <div className={classes.info}><PublicIcon className={classes.icon} />World</div>
                <div className={classes.info}><AccessibilityIcon className={classes.icon} />Gender</div>
            </CardContent>
            <CardActions disableSpacing className={classes.like}>
                <IconButton aria-label="add to favorites">
                    <Favorite  style={{fill: isLiked ? 'red' : 'black'}} />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default PersonCard
