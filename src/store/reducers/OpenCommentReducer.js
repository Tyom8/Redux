import { CommentTypes } from "../types";

export default (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CommentTypes.OPEN_COMMENT:
            return payload
    }
    return state;
}