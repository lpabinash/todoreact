
import React, { Component } from 'react';
import classes from "./Todo.module.css"

export class Todo extends Component {
   state={
       showTodo:"none",
       dis:"block"
   }


   onTodoClick = () => {
    this.setState({todo: "block"});
}

onButtonClick = () => {
    this.setState({todoInputField: "block"});
    this.setState({todo: "none"});
}

onTodoSubmitClick = (e) => {
    e.preventDefault();
    console.log("onTodoSubmitClick" + e.target.todoTextField.value);
    this.setState({todoItem: e.target.todoTextField.value});
    this.setState({value: ""})
    this.setState({new: "true"});
    this.setState({showTodo: "block"})
    this.setState({dis:"block"})
    localStorage.setItem("todoTextField", e.target.todoTextField.value);
}
onDeleteIconClick=()=>{
    this.setState({dis:"none"})
}
    render() {
        return (
            <div>
            <div onClick={this.onTodoClick} className={classes.todo}><h1>TODOs</h1></div>
                <div style={{display: this.state.todo}} className={classes.todoWrapper}>
                    <p>Add a todo to get started</p>
                    <button onClick={this.onButtonClick} className={classes.btn}>Add now</button>
                </div>
                <div style={{display: this.state.todoInputField}} className={classes.todoWrapper}>
                    <form onSubmit={this.onTodoSubmitClick} className={classes.form}>
                    <div style={{display:this.state.showTodo}}>
                            <div className={classes.wrapper} style={{display:this.state.dis}}>
                                     <input type="checkbox" name="todoCheckbox"/>
                                     <label style={{textDecoration:this.state.checkField}} className={classes.para}>{this.state.todoItem}</label>
                                     <i onClick={this.onDeleteIconClick} style={{cursor:"pointer"}} className="far fa-trash-alt delete-icon" aria-hidden="true"></i>
                            </div>
                            
                    </div> 
                        <input className={classes.inputField3} type="text" placeholder="Add New" name="todoTextField" />
                    </form>
                    </div>
            
                
                    </div>
    
        )
    }
}

export default Todo

