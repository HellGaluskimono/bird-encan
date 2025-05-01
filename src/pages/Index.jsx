import Intro from "../components/Intro/Intro.jsx"
import How from "../components/How/How.jsx"
import What from "../components/What/What.jsx"
import About from "../components/About/About.jsx"
import Why from "../components/Why/Why.jsx"
import Faq from "../components/Faq/Faq.jsx"
import Bottom from "../components/Bottom/Bottom.jsx"

export default function Index() {
    return (
        <main className="main">
            <Intro />
            <How />
            <What />
            <About /> 
            <Why />
            <Faq />
            <Bottom />
        </main>
    )
}
