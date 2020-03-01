export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const RECEIVE_POST = 'RECEIVE_POST';

export interface PostState {
    posts: Post[];
    fetching: boolean;
    fetched: boolean;
    error: object | null
}

export interface Post {
    id: string;
    title: string;
    timestamp: number;
    content: any;
    author: string;
    imageUrl: string;
    url: string;
    summary: string;
}

export interface PostItem {
    item: Post
}

export interface fetchPostsStartAction {
    type: typeof FETCH_POSTS_START;
}

export interface fetchPostsErrorAction {
    type: typeof FETCH_POSTS_ERROR;
    payload: object;
}

export interface receivePostAction {
    type: typeof RECEIVE_POST;
    payload: Post[];
}

export type PostActionTypes = fetchPostsErrorAction | fetchPostsStartAction | receivePostAction;
