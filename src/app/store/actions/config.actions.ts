import { Action } from "@ngrx/store";

import { IConfig } from "../../models/config.interface";

export enum EConfigActions {
	GetConfig = "[Config] Get Config",
	GetConfigSuccess = "[Config] Get Config Success",
	OpenDrawer = "[Drawer] Open Drawer",
	CloseDrawer = "[Drawer] Close Drawer",
	DrawerStatus = "[Drawer] Drawer Collapsed Status",
	NavigateToRoute = "[Route] Navigate To Route"
}

export class GetConfig implements Action {
	public readonly type = EConfigActions.GetConfig;
}

export class GetConfigSuccess implements Action {
	public readonly type = EConfigActions.GetConfigSuccess;
	constructor(public payload?: IConfig) {}
}

export class OpenDrawer implements Action {
	public readonly type = EConfigActions.OpenDrawer;
}
export class CloseDrawer implements Action {
	public readonly type = EConfigActions.CloseDrawer;
}

export class DrawerStatus implements Action {
	public readonly type = EConfigActions.DrawerStatus;
	constructor(public payload?: IConfig) {}
}

export class NavigateToRoute implements Action {
	public readonly type = EConfigActions.NavigateToRoute;
	constructor(public payload: string) {}
}
export type ConfigActions =
	| GetConfig
	| GetConfigSuccess
	| OpenDrawer
	| CloseDrawer
	| DrawerStatus
	| NavigateToRoute;
