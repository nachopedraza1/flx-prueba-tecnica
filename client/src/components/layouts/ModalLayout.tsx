import React, { ReactNode, useContext } from 'react';
import { Modal, Typography } from 'antd';

import { UiContext } from '@/context/ui';

interface Props {
    children: ReactNode;
    cancelClose: boolean;
    title: string;
}

export const ModalLayout: React.FC<Props> = ({ cancelClose, children, title }) => {

    const { handleToggleModal, showModal } = useContext(UiContext);

    const handleCancel = () => {
        handleToggleModal()
    };

    return (
        <Modal
            title={<Typography.Title level={4}> {title} </Typography.Title>}
            open={showModal}
            onCancel={handleCancel}
            footer={null}
            keyboard={!cancelClose}
            maskClosable={!cancelClose}
            destroyOnClose
        >
            {children}
        </Modal>
    )
}
