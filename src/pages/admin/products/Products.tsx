import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IProduct, IProps } from "../../../interface/product";

const Adminproduct = (props: IProps) => {

  const removeProduct = (id: string) => {
    props.onRemove(id);
  }
  const columns: ColumnsType<IProduct> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Image', dataIndex: 'image', key: 'image' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => 
      <Space wrap>
        <Button> <Link to={`/admin/products/${record._id}/update`}>Update</Link> </Button>
        <Button type="primary" onClick={() => removeProduct(record._id)}>Remove</Button>
      </Space>,
    },
  ];
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    setData(props.products);
  }, [props]);

  return (
    <>
      <Button type="primary"><Link to={'/admin/products/add'}>+ Add Products</Link></Button>
      <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => <p style={{ margin: 0 }}>{record._id}</p>,
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
      dataSource={data}
    />
  </>
  );
};

export default Adminproduct;
