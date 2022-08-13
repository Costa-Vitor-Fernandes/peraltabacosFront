import { useState } from "react"
const Login = () =>{


    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

const enter = () =>{
    //login action
}

    return(<div className="flex h-screen justify-center self-center items-center">
        <div className="flex flex-col bg-indigo-300 p-10 rounded-lg">
            <h1 className="text-center pb-5">Login</h1>
        <input className="p-2 m-1" type="email" name="email" placeholder="Email" required />
        <input className="p-2 m-1" type="password" name="email" placeholder="Password" required />
        <input className="p-2 m-1 bg-green-500 mb-4" type="button" value="Enter" onClick={() => enter} />
        <a className="bg-indigo-400 mx-12 text-center rounded-full" href="/cadastro">Cadastrar</a>
        </div>
    </div>)
}
export default Login