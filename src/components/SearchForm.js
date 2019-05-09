import React,{ Component } from 'react';
import * as GLOBAL from "../global/Constants";

class SearchForm extends Component {
    state = {inputMovie:''};

    handleChange = (e)=> {
        this.setState ({inputMovie:e.target.value});
    }
    handleSubmit = (e)=> {
        e.preventDefault();
        //react add a fetch polyfill
        //so it can be used in older browser
        fetch(`${GLOBAL.BASE_URI_OMDB}?apikey=${GLOBAL.API_KEY}&s=${this.state.inputMovie}`)
        .then(res =>res.json())
        .then(results=>{
            const {Search=[]}=results
            console.log(results)
            this.props.onMoviesResults(Search)
            })
     }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input className="input" onChange={this.handleChange} placeholder="Find a repository" />
                </div>
                <div className="control">
                    <button className="button is-info" >
                    Search
                    </button>
                </div>
            </div>
            </form>
        );
    }
}
export default SearchForm;


