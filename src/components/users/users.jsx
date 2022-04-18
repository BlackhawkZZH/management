import axios from "axios";
import { Table } from 'antd';
import React, { useEffect, useState } from "react";
import { Title } from '../../common/components/title/title'

export const Users = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        axios.get('http://localhost:8088/api/users')
            .then(res => {
                setUsers(res.data)
            })
    }, [])

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'IP Address',
            dataIndex: 'ip_address',
            key: 'ip_address',
        },
        {
            title: 'Gender',
            key: 'gender',
            dataIndex: 'gender',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
        }
         
      ];


    return (
        <div>
            <Title text="User Table"/>
            <Table columns={columns} rowKey="id" dataSource={users} />
        </div>
    )
}