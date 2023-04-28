import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function ProductsComponent() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'REDMI 9i Sport (Carbon Black, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 7199,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku04o7k0/mobile/p/8/u/9i-sport-mzb0a5iin-redmi-original-imag785qegs5ghyy.jpeg?q=70'
        },
        {
            id: 2,
            name: 'MOTOROLA e40 (Carbon Gray, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 8999,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70'
        },
        {
            id: 3,
            name: 'POCO C31 (Royal Blue, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 7499,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70'
        },
        {
            id: 4,
            name: 'REDMI Note 11 SE (Cosmic White, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 11349,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/r/7/s/-original-imaghh2fmnzyzn2g.jpeg?q=70'
        },
        {
            id: 5,
            name: 'MOTOROLA G62 5G (Midnight Gray, 128 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 14999,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/h/r/b/-original-imagh29eqd3zrvaf.jpeg?q=70'
        },
        {
            id: 6,
            name: 'REDMI 9i Sport (Carbon Black, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 7199,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku04o7k0/mobile/p/8/u/9i-sport-mzb0a5iin-redmi-original-imag785qegs5ghyy.jpeg?q=70'
        },
        {
            id: 7,
            name: 'MOTOROLA e40 (Carbon Gray, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 8999,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70'
        },
        {
            id: 8,
            name: 'POCO C31 (Royal Blue, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 7499,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70'
        },
        {
            id: 9,
            name: 'REDMI Note 11 SE (Cosmic White, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 11349,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/r/7/s/-original-imaghh2fmnzyzn2g.jpeg?q=70'
        },
        {
            id: 10,
            name: 'MOTOROLA G62 5G (Midnight Gray, 128 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 14999,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/h/r/b/-original-imagh29eqd3zrvaf.jpeg?q=70'
        },
    ]);
    useEffect(() => {
        let cartProducts = [];
        if (localStorage.getItem('cart-items')) {
            cartProducts = JSON.parse(localStorage.getItem('cart-items'));
            const temp = products;
            temp.forEach(product => {
                cartProducts.forEach(cartProduct => {
                    if (product.id == cartProduct.id) {
                        product.isExistInCart = true;
                    }
                });
            });
            setProducts(temp);
        }
    }, [products]);
    const addToCart = (product) => {
        let cartProducts = [];
        if (localStorage.getItem('cart-items')) {
            cartProducts = JSON.parse(localStorage.getItem('cart-items'));
        }
        let isExist = false;
        cartProducts.forEach(cartproduct => {
            if (cartproduct.name == product.name) {
                isExist = true;
            }
        });
        if (!isExist) {
            cartProducts.push({...product, quantity: 1});
            localStorage.setItem('cart-items', JSON.stringify(cartProducts));
        }
    }
    return (
        <div className="container">
            {products.map( product => (
                <div className="row my-4 border-bottom py-2">
                    <div className="col-sm-3">
                        <img width="120px" src={product.imgSrc} />
                    </div>
                    <div className="col-sm-6">
                        <h3><Link to={`/product-details/${product.id}/specifications?name=${product.name}&price=${product.price}`}>{product.name}</Link></h3>
                        <ul class="list-group">
                            {product.specifications.map(specify => (
                                <li class="list-group-item">{specify}</li>
                            ))}
                            
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h3>{product.price}</h3>
                        {product.isExistInCart ? (
                            <button className="btn btn-warning">Go to Cart</button>
                        ): (
                            <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsComponent;


// http://localhost:3000/routeParam1/routeparam2?name1=value1&name2=value2&name3=value3