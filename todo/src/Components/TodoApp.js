import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const TodoApp = () => (
    <div>
        <AddTodo />
        <TodoList todos={todos} />
    </div>
)

export default TodoApp