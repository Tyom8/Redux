import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../store/actions/CommentActions";
import OneComment from "./OneComment";

export default () => {
    const comRef = useRef();
    const dispatch = useDispatch();
    const coment = useSelector(state => state.addCom);
    let idComent = 0;

    const comAdd = useCallback((event) => {
        event.preventDefault()
        dispatch(addComment({
            com:comRef.current.value,
            id:idComent++
        }))
    }, [comRef])

    return (
        <div className="comment-Div">
            <div className="Add-Coment">
                {
                    coment.map((comik, index) => {
                        return <OneComment key={"com" + index} comik={comik}></OneComment>
                    })
                }
            </div>
            <div className="com-Input-Div">
                <form className="com-form">
                    <input ref={comRef} type="text" className="inputCom"
                        placeholder="Add Comment..."></input>
                    <button onClick={comAdd} className="com-button" type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}