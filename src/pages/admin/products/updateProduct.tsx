import { Button, Form, Input, InputNumber, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICategory, IProduct } from "../../../interface/product";
interface Props {
  products: IProduct[];
  category: ICategory[];
  onUpdate: (product: IProduct) => void;
}
interface Option {
  value: string;
  label: string;
}
const UpdateProduct = (props: Props) => {
  // let s = "";
  const { TextArea } = Input;
  const [form] = Form.useForm();
  // const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<ICategory[]>([]);
  const [product, setProduct] = useState<IProduct>();
<<<<<<< HEAD
  const [products, setProducts] = useState<IProduct[]>([]);

=======
  
>>>>>>> main
  useEffect(() => {
    const currentProduct = props.products.find(
      (product: IProduct, index) => product._id == id
    );
    setProduct(currentProduct);
    setData(props.category)
  }, [props]);

<<<<<<< HEAD
  useEffect(() => {
    setData(props.category);
    setProducts(props.products);
  }, [props]);
  // useEffect(() => {
  //   products.map((item: IProduct)=> {
  //     if(item.categoryId === ) {
=======
  // useEffect(() => {
  //   setData(props.category)
  // }, [props]);
>>>>>>> main

  //   })
  // })
  useEffect(() => {
    setFields();
  },[product,data]);

  const setFields = () => {
    form.setFieldsValue({
      _id: product?._id,
      name: product?.name,
      price: product?.price,
      image: product?.image,
      description: product?.description,
      categoryID: product?.categoryId,
    });
  };

  const onFinish = (value: IProduct) => {
<<<<<<< HEAD
    // props.onUpdate(value);
    // navigate('admin/products')
=======
    props.onUpdate(value);
    navigate('/admin/products')
>>>>>>> main
    console.log(value);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed", errorInfo);
  };

  function convertDataToOptions(data: ICategory[]): Option[] {
    return data.map((item) => ({
      value: item._id,
      label: item.name,
    }));
  }
<<<<<<< HEAD

=======
  const getDefaultValue = () => {
    const test = data.find(item => item._id == product?.categoryId)
    // console.log(typeof(test?._id));
    
    return test?._id
  }
  getDefaultValue()
  
>>>>>>> main
  const options: Option[] = convertDataToOptions(data);
  // console.log("x", options);

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item label="Id" name="_id" style={{ display: "none" }}>
          <Input />
        </Form.Item>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Upload" name="image">
          {/* <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload> */}
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Select" name="categoryId">

          {product?.categoryId && (
                      <Select defaultValue={product.categoryId}>
            {data.map((category) => {
              return (
                <Select.Option key={category._id} value={category._id}>
                  {category.name}
                </Select.Option>
              );
            })}
<<<<<<< HEAD
          </Select> */}
          {product?.categoryId && (
            <Select
              // initialValue: "lucy"
              defaultValue={product?.categoryId}
              style={{ width: 120, color: "black" }}
              // onChange={handleChange}
              options={options}
              value={product?.categoryId}
            />
          )}
=======
          </Select>
          )}
          
>>>>>>> main
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Sửa</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UpdateProduct;
