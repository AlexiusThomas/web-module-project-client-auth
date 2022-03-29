import React, {useState} from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

const StyledAddFriend = styled.div`
    form{
        display: flex;
        flex-direction: column;
    }
    form label{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 10px 0;
    }
`

const AddFriend = props => {
    const { addFriend } = props;
    
    const [form, setForm] = useState({name: '', email: ''})

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addFriend(form);
    }

    if(!localStorage.getItem('token')){
        return <Navigate to='/' />
    }

    return(
        <StyledAddFriend>
            <h1>ADD FRIEND</h1>
            <form onSubmit={handleSubmit}>
                <label>FRIEND NAME
                    <input 
                        type='input'
                        name='name'
                        onChange={handleChange}
                        value={form.name}
                    />
                </label>
                <label>FRIEND EMAIL
                    <input 
                        type='input'
                        name='email'
                        onChange={handleChange}
                        value={form.email}
                    />
                </label>
                <button>SUBMIT</button>
            </form>
        </StyledAddFriend>
    )
}

export default AddFriend;