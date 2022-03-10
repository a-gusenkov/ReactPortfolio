import React from 'react'


const ReadTable = ({posts, handleEditPostForm,handleCheckChange}) => {
    return (
        <>
        
          {posts.map((post) => 
          
          <tr key = {post.id}>

            <td>
              

              <input type="checkbox" id="checkbox" onClick={(e) => handleCheckChange(e)}
               ></input>
            </td>

           
            <td>{post.title}</td>
            <td>{post.date}</td>
            

            <td>
              <form>
                <input type="color" id="color" ></input>
              </form>
            </td>
           
            <td>          
            <button type="button" className="me-3 btn btn-primary ml-auto d-block mb-2 edit-to-do" 
              data-bs-toggle="modal" 
              data-bs-target="#editModalForm"
              onClick={(e) => handleEditPostForm(e,post)}>
              Edit/Delete
            </button></td>
          
          </tr>
          )}
        </>
    )
}

export default ReadTable
