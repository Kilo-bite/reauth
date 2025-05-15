import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

const SiteRoutes = () => (
    <div className="max-w-7xl mx-auto mt-6">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </div>
)

export default SiteRoutes