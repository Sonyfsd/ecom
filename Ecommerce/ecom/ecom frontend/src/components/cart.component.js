import { useState, useEffect } from 'react';

function CartComponent() {
    const [cartProducts, setCartProducts] = useState([]);
    const getCartProducts = () => {
        if (localStorage.getItem('cart-items')) {
            setCartProducts(JSON.parse(localStorage.getItem('cart-items')));
        }
    }
    useEffect(() => {
        getCartProducts();
    }, []);
    const remove = () => {

    }
    return (
        <div className="container">
            <h1 className='text-center my-4'>Cart</h1>
            {cartProducts.map( product => (
                <div className="row my-4 border-bottom py-2">
                    <div className="col-sm-3">
                        <img width="120px" src={product.imgSrc} />
                    </div>
                    <div className="col-sm-6">
                        <h3>{product.name}</h3>
                        <ul class="list-group">
                            {product.specifications.map(specify => (
                                <li class="list-group-item">{specify}</li>
                            ))}
                            
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h3>{product.price}</h3>
                        <button className="btn btn-danger" onClick={() => remove(product)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartComponent;