import { FC, ReactNode, useEffect, useReducer } from 'react';
import axios from 'axios';

import { PaginationManagerContext, paginationManagerReducer } from '@/context/pagination';
import { User } from '@/interfaces';

export interface UserState {
    usersInPage: User[];
    isLoading: boolean;
    currentPage: number;
    filters: {
        status: "active" | "inactive" | "todos";
        query: string;
    }
}

const User_INITIAL_STATE: UserState = {
    usersInPage: [],
    isLoading: true,
    currentPage: 1,
    filters: {
        status: "todos",
        query: ""
    }
}


export const PaginationManagerProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [state, dispatch] = useReducer(paginationManagerReducer, User_INITIAL_STATE);
    const { query, status } = state.filters;

    const fetchData = async () => {

        let url = `http://localhost:4000/users?_page=${state.currentPage}&_sort=updatedAt&_order=desc`;
        if (status !== "todos") { url += `&status=${status}` };
        if (query !== "") { url += `&q=${query}` };

        try {
            dispatch({ type: '[User] SET_LOADING', payload: true });
            const { data } = await axios.get(url);
            dispatch({ type: '[User] FETCH_SUCCESS', payload: data });
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => { dispatch({ type: '[User] SET_LOADING', payload: false }) }, 1000);
        }
    };


    const handleChangePage = (page: number) => {
        dispatch({ type: '[User] SET_CURRENT_PAGE', payload: page })
    };


    const handleChangeFilter = (status: "active" | "inactive" | "todos", query: string) => {
        dispatch({ type: '[User] SET_FILTER_STATUS', payload: { status, query } })
    };

    useEffect(() => {
        fetchData();
    }, [state.currentPage, state.filters]);

    return (
        <PaginationManagerContext.Provider value={{
            ...state,
            fetchData,
            handleChangePage,
            handleChangeFilter
        }}>
            {children}
        </PaginationManagerContext.Provider >
    )
};