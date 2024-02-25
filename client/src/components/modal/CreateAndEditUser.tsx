import { useContext } from "react";
import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";

import { useCrud } from "@/hooks";
import { addUserFields } from "@/utils";
import { UiContext } from "@/context/ui";
import { ModalLayout } from "@/components/layouts";

export const CreateAndEditUser: React.FC = () => {

    const { selectedUser } = useContext(UiContext);
    const { createUser, updateUser, isLoading } = useCrud();

    return (
        <ModalLayout cancelClose={isLoading} title={selectedUser ? "Editar usuario" : "Agregar usuario"}>
            <Form
                layout="vertical"
                name="CreateAndEdit"
                initialValues={selectedUser ? selectedUser : {}}
                autoComplete="off"
                onFinish={selectedUser ? updateUser : createUser}
            >
                <Row gutter={15} style={{ marginTop: 25 }}>
                    {addUserFields.map((field, index) => (
                        <Col span={12} key={index}>
                            <Form.Item
                                name={field.name}
                                label={field.label}
                                rules={field.rules}
                            >
                                {field.inputType === 'input' && <Input placeholder={field.placeholder} />}
                                {field.inputType === 'inputNumber' && <InputNumber min={1} max={100} placeholder={field.placeholder} style={{ width: '100%' }} />}
                                {field.inputType === 'select' && (
                                    <Select placeholder={field.placeholder}>
                                        {field.options!.map((option, idx) => (
                                            <Select.Option key={idx} value={option.value}>{option.label}</Select.Option>
                                        ))}
                                    </Select>
                                )}
                            </Form.Item>
                        </Col>
                    ))}
                </Row>

                <Row justify="end">
                    <Col>
                        <Button type="primary" htmlType="submit" loading={isLoading}>
                            {selectedUser ? "Editar usuario" : "Agregar usuario"}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </ModalLayout>
    )
}

