import '../css/NavBar.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignOut(props) {

  const API_URL = "http://localhost:3000/logout"
  const navigate = useNavigate();

  const handleRemoveUser = () => {
    props.setCurrUser(null)
  };

  const handleClick=e=>{
    e.preventDefault()
    axios({
      method: 'delete',
      url: API_URL,
      headers: {
        "content-type": "application/json",
        "authorization": localStorage.getItem("token")
      }
    }).then((resp) => {
      localStorage.removeItem("token")
      handleRemoveUser();
      navigate('/');
    })

  }
  return (
  <input type="button" value='Logout' onClick={handleClick} className="tab active" activeClassName="is-active"/>
  );
}

export default SignOut;
