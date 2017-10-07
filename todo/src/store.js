import { todos } from './reducer'
import { createStore } from 'redux'

const store = createStore(todos)

export default store

const defaultTodos = [
    {
        id: 1,
        content: "学习 React"
    },
    {
        id: 2,
        content: "学习 Redux"
    },
    {
        id: 3,
        content: "学习 react-router"
    }
]
