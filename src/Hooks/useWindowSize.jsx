import React, {useState, useEffect} from 'react';

const useWindowSize = () => {
    const [screenSize, setScreenSize] = useState(false);

    const checkScreenSize=()=>{
        setScreenSize(window.innerWidth < 768);
    }

    useEffect(() => {
       checkScreenSize();
       window.addEventListener("resize", checkScreenSize);
       return () =>window.removeEventListener("resize", checkScreenSize);

    }, []);

    return screenSize;
};

export default useWindowSize;