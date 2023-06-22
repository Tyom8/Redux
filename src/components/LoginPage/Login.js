import { useCallback, useEffect, useRef, useState } from "react"
import { API, setOutToken } from "../../services/Api";
import { useNavigate } from "react-router";
import "./Login.css";

export default () => {
    const token = localStorage.getItem("token");
    useEffect(()=>{
        if(token) {
            navigate("/");
            setOutToken(token)
        }
    },[])

    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const loginRef = useRef();
    const passRef = useRef();

    const loginFn = useCallback((event) => {
        event.preventDefault();
        const login = loginRef.current.value;
        const password = passRef.current.value;
        API.post("/login/", {
            "email": login,
            "password": password
        })
            .then((res) => {
                if (res.data.access) {
                    localStorage.setItem("userName", res.data.user_detail.user.first_name);
                    localStorage.setItem("userLastName", res.data.user_detail.user.last_name);
                    localStorage.setItem("token", res.data.access);
                    setOutToken(res.data.access);
                    navigate("/")
                }
            })
            .catch((error) => {
                setErr(error.response.data.message);
            })
    }, [loginRef, passRef])

    return (
        <div className="login-Div">
            <div className="Form-Div">
                <form className="Form" onSubmit={loginFn}>
                    <h1 className="h1">Instagram</h1>
                    <label>Login</label>
                    <input ref={loginRef} type="email" className="input"></input>
                    <label>Password</label>
                    <input ref={passRef} type="password" className="input"></input>
                    <button className="Button" type="submit">Login</button>
                    <span>{err}</span>
                </form>
            </div>
        </div>
    )
}