import { Layout, Menu, Space, theme, Image } from "antd";
import Item from "antd/es/list/Item";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
type Props = {};
const headerStyle: React.CSSProperties = {
  color: "#fff",
  paddingInline: 50,
  height: "15vh",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  margin: "auto",
  backgroundColor: "black",
};

const contentStyle: React.CSSProperties = {
  color: "white",
  paddingTop: "20px",
  width: "70%",
  minHeight: "75vh",
  margin: "auto",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "white",
  height: "10vh",
  backgroundColor: "#2B2B2B",
};
const LayoutClient = (props: Props) => {
  const navigate = useNavigate();

  const [openLogin, setOpenLogin] = useState<boolean>(true);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setOpenLogin(false);
    } else {
      setOpenLogin(true);
    }
  },[]);

  return (
    <Space
      direction="vertical"
      style={{ width: "100%", height: "1vh" }}
      size={[0, 48]}
    >
      <Layout style={{ height: "100%" }}>
        <Header style={headerStyle}>
          <Link to={"/"}>
            <Image
              preview={false}
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
                width: "100px",
                height: "100%",
              }}
              src="https://res.cloudinary.com/dqqfnp0hk/image/upload/v1680671104/z4239361379635_4129db4f9f404aafcf286b62bfb88052_yuymyk.png"
            />
          </Link>
          <Menu
            style={{
              display: "flex",
              minWidth: "600px",
              backgroundColor: "black",
              color: "white",
              fontSize: "20px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <Menu.Item>
              <Link to={"/"}>Home</Link>{" "}
            </Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Product</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
            {openLogin ? (
              <Menu.Item>
                <Link to={"signin"}>Login</Link>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <Item
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/signin");
                  }}
                >
                  Log out
                </Item>
              </Menu.Item>
            )}
          </Menu>
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
};

export default LayoutClient;
