import { Menu } from "antd";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

export function PublicMenu() {

    return <Menu mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={[{
            key: `User`,
            icon: <UserOutlined />,
            label: `用户管理`,
            children: [{
                key: `UserList`,
                label: `用户列表`,
            }, {
                key: `UserNew`,
                label: `新增用户`,
            }]
        }, {
            key: `Notification`,
            icon: <NotificationOutlined />,
            label: `消息管理`,
        }, {
            key: `Token管理`,
            icon: <LaptopOutlined />,
            label: `Token管理`,
        }]} />
}