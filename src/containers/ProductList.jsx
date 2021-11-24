import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

import Product from "./Product"
import { setProducts } from '../redux/actions/productActions'

const ProductList = () => {

    const products = useSelector(state => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch(error => console.log(error))
        
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div style={{ paddingTop: '7rem' }} className='ui grid'>
            <Product />
        </div>
    )
}

export default ProductList