import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemList = ({products}) => {
  return (
    products.map( product => <div>
        {/* Aca deberia ser product => <Item key={product.id} product={product}/> */}  
        <Card style={{ width: '18rem' }}>
            {/*<Card.Img variant="top" src="holder.js/100px180" /> */}  
            <Card.Body>
                <Card.Title>{product.id} - {product.name}</Card.Title>
                <Card.Text>{product.desc} </Card.Text>
                <Link to={`/detail/${product.id}`}>
                    <Button variant="primary">Ver Producto</Button>
                </Link>
                
            </Card.Body>
        </Card>
    </div> ) 
  )
}

export default ItemList