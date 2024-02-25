import { createContext } from 'react';
import { User } from '@/interfaces';


interface ContextProps {
    usersInPage: User[];
    isLoading: boolean;
    currentPage: number;
    filters: {
        status: "active" | "inactive" | "todos";
        query: string;
    }
    
    fetchData: () => Promise<void>
    handleChangePage: (page: number) => void;
    handleChangeFilter: (value: "active" | "inactive" | "todos", name: string) => void;
}


export const PaginationManagerContext = createContext({} as ContextProps);