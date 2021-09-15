import ImageCard from "./ImageCard"
import { useState,useEffect } from "react"

const Main = () => {

    const[images, setImages] = useState([])


    useEffect(() => {
        fetch("/images")
          .then((r) => r.json())
          .then(setImages);
      }, []);
      

    return (
        <>
    {images.map((image)=> (
        // console.log(image.image_url)
       <ImageCard image={image}/>
    ))}
       
        
       </>
       
       
       
       )}
        
   
            
       
        
    


export default Main
