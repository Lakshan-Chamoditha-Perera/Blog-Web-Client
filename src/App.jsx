import {createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/home/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Write from "./pages/write/Write";
import Navbar from "./components/header/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

import "./App.css";
import Single from "./pages/single/Single.jsx";

const Layout = () => {
    return (<>
        <Navbar/>x
        <section className='section'>
            <Outlet/>
        </section>
        <Footer/>
    </>);
};

const router = createBrowserRouter([
    {path: "/", element: <Layout/>, children: [
        {path: "/", element: <Home/>,},
        {path: "/write", element: <Write/>,},
        {path: "/single", element: <Single/>,}
    ]},
    {path: "/register", element: <Register/>,},
    {path: "/login", element: <Login/>,}
    ]
);

function App() {
    return (
        <div className="app">
        <ToastContainer/>
        <RouterProvider router={router}/>
    </div>
    );
}

export default App;
