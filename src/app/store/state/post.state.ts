import { IPost } from '../../models/post.interface';

export interface IPostState {
    posts: IPost[];
    selectedPost: IPost;
}

export const initialPostState: IPostState = {
    posts: null,
    selectedPost: null
}