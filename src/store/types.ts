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
    authorInfo: AuthorInfoModel;
    categoryId?: string;
    created: DateObjectModel;
    featuredImage: string;
    title: string;
    summary: string;
    content: string;
    url: string;
    htmlTitle: string;
    metaDescription: string;
    tags: string[];
}

export interface AuthorInfoModel {
    username: string;
    name: string;
    surname: string;
    fullName: string;
    email: string;
    bio?: string;
    avatar: string;
    created: Date;
    updated?: Date;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
    website?: string;
}

export interface DateObjectModel {
    _seconds: number;
    _nanoseconds: number;
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
