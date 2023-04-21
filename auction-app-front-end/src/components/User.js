
import '../css/SignUp.css';
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import SignUp from './SignUp.js'
import SignIn from './SignIn.js'


function User(props) {
  const [show, setShow] = useState(true);

  return (
    <div>
      { show?
        <SignIn setCurrUser={props.setCurrUser} setShow={setShow}/>
        :
        <SignUp setCurrUser={props.setCurrUser}  setShow={setShow} />
      }
    </div>
  );
}

export default User;




