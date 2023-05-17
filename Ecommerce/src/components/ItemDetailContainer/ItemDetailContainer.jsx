import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../helpers/gFetch'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

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

  const onAdd=(cant)=>{
    console.log(cant)

  }


  return (

    <div className='container bortder border-3 border-primary rounded'>
        <div className='row'>

            <div className="col">
                <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{product.id} - {product.name}</Card.Title>
                  <Card.Text>
                  {product.desc}
                  </Card.Text> 
                  <Card.Text>
                  {product.price}
                  </Card.Text>
                </Card.Body>
                </Card>
            </div>

            <div className="col">
              <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>

        </div>
    </div>
  )
}

export default ItemDetailContainer