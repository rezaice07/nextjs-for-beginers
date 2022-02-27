import axios from 'axios'
import Head from 'next/head'
import React from 'react'
import PostDetailAd from '../../componets/PostDetailAd'

const PostDetail = ({ post }) => {
    return (
        <div>
            <Head>
                <meta property="og:url" content="https://www.daraz.com.bd/shop/skmei" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="adipisci placeat illum aut reiciendis qui" />
                <meta property="og:description" content="Shop online with UGO now! Visit UGO on Daraz." />
            </Head>
            

            <PostDetailAd />


            <h1> Post Detail</h1>
            <h4>Title: {post.title}</h4>
            <p>Body: {post.body}</p>
        </div>
    )
}

export default PostDetail


export const getServerSideProps = async (context) => {

    const { params } = context;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);

    const { data } = res;
    //console.log(data)
    return {
        props: {
            post: data
        }
    }
}