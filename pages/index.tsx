import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { ReactNode, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

type CardProdutoProps ={ 
  imgSrc:string,
  productName:string,
  originalPrice:number,
  price:number,
  discount:number
}

const CardProduto = (props:CardProdutoProps) =>{

const [discount,setDiscount] = useState<number>()

  return (<div className="flex justify-center bg-slate-300 p-1 m-2 rounded-[2.5rem] shadow-lg h-84 w-64">
    <div className="flex flex-col bg-white w-60 rounded-[2.5rem] ">
    <div className="shadow-lg h-28 w-28 self-center rounded-[1rem] mt-2"><Image className=' rounded-[1rem]' src={props.imgSrc} alt={props.imgSrc} width={500} height={500}></Image></div>
    <a className="self-center hover:text-indigo-600 pt-2">{props.productName}</a>
    <div className="text-gray-400 pl-4 line-through">R${props.originalPrice}</div>
    <div className="flex flex-row pl-4">
    <div className="mr-2">R${props.price}</div>
    <div className=" flex justify-center self-center items-center text-white bg-red-500 text-center w-16 rounded-[0.5rem]">-R${props.discount}</div>
    </div>
    {/* missing handlers and state for handlers */}
    <div className="w-32 rounded-[0.5rem] flex justify-center self-center items-center my-2 h-8  bg-indigo-500 hover:bg-indigo-300"><p className='text-white'>COMPRAR</p></div>
    </div>
    </div>)
}


type CategoriaProps ={
  name:string,
}


const Categoria = (props:CategoriaProps) =>{
  return (<div className='bg-gray-100 w-64 m-1'>{props.name}</div>)
}


const Home: NextPage = () => {


  const [imgSrc, setImgSrc] = useState<string[]>([])
  const [productName, setProductName] = useState<string[]>([])
  const [originalPrice, setOriginalPrice] = useState<number[]>([])
  const [price, setPrice] = useState<number[]>([])
  const [discount, setDiscount] = useState<number[]>([])
  const [fetchPort, setFetchPort] = useState<boolean>(false)
  const [categories, setCategories] = useState<string[]>([])

  useEffect(()=>{
    setProducts()
    setCategoria()
  },[])

  function setCategoria(){
    axios.get('http://localhost:3002/categories').then((res)=>{
      // console.log(res.data)
      const data = res.data
      setCategories(data.map((e:any,i:any,arr:any)=>arr[i].categoryName))
    })
  }

  function setProducts() {
    axios.get('http://localhost:3002/product').then((res)=>{
      const data = res.data
      // console.log(data, 'data')
      setImgSrc(data.map((e:any,i:any,arr:any)=>arr[i].photo))
      setProductName(data.map((e:any,i:any,arr:any)=>arr[i].productName))
      setOriginalPrice(data.map((e:any,i:any,arr:any)=>arr[i].originalPrice))
      setDiscount(data.map((e:any,i:any,arr:any)=>arr[i].discount))
      setFetchPort(true)
      setTimeout(()=>{
        setPrice(data.map((e:any,i:any,arr:any)=>arr[i].originalPrice-arr[i].discount))
      },50)
    })  
  }

function allcards(){
  const response:any = []
  
  imgSrc.forEach((v:string,i:number,arr:string[])=>{
    
    return response.push(<CardProduto imgSrc={arr[i]} productName={productName[i]} originalPrice={originalPrice[i]} price={price[i]} discount={discount[i]} key={i} />)
  })    
  return response
}
function allCategories(){

  const res:any = []
  categories.forEach((v,i,arr)=>res.push(<Categoria name={arr[i]} key={i}/>))
  return res
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Peraltabacos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-indigo-50 flex justify-between shadow-md">
        <a className="font-[Oswald] text-3xl p-4 md:text-7xl ">PERALTABACOS</a>
        <a href="/carrinho" className="mr-6 flex flex-col justify-center">
        <svg className='w-10 hover:opacity-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/></svg>
        </a>
      </nav>
      <div className="bg-red-500 flex flex-col h-24 mt-4 justify-center shadow-md">
        <h1 className="text-white text-center font-[Oswald] text-2xl md:text-5xl">CATEGORIAS</h1>
        {/* .map(<Categoria>) */}
        <div className='flex flex-row overflow-auto'>
        
        {fetchPort ?  allCategories(): null}

        </div>
      </div>
      <div className="justify-center self-center align-center content-center flex">
        <input type="text" className="rounded-full pl-6 flex-row bg-gray-100 w-80 mt-10 shadow-md" placeholder='Pesquisar Produto'></input>
      </div>
      <div className='flex sm:flex-row flex-col mt-4 justify-center items-center overflow-auto py-6'>
      {fetchPort? allcards(): <p className='bg-red-500 rounded-full px-2 mt-10 py-8 align-center shadow-md'>Estamos fechados</p>}
 

      </div>
    </div>
  )
}

export default Home
