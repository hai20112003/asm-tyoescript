import React, { useEffect, useState } from "react";
import { IProduct } from "../../interface/product";
import image_default from "../../../public/default-image.jpeg";
import { Carousel, Image } from "antd";
import { Link } from "react-router-dom";

const HomePage = ({ products }: { products: IProduct[] }) => {
  const contentStyle: React.CSSProperties = {
    width: "100%",
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };

  const [dataProducts, setDataProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setDataProducts(products);
  }, [products]);

  console.log("products", products);
  return (
    <div className="container px-12 md:mx-auto bg-black">
      <Carousel autoplay>
        <div style={contentStyle}>
          <Image
            style={{ width: "1500px", height: "400px" }}
            preview={false}
            src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/hinh-nen-toi-gian-1.jpg"
          />
        </div>
        <div style={contentStyle}>
          <Image
            style={{ width: "1500px", height: "400px" }}
            preview={false}
            src="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-nen-toi-gian-minimalist.jpg"
          />
        </div>
        <div style={contentStyle}>
          <Image
            style={{ width: "1500px", height: "400px" }}
            preview={false}
            src="https://thuthuatnhanh.com/wp-content/uploads/2022/04/Hinh-nen-toi-gian.jpg"
          />
        </div>
        <div style={contentStyle}>
          <Image
            style={{ width: "1500px", height: "400px" }}
            preview={false}
            src="https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-toi-gian-minimalist-hoat-hinh.jpg"
          />
        </div>
      </Carousel>
      <div className="grid grid-cols-4 gap-5  my-20">
        {dataProducts &&
          dataProducts.map((item) => {
            return (
              <Link to={item._id} className="bg-white rounded-xl w-full" key={item._id}>
                <Image
                  preview={false}
                  className="rounded-t-xl w-full"
                  src={image_default}
                  alt="logo"
                />
                <div className="">
                  <p className="text-black text-center text-[20px] font-bold">
                    {item.name}
                  </p>
                  <div>
                    <div className="text-right pr-7">
                      <span className="text-[18px] md:text-[30px] text-green-500 font-medium">
                        {item.price} <span className="underline">đ</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
