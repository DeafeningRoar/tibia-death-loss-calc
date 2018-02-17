export default function(state = {}, action){
    switch(action.type){
        case "EXP_LOSS":
            return action.payload;
    }

    return state;
}