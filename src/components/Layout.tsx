import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
                <Outlet />
            </main>
        </>
    )
}

export default Layout;