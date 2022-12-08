import { useState,useEffect } from "react";
import { gFetch } from "../../helpers/gFetch";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemListContainter = ({greeting='Saludito ;)'}) => {


    const [products,setProduct]=useState([])
    const [loading,setLoading]=useState(true)


	useEffect(()=>{
		gFetch()
		.then(data=>setProduct(data))
		.catch(err => console.log(err))
		.finally(()=>setLoading(false)) 
	},[])

	console.log(products)

	return(
		<section>
			{/*[1,2,3,4,5] => 1 [<li>1</li>, <li>2li>],...*/}
			{/*[1,2,3,4,5].map((numero,index)=><li key={index}>{num}</li>)*/}
			{
            loading?
                <h2>cargando...</h2>
            :
                products.map( product => <div>
                                            <Card style={{ width: '18rem' }}>
                                                {/*<Card.Img variant="top" src="holder.js/100px180" /> */}  
                                                <Card.Body>
                                                <Card.Title>{product.id} - {product.name}</Card.Title>
                                                <Card.Text>
                                                    {product.desc}
                                                </Card.Text>
                                                <Button variant="primary">Agregar al carrito</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>)
                                        
            }
		
		</section> 
	)
}

export default ItemListContainter