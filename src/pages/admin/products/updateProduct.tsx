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

  useEffect(() => {
    const currentProduct = props.products.find(
      (product: IProduct) => product._id == id
    );
    setProduct(currentProduct);
  }, [props]);

  useEffect(() => {
    setData(props.category)
  }, [props]);

  useEffect(() => {
    setFields();
  });

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

  const onFinish = (value: any) => {
    props.onUpdate(value);
    navigate('/admin/products')
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
  
  const options: Option[] = convertDataToOptions(data);
  console.log("xxx", product?.categoryId);
  console.log("x", options);

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
          {/* <Select defaultValue={product?.categoryId}>
            {data.map((category) => {
              // category._id === product?.categoryId
              //   ? (s = "selected")
              //   : (s = "");
              // console.log(s);
              return (
                <Select.Option key={category._id} value={category._id}>
                  {category.name}
                </Select.Option>
              );
            })}
          </Select> */}
          <Select
            defaultValue={product?.categoryId}
            style={{ width: 120, color: "black" }}
            // onChange={handleChange}
            options={options}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Sửa</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UpdateProduct;
