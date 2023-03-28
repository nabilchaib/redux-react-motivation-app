import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos } from '../../redux/reducer';
import { GoPlus } from 'react-icons/go'
import { motion } from 'framer-motion';

const Todos = () => {

    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleAddTodo = () => {
        dispatch(addTodos({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
        }));
    };

    return (
        <div className='addTodos'>
            
            <input
                type="text"
                onChange={(e) => handleChange(e)}
                className="todo-input"
            />
            <motion.button
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9}}
                
                className="add-btn" onClick={() => handleAddTodo()}>
                <GoPlus />
            </motion.button>
                    

        </div>
    );
};

export default Todos;
