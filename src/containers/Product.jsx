import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

const Product = () => {

    const products = useSelector(state => state.allProducts.products)
    const renderProductsList = products.map(product => {
        const { id, title, image, price, category } = product
        return (
            <Link className='link' to={`/products/${id}`} key={id}>
                <div className='productCard'>
                    <div className="productTop">
                        <img src={image} alt={title} />
                    </div>
                    <div className="productBottom">
                        <div style={{ fontSize: '16px', fontWeight: '500' }} className="header">{title}</div>
                        <div style={{ fontSize: '28px', fontWeight: '700', margin: '1rem 0' }} className="meta price">{price}€</div>
                        <div style={{ color: 'gray', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid gray' }}  className="meta">{category}</div>
                    </div>
                </div>
            </Link>
        )
    })
    
    return (
        <div className="productWrapper">
            {renderProductsList}
        </div>
    )
}

export default Product