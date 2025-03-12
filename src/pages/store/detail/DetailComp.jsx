import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MakeOrder from './MakeOrder';
import AddToCart from './AddToCart';
import axios from 'axios';
import { IoIosPricetags } from "react-icons/io";
import { GoDotFill } from 'react-icons/go';

export default function DetailComp() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
                setProduct(response.data);

                const allProducts = await axios.get('http://127.0.0.1:8000/api/products');
                const filteredProducts = allProducts.data
                    .filter(item => item.category === response.data.category && item.id !== response.data.id);

                // Перемешиваем и берем 3 случайных товара
                const shuffled = filteredProducts.sort(() => 0.5 - Math.random()).slice(0, 3);

                setSimilarProducts(shuffled);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div className='loading'><div className='loader'></div></div>;
    }

    return (
        <div>
            {product ? (
                <div>
                    <div className='pagename'>
                        <div className="pagename-blok">
                            <div>
                                <h1>Store</h1>
                            </div>
                            <div>
                                <Link to='/'><p className='pagename-blok__p-1'>Home</p></Link>
                                <GoDotFill className='pagename-icon' />
                                <p className='pagename-blok__p-2'>Store</p>
                            </div>
                        </div>
                    </div>
                    <div className='detail'>
                        <div className="detail-blok">
                            <div className="detail-blok__section-1">
                                <div className="detail-blok__section-1__image">
                                    <img src={product.image || "/images/category.jpg"} alt={product.name} />
                                </div>
                            </div>
                            <div className="detail-blok__section-2">
                                <h2>{product.name}</h2>
                                <div className="detail-blok__section-2__container">
                                    <div className="detail-blok__section-2__container-part">
                                        <p className='detail-blok__section-2__container-part__p'>
                                            <IoIosPricetags className='detail-blok__section-2__container-part__icon' />
                                            <span className='detail-blok__section-2__container-part__p__span'>
                                                {Number(product.price).toLocaleString('ru-RU')}
                                                <p>UZS</p>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="detail-blok__section-2__header">
                                        <MakeOrder data={product} />
                                        <AddToCart data={product.id} />
                                    </div>
                                    <p className='detail__description'>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='similar'>
                        <div className="similar-header">
                            <h1>Similar products</h1>
                            <div className="similar-header__line"></div>
                        </div>
                        <div className="similar-blok">
                            {similarProducts.length > 0 ? (
                                similarProducts.map(similar => (
                                    <div key={similar.id} className="similar-blok__section">
                                        <Link to={`/store/product/${similar.id}`}>
                                            <img src={similar.image || "/images/category.jpg"} alt={similar.name} />
                                            <h2>{similar.name}</h2>
                                            <p>{Number(similar.price).toLocaleString('ru-RU')} UZS</p>
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <p>No similar products found.</p>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>No data</div>
            )}
        </div>
    );
};