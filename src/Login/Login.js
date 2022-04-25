import { useState } from "react";
import template from '../Common/template.png'
import './login.css'
import {login_api} from "../Common/api";



function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function submitName(e) {
        e.preventDefault();
        login_api({username, password})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="wrapper">
            <div className="logo"><img src={template} alt="logo"/></div>
            <div className="name"> IEMDB</div>
            <form>
                <div className="form-field d-flex"><span className="far fa-user"></span> <input onChange={e => setUsername(e.target.value)}
                                                                                                type="text"
                                                                                                name="userName"
                                                                                                id="userName"
                                                                                                placeholder="ایمیل"/>
                </div>
                <div className="form-field d-flex"><span className="fas fa-key"></span> <input onChange={e => setPassword(e.target.value)}
                                                                                               type="password"
                                                                                               name="password" id="pwd"
                                                                                               placeholder="رمز عبور"/>
                </div>
                <button className="btn mt-3" onClick={e => submitName(e)}>ورود</button>
            </form>
        </div>
    )
}



export default Login;