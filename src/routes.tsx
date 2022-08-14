import { Routes, Route } from "react-router-dom"
import Home from "./views/home"
import Login from "./views/login"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}