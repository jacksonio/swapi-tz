import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import icon from '../assets/img/icon.png'
import {useSelector} from "react-redux";
import {getProfileInfo} from "../selectors/profileSelectors";
import {Avatar} from "@material-ui/core";
import HeightIcon from '@material-ui/icons/Height';
import {Cake, Colorize, ColorLens, DirectionsCar, FitnessCenter, Movie, Visibility, Wc} from "@material-ui/icons";
const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "30px"
    },
    flexAlign: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    profilePhotoContainer: {
        width: "100%"
    },
    fullWidthMargin: {
        width: "100%",
        margin: 20
    },
    userPhoto: {
        width: 150,
        height: 150
    },
    userName: {
        fontSize: 20,
        fontWeight: 500
    },
    itemLabel: {
        fontSize: 18,
        fontWeight: 600,
        marginRight: 5
    },
    itemValue: {
        fontSize: 20,
    },
    itemContainer: {
        marginRight: 20
    },
    listContainer: {
        marginLeft: 16,
        padding: 0
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 600
    },
    filmsAndVehicles: {
        display: "flex",
        width: 590,
        justifyContent: "space-between",
        alignItems: "start"
    },
    vehicleLabel: {
        fontWeight: 600
    },
    svgIconAlign: {
        display: 'flex'
    },
    iconOffset: {
        marginRight: 5
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
        films,
        vehicles,
        photo
    } = useSelector(getProfileInfo)

    return (
        <div className={classes.root}>
            <div className={clsx(classes.profilePhotoContainer, classes.flexAlign)}>
                <Avatar alt={`${name} photo`} classes={{root: classes.userPhoto}} src={photo ? photo : icon}/>
            </div>
            <div className={classes.userName}>
                {`${name} from ${homeworld ? homeworld : 'far away galaxy'}`}
            </div>
            <div className={clsx(classes.flexAlign, classes.fullWidthMargin)}>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}><HeightIcon classes={{root: classes.iconOffset}} />Height:</span>
                    <span className={classes.itemValue}>{height}</span>
                </div>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}><FitnessCenter classes={{root: classes.iconOffset}} />Mass:</span>
                    <span className={classes.itemValue}>{mass}</span>
                </div>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}><ColorLens classes={{root: classes.iconOffset}} />Hair color:</span>
                    <span className={classes.itemValue}>{hair_color}</span>
                </div>
            </div>
            <div className={clsx(classes.flexAlign, classes.fullWidthMargin)}>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}><Colorize classes={{root: classes.iconOffset}} />Skin color:</span>
                    <span className={classes.itemValue}>{skin_color}</span>
                </div>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}><Visibility classes={{root: classes.iconOffset}} />Eye color:</span>
                    <span className={classes.itemValue}>{eye_color}</span>
                </div>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}><Cake classes={{root: classes.iconOffset}} />Birth year:</span>
                    <span className={classes.itemValue}>{birth_year}</span>
                </div>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}><Wc classes={{root: classes.iconOffset}}/>Gender:</span>
                    <span className={classes.itemValue}>{gender}</span>
                </div>
            </div>
            <div className={classes.filmsAndVehicles}>
                <div>
                    <span className={clsx(classes.listTitle, classes.svgIconAlign)}><Movie classes={{root: classes.iconOffset}}/>Films</span>
                    <ul className={classes.listContainer}>
                        {films.map(film => <li key={film}>{film}</li>)}
                    </ul>
                </div>
                <div>
                    <span className={clsx(classes.listTitle, classes.svgIconAlign)}><DirectionsCar classes={{root: classes.iconOffset}} />Vehicles</span>
                  {
                        vehicles.length
                            ? <ul className={classes.listContainer}>
                                {vehicles.map(vehicle =>
                                    <li key={vehicle.name}>
                                        <span className={classes.vehicleLabel}>Name:</span> {vehicle.name}
                                        <br/>
                                        <span className={classes.vehicleLabel}>Model:</span> {vehicle.model}
                                    </li>)}
                            </ul>
                            : <div>No vehicles</div>
                    }

                </div>
            </div>
        </div>
    );
}

export default ProfilePage
