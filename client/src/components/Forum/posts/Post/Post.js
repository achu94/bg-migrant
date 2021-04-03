import parse from "html-react-parser";

import { useState, useEffect } from "react";

import "./Post.css";

import * as postServices from "../../postServices";

const Post = ({ history, match }) => {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
    tags: "",
    author : {
        _id: '',
        username : ''
    }
  });

  useEffect(() => {
    postServices.getPost(match.params.id).then((data, err) => {
      if (err) return;

      setPostData(data);
    });
  }, []);

  return (
    <div className="main">
      <div style={{margin: '1rem'}} >
          <div class="post-title">{postData.title}</div>
          <div class="post-body">{parse(postData.body)}</div>
          <div class="post-author">{postData.author}</div>
          <div class="post-body">{postData.created_at}</div>
      </div>
    </div>
  );
};

export default Post;
