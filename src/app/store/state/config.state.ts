import { IConfig } from "../../models/config.interface";
import { Configs } from "../../constants/configs";

export interface IConfigState {
	config: IConfig;
	isCollapsed: boolean;
}

export const initialConfigState: IConfigState = {
	config: {
		siteName: Configs.SITE_NAME,
    copyright: Configs.COPYRIGHT,
    isCollapsed: Configs.IS_COLLAPSED
	},
	isCollapsed: Configs.IS_COLLAPSED
};
