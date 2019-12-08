import { EPostActions } from "../actions/post.actions";
import { PostActions } from "../actions/post.actions";
import { initialPostState, IPostState } from "../state/post.state";

export function postReducers (
  state = initialPostState,
  action: PostActions
): IPostState {
  switch (action.type) {
    case EPostActions.GetPostsSuccess: {
      return {
        ...state,
        posts: action.payload
      };
    }
    case EPostActions.GetPostSuccess: {
      return {
        ...state,
        selectedPost: action.payload
      };
    }

    default:
      return state;
  }
};
