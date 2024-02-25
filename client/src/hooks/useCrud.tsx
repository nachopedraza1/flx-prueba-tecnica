import { useContext, useState } from 'react';
import axios from "axios";

import { PaginationManagerContext } from '@/context/pagination';
import { UiContext } from "@/context/ui";
import { User } from '@/interfaces';

const API_URL = 'http://localhost:4000/users/';

export const useCrud = () => {

    const { handleToggleModal, selectedUser } = useContext(UiContext);
    const { fetchData: refreshData } = useContext(PaginationManagerContext);
    const [isLoading, setisLoading] = useState(false);


    const handleOperation = async (operation: 'create' | 'delete' | 'update', user?: User) => {
        try {
            setisLoading(true);
            switch (operation) {
                case 'create':
                    await axios.post(API_URL, { ...user, id: crypto.randomUUID(), updatedAt: new Date() });
                    break;
                case 'update':
                    await axios.put(`${API_URL}${selectedUser?.id}`, { ...user, updatedAt: new Date() });
                    break;
                case 'delete':
                    await axios.delete(`${API_URL}${selectedUser?.id}`);
                    break;
                default:
                    throw new Error('Operación no válida');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setTimeout(() => {
                refreshData();
                setisLoading(false);
                handleToggleModal();
            }, 1000);
        }
    };

    const createUser = async (user: User) => {
        await handleOperation('create', user);
    };

    const updateUser = async (user: User) => {
        await handleOperation('update', user);
    };

    const deleteUser = async () => {
        await handleOperation('delete');
    };

    return {
        isLoading,
        updateUser,
        createUser,
        deleteUser
    }
}
