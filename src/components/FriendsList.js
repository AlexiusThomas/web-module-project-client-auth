import React, { useEffect } from "react";
import styled from "styled-components";
import { Navigate } from 'react-router-dom'


const StyledFriendsList = styled.div`
    font-size: 1.6rem;
    font-weight: bold;
`

const FriendsList = (props) => {

    const { friends, getFriends } = props;

    useEffect(() => {
        getFriends();
    }, [])

    if(!window.localStorage.getItem('token')){
        return <Navigate to='/' /> 
    }

    if(friends.length === 0){
        return(
            <StyledFriendsList>
                Loading friends...
            </StyledFriendsList>
        )
    }else{
    return(
        <StyledFriendsList>
            <h1>FRIENDS LIST</h1>
            {friends.map(item => {
                return (
                    <div>{`- ${item.name} - ${item.email}`}</div>
                )
            })}
        </StyledFriendsList>
    )
    }
}

export default FriendsList;