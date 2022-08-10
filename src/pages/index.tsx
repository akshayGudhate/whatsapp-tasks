import { useRouter } from 'next/router';
import { useEffect } from 'react';


const HomePage = () => {
    const router = useRouter(); // router

    useEffect(() => {
        router.replace('/todo');
    }, []);
};



export default HomePage;