import { Layout, Menu, Space, theme, Image } from 'antd'
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
type Props = {}
const headerStyle: React.CSSProperties = {
  color: '#fff',
  paddingInline: 50,
  height: 100,
  alignItems: 'center',
  display: 'flex',
  justifyContent:'space-between',
  width: '70%',
  margin: 'auto',
  backgroundColor: 'black'
};

const contentStyle: React.CSSProperties = {
  color: 'white',
  paddingTop: '20px',
  width: '70%',
  margin: 'auto',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: 'white',
  backgroundColor: '#2B2B2B'

};
const LayoutClient = (props: Props) => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout style={{ backgroundColor: 'black' }}>
      <Header style={headerStyle}>
        <Image style={{paddingTop: '10px',paddingBottom: '10px',}} width={100} src="https://res.cloudinary.com/dqqfnp0hk/image/upload/v1680671104/z4239361379635_4129db4f9f404aafcf286b62bfb88052_yuymyk.png"/>
        <Menu style={{display: 'flex', minWidth:"600px", backgroundColor: 'black', color: "white", fontSize:'20px', paddingTop: '10px',paddingBottom: '10px',}}>
            <Menu.Item ><Link to={'/'}>Home</Link> </Menu.Item>
            <Menu.Item >About</Menu.Item>
            <Menu.Item >Product</Menu.Item>
            <Menu.Item >Contact</Menu.Item>
            <Menu.Item >
              <Link to={'signin'}>Login</Link>
              </Menu.Item>
        </Menu>
      </Header>
      <Content style={contentStyle}><Outlet/></Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    </Space>
  )
}

export default LayoutClient