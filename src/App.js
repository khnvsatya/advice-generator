import React from "react";
import axios from 'axios'
import './App.css'

class App extends React.Component{
    state={
        advice : ''
    };
    componentDidMount(){
        this.fetchdata();
    }
    fetchdata =()=>{

        axios.get("https://api.adviceslip.com/advice")
        .then((response)=>{
            // const {advice} = response.data.slip;
            console.log(response.data.slip.advice)
            this.setState({advice: response.data.slip.advice})
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    render(){
        return(
            <div className="app">
            <div className="card">
            <h1 className="header">{this.state.advice}</h1>
            <button onClick={this.fetchdata}>click me for next advice</button>
            </div>
            </div>
        )
    }
}

export default App;