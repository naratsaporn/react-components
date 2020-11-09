import React from 'react';
import PropTypes from 'prop-types';

function Post({id,title , deletPost }){
    return (
        <div className="Post">
            <button className="Post_delete" onClick={() => deletPost(id)}>x</button>
            <div className="Post_title">{title}</div>
            <img className="Post_image" src={'https://source.unsplash.com/random?sig=${id}'} />
        </div>
    )
}

Post.propTypes ={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletPost:PropTypes.func.isRequired
}

export default Post;