import React from "react";
import {useSelector} from "react-redux";
import {getPeople} from "../selectors/peopleSelectors";
import ProfileCard from "./ProfileCard";
import {styled} from "@material-ui/core/styles";
import SearchInput from "./SearchInput";


const MainPage = () => {
    const allPeopleArr = useSelector(getPeople)

    const CardsGridContainer = styled('div')({
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr",
        gap: "20px 20px",
        margin: "20px 0"
    })
    const AlignedContainer = styled('div')({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    })


    return (
        <>
            <AlignedContainer>
                <SearchInput />
            </AlignedContainer>
            <CardsGridContainer>
                {allPeopleArr.map((person) => (
                    <AlignedContainer key={person.name}>
                        <ProfileCard homeworld={person.homeworld} name={person.name} gender={person.gender}
                                     photo={person.photo ? person.photo : null}/>
                    </AlignedContainer>
                ))}
            </CardsGridContainer>
        </>

    )
}

export default MainPage
