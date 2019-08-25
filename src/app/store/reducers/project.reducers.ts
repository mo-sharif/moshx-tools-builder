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
		case EProjectActions.GetProjectsSuccess: {
			return {
				...state,
				projects: action.payload
			};
		}
		case EProjectActions.GetProjectSuccess: {
			return {
				...state,
				selectProject: action.payload,
			};
		}
		case EProjectActions.GetSelectedProjectFromRouteSuccess: {
			return {
				...state,
				selectProject: action.payload,
			};
		}
		case EProjectActions.NewProject: {
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

		case EProjectActions.GetProfileFromRoute: {
			return {
				...state
			};
		}
		case EProjectActions.GetProfileFromRouteSuccess: {
			return {
				...state,
				projects: action.payload,
				selectProject: null
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

		default:
			return state;
	}
}
