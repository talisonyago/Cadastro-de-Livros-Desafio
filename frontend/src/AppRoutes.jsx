import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Cadastrados from "./pages/Cadastrados";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Cadastro />}/>
                <Route exact path="/cadastrados" element={<Cadastrados />}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;