import { useCallback, useState } from "react";
import com from "./photos/com.png";
import hearth from "./photos/hearth1.png";
import hearth2 from "./photos/hearthh2-removebg-preview.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CommentActions } from "../../store/actions";

export default ({post,img}) => {
    let postId = 0;
    const textColor = useSelector(state=>state.changeColor);
    const dispatch = useDispatch();
    const [boolean, setBooolean] = useState(true);

    const doubleClick = useCallback(() => {
        setBooolean(true)
        setTimeout(() => {
            setBooolean(false)
        }, 1);
    }, [boolean])

    const hearthClick = useCallback(()=> {
        setBooolean(!boolean)
    }, [boolean])

    const comFn = useCallback(() => {
        dispatch(CommentActions.openComment({
            postTitle: post.title,
            postBody: post.body,
            img,
        }))
    },[post,img])
    return (
        <div key={post.id} className="Post-Div" style={{
            backgroundImage: `url(${img})`
        }} onDoubleClick={doubleClick}>
            <h1 style={{
                color: textColor
            }}>{post.title}</h1>
            <span className="span" style={{
                color: textColor
            }}>{post.body}</span>
            {postId+1}
            {console.log(postId)}
            <div className="panel">
                <img alt="hearth" src={boolean ? hearth : hearth2}
                    className={boolean ? 'hearth' : 'hearth2'}
                    onClick={hearthClick}></img>
                <Link to={"/comment"}><img alt="com" src={com} className="com" onClick={comFn}></img></Link>
            </div>
        </div>
    )
}