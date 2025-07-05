import Header from './Header';
import GameSpace from './GameSpace';
import Footer from './Footer';
import {useState} from 'react';
export default function Game(){
    const [isLight, setisLight] = useState(true);
    return(
        <>
            <Header mode={isLight} />
            <GameSpace />
            <Footer />
        </>
    );
}