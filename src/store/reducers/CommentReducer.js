import { CommentTypes } from "../types";

export default (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CommentTypes.ADD_COMMENT:
            return [...state,payload]
        case CommentTypes.DELETE_COMMENT:
            const tmp = [...state];
            const index = tmp.findIndex((element) => {
                return element.id === payload
            })
            if(index === -1) {
                return state
            } else {
                tmp.splice(index,1);
                return tmp
            }
    }
    return state;
}