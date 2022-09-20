const GREETING = "GREETING";

export const greeting = ({ type: GREETING });

const greetingReducer = (state = [], action) => {
    switch (action.type) {
        case GREETING:
            return [...state];
        
        default: return state;
    }
}

export default greetingReducer;
