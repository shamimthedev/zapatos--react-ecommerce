import { useEffect } from "react"
import Navbar from "./Navbar"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from '../features/ShopCart/productSlice'
import { addToCart } from "../features/ShopCart/cartSlice"

const ProductList = () => {
  const { items: products, status } = useSelector(state => state.products);
  const dispatch = useDispatch()
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [status])
  if (status === 'loading') return <p>Loading products...</p>
  if (status === 'failed') return <p>Failed to load products.</p>

  return (
    <>
      <Navbar />
      <div className="product-list">
        {
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="" />
              <h2>{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}</h2>
              <p>Price: ${product.price}</p>
              <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ProductList