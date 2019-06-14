import { IConfig } from "../../models/config.interface";
import { Configs } from "../../constants/configs";

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: {
    siteName: Configs.SITE_NAME,
    isCollapsed: Configs.IS_COLLAPSED,
    copyright: Configs.COPYRIGHT
  }
};
