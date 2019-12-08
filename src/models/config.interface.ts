export interface IConfig {
  adminName?: string;
  permissions?: string[];
  siteName?: string;
  copyright?: string;
  isCollapsed?:boolean;
  settings?: ISettings
}

export interface ISettings {
  containers: {}
}
