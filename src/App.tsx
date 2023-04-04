import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import './App.css'
import HomePage from './pages/clients/HomePage'
import ProductPage from './pages/admin/products/Products'
import AddProduct from './pages/admin/products/addProduct'
import { addProduct, getAllProduct, updateProduct } from './api/product'
import ProductDetailPage from './pages/clients/ProductDetail'
import Signin from './pages/clients/signin'
import LayoutAdmin from './compronents/layoutAdmin'
import Dashboard from './pages/admin/Dashboard'
import Adminproduct from './pages/admin/products/Products'
import { deleteProduct } from './api/product'
import { IProduct } from './interface/product'
import { getAllCategory } from './api/category'
import UpdateProduct from './pages/admin/products/updateProduct'

function App() {
  const [product,setProduct] = useState([]);
  const [category,setCategory] = useState([]);

  useEffect(() =>{
    getAllProduct().then(({data}) => setProduct(data.data));
  },[])
  useEffect(() =>{
    getAllCategory().then(({data}) => setCategory(data.data));
  },[])
  const onHandleRemove = (id: string) => {
    deleteProduct(id).then(()=>{
      setProduct(product.filter((item:IProduct) => {item._id !== id}))
    })
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then((({data}) => setProduct(data.data))))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProduct().then((({data}) => setProduct(data.data))))
  }
  return (
    <div className="App">
      <Routes>
          <Route path='/'>
            <Route index element={< HomePage />} />
            <Route path='products'>
                <Route index element={< ProductPage products={product} onRemove={function (id: string): unknown {
              throw new Error('Function not implemented.')
            } }/>} />
                <Route path=':id' element={< ProductDetailPage />} />
            </Route>
            <Route path='signin' element={<Signin />} />
          </Route>
          <Route path='/admin' element={< LayoutAdmin />}>
            <Route index element={< Dashboard />} />
            <Route path='products'>
              <Route index element={< Adminproduct products={product} onRemove= {onHandleRemove} />} />
              <Route path='add' element={< AddProduct onAdd={onHandleAdd} category={category}/>} />
              <Route path=':id/update' element={< UpdateProduct products={product} onUpdate={onHandleUpdate} category={category}/>} />
            </Route>
          </Route>
      </Routes>
    </div>
  )
}

export default App
