import React from 'react';

class AddTodo extends React.Component {
	state = {
		body: ''
	};

	getSubmitted = (event) => {
		event.preventDefault();
		this.props.addItem(this.state);
		this.setState({
			body: ''
		});
	};

	getChanged = (event) => {
		this.setState({
			body: event.target.value
		});
	};

	render() {
		return (
			<div className="to-do">
				<form className="to-do__inner" onSubmit={this.getSubmitted}>
					<input
						className="input"
						type="text"
						placeholder="Type your task..."
						onChange={this.getChanged}
						value={this.state.body}
					/>
				</form>
			</div>
		);
	}
}

export default AddTodo;
