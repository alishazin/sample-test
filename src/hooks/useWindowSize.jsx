import { useEffect, useState } from "react";

export default function useWindowSize(condition) {

    const [ isConditionTrue, setIsConditionTrue ] = useState(undefined);

    function setDimensions () {
        setIsConditionTrue(condition(window.innerWidth, window.innerHeight));
    }

    useEffect(() => {
        setDimensions();
    }, []);

    window.addEventListener('resize', setDimensions)
    

    return isConditionTrue;
}
