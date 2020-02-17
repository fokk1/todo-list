import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {
	state = {
		todos: []
	};

	deleteItem = (id) => {
		const todos = this.state.todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({
			todos
		});
	};

	addItem = (item) => {
		item.id = Math.random();
		let todos = [ ...this.state.todos, item ];
		this.setState({
			todos
		});
	};

	render() {
		return (
			<div className="App wrapper">
				<div className="container">
					<AddTodo addItem={this.addItem} />
					<Todos todos={this.state.todos} deleteItem={this.deleteItem} />
				</div>
			</div>
		);
	}
}

export default App;
