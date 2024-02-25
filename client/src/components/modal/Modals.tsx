import React, { useContext } from 'react';

import { UiContext } from '@/context/ui';
import { CreateAndEditUser, DeleteUser } from '@/components/modal';

export const Modals: React.FC = () => {

    const { typeModal } = useContext(UiContext);

    return (
        <>
            {typeModal === "deleteUser" && <DeleteUser />}
            {typeModal === "addUser" && <CreateAndEditUser />}
            {typeModal === "editUser" && <CreateAndEditUser />}
        </>
    )
}
