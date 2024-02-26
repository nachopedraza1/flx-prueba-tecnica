import { useContext } from 'react';
import { Button, Space, Table, Tag } from 'antd';

import { UiContext } from '@/context/ui';
import { PaginationManagerContext } from '@/context/pagination';

import { loadingUsers } from '@/utils/loadingUsers';
import { Modals } from '@/components/modal';
import { User } from '@/interfaces';

export const UsersTable: React.FC = () => {

    const { currentPage, usersInPage, isLoading, handleChangePage } = useContext(PaginationManagerContext);
    const { handleToggleModal } = useContext(UiContext);

    const columns = [
        {
            title: 'Usuario',
            dataIndex: 'username',
            key: 'username',
            width: '25%',
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            width: '25%',
        },
        {
            title: 'Apellido',
            dataIndex: 'lastname',
            key: 'lastname',
            width: '25%',
        },
        {
            title: 'Estado',
            dataIndex: 'status',
            key: 'status',
            render: (status: "active" | "inactive") => (
                <Tag
                    style={{ textTransform: 'capitalize' }}
                    color={status === "active" ? "green" : "red"}
                >
                    {status}
                </Tag>
            )
        },
        {
            title: 'Acciones',
            key: 'action',
            render: (_: any, user: User) => (
                <Space size="middle">
                    <Button type="link" onClick={() => handleToggleModal("editUser", user)}>Editar</Button>
                    <Button type="link" onClick={() => handleToggleModal("deleteUser", user)}> Eliminar</Button>
                </Space >
            ),
        },
    ]

    return (
        <>
            <Table
                columns={columns}
                loading={isLoading}
                dataSource={isLoading ? loadingUsers : usersInPage.map(user => ({ ...user, key: user.id }))}
                pagination={{
                    pageSize: 10,
                    current: currentPage,
                    total:  50, // Lo ideal seria que la api nos envie un total de elementos y la currentPage
                    onChange: handleChangePage
                }}
            />

            <Modals />
        </>
    );
};