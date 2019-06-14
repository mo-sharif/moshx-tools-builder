// Todo
export interface IUser {
  uid: string,
  displayName: string,
  error?: string,
  id?: number,
  name?: string,
  email?: string;
  photoURL?: string;
  cardNumber?: string,
  cardType?: string,
}

export class User implements IUser { 
  constructor(public uid: string, public displayName: string) {}
}