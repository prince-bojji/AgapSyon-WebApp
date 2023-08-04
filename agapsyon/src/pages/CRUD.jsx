import React, { useState, useEffect } from 'react';
import { db } from '/src/firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

//This is just for testing

function Temp() {
    const [newfname, setnewfname] = useState("");
    const [newmname, setnewmname] = useState("");
    const [newlname, setnewlname] = useState("");
    const [newaddress, setnewaddress] = useState("");
    const [newcontact, setnewcontact] = useState("");
    const [newemail, setemail] = useState("");
    const [newbirthday, setbirthday] = useState("");
    const [newpassword, setnewpassword] = useState("");
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, {fname: newfname, mname: newmname, lname: newlname, address: newaddress, contact: newcontact, email: newemail, birthday: newbirthday, password: newpassword});
    }

    useEffect(() => {
        //Read
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getUsers();
    }, [])

  return (
    <div className='App'>
        {/* <input placeholder='First Name: ' onChange={(event) => {setnewfname(event.target.value);}}></input>
        <input placeholder='Middle Name: ' onChange={(event) => {setnewmname(event.target.value);}}></input>
        <input placeholder='Last Name: ' onChange={(event) => {setnewlname(event.target.value);}}></input>
        <input placeholder='Address: ' onChange={(event) => {setnewaddress(event.target.value);}}></input>
        <input placeholder='Contact: ' onChange={(event) => {setnewcontact(event.target.value);}}></input>
        <input placeholder='Email: ' onChange={(event) => {setemail(event.target.value);}}></input>
        <input placeholder='Birthday: ' onChange={(event) => {setbirthday(event.target.value);}}></input>
        <input placeholder='Password: ' onChange={(event) => {setnewpassword(event.target.value);}}></input>
        <button onClick={createUser}>Create User</button> */}
        {users.map((user) => {
            return (
                <div>
                {" "}
                <h1>First Name: {user.fname}</h1>
                <h1>Middle Name: {user.mname}</h1>
                <h1>Last Name: {user.lname}</h1>
                </div>
            );
        })}
    </div>
  )
}

export default Temp;
