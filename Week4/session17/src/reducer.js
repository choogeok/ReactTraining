import * as actions from './actionType';

const initState = {
    playerScore: [],
    posts: []
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actions.ADD_ITEM:
            console.log(action);
            return { ...state,playerScore: [...state.playerScore, action.payload] }
        case actions.REMOVE_ITEM:
            return { ...state, playerScore: state.playerScore.filter((info => info.id != action.payload))}
        case actions.GET_POSTS:
            console.log(action)
            return {...state,posts:action.payload.httpResponse.player}
            default:
            return state;
    }
}
export default reducer;