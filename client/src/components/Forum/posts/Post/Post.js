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
  });

  return (
    <div className="main">
      <div style={{margin: '1rem'}} >
          <div className="post-title">{postData.title}</div>
          <div className="post-body">{postData.author ? parse(postData.body): 'asd '}</div>
          <div className="post-author">{postData.author ? postData.author.username : ''}</div>
          <div className="post-footer">{postData.created_at ? postData.created_at : ''}</div>
      </div>
      <div className="post-topic">
        <button className="forum-btn-new-post" >Отговори</button>
        <textarea className="post-topic-textarea" name="new-topic" id="new-topic" cols="30" rows="10"></textarea>
      </div>
      <ul className="post-topics">
        <h2>Komentari</h2>
        <li>
          <div>
            <div style={{padding: '0.3rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, suscipit.</div>
            <div className="topic-user-info">
              <span > 2021-04-03 17:33</span>
              <span className="topic-author" >~ Author</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div style={{padding: '0.3rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, suscipit.</div>
            <div className="topic-user-info">
              <span > 2021-04-03 17:33</span>
              <span className="topic-author" >~ Author</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div style={{padding: '0.3rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, suscipit.</div>
            <div className="topic-user-info">
              <span > 2021-04-03 17:33</span>
              <span className="topic-author" >~ Author</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div style={{padding: '0.3rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, suscipit.</div>
            <div className="topic-user-info">
              <span > 2021-04-03 17:33</span>
              <span className="topic-author" >~ Author</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div style={{padding: '0.3rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, suscipit.</div>
            <div className="topic-user-info">
              <span > 2021-04-03 17:33</span>
              <span className="topic-author" >~ Author</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div style={{padding: '0.3rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, suscipit.</div>
            <div className="topic-user-info">
              <span > 2021-04-03 17:33</span>
              <span className="topic-author" >~ Author</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div style={{padding: '0.3rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, suscipit.</div>
            <div className="topic-user-info">
              <span > 2021-04-03 17:33</span>
              <span className="topic-author" >~ Author</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Post;
