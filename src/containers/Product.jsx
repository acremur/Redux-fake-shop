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
                        <div className="productTitle">{title}</div>
                        <div className="productPrice">{price}€</div>
                        <div className="productCategory">{category}</div>
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