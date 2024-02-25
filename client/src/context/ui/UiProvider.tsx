import { FC, ReactNode, useReducer } from 'react';
import { UiContext, uiReducer } from '@/context/ui';
import { User } from '@/interfaces';

export interface UiState {
    showModal: boolean;
    typeModal?: "editUser" | "deleteUser" | "addUser";
    selectedUser?: User;
}

const Ui_INITIAL_STATE: UiState = {
    showModal: false,
    typeModal: undefined,
    selectedUser: undefined
}

export const UiProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

    const handleToggleModal = (typeModal?: "editUser" | "deleteUser" | "addUser", user?: User) => {
        dispatch({ type: "[Ui] - TOGGLE_MODAL", payload: { typeModal, user } });
    }

    return (
        <UiContext.Provider value={{
            ...state,
            handleToggleModal
        }}>
            {children}
        </UiContext.Provider>
    )
};