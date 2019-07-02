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
				projects: action.payload
			};
		}
		case EProjectActions.NewProject: {
			return {
				...state,
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

		case EProjectActions.LoadProfile: {
			return {
				...state
			};
		}
		case EProjectActions.LoadProfileSuccess: {
			return {
				...state,
				projects: action.payload
			};
		}

		default:
			return state;
	}
}
