import { useEffect } from "react"; 
import { useLocation } from "react-router-dom"; 
 
const ScrollToHashElement = () => { 
    const location = useLocation(); 
 
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                const yOffset = -100;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

 
    return null; 
}; 
 
export default ScrollToHashElement;
