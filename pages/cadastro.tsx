import axios from "axios"
import { useState } from "react"

const Cadastro = () =>{

    const [nome,setNome] = useState<string>('')
    const [tel, setTel] = useState<number>()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [password2, setPassword2] = useState<string>('')


const register = () =>{
    // axios.post('cadastrar..')
}

    return (<div className="flex h-screen justify-center items-center">
        <div className="flex flex-col bg-gray-100 p-10 rounded-md">
        <input className="mb-2 px-10 shadow-md rounded-md" type={'text'} placeholder="Nome" />
        <input className="mb-2 px-10 shadow-md rounded-md" type={'tel'} placeholder="Telefone" />
        <input className="mb-2 px-10 shadow-md rounded-md" type="email" placeholder="Email" />
        <input className="mb-2 px-10 shadow-md rounded-md" type="password" placeholder="Password" />
        <input className="mb-2 px-10 shadow-md rounded-md" type="password" placeholder="Confirme Password" />
        <input className="mt-2 px-10 shadow-md bg-green-300 rounded-full hover:bg-green-500 focus:bg-green-500" type="button" value="Cadastrar" />
        </div>
    </div>)
}
export default Cadastro