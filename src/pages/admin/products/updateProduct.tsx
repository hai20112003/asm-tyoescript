import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
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
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<ICategory[]>([]);
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const currentProduct = props.products.find(
      (product: IProduct) => product._id == id
    );
    setProduct(currentProduct);
    setData(props.category);
  }, [props]);

  useEffect(() => {
    setData(props.category);
  }, [props]);
  useEffect(() => {
    setFields();
  }, [product, data]);

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
    if (typeof value.categoryId === "undefined") {
      value.categoryId = product?.categoryId || "";
    }
    props.onUpdate(value);
    navigate("/admin/products");
    console.log(value);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed", errorInfo);
  };

  // function convertDataToOptions(data: ICategory[]): Option[] {
  //   return data.map((item) => ({
  //     value: item._id,
  //     label: item.name,
  //   }));
  // }
  // const options: Option[] = convertDataToOptions(data);

  const [imageBase64, setImageBase64] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
          <Upload action="/upload.do" listType="picture-card">
          <div>
            {/* <PlusOutlined /> */}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
          {/* <Input /> */}
          {/* <Input type="file" onChange={handleImageUpload} />
      {imageBase64 && (
        <img src={imageBase64} alt="Uploaded" style={{ maxWidth: "100%" }} />
      )} */}
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
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Sửa</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UpdateProduct;
