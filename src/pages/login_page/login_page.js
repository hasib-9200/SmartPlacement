import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login_page.css"
import { useHistory } from 'react-router-dom';

function LoginPage({ login }) {
    const history = useHistory()

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    var handleEmail = (event) => {
        setEmail(event.target.value)
    }

    var handlePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className='container'>
            <div className="row justify-content-md-right" style={{ marginTop: window.innerHeight * 0.2 }}>

                <div className="col col-sm-12 col-md-8 col-lg-8">
                    <div className="slogan">
                        <div className="slogan-title">Smart Placement </div><br />
                        <div className="slogan-statement">We help you with all your placement needs. </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="card" style={{
                        padding: "35px", borderRadius: "15px", marginTop: "50px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}>
                        <form action='/home' onSubmit={async () => {
                            try {
                                await login(email, password)
                            } catch (error) {
                                console.log(error)
                            }
                        }}>
                            <div style={{ textAlign: "center", paddingBottom: "20px" }}>
                                <a style={{ fontSize: "30px" }}>Sign In</a>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input onChange={handleEmail} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="netid@mavs.uta.edu" />
                            </div>
                            <br />

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input onChange={handlePassword} type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <br />
                            <button style={{ width: "100%" }} type="submit" className="btn btn-primary">Login</button>
                            <br />
                            <br />
                        </form>
                    </div>
                </div>

            </div>
        </div >
    )
}


export default LoginPage