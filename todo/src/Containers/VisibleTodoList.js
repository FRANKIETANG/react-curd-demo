import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import TodoList from '../Components/TodoList'
import { toggleTodo } from '../action'
import getVisibleTodos from '../selector'

const mapStateToProps = (state, { match }) => ({
    todos: getVisibleTodos(
        state,
        match.params.filter || 'all'
    )
})

const mapDispathToProps = (dispatch) => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id))
    }
})

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispathToProps
)(TodoList))

export default VisibleTodoList