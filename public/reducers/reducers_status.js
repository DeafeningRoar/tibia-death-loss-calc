
const initialState = {
    level: 8,
    vocation: 'knight',
    promotion: false
}

export default function(state = initialState, action){
    switch(action.type){
        case "LEVEL":
            return {...state, level: action.payload}
        case "VOCATION":
            return {...state, vocation: action.payload}
        case "PROMOTION":
            return {...state, promotion: action.payload}
    }

    return state;
}