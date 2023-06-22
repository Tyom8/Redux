import { ADD_COMMENT, DELETE_COMMENT, OPEN_COMMENT } from "../types/CommentTypes"

const openComment = (payload) => {
    return {
        type:OPEN_COMMENT,
        payload
    }
};

const addComment = (payload) => {
    return {
        type:ADD_COMMENT,
        payload
    }
};

const deleteComment = (comId) => {
    return {
        type:DELETE_COMMENT,
        payload: comId
    }
};

export {openComment,addComment,deleteComment};