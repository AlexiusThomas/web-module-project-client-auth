import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import axios from 'axios';
import Header from './components/Header';
import AddFriend from './components/AddFriend';
import axiosWithAuth from './axios';

function App() {

  const [friends, setFriends] = useState([])
  const navigate = useNavigate();

  const login = ({ username, password}) => {
    axios.post('http://localhost:9000/api/login', { username, password })
    .then(resp => {
      window.localStorage.setItem('token', resp.data.token)
      navigate('/friends')
    })
    .catch(error => {
      console.log('here is an error from the axios call: ', error);
    })
  }
  
  const logout = () => {
    localStorage.removeItem("token");
    navigate('/');
  }
  
  const getFriends = () => {
    axiosWithAuth().get('http://localhost:9000/api/friends')
    .then(resp => {
      setFriends(resp.data);
    })
    .catch(error => {
      console.log('getFriends error: ', error);
    })
  }

  const addFriend = (friend) => {
    axiosWithAuth().post('http://localhost:9000/api/friends', friend)
    .then(resp => {
      setFriends(resp.data);
    })
    .catch(error => {
      console.log('addFriend error: ', error);
    })
  }

  return (
    <div className="App">
      <Header logout={logout}/>
      <Routes>
        <Route path='/' element={<Login login={login}/>}/>
        <Route path='/friends' element={<FriendsList friends={friends} getFriends={getFriends}/>} />
        <Route path='/addfriend' element={<AddFriend addFriend={addFriend}/>}/>
      </Routes>
    </div>
  );
}

export default App;