import {
    Button,
    Form,
    Input,
    InputNumber,
    Select
} from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ICategory, IProduct } from '../../../interface/product';

const { Option } = Select;

interface Props {
    products: IProduct[],
    category: ICategory[],
    onUpdate: (product: IProduct) => void
}
const UpdateProduct = (props: Props) => {
    const { TextArea } = Input;
const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
    const {id} = useParams();
    const navigate =useNavigate()
    const [data, setData] = useState<ICategory[]>([]);
    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
      setData(props.category);
    }, [props]);
    useEffect(() => {
        const curremtProduct = props.products.find((product:IProduct) => product._id == id);
        setProduct(curremtProduct)
      }, [props]);
  
    useEffect(()=>{
        setFields()
    }, [product])
    let s= product?.categoryId;

    const [form] = Form.useForm();
    const setFields = ()=>{
        form.setFieldsValue({
            _id: product?._id,
            name: product?.name,
            price: product?.price,
            image: product?.image,
            description: product?.description,
            categoryID: product?.categoryId
        })
    }
    console.log(product?.categoryId);
    
    const onFinish = (value: any) => {
        props.onUpdate(value);
        navigate('admin/products')
        
    }
    const onFinishFailed = (errorInfo :any) => {
        console.log('Failed', errorInfo)
    }
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
    <Form.Item label="Id" name="_id" style={{display: 'none'}}>
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
        <Select defaultValue={s}>
          {data.map((category, index): any =>{
              return (
                  <Option key={index+1} value={category._id} >{category.name}</Option>
              )
          })}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Sửa</Button>
      </Form.Item>
    </Form>
  </>
  )
}

export default UpdateProduct