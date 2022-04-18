import axios from "axios";
import { Table } from 'antd';
import React, { useEffect, useState } from "react";
import { Title } from '../../common/components/title/title'

export const Goods = () => {
    const [goods, setGoods] = useState()
    useEffect(() => {
        axios.get('http://localhost:8088/api/goods')
            .then(res => {
                setGoods(res.data)
            })
    }, [])

    const columns = [
        {
            title: 'Goods Name',
            dataIndex: 'goods_name',
            key: 'goods_name',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Sold',
            dataIndex: 'sold',
            key: 'sold'
        },
        {
            title: 'Left',
            dataIndex: 'left',
            key: 'left',
        },
        {
            title: 'Seller',
            key: 'seller',
            dataIndex: 'seller',
        }
         
      ];


    return (
        <div>
            <Title text="User Table"/>
            <Table columns={columns} rowKey="goods_id" dataSource={goods} />
        </div>
    )
}