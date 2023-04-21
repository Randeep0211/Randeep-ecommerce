import React from 'react';
import { NavLink } from 'react-router-dom';
import NumberFormat from '../helper/NumberFormat';

const Product = (currElem) => {
    const { id, image, name, price, category } = currElem;
    return (
        <>
            <NavLink to={`/single-product/${id}`}>
                <div className="card">
                    <figure>
                        <img src={image} alt={name} />
                        <figcaption className="caption">{category}</figcaption>
                    </figure>

                    <div className="card-data">
                        <div className="card-data-flex">
                            <h3>{name}</h3>
                            <p className="card-data--price">
                                <NumberFormat Price={price}></NumberFormat>
                            </p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    );
};

export default Product;
