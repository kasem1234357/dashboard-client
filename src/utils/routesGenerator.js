import { useElementScroll } from "framer-motion"
import DashBoard from "../pages/DashBoard"
import MassagePage from "../pages/Massage"
import ProductInfoPage from "../pages/ProductInfoPage"
import Add from "../components/Crud/AddProducts/Add"
import Crud from "../pages/Crud"
import Tasks from "../pages/Tasks"
import Task from "../pages/Task"
import Calender from "../pages/Calender"
import Contact from "../pages/contact"
import Settings from "../pages/Settings"

const routes = [
    {
        path:"/",
        role:['all'],
        title:"Dashboard",
        isMainPage:true,
        element:DashBoard
    },
    {
        path:"massage",
        role:['Receptionist','admin'],
        title:"Massage",
        isMainPage:true,
        element:MassagePage 
    },
    {
        path:"/crud",
        role:['sales_manger','admin'],
        title:"CRUD",
        isMainPage:true,
        element:Crud
    },
    {
        path:"/crud/productInfo/:id" ,
        role:['sales_manger','admin'],
        title:"productInfo",
        isMainPage:false,
        element:ProductInfoPage
    },
    {
        path:'/crud/product/:userId',
        role:['sales_manger','admin'],
        title:"Add new product",
        isMainPage:false,
        element:Add
    },
    {
        path:'tasks',
        role:['admin'],
        title:"Task",
        isMainPage:true,
        element:Tasks
    },
    {
        path:'/tasks/task/:taskId',
        role:['admin'],
        title:"task item",
        isMainPage:false,
        element:Task
    },
    {
        path:'calender',
        role:['admin'],
        title:"Calender",
        isMainPage:true,
        element:Calender
    },
    {
        path:'settings',
        role:['all'],
        title:"Settings",
        isMainPage:true,
        element:Settings
    },
    {
        path:'contact',
        role:['all'],
        title:"Contact",
        isMainPage:true,
        element:Contact
    },


]
export const routesSchema = (role)=>{
    console.log(role);
    
    if(role === 'super_admin') return routes
    const safeRoutes = routes.filter(route =>route.role.includes(role) || route.role.includes('all'))
    return safeRoutes
} 