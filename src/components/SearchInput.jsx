import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useDispatch, useSelector} from "react-redux";
import {getPeople} from "../selectors/peopleSelectors";
import {profileActions} from "../redux/profile-reducer";
import {useHistory} from "react-router-dom";

const SearchInput = () => {

    const allPeople = useSelector(getPeople)
    const dispatch = useDispatch()
    const history = useHistory()

    const onKeyPressedHandler = (e) => {
        if(e.key === 'Enter') {
            const profileInfo = allPeople.filter(person => person.name === e.target.value)[0]
            dispatch(profileActions.setProfile(profileInfo))
            history.push('/profile')
        }
    }

    return (

        <Autocomplete
            id="combo-box-demo"
            options={allPeople}
            getOptionLabel={(person) => person.name}
            style={{ width: 500, paddingTop: 20 }}
            onKeyPress={(e) => onKeyPressedHandler(e) }
            renderInput={(params) => <TextField {...params} label="Enter person name" variant="outlined" />}
        />
    );
}

export default SearchInput
