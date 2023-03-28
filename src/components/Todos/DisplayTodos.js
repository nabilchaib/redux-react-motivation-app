import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodos, updateTodos, completeTodos } from '../../redux/reducer';
import TodoItem from './TodoItem';
import { AnimatePresence, motion } from 'framer-motion';

const DisplayTodos = () => {
    const [sort, setSort] = useState('active');
    const todos = useSelector((state) => state);
    const dispatch = useDispatch();

    const removeTodo = (id) => dispatch(removeTodos(id));
    const updateTodo = (obj) => dispatch(updateTodos(obj));
    const completeTodo = (id) => dispatch(completeTodos(id));

    const filteredTodos = todos.filter((item) => {
        if (sort === 'active') {
            return !item.completed;
        } else if (sort === 'completed') {
            return item.completed;
        } else {
            return true;
        }
    });

    return (
        <div className='displaytodos'>
            <div className='buttons'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSort('active')}>Active</motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSort('completed')}>Completed</motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSort('all')}>All</motion.button>
            </div>
            <ul>
                <AnimatePresence>

                    {filteredTodos.length > 0 &&
                        filteredTodos.map((item) => (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={removeTodo}
                                updateTodo={updateTodo}
                                completeTodo={completeTodo}
                            />
                        ))}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default DisplayTodos;
