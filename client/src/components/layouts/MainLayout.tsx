import { Layout } from 'antd';
import { Breadcrumbs } from '@/components/ui';
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb';

const { Header, Content } = Layout;

interface Props {
    routes: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
    children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children, routes }) => {
    return (
        <Layout>
            <Header>
                <img src='../flexxus-logo.png' width={153} height="auto" alt='Flexxus' />
            </Header>

            <Content>
                <Breadcrumbs items={routes} />
                {children}
            </Content>
        </Layout>
    )
}
