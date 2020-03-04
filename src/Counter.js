import React, { PureComponent } from 'react'

export class Counter extends PureComponent {
    state={
        count:1
    }
    onbtnClick=()=>{
       
        const cnt=this.state.count+1;
        
        if(cnt<=10){
            this.setState({count:cnt})
            // console.log(this.state.count)
        }
    }
    render() {
        return (
            <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.onbtnClick}>update</button>
            </div>
        )
    }
}

export default Counter
