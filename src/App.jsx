import {createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";

import Home from "./pages/home/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Write from "./pages/write/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

const Layout = () => {
    return (<>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>);
};

const router = createBrowserRouter([{
    path: "/", element: <Layout/>, children: [{
        path: "/", element: <Home/>,
    }, {
        path: "/write", element: <Write/>,
    },],
}, {
    path: "/register", element: <Register/>,
}, {
    path: "/login", element: <Login/>,
},]);

function App() {
    return (<div className="app">
        <div className="container">
            <RouterProvider router={router}/>
        </div>
    </div>);
}

export default App;
