
export interface User {
    id:         number;
    username:   string;
    name:       string;
    lastname:   string;
    email:      string;
    status:     "active" | "inactive" | string;
    age:        number;
    createdAt?:  Date
    key?:       number;
}