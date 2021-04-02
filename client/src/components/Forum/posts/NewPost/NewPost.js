import React, {useState, useRef, useEffect } from "react";
import SunEditor from 'suneditor-react';

import './NewPost.css';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

import * as postServices from '../../postServices';
import * as isAuthServices from '../../../../services/isAuthService';

export default function NewPost({
    history,
}) {

    //! idk why need, copied from documentation.
    const [isLogged, setIsLogged] = useState(false);
    const editorRef = useRef();
    // useEffect(() => {
    //     // Get underlining core object here
    //     // Notice that useEffect is been used because you have to make sure the editor is rendered.
    //     // console.log(editorRef.current.editor.core);

    //     isAuthServices.isAuth()
    //         .then( (res) => {
    //             if(res.error){
    //                 alert('Cannot get cookie.')
    //                 return;
    //             }
                
    //             setIsLogged(true);
                
    //             if(!isLogged) {
    //                 history.push('/login');
    //             }
    //             else {
    //                 history.push('/posts/new');
    //             }
                
    //         })
    // }, []);
    const onSubmitLoginHandler = (e) => {
        e.preventDefault();
    
        const postData = {
            title: e.target.title.value,
            body: e.target.body.value,
            tags: e.target.tags.value
        };

        return;
        //todo Back-End need to setup.
        postServices.newPost(postData)
            .then((res) => {
                if(res.error){
                    alert('Some thing went wrong!');
                }
                else {
                    history.push('/posts/' + res.id);
                    // window.location.href = '/';
                }     
            })
    }

    return (
        <div className="main">
            <form onSubmit={onSubmitLoginHandler}  className="post-question" >
                <div className="posts-title-wrapper" >
                    <label className="new-post-title" htmlFor="title">Заглавие</label>
                    <div className="new-post-second-info" >
                        Бъдете конкретни и си представете, че задавате въпрос на друг човек
                    </div>
                    <input type="text" id="title" name="title" />
                </div>

                <div className="posts-body-wrapper">
                    <label className="new-post-body" htmlFor="body">Тяло</label>
                    <div className="new-post-second-info" >
                        Включете цялата информация, от която някой ще се нуждае, за да отговори на вашия въпрос
                    </div>

                    <div className="posts-text-editor">
                        <SunEditor name="body" ref={editorRef} height="100"/>
                    </div>
                </div>

                <div className="posts-tags-wrapper">
                    <label className="new-post-tags" htmlFor="tags">Етикети</label>
                    <div className="new-post-second-info" >
                        Добавете до 1 маркера, за да опишете за какво става въпрос във вашия въпрос
                    </div>
                    <input type="text" id="tags" name="tags" />
                </div>

                <input type="submit" className="forum-btn-new-post" value="изпрати" />
            </form>
        </div>
    )
}
