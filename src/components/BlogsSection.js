import React from 'react'
import MainTitle from './MainTitle'
import blogs from '../blogs'

function BlogsSection() {
  return (
    <div className='BlogsSection'>
        <div className="Section">
            <div className="title-con">
                <MainTitle title={'Popular Blogs'} subtitle={'Our Top Blogs'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'}/>
            </div>
            <div className="blogs">
                 {
                    blogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="image">
                                <img src={blog.image} alt=''/>
                            </div>
                            <h6>{blog.title}</h6>
                            <div className="user">
                                <p>Creator:</p>
                                <p>{blog.name}</p>
                            </div>
                        </div>
                    })
                 }
            </div>
        </div>
    </div>
  )
}

export default BlogsSection