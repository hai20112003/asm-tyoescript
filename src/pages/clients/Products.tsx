import React, { useEffect, useState } from "react";
import { Props, IProduct } from "../../interface/product";
const ProductPage = (props: Props) => {
    const [data, setData] = useState<IProduct[]>([])
    useEffect(()=>{
        setData(props.products);
    },[props])
    return (
        <>
            <button>Ad new products</button>
            <table>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>I</th>
                </tr>
            </table>
            {data.map((product, index) =>{
                return (
                    <div key = {index}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ProductPage