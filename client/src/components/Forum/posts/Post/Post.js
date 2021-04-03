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
          <div className="post-title">{postData.title}</div>
          <div className="post-body">{postData.author ? parse(postData.body): 'asd '}</div>
          <div className="post-author">{postData.author ? postData.author.username : ''}</div>
          <div className="post-footer">{postData.created_at ? postData.created_at : ''}</div>
      </div>
    </div>
  );
};

export default Post;
