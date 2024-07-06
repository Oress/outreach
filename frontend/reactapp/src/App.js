import NavBar from "./components/navbar/NavBar";
import ProductCategories from "./components/main/ProductCategories";
import Contact from "./components/common/Contact";
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