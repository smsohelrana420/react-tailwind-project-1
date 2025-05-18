import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";

const router=createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'about',
                Component:About
            },
            {
                path:'blogs',
                Component:Blogs
            },
            {
                path:'contact',
                Component:Contact
            }
        ]
    }
])

export default router;