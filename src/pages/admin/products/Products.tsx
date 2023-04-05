import { Button, Space, Table, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IProduct, IProps } from "../../../interface/product";
const { Search } = Input;
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
  const onSearch = (value: string) => {
      const searchProduct = props.products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()))
      setData(searchProduct);
  };
  return (
    <>
      <Button type="primary"><Link to={'/admin/products/add'}>+ Add Products</Link></Button>
      <Space direction="vertical">
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </Space>
  
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
