// Todo
export interface IUser {
  uid: string,
  displayName: string,
  loading?: boolean,
  error?: string,
  id?: number,
  name?: string,
  cardNumber?: string,
  cardType?: string,
}

/* export class User implements IUser { 
  constructor(public uid: string, public displayName: string) {}
} */