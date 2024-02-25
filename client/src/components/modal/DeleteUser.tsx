import { useContext } from "react"
import { Button, Col, Row, Typography } from "antd";
import { UiContext } from "@/context/ui";
import { useCrud } from "@/hooks";
import { ModalLayout } from "../layouts";


export const DeleteUser: React.FC = () => {

    const { selectedUser, handleToggleModal } = useContext(UiContext);
    const { deleteUser, isLoading } = useCrud();

    return (
        <ModalLayout cancelClose={isLoading} title="Eliminar usuario">
            <Typography.Title level={5} style={{ marginTop: 30 }}>
                ¿Esta seguro que desea eliminar al usuario
                <Typography.Text type="danger"> @{selectedUser?.username} </Typography.Text> ?
            </Typography.Title>
            <Row gutter={10} justify="end" style={{ marginTop: 30 }}>
                <Col>
                    <Button type="default" disabled={isLoading} onClick={() => handleToggleModal()}>
                        Cancelar
                    </Button>
                </Col>
                <Col>
                    <Button type="primary" danger onClick={deleteUser} loading={isLoading} >
                        Eliminar
                    </Button>
                </Col>
            </Row>
        </ModalLayout>
    )
}
