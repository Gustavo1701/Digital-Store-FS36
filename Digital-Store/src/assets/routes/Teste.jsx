import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../../Pages/HomePage";

const Teste = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Teste;