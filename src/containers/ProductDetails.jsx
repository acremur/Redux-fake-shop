import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProduct, removeSelectedProduct } from '../redux/actions/productActions'

const ProductDetails = () => {

    const { productId } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const { image, title, price, category, description } = product

    useEffect(() => {
        window.scrollTo(0,0)
        productId && productId !== '' && dispatch(fetchProduct(productId))

        return () => {
          dispatch(removeSelectedProduct())
        }
    }, [productId])
    
    return (
    <div style={{ paddingBottom: '0.1rem' }}>
      <div style={{ margin: '7rem' }} className='ui container'>
        {Object.keys(product).length === 0 ? (
          <div className='spinner'></div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider"></div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img style={{ margin: '2rem 0'}} className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a style={{ fontSize: '21px' }} className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 style={{ padding: '1rem', margin: '0.5rem', display:'flex', justifyContent: 'center' }} className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div style={{ backgroundColor: 'rgb(255,81,108)', color: 'white', marginTop: '2rem' }} className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails