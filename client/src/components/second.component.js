import React,{Component} from 'react'
import axios from 'axios' 
import '../styling/second.css'

//Create second component
export default class Second extends Component{
    constructor(props){
        super(props)

        this.state={
            count:''
        }
        
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/apicount')
        .then(res=>{
            this.setState({
                count:res.data[0].count
            })
        })
    }

    render(){

        return(
            <div className="second" >
                <h1>Second Component</h1>
            <p>Items added {this.state.count} no. of times</p>
                
            </div>
    
        )
    }



}