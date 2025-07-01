import { Outlet } from "react-router-dom";
import HomeNavbar from "../home-navbar/home-navbar";

const HomePageLayout = ()=>{
    return(
        <div>
        <HomeNavbar/>
         <div>
            <Outlet/>
         </div>
        </div>
    )
}
export default HomePageLayout;