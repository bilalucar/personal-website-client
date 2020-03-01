import { FETCH_POSTS_ERROR, FETCH_POSTS_START, PostActionTypes, PostState, RECEIVE_POST } from './types';

const initialState: PostState = {
    fetching: false,
    fetched: false,
    posts: [],
    error: null
};

export function rootReducer(
    state = initialState,
    action: PostActionTypes
): any {
    switch (action.type) {
        case FETCH_POSTS_START:
            return {
                ...state,
                fetching: true
            };
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case RECEIVE_POST:
            return {
                ...state,
                fetching: false,
                fetched: true,
                posts: action.payload
            };
        default:
            return state;
    }
}
