let todoId = 4

export const addTodo = (content) => ({
    type: 'ADD_TODO',
    content,
    id: todoId++
})