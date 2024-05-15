"use client"

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Image from "next/image";


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3);
    
`;
const PhotoItem=styled.div`

`;

interface PostObject {
    post_id: number,
    user_id: number,
    media_url: string,
    caption: string
}

export default function ProfilePhotosGrid() {
    const [posts, setPosts] = useState<PostObject[] >()

    useEffect(()=> {
        const fetchPosts =  async () => {
            try {
                const response: Response = await fetch("https://jan24-jilhslxp5q-uc.a.run.app/api/posts")
                if (!response.ok) {
                    throw new Error('JSON not recieved');
                }

                const data = await response.json();
                setPosts(data.posts);
            } catch (error: any) {
                console.log(error);
            }
        }
        fetchPosts();
    }, [])

    return (
        <>
        <GridContainer>
            {/* {photo item div} */}
            {posts?.map((postObject: PostObject) => (
                <PhotoItem key={postObject.post_id} >
                    {/* <Image src={postObject.media_url} alt="Post Photo" fill /> */}
                </PhotoItem>
            ))}
            {/* image */}
        </GridContainer>
        </>
    );
}
