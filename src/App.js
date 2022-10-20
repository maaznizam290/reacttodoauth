import { async } from '@firebase/util';
import { useState,useEffect } from 'react';
import './App.css';
import { db } from './config/firebaseconfig';
import AppRouter from './config/router';
import {collection,getDocs} from 'firebase/firestore'

function App() {
const [users,setUsers] = useState([]);
const userCollectionRef = collection(db,"users");
useEffect(()=>{
const getUsers = async()=>{
const data = await getDocs(userCollectionRef);
console.log(data);
}
getUsers()
},[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
