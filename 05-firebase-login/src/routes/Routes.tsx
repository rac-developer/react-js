import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import SingUp from "../components/SingUp/SingUp";
import { auth } from "../firebase";
import { useState, useEffect } from "react";

const MyRoutes = () => {

    const [userName, setUserName] = useState<string | null>(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                setUserName(user.displayName);
            } else setUserName("");
        })
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home name={userName}/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SingUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;