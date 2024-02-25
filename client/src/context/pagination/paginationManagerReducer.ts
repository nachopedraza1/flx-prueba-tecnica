import { UserState } from '@/context/pagination';
import { User } from '@/interfaces';


type UserActionType =
    | { type: '[User] FETCH_SUCCESS'; payload: User[] }
    | { type: '[User] SET_LOADING'; payload: boolean }
    | { type: '[User] SET_CURRENT_PAGE'; payload: number }
    | { type: '[User] SET_FILTER_STATUS'; payload: { status: "active" | "inactive" | "todos", query: string } };


export const paginationManagerReducer = (state: UserState, { type, payload }: UserActionType): UserState => {

    switch (type) {
        case '[User] FETCH_SUCCESS':
            return { ...state, usersInPage: payload }
        case '[User] SET_LOADING':
            return { ...state, isLoading: payload };
        case '[User] SET_CURRENT_PAGE':
            return { ...state, currentPage: payload };
        case '[User] SET_FILTER_STATUS':
            return { ...state, filters: { query: payload.query, status: payload.status }, currentPage: 1 };
        default:
            return state;
    }
}

