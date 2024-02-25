import { Breadcrumb } from 'antd';
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb';

interface Props {
    items: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
}

export const Breadcrumbs: React.FC<Props> = ({ items }) => {
    return (
        <Breadcrumb
            items={items}
        />
    )
}
