import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {red} from '@material-ui/core/colors';
import PublicIcon from '@material-ui/icons/Public';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import icon from '../assets/img/icon.png'
import {useSelector} from "react-redux";
import {getProfileInfo} from "../selectors/profileSelectors";

const useStyles = makeStyles(() => ({
    root: {
        width: 600,
    },
    media: {
        backgroundSize: "contain",
        paddingTop: '56.25%'
    },
    avatar: {
        backgroundColor: red[500],
    },
    like: {
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
    },
    cardsContainer: {
        display: 'grid',
        rowGap: '20px',
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "20px 20px"
    }
}));


const ProfilePage = () => {
    const classes = useStyles();
    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
        homeworld,
        species,
        starships,
        photo
    } = useSelector(getProfileInfo)

    return (
        <Card className={classes.root}>
            <CardHeader
                title={name}
            />
            <CardMedia
                className={classes.media}
                image={photo ? photo : icon}
                title="User icon"
            />
            <CardContent classes={{root: classes.cardsContainer}}>
                <div className={classes.info}><PublicIcon className={classes.icon}/>{homeworld}</div>
                <div className={classes.info}><AccessibilityIcon className={classes.icon}/>{gender}</div>
                <div className={classes.info}><AccessibilityIcon className={classes.icon}/>{height}</div>
                <div className={classes.info}><AccessibilityIcon className={classes.icon}/>{mass}</div>
                <div className={classes.info}><AccessibilityIcon className={classes.icon}/>{hair_color}</div>
                <div className={classes.info}><AccessibilityIcon className={classes.icon}/>{skin_color}</div>
                <div className={classes.info}><AccessibilityIcon className={classes.icon}/>{eye_color}</div>
                <div className={classes.info}><AccessibilityIcon className={classes.icon}/>{birth_year}</div>
                <div className={classes.info}><AccessibilityIcon className={classes.icon}/>{species}</div>
                <div className={classes.info}><AccessibilityIcon className={classes.icon}/>{starships}</div>
            </CardContent>
        </Card>
    );
}

export default ProfilePage
