import React from 'react'
import './Course.css'
function Course() {
  return (
    <>
        <h1> Courses</h1>
        <div className='course'>
       {/* <div><h1>Courses</h1></div>  */}
        <div className='stack'>
            <img className='pictures' src='https://crampete-staticfiles.s3.ap-south-1.amazonaws.com/images/blog/full-stack-development-project.png' alt='fullstack'/>
            <span> Full-stack Development</span>
        </div>
        <div className='stack'>
            <img className='pictures' src='https://codersera.com/blog/wp-content/uploads/2021/08/Data-Science-project-ideas-.jpeg' alt='data science'/>
            <span> Data Science</span>
        </div>
        <div className='stack'>
            <img className='pictures' src='https://cdn.hackr.io/uploads/posts/large/1597418704Ko2SSJxhVk.png' alt='mobilee project'/>
            <span> Android Development</span>
        </div>
        <div className='stack'>
            <img className='pictures' src='https://www.itu.int/en/ITU-D/Cybersecurity/PublishingImages/Projects.jpg' alt='Cyber security'/>
            <span> Cyber Security</span>
        </div>

    </div>
    </>
    
  )
}

export default Course