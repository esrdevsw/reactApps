import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import Slider from "./Slider";
import './style-fb.css';


const Posts = () => {

    //const [sliderValue, setSliderValue] = useState(0);


    const [posts, setPosts] = useState([
        { id: 1, text: "Post 1" },
        { id: 2, text: "Post 2" },
        // { id: 3, text: "Post 3"}
    ]);
    const [newPostText, setNewPostText] = useState("");
    const [editPostId, setEditPostId] = useState(null);
    const [editPostText, setEditPostText] = useState("");

    const handlePostAdd = () => {
        setPosts([...posts, { id: posts.length + 1, text: newPostText }]);
        console.log(posts);
        //addPost(newPostText, sliderValue);
        setNewPostText("");
    };

    const handlePostDelete = id => {
        setPosts(posts.filter(post => post.id !== id));
    };

    const handlePostEdit = id => {
        setEditPostId(id);
        const postToEdit = posts.find(post => post.id === id);
        setEditPostText(postToEdit.text);
    };

    const handlePostUpdate = id => {
        setPosts(
            posts.map(post =>
                post.id === id
                    ? { id: post.id, text: editPostText }
                    : post
            )
        );
        setEditPostId(null);
    };

    const renderPost = post => {
        if (editPostId === post.id) {
            return (
                <div key={post.id}>
                    <div className="post-box-edit">
                        <textarea
                            value={editPostText}
                            onChange={e => setEditPostText(e.target.value)}
                        />
                        <div className="post-action">
                            <Slider />
                            {/* <Slider setValue={setSliderValue} /> */}
                            <button className="post-action-btn" onClick={() => handlePostUpdate(post.id)}>
                                <FontAwesomeIcon icon={faSave} />
                            </button>

                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div key={post.id}>
                <div className="post-box">
                    <p>{post.text}</p>
                    <div className="post-action-btns">
                        <button className="post-action-btn" onClick={() => handlePostEdit(post.id)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="post-action-btn" onClick={() => handlePostDelete(post.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                </div>

            </div>
        );
    };

    return (

        <div className="postsText-container">
            <div className="post-box-input">
                <h2>Posts</h2>
                <textarea
                    value={newPostText}
                    onChange={e => setNewPostText(e.target.value)}
                />
                <div className="post-action-btns">
                    <Slider /><button className="post-action-btn" onClick={handlePostAdd}>Post</button>
                </div>
            </div>
            {posts.map(renderPost)}
        </div>
    );
};

export default Posts;
