// Todo
export interface IUser {
	uid: string;
	displayName: string;
	email: string;
	error?: string;
	id?: number;
	name?: string;
	photoURL?: string;
	city?: string;
	job?: string;
	profile?: string;
	profileSlug?: string;
	isAnonymous?: boolean;
}

export interface ILoginData { 
	email: string,
	password: string,
}
export interface IEmailSignUpData {
	email: string,
	password: string,
	displayName: string,
	profile: string,
}
export class User implements IUser {
	constructor(public uid: string, public displayName: string, public email: string, public photoURL?: string, public isAnonymous?: boolean) {}
}
