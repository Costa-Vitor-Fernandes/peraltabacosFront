import axios from "axios"
import Link from "next/link"
import { useState, useContext } from "react"
import { useRouter } from "next/router"


const Login = () =>{

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const router = useRouter()
const enter = () =>{

    axios.post('http://localhost:3002/login', {
        email: email,
        password: password,
    },{withCredentials: true}).then((res)=>{
        console.log(res, 'res')
        if(res.data.adminStatus){
            router.push({
                pathname: '/admin',
                query: { adminStatus: true}
            }, '/admin')
        }
        if(!res.data.token) return 
        router.push('/')
    })
}

    return(<div className="flex h-screen justify-center self-center items-center">
        <div className="flex flex-col bg-indigo-300 p-10 rounded-lg">
            <h1 className="text-center pb-5">Login</h1>
        <input className="p-2 m-1" type="email" name="email" placeholder="Email" required  onChange={(e)=>{ setEmail(e.target.value);}} />
        <input className="p-2 m-1" type="password" name="email" placeholder="Password" required  onChange={(e)=>{ setPassword(e.target.value);}} />
        <a className="p-2 m-1 bg-green-500 mb-4" type="button" onClick={() => enter()}>Login</a>
        <a className="bg-indigo-400 mx-12 text-center rounded-full" href="/cadastro">Cadastrar</a>
        </div>
    </div>)
}
export default Login