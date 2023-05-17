import { useState,useEffect } from "react";
import { gFetch } from "../../helpers/gFetch";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


const ItemListContainter = ({greeting='Saludito ;)'}) => {


    const [products,setProduct]=useState([])
    const [loading,setLoading]=useState(true)


    const { id } = useParams()

    useEffect(()=>{
        if(id){
            gFetch()
            .then(data=>setProduct(data.filter(prod=> prod.cat===id)))//filtre
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }else{
            gFetch()
            .then(data=>setProduct(data))//no filtre
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }
    },[id])

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
                <ItemList products={products}/>        
            }
		</section> 
	)
}

export default ItemListContainter