import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@material-ui/core/styles'

import { getIsLikedCheckbox, getLikedPeople, getPeople } from '../selectors/peopleSelectors'
import { getAllPeopleThunk, peopleActions } from '../redux/people-reducer'
import { getIsLoading } from '../selectors/loaderSelectors'

import ProfileCard from './ProfileCard'
import SearchInput from './SearchInput'
import Loader from './Loader'

const MainPage = () => {
    const allPeopleArr = useSelector(getPeople)
    const likedPeopleArr = useSelector(getLikedPeople)
    const isFilteredByLikes = useSelector(getIsLikedCheckbox)
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        const storedPeople = localStorage.getItem('allPeopleData')
        if (storedPeople) {
            const allPeopleArr = JSON.parse(localStorage.getItem('allPeopleData'))
            dispatch(peopleActions.setAllPeople(allPeopleArr))
        } else {
            dispatch(getAllPeopleThunk())
        }
    }, [dispatch])

    const CardsGridContainer = styled('div')({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr',
        gap: '20px 20px',
        margin: '20px 0',
    })
    const AlignedContainer = styled('div')({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    })

    const mappedPeopleArr = isFilteredByLikes ? likedPeopleArr : allPeopleArr

    return isLoading ? (
        <Loader />
    ) : (
        <>
            <AlignedContainer>
                <SearchInput />
            </AlignedContainer>
            <CardsGridContainer>
                {mappedPeopleArr.map((profile) => (
                    <AlignedContainer key={profile.name}>
                        <ProfileCard profile={profile} />
                    </AlignedContainer>
                ))}
            </CardsGridContainer>
        </>
    )
}

export default MainPage
