import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import icon from '../assets/img/icon.png'
import {useDispatch, useSelector} from "react-redux";
import {getProfileInfo} from "../selectors/profileSelectors";
import {Avatar, Button, TextField} from "@material-ui/core";
import HeightIcon from '@material-ui/icons/Height';
import {Cake, Colorize, ColorLens, DirectionsCar, FitnessCenter, Movie, Visibility, Wc} from "@material-ui/icons";
import {setProfileThunk} from "../redux/profile-reducer";

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
        marginRight: 5,
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
    },
    submitButton: {
        marginLeft: 5,
        height: 40
    }

}));

const ProfilePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [photoUrl, setPhotoUrl] = useState('')
    const [error, setError] = useState(false)
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

    const onChangeHandler = (e) => {
        setPhotoUrl(e.target.value)
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        const urlRegex = /^(https:|http:|www\.)\S*/gm
        const regex = new RegExp(urlRegex);

        if (photoUrl.match(regex)) {
            dispatch(setProfileThunk(photoUrl, name))
            setPhotoUrl('')
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <div className={classes.root}>
            <div className={clsx(classes.profilePhotoContainer, classes.flexAlign)}>
                <Avatar
                    alt={`${name} photo`}
                    classes={{root: classes.userPhoto}}
                    src={photo ? photo : icon}
                />
                <form onSubmit={(e) => onClickHandler(e)}>
                    <div>
                        <TextField
                            size='small'
                            error={error}
                            value={photoUrl}
                            onChange={(e) => onChangeHandler(e)}
                            label="Add photo"
                            helperText={error ? "Input valid url" : ""}
                            variant="outlined"
                        />
                    </div>
                </form>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => onClickHandler(e)}
                    classes={{root: classes.submitButton}}
                >
                    Save
                </Button>
            </div>
            <div className={classes.userName}>
                {`${name} from ${homeworld ? homeworld : 'far away galaxy'}`}
            </div>
            <div className={clsx(classes.flexAlign, classes.fullWidthMargin)}>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}>
                        <HeightIcon classes={{root: classes.iconOffset}}/>
                        Height:
                    </span>
                    <span className={classes.itemValue}>{height}</span>
                </div>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}>
                        <FitnessCenter classes={{root: classes.iconOffset}}/>
                        Mass:
                    </span>
                    <span className={classes.itemValue}>{mass}</span>
                </div>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}>
                        <ColorLens classes={{root: classes.iconOffset}}/>
                        Hair color:</span>
                    <span className={classes.itemValue}>{hair_color}</span>
                </div>
            </div>
            <div className={clsx(classes.flexAlign, classes.fullWidthMargin)}>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}>
                        <Colorize classes={{root: classes.iconOffset}}/>
                        Skin color:</span>
                    <span className={classes.itemValue}>{skin_color}</span>
                </div>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}>
                        <Visibility classes={{root: classes.iconOffset}}/>
                        Eye color:</span>
                    <span className={classes.itemValue}>{eye_color}</span>
                </div>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}>
                        <Cake classes={{root: classes.iconOffset}}/>
                        Birth year:
                    </span>
                    <span className={classes.itemValue}>{birth_year}</span>
                </div>
                <div className={clsx(classes.itemContainer, classes.flexAlign)}>
                    <span className={clsx(classes.itemLabel, classes.flexAlign)}>
                        <Wc classes={{root: classes.iconOffset}}/>
                        Gender:
                    </span>
                    <span className={classes.itemValue}>{gender}</span>
                </div>
            </div>
            <div className={classes.filmsAndVehicles}>
                <div>
                    <span className={clsx(classes.listTitle, classes.svgIconAlign)}>
                        <Movie classes={{root: classes.iconOffset}}/>
                        Films
                    </span>
                    <ul className={classes.listContainer}>
                        {films.map(film => <li key={film}>{film}</li>)}
                    </ul>
                </div>
                <div>
                    <span className={clsx(classes.listTitle, classes.svgIconAlign)}>
                        <DirectionsCar classes={{root: classes.iconOffset}}/>
                        Vehicles
                    </span>
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
