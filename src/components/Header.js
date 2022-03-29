import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.div`
    border-bottom: black 3px solid;
    display: flex;
    font-size: 2rem;
    padding: 20px 0;
    align-items: center;
    width: 100%;
    
    .headerLogo{
        width: 40%;
    }
    .headerLinks{
        width: 60%;
        display: flex;
        justify-content: space-evenly;
    }
    .link{
        padding: 20px 20px;
        background-color: black;
        color: white;
        font-weigth: bold;
    }
`

const Header = (props) => {

    return (
        <StyledHeader>
            <div className="headerLogo">
                FRIENDS DATABASE
            </div>
            <div className="headerLinks">
                <NavLink className='link' id='loginScreen' to='/'>LOGIN</NavLink>
                <NavLink className='link' id='friendsListScreen' to='/friends'>FRIENDLIST</NavLink>
                <NavLink className='link' id='addFriendScreen' to='/addfriend'>ADDFRIEND</NavLink>
                <NavLink className='link' id='logoutScreen' to='/' onClick={() => props.logout()}>LOGOUT</NavLink>
            </div>
        </StyledHeader>
    )
}

export default Header;