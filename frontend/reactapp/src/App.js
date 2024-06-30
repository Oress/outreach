import NavBar from "./navbar/NavBar";
import ProductCategories from "./main/ProductCategories";
import Contact from "./common/Contact";
import { Outlet } from "react-router-dom";


export const App = () => {
    return (
        <section>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </section>
    );
}
export default App;