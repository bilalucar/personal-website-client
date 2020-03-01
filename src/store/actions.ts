import { FETCH_POSTS_ERROR, FETCH_POSTS_START, Post, PostActionTypes, RECEIVE_POST } from './types';
import { Action, ActionCreator } from 'redux';

export const fetchPostsStart: ActionCreator<Action> = (): PostActionTypes => {
    return {type: FETCH_POSTS_START};
};

export const fetchPostsError: ActionCreator<Action> = (payload: object): PostActionTypes => {
    return {type: FETCH_POSTS_ERROR, payload};
};

export const receivePost: any = (payload: Post[]): any => {
    return {type: RECEIVE_POST, payload};
};
