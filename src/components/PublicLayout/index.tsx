import { Layout, Menu } from "antd";
import { PropsWithChildren } from "react";
import { PublicHeader } from "../PublicHeader";
import { PublicMenu } from "../PublicMenu";

export function PublicLayout(props: PropsWithChildren) {
    const { Header, Content, Sider } = Layout;

    return <Layout>
        <PublicHeader />
        <Layout>
            <Sider width={200}>
                <PublicMenu />
            </Sider>
            <Layout style={{ padding: '24px' }}>
                <Content>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    </Layout>

}
