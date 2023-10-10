import React from 'react'
import './BlogCard.css'

function BlogCard({coverimage,category,title,descriptionpart}) {
    return (
        <div className='body'>
                <div className="blog-card">
                    <img className="post-image" src={coverimage} alt='' />
                    <div className="article-details">
                        <h4 className="post-category">{category}</h4>
                        <h3 className="post-title">{title}</h3>
                        <p className="post-description">{descriptionpart}...</p>
                        <p className="post-author">By Samet USTAOGLU</p>
                    </div>
                </div>
        </div>
    )
}

export default BlogCard
