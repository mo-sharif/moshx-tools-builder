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
}

export class User implements IUser {
	constructor(public uid: string, public displayName: string, public email: string, public photoURL?: string) {}
}
