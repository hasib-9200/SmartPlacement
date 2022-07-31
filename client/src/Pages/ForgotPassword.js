import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

const ForgotPassword = () => {
    const formStyle = {
        position: 'absolute',
        width: '500px',
        height: '250px',
        padding: '2rem',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        top: '4rem',
        right: '35%',
      };

      const formStyleSearch = {
        position: 'absolute',
        width: '500px',
        height: '300px',
        padding: '2rem',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        top: '4rem',
        right: '35%',
      };

      let history = useHistory();
    const cancle =()=>{
        history.push("/")
    }


    const [username, setUserName] = useState([]);
    const [password, setPassword] = useState([]);
    const [error, setError] = useState(false);
    
//   const loginUser=(event)=>{
//     event.preventDefault();
//     Axios.post("http://localhost:3001/finduser",{
//       username:username
//     }).then((response)=>{
//       if(response.data.message){
//         console.log(response.data.message);
//         setError(false);
//       } else{
//           setError(true);
//       }
//     });
// };

const loginUser=(event)=>{
  event.preventDefault();
  Axios.post("/finduser",{
    username:username
  }).then((response)=>{
    if(response.data.message){
      console.log(response.data.message);
      setError(false);
    } else{
        setError(true);
    }
  });
};

const changePassword=(event)=>{
  event.preventDefault();
  Axios.post("/changePassword",{
    username:username,
    password:password
  }).then((response)=>{
    if(response.data.message){
      console.log(response.data.message);
      setError(false);
    } else{
        setError(true);
    }
  });
};

const renderForm = (
    <div className="form" style={formStyle}>
    <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{fontWeight:'bold', fontSize:'20px'}}>Find Your Account</Form.Label>
            <br/>
            <p>Please enter the email you want to search.</p>
            <Form.Control type="email" placeholder="Email" onChange={(e)=>{
          setUserName(e.target.value);}}/>
        </Form.Group>
        <div >
          {!error?"":"User not Found"}
        </div>
        <Button variant="primary" onClick={cancle}>
            Cancle
        </Button> {' '}
        <Button variant="primary" type="submit">
            Search
        </Button>
    </Form>
</div>
);

const renderSearch = (
    <div className="form" style={formStyleSearch}>
    <Form onSubmit={changePassword}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{fontWeight:'bold', fontSize:'20px'}}>Find Your Account</Form.Label>
            <br/>
            <p>Please enter your new password</p>
            <Form.Control type="text" placeholder="New Password"  onChange={(e)=>{
          setPassword(e.target.value);}}/>
            <Form.Control style={{marginTop:"10px"}} type="text" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" onClick={cancle}>
            Cancle
        </Button> {' '}
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
</div>

);


  return (
    <div className="app">
        <div>
            {!error ?renderForm:renderSearch}
        </div>
    </div>

  )
}

export default ForgotPassword
