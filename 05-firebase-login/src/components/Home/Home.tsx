import { Link } from "react-router-dom";
import { auth } from "../../firebase";

interface HomeProps {
    name?: string;
}

const logout = () => {
    return auth.signOut()
    // navigate("/")
}

const Home = (props: HomeProps) => {
    
    return (
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
            <h1><Link to="/login">Login</Link></h1>
            <h1 className="mt-4 mb-10"><Link to="/singup">Sing up</Link></h1>
            <div className="mt-4">
                <h2 className="text-night font-bold mb-2">
                    {props.name? `Bienvenido ${props.name}` : "Inicia sesión"}
                </h2>
                {props.name && (
                <button onClick={logout}>Logout</button>)}
            </div>
        </div>
    )
}

export default Home