import { useState, useEffect, useRef,useContext } from "react";
import parse from "html-react-parser";
import { IsAuthContext } from '../../../../Context/IsAuthContext';

import "./Post.css";

import * as postServices from "../../postServices";

const Post = ({ history, match }) => {
  
  let userInfo = useContext(IsAuthContext);
  const [postData, setPostData] = useState({
    title: "",
    body: "",
    tags: "",
    author : {
        _id: '',
        username : ''
    }
  });
  const [newTopic, setNewTopic] = useState({
    body : ''
  })
  const [isLoading, setIsLoading] = useState(true);

  const topicInput = useRef(null);

  const sendTopic = () => {
    if(!newTopic) return alert('Kommetar ist leer.')
    if(!userInfo.userData.isAuth) return history.push('/login')
    

    setIsLoading(true);
    postServices.newTopic(newTopic, match.params.id).then( (topics, err) => {
      if (err) return;
      topicInput.current.value = '';
      setNewTopic('');
    })
  }

  const topicHandle = (e) => {
    setNewTopic({body : e.target.value});
  }

  useEffect(() => {
    postServices.getPost(match.params.id).then((data, err) => {
      if (err) return;

      setPostData(data);
      setIsLoading(false);
    });

  }, [isLoading]);

  return (
    <div className="main">
      <div style={{margin: '1rem'}} >
          <div className="post-title">{postData.title ? postData.title : 'Title'}</div>
          <div className="post-body">{postData.author ? parse(postData.body): 'Body'}</div>
          <div className="post-author">{postData.author ? postData.author.username : 'Author'}</div>
          <div className="post-footer">{postData.created_at ? postData.created_at : 'Time'}</div>
      </div>
      <div className="post-topic">
        <button onClick={sendTopic} className="forum-btn-new-post" >Отговори</button>
        <textarea 
          ref={topicInput}
          onChange={topicHandle}
          className="post-topic-textarea"
          name="new-topic"
          id="new-topic"
          rows="5">
        </textarea>
      </div>
      <ul className="post-topics">
        <h2>Коментари</h2>
        { postData.post_topics && !isLoading ? (
          postData.post_topics.map(topic => {
            return (
              <li key={topic._id}>
                <div>
                  <div style={{padding: '0.3rem'}}>{topic.body}</div>
                  <div className="topic-user-info">
                    <span > {topic.created_at} </span>
                    <span className="topic-author" >~ {topic.author.username}</span>
                  </div>
                </div>
              </li>
            )
          })
          ) : (
            <div className="loader"></div>
          )}
      </ul>
    </div>
  );
};

export default Post;
