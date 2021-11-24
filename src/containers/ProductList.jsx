import { useEffect } from 'react'
import { useDispatch } from "react-redux"

import Product from "./Product"
import { fetchProducts } from '../redux/actions/productActions'

const ProductList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div style={{ marginTop: '4rem' }} className='ui grid container'>
            <Product />
        </div>
    )
}

export default ProductList