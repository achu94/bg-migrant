//! controlled Components
import { Component } from 'react';

const options = [
    {label: 'IT', value: 'it'},
    {label: 'Engineer', value: 'engineer'},
    {label: 'Unemployed', value: 'unemployed'},
]


class Blog extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: 'Achu',
            age : 18,
            bio : 'Achu is King.',
            occupation : 'unemployed',
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onLoginSubmitHandler(e) {
        e.preventDefault();
    }

    onLoginSubmitControlled(e) {
        e.preventDefault();

        const {username, age } = this.state;
    }

    onChangeHandler(e){
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        return(
            <div className="main comming_soon" >
            <h1>Очаквайте скоро</h1>
            {/* <form onSubmit={this.onLoginSubmitHandler} >
                <label htmlFor="username">Username</label>
                <input onChange={this.onChangeHandler} type="text" id="username" name="username" value={this.state.username} />
                <br />
                <br />
                <label htmlFor="age">Age</label>
                <input onChange={this.onChangeHandler} type="number" id="age" name="age" value={this.state.age} />

                <br />
                <br />
                <label htmlFor="occupation"></label>
                <select name="occupation" id="occupation" onChange={this.onChangeHandler} value={this.state.occupation}>
                    {
                        options.map( (x,index) => (
                            <option key={index + x.value} value={x.value}>{x.label}</option>
                        ))
                    }
                </select>
                <br />
                <br />
                <textarea onChange={this.onChangeHandler} name="bio" value={this.state.bio} />
                <br />
                <br />
                <input type="submit" value="Send"/>
                <input type="submit" value="Send" onClick={this.onLoginSubmitControlled.bind(this)} />
                <br /><br />
                <button type="button" onClick={this.onSumitClickHandler}>Click Me</button>
            </form> */}
        </div>
        );
}

}

export default Blog;