import React, { useEffect, useState } from "react";
import { IProps } from "../../interface/product";
import { IProduct } from "../../interface/product";
import {useParams} from 'react-router-dom'
import { getOneProduct } from "../../api/product";
const ProductDetailPage = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    
    useEffect( () => {
        getOneProduct(id).then(data => console.log(data))
    },[])
    return (
        <>
            <h1>Products Page</h1>
        </>
    )
}

export default ProductDetailPage