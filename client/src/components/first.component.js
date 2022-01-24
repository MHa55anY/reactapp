import React,{Component} from 'react'
import { Button } from 'react-bootstrap'
import '../styling/first.css'

import axios from 'axios'
export default class First extends Component{
    constructor(props){
        super(props);
        this.onchangename = this.onchangename.bind(this);
        this.onchangetype = this.onchangetype.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
            this.state = {
                name:'',
                type:''
            }
    }

    onchangename(name){
    
        this.setState({
            name :name.target.value
        })

    }

    onchangetype(type){
    
        this.setState({
            type : type.target.value 
        })

    }

    onsubmit(e){
    

        const prod = {
            name : this.state.name,
            type: this.state.type
        }
        
        axios.post('http://localhost:5000/api/add',prod)
        .then(res=>console.log(res.data))
    }

    render(){

        return(
            <div className="first" >
            <div className="container">
            <h1>first Component</h1>
                
            <form onSubmit={this.onsubmit}>
            <div className="form-group">
                <label>Name </label>
                <input type="text" required className="form-control" value={this.state.name} onChange={this.onchangename}></input>
            </div>

            <div className="form-group">
                <label>Type</label>
                <input type="text" required className="form-control" value={this.state.type} onChange={this.onchangetype}></input>
            </div>

            <div className="form-group">
            <input type="submit" value="ADD" className="btn btn-primary"></input>
            </div>
            </form>
            </div>
            </div>
       
        )
    }



}