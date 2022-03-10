import React, {useState,useEffect} from 'react'

import ReadTable from './ReadTable'


const Tables = () => {
  const[posts,setPosts] = useState([])

  const[addPost, setAddPost] = useState({
    id: 1,
    title: '',  
    date: ''
   

  })

  //Get the id 
  const [editPostId, setEditPostId]=useState(null)

  const [editFormData, setEditFormData] = useState({
    id: 1,
    title: '',
    date: ''
  })

  //Edit data value
  const handleEditChange = (input) => (e) => {
    e.preventDefault()
    setEditFormData({...editFormData, [input] : e.target.value})
  }

  //edit modal data
  const handleEditPostForm = (e, post) => {
    e.preventDefault()
    setEditPostId(post.id)

    const formValues = {
      title: post.title,
      date: post.date
      
    }
    setEditFormData(formValues)
  }

  //save form data
  const handleFormSave = (e) => {
    e.preventDefault()

    const savePost = {
      id : editPostId,
      title: editFormData.title,
      date: editFormData.date
      

    }

    const newPosts = [...posts]
    const formIndex = posts.findIndex((post) => post.id === editPostId)
    newPosts[formIndex] = savePost

    setPosts(newPosts) 
    setEditPostId(null)
    console.log(editPostId);
  }


  //Getter for form values
  const handleChange = (input) => (e) => {
    e.preventDefault()
    console.log(addPost)
    setAddPost({...addPost, [input]: e.target.value })
  }
//show change when checked
  const handleCheckChange = (e) => {
    
    alert("A To-Do List completeness was just changed!")

  }

  //Add data to the table
  const handleAddPost = (e) => {
    e.preventDefault()

    const newPost ={
      id: addPost.id,
      title: addPost.title,
      date: addPost.date
    }

    const newPosts = [...posts,newPost]
    setPosts(newPosts)
  }


  //Delete data

  const handleDelete = (e) => {
    e.preventDefault()

    const newPosts = [...posts]
    const formIndex = posts.findIndex((post) => post.id === editPostId)

    newPosts.splice(formIndex,1);
    setPosts(newPosts)
  }

    //Search Data
    const [searchQuery, setSearchQuery] = useState("")
    function search() {
      return posts.filter(row => row.title.toLowerCase().indexOf(searchQuery) > - 1)
  
    }



  

  return (
    <div>
        <div className="d-flex flex-row">
          <button type="button" className="me-3 btn btn-secondary ml-auto d-block mb-2 " 
          data-bs-toggle="modal" 
          data-bs-target="#addModalForm">
            Add To-Do +
          </button>

          <form className="row g-3 ms-auto">
          <div className="col-auto">
            <input
              type="text"
              className="form-control ms-auto"
              placeholder="search to-do"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
        </div>

        
      <table className="table  table-responsible">
        <thead>
          <tr>
            {/*All the colums in the rows*/}
            <th scope="col">Check</th>
            <th scope="col">To-Do</th>
            <th scope="col">Date</th>
            <th scope="col">Priority Color</th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
        {/* allows for search */}
        <ReadTable
            posts = {search(posts)}
            handleEditPostForm = {handleEditPostForm}
            handleCheckChange = {handleCheckChange}
          />
          
          
        </tbody>

       
        
      </table>


       {/*Add Modal */}
       <div className="modal fade" id="addModalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add To-Do +</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddPost}>
               
                <div className="mb-3">
                  <label className="form-label">To-Do</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="To Do"
                    required
                    onChange={handleChange("title")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    required
                    onChange={handleChange("date")}
                  /> 
                </div>
                
                

                <div className="modal-footer d-block">
                <button type="submit" data-bs-dismiss="modal" className="btn btn-warning float-end">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*Edit Row Modal */}
      <div className="modal fade" id="editModalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Row</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleFormSave}>
             
                <div className="mb-3">
                  <label className="form-label">To-Do</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={editFormData.title}
                    required
                    onChange={handleEditChange("title")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={editFormData.date}
                    required
                    onChange={handleEditChange("date")}
                  /> 
                </div>
               
                
                <div className="modal-footer d-block">
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-success float-end"
                  >Save To-Do</button>

                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-danger float-start"
                    onClick={handleDelete}
                  >Delete To-Do</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tables