import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select
} from 'antd';
import { useEffect, useState } from 'react';
import { ICategory, IProduct } from '../../../interface/product';
import { useNavigate } from 'react-router-dom';

type Props = {onAdd: (category: ICategory) => void}

const AddCategory = (props: Props) => {
    const navigate = useNavigate()
    const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
    const onFinish = (value: any) => {
        props.onAdd(value);
        navigate('admin/categories')
    }
    const onFinishFailed = (errorInfo :any) => {
        console.log('Failed', errorInfo)
    }
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Thêm mới</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default AddCategory