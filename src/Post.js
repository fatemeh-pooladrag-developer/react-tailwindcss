import React from 'react'
import { FiBookmark, FiMoreHorizontal, FiNavigation, FiMessageCircle, FiHeart } from "react-icons/fi";

const Post = ({ post }) => {

    const urlImage = `https://picsum.photos/id/${post.id}/200`;
    return (

        <a className="rounded  shadow-lg mx-3  my-3 cursor-pointer" style={{ backgroundColor: '#FFF' }} >
            <div className="px-4 my-3 flex justify-between items-center">
                <div className="flex  items-center" ><div className="bg-gray-500 w-4 h-4 rounded-lg ml-1"></div><p>عنوان</p></div>
                <div><FiMoreHorizontal /></div>
            </div>
            <div className="  self-center mx-3 my-3 ">
                <img src={urlImage} alt="" className="w-full h-full border rounded-lg" />
            </div>
            <div className="px-3 mb-2 flex justify-between items-center">
                <div className="flex justify-between " > <FiHeart className="ml-2 text-lg" /> <FiMessageCircle className="ml-2 text-lg" /><FiNavigation className="text-lg" /></div>
                <div> <FiBookmark className="text-lg" /> </div>
            </div>
            <div className="px-4 mb-2 content-end">
                <p className="text-sm text-gray-500 text-right">{post.likeNumber} لایک</p>
            </div>
            <div className="px-3 mb-2 flex  items-center " ><div className="bg-gray-500 w-4 h-4 rounded-lg ml-1"></div><p>عنوان</p></div>
            <div className="px-4 mb-2 flex justify-between items-center">
                <p className="text-right">
                    {post.descrition.slice(0, 120)}
                    ...
                </p>
            </div>
            <div className="px-4 mb-1 content-end">
                <p className="text-sm text-gray-500  text-right">مشاهده {post.commentNumber} نظر</p>
            </div>
            <div className="px-4 mb-4 content-end ">
                <p className="text-sm text-gray-500  text-right">{post.date}</p>
            </div>
        </a >


    )
}

export default Post
