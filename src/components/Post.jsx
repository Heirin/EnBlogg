import React from "react";

function Post(props){
  return(<div className="blog-posting">
<h2>{props.heading}</h2>
<p>{props.content}</p>
<img src="https://www.biggerbolderbaking.com/wp-content/uploads/2017/09/1C5A0996.jpg"/>
    </div>);
}

export default Post;
