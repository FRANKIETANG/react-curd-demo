import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

import todos from '../store'

const TodoApp = () => (
    <div>
        <AddTodo />
        <TodoList todos={todos} />
    </div>
)

export default TodoApp