import React, { useEffect, useState } from 'react'
import { ICategory, IPropsCate } from '../../../interface/product';
import { Button, Space, Table,Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
const { Search } = Input;
const AdminCategory = (props: IPropsCate) => {
    const removeCategory = (id: string) => {
        props.onRemoveCate(id);
      }
      const [data, setData] = useState<ICategory[]>([]);
      const onSearch = (value: string) => {
        const searchProduct = props.category.filter((category) => category.name.toLowerCase().includes(value.toLowerCase()))
        setData(searchProduct);
    };
  useEffect(() => {
    setData(props.category);
  }, [props]);
      const columns: ColumnsType<ICategory> = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: (record) => 
          <Space wrap>
            <Button> <Link to={`/admin/categories/${record._id}/update`}>Update</Link> </Button>
            <Button type="primary" onClick={() => removeCategory(record._id)}>Remove</Button>
          </Space>,
        },
      ];
  return (
    <>
      <Button type="primary"><Link to={'/admin/categories/add'}>+ Add Products</Link></Button>
      <Space direction="vertical">
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </Space>
      <Table
      columns={columns}
      dataSource={data}
    />
  </>
  )
}

export default AdminCategory