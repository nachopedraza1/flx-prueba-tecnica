import { Layout } from 'antd';
import { Breadcrumbs } from '@/components/ui';

const { Header, Content } = Layout;

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Layout>
            <Header>
                <img src='../flexxus-logo.png' width={153} height="auto" alt='Flexxus' />
            </Header>

            <Content>
                <Breadcrumbs items={[{ title: "Usuarios" }, { title: "Listado de usuarios" }]} />
                {children}
            </Content>
        </Layout>
    )
}
