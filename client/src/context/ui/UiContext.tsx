import { createContext } from 'react';
import { User } from '@/interfaces';


interface ContextProps {
    showModal: boolean;
    typeModal?: "editUser" | "deleteUser" | "addUser";
    selectedUser?: User;

    handleToggleModal: (typeModal?: "editUser" | "deleteUser" | "addUser", user?: User) => void
}


export const UiContext = createContext({} as ContextProps);