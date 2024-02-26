import { User } from '../interfaces/user';

export const loadingUsers: User[] = [...Array(10)].map((_user, index) => ({
    id: index,
    key: index,
    username: "cargando",
    name: "cargando",
    lastname: "cargando",
    email: "cargando",
    status: "cargando",
    age: 1,
}));