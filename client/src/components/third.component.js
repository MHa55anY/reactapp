import React,{Component} from 'react'
import Table from 'react-bootstrap/Table'
import '../styling/third.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

//Create third component
export default class Third extends Component{

    constructor(props){
        super(props);

        this.state = {
            data:[]
        }

    }

    componentDidMount(){
        axios.get('https://reactmhy.herokuapp.com/api/')
        .then(res=>{

            this.setState({
                data:res.data
            })

            console.log(this.state.data)
        })

    }

    //Delete Functionality
    delete(id){
        console.log(id)

        axios.delete('https://reactmhy.herokuapp.com/api/delete/'+id)
        .then(res=>{
            console.log(res.data)

            
        })
        .catch((err)=>{
            console.log(err)
        });

        this.setState({
            data: this.state.data.filter(el=>el._id!==id)
        })

        }

    render(){

        return(
            <div className="third" >
                <h1 style={{marginTop:"0px"}}>Third Component</h1>
                <Table striped bordered hover className="table">
        <thead className="thead-light">
            <tr>
            <th>Name</th>
            <th>Type</th>
            
            </tr>
        </thead>
        <tbody>
            {this.state.data.map(cp=>{
                return <tr>
                    <td>{cp.name}</td>
                    <td>{cp.type}</td>
                    <td><Button onClick={()=>{this.delete(cp._id)}}>Delete</Button></td>
                </tr>
            })}
        </tbody>
        </Table>
                
            </div>
    
        )
    }



}
