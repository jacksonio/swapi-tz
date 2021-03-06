import React from "react";
import {useSelector} from "react-redux";
import {getPeople} from "../selectors/peopleSelectors";
import PersonCard from "./PersonCard";
import {styled} from "@material-ui/core/styles";


const MainPage = () => {
    const allPeopleArr = useSelector(getPeople)

    const CardsGridContainer = styled('div')({
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr",
        gap: "20px 20px",
        gridTemplateAreas: ". . ."
    })
    const PersonContainer = styled('div')({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    })

    return (
        <CardsGridContainer>
            {allPeopleArr.map((person) => (
                <PersonContainer key={person.name}>
                    <PersonCard homeworld={person.homeworld} name={person.name} gender={person.gender}
                                photo={person.photo ? person.photo : null}/>
                </PersonContainer>
            ))}
        </CardsGridContainer>
    )
}

export default MainPage
