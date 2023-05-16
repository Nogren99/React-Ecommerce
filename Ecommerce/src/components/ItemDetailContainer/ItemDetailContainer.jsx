import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../helpers/gFetch'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetailContainer = () => {
  const[product,setProduct]=useState({})
  const{productId}=useParams()
  console.log(productId)

  useEffect(()=>{
    gFetch()
    .then(respProd=>setProduct(respProd.find(prod=>prod.id===productId)))
    .catch(err=>console.log(err))
  })

  const [count,SetCount]=useState(0)
  const handleCount=()=>{
    SetCount(count+1)
  }

  return (

    

    <div>
      
        <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{product.id} - {product.name}</Card.Title>
          <Card.Text>
          {product.desc}
          </Card.Text> 
          <Card.Text>
          {product.price}
          </Card.Text>
          <Button variant="primary" onClick={handleCount}>Agregar al carrito</Button>
          <Card.Text>
          <p>Cantidad: {count}</p>
          </Card.Text>
        </Card.Body>
        </Card>

    </div>
  )
}

export default ItemDetailContainer