import axios from "axios";
import { useState } from "react";

const mockCategoria =  () =>{

    const [categoryName, setCategoryName] = useState<string>('')
    const [photo,setPhoto] = useState<string>('')


    const newCategory = () =>{
        if(!categoryName || !photo){
            return alert('check fields')
        }
            axios.post('http://localhost:3002/categories',{
                categoryName:categoryName,
            photo:photo,
        
        }, {withCredentials:true}).then((res)=>{
            console.log(res.data,' data log from new category')
        })
        alert(`Adicionou a categoria ${categoryName}`)
        setCategoryName('')
        setPhoto('')
    
    }


    return <div><h1 className="text-center mb-2">Categorias</h1>
    <div className="flex flex-col bg-gray-100 m-2 shadow-md" >

        <input type="text" name="nova categoria"placeholder={'adicione uma nova categoria'} onChange={(e)=>{setCategoryName(e.target.value)}}/>
        <input type="text" name="photo" placeholder={'adicione uma photo'} onChange={(e)=>{setPhoto(e.target.value)}}/>
        <input className="bg-red-500" type="button" value="Novo categoria" onClick={ () => newCategory()}/>
    </div>
    </div>
}

export default mockCategoria;