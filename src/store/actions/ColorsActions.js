import { CHANGE_COLOR, TEXT_COLOR } from "../types/ColorTypes";

const changeColor = (payload) => {
    return {
        type:CHANGE_COLOR,
        payload
    }
}

const textColor = (payload) => {
    return {
        type:TEXT_COLOR,
        payload
    }
}

export {changeColor,textColor};