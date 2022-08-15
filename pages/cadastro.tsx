import axios from "axios"
import { useState } from "react"

const Cadastro = () =>{

    const [nome,setNome] = useState<string>('')
    const [tel, setTel] = useState<number>()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [password2, setPassword2] = useState<string>('')


const register = () =>{
    if(password !== password2) return alert('passwords do not match')

    console.log(nome, email, tel, password2,)
    axios.post('http://localhost:3002/newUser',{
        email: email,
        tel: tel,
        password: password,
        name: nome
    }).then((res)=>{console.log(res, 'res log')})
}

    return (<div className="flex h-screen justify-center items-center">
        <div className="flex flex-col bg-gray-100 p-10 rounded-md">
        <input className="mb-2 px-10 shadow-md rounded-md" type={'text'} placeholder="Nome" onChange={(e)=>{ setNome(e.target.value);}} />
        <input className="mb-2 px-10 shadow-md rounded-md" type={'tel'} placeholder="Telefone" onChange={(e)=>{ setTel(+e.target.value);}} />
        <input className="mb-2 px-10 shadow-md rounded-md" type="email" placeholder="Email" onChange={(e)=>{ setEmail(e.target.value);}} />
        <input className="mb-2 px-10 shadow-md rounded-md" type="password" placeholder="Password" onChange={(e)=>{ setPassword(e.target.value);}} />
        <input className="mb-2 px-10 shadow-md rounded-md" type="password" placeholder="Confirme Password" onChange={(e)=>{ setPassword2(e.target.value);}} />
        <input className="mt-2 px-10 shadow-md bg-green-300 rounded-full hover:bg-green-500 focus:bg-green-500" type="button" value="Cadastrar" onClick={()=>register()} />
        </div>
    </div>)
}
export default Cadastro