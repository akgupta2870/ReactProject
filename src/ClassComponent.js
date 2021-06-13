import React,{Component} from 'react';
export class ClassComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"Rahul"
        }
        this.click=this.click.bind(this);
    }

    click(){
        console.log(this);
        this.setState({lastname:"Abc",name:'abc'});
    }
render(){
    console.log(this.state);

    return( 
        <>
         <button onClick={this.click}>Click</button>
        <p>{this.state.name}-{this.state.lastname}</p>
        </>
    );
}
}