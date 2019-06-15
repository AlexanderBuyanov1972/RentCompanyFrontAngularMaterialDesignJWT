export class User {
  name: string;
  lastName: string;
  position: string;
  email: string;
  password: string;


  constructor(name: string, lastName: string, position: string, email: string, password: string) {
    this.name = name;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.password = password;
  }
}
