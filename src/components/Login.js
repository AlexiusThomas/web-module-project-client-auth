import React, { useState } from 'react';
import styled from 'styled-components';

const StyledLogin = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    .loginForm{
        display: flex;
        flex-direction: column;
    }
    .loginForm label{
        display: flex;
        flex-direction: column;
    }
`


function Login(props) {

    const [form, setForm] = useState({username: '', password: ''})

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.login(form);
    }
    return(
        <StyledLogin>
            <h1>LOGIN</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>Username: 
                    <input
                        type='input'
                        name='username'
                        onChange={handleChange}
                        value={form.username}
                    />
                </label>
                <label>Password: 
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={form.password}
                    />
                </label>
                <button>SUMBIT</button>
            </form>
        </StyledLogin>
    )
}

export default Login; 