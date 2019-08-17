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
				selectedProject: action.payload,
			};
		}
		case EProjectActions.GetSelectedProjectFromRouteSuccess: {
			return {
				...state,
				selectedProject: action.payload,
				newProject: null
			};
		}
		case EProjectActions.NewProject: {
			return {
				...state,
				selectedProject: null,
				newProject: action.payload
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
				...state,
				newProject: action.payload
			};
		}
		case EProjectActions.SaveProjectSuccess: {
			return {
				...state,
				newProject: action.payload
			};
		}
		case EProjectActions.DeleteProject: {
			return {
				...state,
				selectedProject: null
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
				selectedProject: null,
				newProject: null
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
