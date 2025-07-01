import { Outlet } from "react-router-dom";
import HomeNavbar from "../home-navbar/home-navbar";
import Footer from "../footer/footer";

const HomePageLayout = ()=>{
    return(
        <div>
        <HomeNavbar/>
         <div>
            <Outlet/>
         </div>
         <Footer/>
        </div>
    )
}
export default HomePageLayout;