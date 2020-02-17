import React from 'react';

function Todos({ todos, deleteItem }) {
	const todosList = todos.length ? (
		todos.map((todo) => {
			return (
				<div
					onClick={() => {
						deleteItem(todo.id);
					}}
					className="todos__item "
					key={todo.id}
				>
					<span className="todos__circle" />
					<div className="todos__text">{todo.body}</div>
				</div>
			);
		})
	) : (
		<div className="notification">
			<h1 className="title">Nothing to complete, yay!</h1>
		</div>
	);
	return <div className="todos">{todosList}</div>;
}

export default Todos;
