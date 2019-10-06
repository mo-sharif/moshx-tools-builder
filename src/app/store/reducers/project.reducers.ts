import { EProjectActions } from "../../store/actions/project.actions";
import { ProjectActions } from "../actions/project.actions";
import { initialProjectState, IProjectState } from "../state/project.state";

export function projectReducers(
	state = initialProjectState,
	action: ProjectActions
): IProjectState {
	switch (action.type) {
		case EProjectActions.GetProject: {
			return {
				...state
			};
		}
		case EProjectActions.GetProjects: {
			return {
				...state
			};
		}
		case EProjectActions.GetProjectSuccess: {
			return {
				...state,
				selectProject: action.payload
			};
		}
		case EProjectActions.GetSelectedProjectSuccess: {
			return {
				...state,
				selectProject: action.payload
			};
		}
		case EProjectActions.NewProject: {
			return {
				...state,
				selectProject: action.payload,
				UiComponents: action.payload.UiComponents
			};
		}
		case EProjectActions.NewProjectSuccess: {
			return {
				...state,
				selectProject: action.payload,
				UiComponents: action.payload.UiComponents
			};
		}
		case EProjectActions.GetContainers: {
			return {
				...state,
				container: action.payload
			};
		}
		case EProjectActions.SaveProject: {
			return {
				...state
			};
		}
		case EProjectActions.SaveProjectSuccess: {
			return {
				...state,
				selectProject: action.payload
			};
		}
		case EProjectActions.UpdateProject: {
			return {
				...state,
				updateProject: action.payload
			};
		}
		case EProjectActions.UpdateProjectSuccess: {
			return {
				...state,
				selectProject: action.payload
			};
		}
		case EProjectActions.DeleteProject: {
			return {
				...state,
				selectProject: null
			};
		}
		case EProjectActions.DeleteProjectSuccess: {
			return {
				...state
			};
		}

		case EProjectActions.UpdateUiComponents: {
			return {
				...state
			};
		}
		case EProjectActions.UpdateUiComponentsSuccess: {
			return {
				...state,
				UiComponents: action.payload
			};
		}
		case EProjectActions.GetUserProjects: {
			return {
				...state
			};
		}
		case EProjectActions.GetUserProjectsSuccess: {
			return {
				...state,
				userProjects: action.payload
			};
		}

		default:
			return state;
	}
}
