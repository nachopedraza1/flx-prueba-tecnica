import { UiState } from '@/context/ui';
import { User } from '@/interfaces';


type UiActionType =
    | { type: '[Ui] - TOGGLE_MODAL', payload: { typeModal?: "editUser" | "deleteUser" | "addUser", user?: User } }


export const uiReducer = (state: UiState, { type, payload }: UiActionType): UiState => {

    switch (type) {
        case '[Ui] - TOGGLE_MODAL':
            return {
                ...state,
                showModal: !state.showModal,
                typeModal: payload.typeModal,
                selectedUser: payload.user
            }

        default:
            return state;
    }

}