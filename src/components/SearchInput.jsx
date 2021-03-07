import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useDispatch, useSelector} from "react-redux";
import {getIsLikedCheckbox, getPeople} from "../selectors/peopleSelectors";
import {profileActions} from "../redux/profile-reducer";
import {useHistory} from "react-router-dom";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {styled} from "@material-ui/core/styles";
import {peopleActions} from "../redux/people-reducer";

const SearchInput = () => {

    const allPeople = useSelector(getPeople)
    const dispatch = useDispatch()
    const history = useHistory()
    const checked = useSelector(getIsLikedCheckbox)

    const onKeyPressedHandler = (e) => {
        if (e.key === 'Enter') {
            const profileInfo = allPeople.filter(person => person.name === e.target.value)[0]
            dispatch(profileActions.setProfile(profileInfo))
            history.push('/profile')
        }
    }

    const onCheckedHandler = () => {
       checked ? dispatch(peopleActions.filterByAll()) : dispatch(peopleActions.filterByLikes())
    }

    const CheckboxContainer = styled('div')({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px'
    })

    return (
        <CheckboxContainer>
            <Autocomplete
                options={allPeople}
                getOptionLabel={(person) => person.name}
                style={{width: 500, marginRight: 20}}
                onKeyPress={(e) => onKeyPressedHandler(e)}
                renderInput={(params) => <TextField {...params} label="Enter person name" variant="outlined"/>}
            />
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={onCheckedHandler}
                            color="primary"
                        />
                    }
                    label="Display only liked cards"
                />
            </FormGroup>
        </CheckboxContainer>

    );
}

export default SearchInput


