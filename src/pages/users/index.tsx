import { Button, Table } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PublicLayout } from "../../components/PublicLayout";
import { User } from "../../types";

export default function Users() {
    const [users, setUsers] = useState<User[]>([])
    const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },]
    useEffect(() => {
        fetch("/api/Users")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return <PublicLayout>
        <Table dataSource={users} columns={columns} />
    </PublicLayout>
}
