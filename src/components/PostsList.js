import React from 'react'

const PostsList = ({ posts, setPosts, setEditPost, isEditButtonActive, setIsEditButtonActive }) => {

    const handleComplete = (post) => {
        setPosts(
            posts.map(item => {
                if(item.id === post.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) => {
        const findPost = posts.find(post => post.id === id);
        setEditPost(findPost);
        if(!isEditButtonActive){
            setIsEditButtonActive(current => !current);
        } else{
            setIsEditButtonActive(true);
        }
    }

    const handleDelete = ({id}) => {
        setPosts(posts.filter(post => post.id !== id));
    }

    return (
        <div>
        {
          posts.map(post => (
              <li className='list-item' key={post.id}>
                  <input 
                      type='text' 
                      value={post.title} 
                      className={`list ${post.completed ? "complete"  : "" }`}
                      onChange={e => e.preventDefault()} 
                  />
                  <div className='button-line'>
                      <button className='complete-button' onClick={() => handleComplete(post)}>
                          <i className='fa fa-check-circle'></i>
                      </button>
                      <button className='edit-button' onClick={() => handleEdit(post)}>
                          <i className='fa fa-edit'></i>
                      </button>
                      <button className='delete-button' onClick={() => handleDelete(post)}>
                          <i className='fa fa-trash'></i>
                      </button>
                  </div>
                  
              </li>
          ))
        }
      </div>
  )
}

export default PostsList