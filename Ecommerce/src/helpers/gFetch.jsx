let obj =[
	{id:'1',name:'producto 1',stock:'100',desc:'Primer producto de la lista',price:'1000',cat:'tecnologia'},
	{id:'2',name:'producto 2',stock:'100',desc:'Segundo producto de la lista',price:'2000',cat:'libros'},
    {id:'3',name:'producto 3',stock:'100',desc:'Tercer producto de la lista',price:'1500',cat:'libros'},
    {id:'4',name:'producto 4',stock:'100',desc:'Cuarto producto de la lista',price:'7600',cat:'tecnologia'},
    {id:'5',name:'producto 5',stock:'100',desc:'Quinto producto de la lista',price:'23400',cat:'herramientas'},
    {id:'6',name:'producto 6',stock:'100',desc:'Sexto producto de la lista',price:'46000',cat:'tecnologia'},
    {id:'7',name:'producto 7',stock:'100',desc:'Septimo producto de la lista',price:'7000',cat:'tecnologia'},
    {id:'8',name:'producto 8',stock:'100',desc:'Ultimo producto de la lista',price:'99000',cat:'tecnologia'}

]

//resolve, rejected
export const gFetch = (nro)=>{
	return new Promise((resolve,reject)=>{
		const condition = true
		if (condition){
			setTimeout(()=>{
				resolve(obj)
			},500)
			
		}else{
			reject('olvidate de tu cash')
		}
	})
}

