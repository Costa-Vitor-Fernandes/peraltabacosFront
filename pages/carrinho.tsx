import { useContext } from "react"
import { TokenContext } from "./context"

interface ProdutoNoCarrinhoProps {
    name:string,
    price:number,
}

const ProdutoNoCarrinho = (props:ProdutoNoCarrinhoProps) =>  {
    return (<div className="flex bg-gray-200 justify-between rounded p-3 m-4">
        <div>photo</div>
        <div><p>{props.name}</p> 
        <p>R$:{props.price}</p>
        </div> 
        <input type="button" value="-" />
        <p>qntd</p>
        <input type="button" value="+" />
        <div className="bg-red-500 shadow-md px-1">x</div>
        </div>)

}




const Carrinho = () =>{


    const {token} = useContext(TokenContext)

    console.log(token, 'olha ele ai o token')


    return <div className="flex flex-col bg-white shadow-lg m-4 p-2 rounded">
    
        
        <div className="flex flex-col bg-gray-300 rounded shadow-sm">
            
            <div className="flex flex-col m-2 bg-white max-h-60 rounded shadow-md bg-fixed overflow-auto mt-4 ">
                <h1 className="pt-2 text-center">Seu Carrinho</h1>
            <ProdutoNoCarrinho name="tabear" price={12} /> 
            <ProdutoNoCarrinho name="tabear" price={12} /> 
            <ProdutoNoCarrinho name="tabear" price={12} />  
            <ProdutoNoCarrinho name="tabear" price={12} />  
            <ProdutoNoCarrinho name="tabear" price={12} />  
            <ProdutoNoCarrinho name="tabear" price={12} />  

            </div>
            <div className="flex bg-white m-2 p-2 my-6 rounded shadow-md justify-between">
                <div>total :</div>
                <div className="flex bg-green-500 shadow-md rounded-full px-2">o</div> 
                </div>
        </div>
        </div>
}



export default Carrinho