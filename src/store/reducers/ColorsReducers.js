import { ColorTypes } from "../types";

function BackgroundReducers (state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case ColorTypes.CHANGE_COLOR:
            return payload
    }
    return state;
}

function ColorReducers (state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case ColorTypes.TEXT_COLOR:
            return payload
    }
    return state;
}

export {BackgroundReducers,ColorReducers}