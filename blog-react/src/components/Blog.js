import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/specificBlog.css";

function Blog() {
    const [myId, setMyId] = useState();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const { id } = useParams();

    const getBlogData = async () => {
        // console.log(id);
        const res = await fetch(
            `https://blogbackend3-0k42.onrender.com/getdata/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (res.ok) {
            const { id, title, body } = await res.json();
            // console.log(myBlogs);
            // console.log("myblogs "+myBlogs);
            setBody(body);
            setMyId(id);
            setTitle(title);
        }
    };

    useEffect(() => {
        getBlogData();
    }, []);

    return (
        <div key={myId} className="specific-blog">
            <h2>{title}</h2>
            <section>{body}</section>
        </div>
    );
}

export default Blog;
