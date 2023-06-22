import { useEffect, useState } from "react";
import { PLACEHOLDER } from "../../services/JsonPlaceholder";
import Post from "./AllPosts";
import "./Main.css";
import { useNavigate } from "react-router";
import Header from "./Header";
import ColorsCustomize from "./ColorsCustomize";

export default () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [token,setToken] = useState(localStorage.getItem("token"));
    useEffect(() => {
        if (!token) {
            navigate("/login")
        } else {
            PLACEHOLDER.get("/posts").then((res) => { setPosts(res.data) })
        }
    }, [token])
    return (
        <>
            <Header setToken={setToken}></Header>
            <div className="Main-Div">
                <div className="left-Div">
                    <ColorsCustomize widthMain="50%"/>
                </div>
                <div className="posts">
                    {
                        <Post posts={posts} />
                    }
                </div>
                <div className="left-Div"></div>
            </div>
        </>
    )
};