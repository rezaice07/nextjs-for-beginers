import axios from "axios"
import Link from "next/link"


const Post = ({ postList }) => {

    return (
        <div>

            <h1>Post List....</h1>
            <ul>
                {
                    postList.map((item, index) => {
                        return (
                            <Link key={index} href={`/post/${item.id}`} passHref>
                                <li >{item.id}. {item.title} </li>
                            </Link>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Post


export const getServerSideProps = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    const { data } = res;
    //console.log(data)
    return {
        props: {
            postList: data
        }
    }
}