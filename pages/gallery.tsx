import { useEffect } from "react";

function Gallery(){
    useEffect(() => {
        document.body.style.overflow = "unset";
    })

    return(
        <>
        <h1>Gallery</h1>
        <h1>Gallery</h1>
        <h1>Gallery</h1>
        </>
    );
}

export default Gallery;