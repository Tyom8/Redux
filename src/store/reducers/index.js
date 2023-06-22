import { combineReducers } from "redux";
import OpenCommentReducer from "./OpenCommentReducer";
import CommentReducer from "./CommentReducer";
import { BackgroundReducers, ColorReducers } from "./ColorsReducers";

const root = combineReducers({
    openCom:OpenCommentReducer,
    addCom:CommentReducer,
    deleteCom:CommentReducer,
    changeBackground:BackgroundReducers,
    changeColor:ColorReducers
});

export default root;