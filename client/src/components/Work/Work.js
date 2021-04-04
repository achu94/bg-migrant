const Work = () => {

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.age.value);
    }
    
    const onSumitClickHandler = (e) => {
        console.log(e.target.parentNode.username.value);
    }

    const onUsernameChangeHandler = (e) => {
        console.log(e.target.value);
    }

    return(
        <div className="main" >
            <h1>Очаквайте скоро</h1>
            {/* <form onSubmit={onLoginSubmitHandler} >
                <label htmlFor="username">Username</label>
                <input onChange={onUsernameChangeHandler} type="text" id="username" name="name" />
                <br />
                <br />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age"/>
                <br />
                <br />
                <input type="submit" value="Send"/>
                <br /><br />
                <button type="button" onClick={onSumitClickHandler}>Click Me</button>
            </form> */}
        </div>
    );
}

export default Work;