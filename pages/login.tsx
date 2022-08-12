const Login = () =>{
    return(<div className="bg-indigo-200 flex h-screen justify-center self-center items-center">
        <div className="flex flex-col bg-indigo-300 p-10 rounded-lg">
            <h1>Login</h1>
        <input className="p-2 m-1" type="email" name="email" placeholder="Email" required />
        <input className="p-2 m-1" type="password" name="email" placeholder="Password" required />
        <input className="p-2 m-1 bg-green-500 mb-4" type="button" value="Enter" />
        </div>
    </div>)
}
export default Login