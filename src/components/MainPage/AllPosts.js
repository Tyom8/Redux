import { useEffect, useState } from "react"
import { PLACEHOLDER } from "../../services/JsonPlaceholder";
import Post from "./Post";

export default ({ posts }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        PLACEHOLDER.get("/photos").then((res) => {
            res.data.map((img) => {
                if (img.id < 102) {
                    setImages(images => [...images, img.url]);
                }
            })
        })
    }, [])

    return (
        <>
                    {
                posts.map((post) => {
                    const img = images[post.id];
                    return (
                        <Post key={post.id} img={img} post={post}/>
                    )
                })
            }
        </>
    )
}