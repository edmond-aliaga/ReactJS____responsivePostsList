import React, { useEffect, useRef } from 'react';
import { TextField, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { v4 } from 'uuid';

const FormPosts = ({ 
        input, 
        setInput, 
        posts, 
        setPosts, 
        editPost, 
        setEditPost, 
        isEditButtonActive, 
        setIsEditButtonActive 
    }) => {

    const ref = useRef(null);

    useEffect(() => {
        if(editPost) {
            setInput(editPost.title)
        } else{
            setInput("")
        }
    },[ editPost, setInput ])

    const updatePost = (id, title, completed) => {
        const newPost = posts.map((post) => (post.id === id ? {id, title, completed} : post));
        setPosts(newPost)
        setEditPost("")
    }

    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!editPost) {
            setPosts([...posts, {id: v4(), title: input, completed: false}]);
            setInput("");
        } else {
            updatePost(editPost.id, input, editPost.completed)
        }
    }

    const handleClick = () => {
        ref.current.focus();
        setIsEditButtonActive(false);
    }

    return (
    <form className='line' onSubmit={onFormSubmit}>
        <TextField 
            // id="filled-basic" 
            label="Enter a Post..." 
            variant="filled" 
            InputLabelProps={{
                style: { color: '#fff' },
            }}
            value={input}
            autoFocus
            inputRef={ref}
            onChange={onInputChange}
            className='input-mode'
            inputProps={ { style: { size: '55px', color: 'white' } } }
            InputProps={{
                endAdornment: 
                    <div>
                        <Button 
                            variant="contained" 
                            endIcon={<SendIcon />}
                            style={{
                                borderRadius: 35,
                                backgroundColor: isEditButtonActive ? 'green' : '#d69146',
                                padding: "18px 18px",
                                fontSize: "14px",
                                color: '#000'
                            }}
                            type='submit'
                            onClick={handleClick}
                        >
                            { editPost ?  "Edit" : "Add" }
                        </Button>
                    </div>
            }}
        />

    </form>
  )
}

export default FormPosts