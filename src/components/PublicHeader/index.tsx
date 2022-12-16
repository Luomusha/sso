import { Layout, Menu } from "antd";

export function PublicHeader() {
    const { Header } = Layout;

    return <Header className="header">
        <div className="logo">LOGO</div>
        <Menu theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={[{
                key: `nav1`,
                label: `nav1`,
            }, {
                key: `nav2`,
                label: `nav2`,
            },]} />
    </Header>
}
