import { Rule } from "antd/es/form";

export interface AddUserFieldConfig {
    name: string;
    label: string;
    placeholder: string,
    rules: Rule[];
    inputType: 'input' | 'select' | 'inputNumber';
    options?: { value: string; label: string }[];
}

export const addUserFields: AddUserFieldConfig[] = [
    { name: 'username', label: 'Usuario', placeholder: "johndoe1905", rules: [{ required: true, message: 'Nombre de usuario requerido' }], inputType: 'input' },
    { name: 'email', label: 'Email', placeholder: "johndoe@gmail.com", rules: [{ required: true, message: 'Email de usuario requerido' }, { type: 'email', message: 'Por favor, introduce un correo electrónico válido' }], inputType: 'input' },
    { name: 'name', label: 'Nombre', placeholder: "John", rules: [{ required: true, message: 'Nombre requerido' }], inputType: 'input' },
    { name: 'lastname', label: 'Apellido', placeholder: "Doe", rules: [{ required: true, message: 'Apellido requerido' }], inputType: 'input' },
    {
        name: 'status', label: 'Estado', placeholder: "Seleccione un estado", rules: [{ required: true, message: 'Estado requerido' }], inputType: 'select',
        options: [
            { value: 'active', label: 'Activo' },
            { value: 'inactive', label: 'Inactivo' }
        ]
    },
    { name: 'age', label: 'Edad', placeholder: "68", rules: [{ required: true, message: 'Edad requerida' }], inputType: 'inputNumber' },
];
