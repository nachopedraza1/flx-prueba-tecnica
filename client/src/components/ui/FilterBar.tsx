import { useContext } from "react";
import { Select, Input, Row, Col, Button } from "antd";

import { UiContext } from "@/context/ui";
import { PaginationManagerContext } from "@/context/pagination";


export const FilterBar: React.FC = () => {

    const { handleChangeFilter, filters } = useContext(PaginationManagerContext);
    const { handleToggleModal } = useContext(UiContext);

    const handleSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        handleChangeFilter(filters.status, target.value);
    };

    const handleStatusChange = (value: "active" | "inactive" | "todos") => {
        handleChangeFilter(value, filters.query);
    };

    return (
        <Row gutter={15} justify='space-between' style={{ marginBottom: 20 }}>

            <Col>
                <Input.Search
                    placeholder="Buscar usuarios"
                    style={{ width: 290, marginRight: 15 }}
                    name="search"
                    onChange={handleSearchChange}
                />

                <Select
                    placeholder="Filtrar por estado"
                    className="select-after"
                    onChange={handleStatusChange}
                    style={{ width: 210 }}
                >
                    <Select.Option value="todos"> Todos  </Select.Option>
                    <Select.Option value="active"> Activo  </Select.Option>
                    <Select.Option value="inactive"> Inactivo  </Select.Option>
                </Select>
            </Col>

            <Col>
                <Button type="primary" onClick={() => handleToggleModal("addUser")}>Agregar usuario</Button>
            </Col>
        </Row>
    )
}
