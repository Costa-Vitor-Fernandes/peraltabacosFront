interface ProdutoNoCarrinhoProps {
    name:string,
    price:number,

}

const ProdutoNoCarrinho = (props:ProdutoNoCarrinhoProps) =>  {
    return (<div className="flex bg-gray-100 justify-between rounded p-3 m-4">
        <div>produto nome:{props.name} de preco:{props.price}</div> 
        <div className="bg-red-500 shadow-md px-1">x</div>
        </div>)
}




const Carrinho = () =>{
    return <div className="flex flex-col bg-white shadow-lg m-4 p-2 rounded">
        <p>Pagina do Carrinho</p>
        
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