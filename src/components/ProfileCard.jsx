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
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLikeThunk} from "../redux/people-reducer";
import {Button} from "@material-ui/core";
import {profileActions} from "../redux/profile-reducer";

const useStyles = makeStyles(() => ({
    root: {
        width: 300,
    },
    media: {
        backgroundSize: "contain",
        paddingTop: '56.25%'
    },
    avatar: {
        backgroundColor: red[500],
    },
    actionsContainer : {
        display: "flex",
        justifyContent: "space-between",
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


const ProfileCard = ({profile}) => {

    const classes = useStyles();
    const history = useHistory()
    const dispatch = useDispatch()
    const {name, photo, isLiked, gender, homeworld} = profile

    const onClickHandler = () => {
        dispatch(profileActions.setProfile(profile))
        history.push('/profile')
    }

    const setLikeHandler = () => {
        dispatch(setLikeThunk(name))
    }


    return (
        <Card className={classes.root}>
            <CardHeader
                title={name}
            />
            <CardMedia
                className={classes.media}
                image={photo ? photo : icon}
                title={`${name} card`}
            />
            <CardContent>
                <div className={classes.info}><PublicIcon className={classes.icon} />{homeworld}</div>
                <div className={classes.info}><AccessibilityIcon className={classes.icon} />{gender}</div>
            </CardContent>
            <CardActions disableSpacing className={classes.actionsContainer}>
                <IconButton aria-label="add to favorites" onClick={() => setLikeHandler()}>
                    <Favorite  style={{fill: isLiked ? 'red' : 'black'}} />
                </IconButton>
                <Button variant='outlined' onClick={() => onClickHandler()}>
                    Open profile
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProfileCard
