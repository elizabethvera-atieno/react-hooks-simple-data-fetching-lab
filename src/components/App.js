// create your App component here
import React, {useEffect, useState} from "react";

function App(){
    const [images, setImages] = useState(null)
    // const [isLoaded, setIsLoaded] = useState([true])

    useEffect(()=>{
       fetch("https://dog.ceo/api/breeds/image/random")
            .then((r)=> r.json())
            .then((data)=>{
                // setIsLoaded(true);
                setImages(data.message);
                console.log(data)
            })
    },[])

    if(!images) return <p>Loading...</p>;

    return(
        <div>
            <h1>Lovely Dog</h1>
            <img src={images} alt="A Random Dog"/>
        </div>
    );
}

export default App;
