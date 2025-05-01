import { HashRouter, Routes, Route } from "react-router-dom";

import "@/styles/style.scss";

import Index from "@/pages/Index";
import About from "@/pages/About/About.jsx";
import Policy from "@/pages/Policy/Policy.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Terms from "./pages/Terms/Terms.jsx";
import Disclaimer from "./pages/Disclaimer/Disclaimer.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx"
import Information from "./pages/Information/Information.jsx"
import ScrollToHashElement from "./utils/ScrollToHashElement";
import { ModalProvider } from "./context/ModalContext";

function App() {
    return (
        <ModalProvider>
            <HashRouter basename="/">
                <ScrollToHashElement />
                <div className="wrapper">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Index />} exact />
                        <Route path="/about" element={<About />} exact /> 
                        <Route path="/contacts" element={<Contacts/>} exact /> 
                        <Route path="/disclaimer" element={<Disclaimer/>} exact />
                        <Route path="/information" element={<Information />} exact />
                        <Route path="/policy" element={<Policy />} exact />
                        <Route path="/terms" element={<Terms/>} exact />       
                    </Routes>
                    <Footer />
                </div>
                <Modal />
            </HashRouter>
        </ModalProvider>
    );
}

export default App;
