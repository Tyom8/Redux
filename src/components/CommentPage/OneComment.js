import { useCallback } from "react";
import { deleteComment } from "../../store/actions/CommentActions";
import comImg from "./photos/com-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";

export default ({ comik }) => {
    const textColor = useSelector(state=>state.changeColor);
    const userName = localStorage.getItem("userName");
    const userLastName = localStorage.getItem("userLastName");
    const dispatch = useDispatch();

    const deleteCom = useCallback((id) => {
        dispatch(deleteComment(id))
    })
    return (
        <div className="one-com">
            <div className="Com">
                <h4 style={{
                color: textColor
            }}>{`${userName} ${userLastName}`}</h4>
                <span style={{
                color: textColor
            }}>{comik.com}</span>
            </div>
            <div className="comImg-Div">
                <img src={comImg} className="comImg" onClick={() => {
                    deleteCom(comik.id)
                }
                }></img>
            </div>
        </div>
    )
}