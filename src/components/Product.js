import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="contact__item">
            <div className="contact__header">
                <div className="contact__image">
                    <img src={product.photoUrl} alt={product.name}  />
                </div>
                <div className="contact__details">
                    <p className="contact_name">{product.name.substring(0, 15)} </p>
                    <p className="contact_title">{product.title}</p>
                </div>
            </div>
            <div className="contact__body">
                <p><i className="bi bi-envelope"></i> {product.email.substring(0, 20)} </p>
                <p><i className="bi bi-geo"></i> {product.address}</p>
                <p><i className="bi bi-telephone"></i> {product.phone}</p>
            </div>
        </Link>
  )
}

export default Product