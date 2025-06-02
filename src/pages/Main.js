import { useEffect } from 'react';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Home from '../sections/Home';
import NavBar from '../sections/NavBar';
import Services from '../sections/Services';

function Main() {

	const checkIfNavbarRedirected = function() {

        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1).trim();

        const availIds = ["#home", "#about", "#services", "#contact"]

        for (let i of availIds) {
            if (i === id) {
                smoothScroll(false, document.querySelector(`section${i}`))
            }
        }
    }

    useEffect(() => {
        checkIfNavbarRedirected()
    }, [])

	return (
		<>
			<NavBar redirect={false} />
			<Home />
			<About />
			<Services />
			<Contact />
		</>
	);
}

function smoothScroll(event, element) {
    if (event)
        event.preventDefault();
    
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
}

export default Main;
