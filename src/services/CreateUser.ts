// To create: name, email, password

interface TechObject {
  title: string;
  experience: number;
}

interface CreaetUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function createUser({ name, email, password }: CreaetUserData) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}
