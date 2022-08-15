
import { withRouter } from "next/router"
import { WithRouterProps } from "next/dist/client/with-router"
import { useContext } from "react"
import { TokenContext } from "./context"


const Admin = (props:WithRouterProps) =>{

    const {token} = useContext(TokenContext)

    if(props.router.query.adminStatus && token ){
        return (<div className="flex flex-col bg-gray-200 shadow-md rounded-lg p-2 m-4">
        <p>Pagina do Admin
            
        </p>
        <div className="flex flex-col p-4 ">
            
        <div className="bg-gray-300 shadow-md p-2 m-2">adicionar novo produto</div>
        <div className="bg-gray-300 shadow-md p-2 m-2">alterar produto</div>
        <div className="bg-gray-300 shadow-md p-2 m-2">excluir produto</div>
        <div className="bg-gray-300 shadow-md p-2 m-2">categorias</div>
        <div className="bg-gray-300 shadow-md p-2 m-2">estoque</div>
        <div className="bg-gray-300 shadow-md p-2 m-2">vendas</div>
        </div>
        </div>)
}else
return <div className="flex h-screen justify-center items-center">404 | Nada aqui</div>

}
export default withRouter(Admin) 
