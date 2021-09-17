import ImageCard from "./ImageCard"
import { useState,useEffect } from "react"

const ImageContainer = ({user}) => {

    const[images, setImages] = useState([])
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImage] = useState("");
    const [addButton, setAddButton]= useState(false);
    
    useEffect(() => {
        // fetch("/images")
        //   .then((r) => r.json())
        //   .then(setImages);
        fetch("/images").then((response) => {
          if (response.ok) {
            response.json().then((user) => setImages(user));
          }
        });
          
      }, []);

      const deleteItem= (id) => {
        const deleteItem = images.filter(image => image.id !== id)
        setImages(deleteItem)
    }

    function onAddImage(newImage) {
        const updatedImageArray = [ ...images, newImage];
        setImages(updatedImageArray);
      }

    const handleSubmit= (e) => {
        e.preventDefault();
        fetch("/images", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
               description: description,
               image_url: image_url
            }),
            })
            // .then(response => response.json())
            // .then(data => onAddImage(data)); }
            .then((response) => {
              if (response.ok) {
                response.json().then((data) => onAddImage(data));
              }
            });}

            function onUpdateImage(updatedImage) {
                const updatedImageArray = images.map((image) => {
                  if (image.id === updatedImage.id) {
                    return updatedImage;
                  } else {
                    return image;
                  }
                });
                setImages(updatedImageArray);
              }

    return (
     
        <>
       <button>Add Image</button>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <input type="text" placeholder="image_url" value={image_url} onChange={(e) => setImage(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
       <div className="imagecontainer">
    {images.map((image)=> (
        // console.log(image.image_url)
       <ImageCard  user={user} image={image} deleteItem={deleteItem} onUpdate={onUpdateImage} title={title} description={description} images={image_url}/>
    ))}  
    </div>
       </>
       )}
        
   
            
       
        
    


export default ImageContainer
