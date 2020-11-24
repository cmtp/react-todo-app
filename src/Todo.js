import React, { useEffect, useState } from 'react';
import uuidv4 from 'uuid/v4';

import List from './List';

import './Todo.css';

const Todo = () => {
    const [task, setTask] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems([{
            id: uuidv4(),
            task: 'Pay the rent',
            completed: false,
          },
          {
            id: uuidv4(),
            task: 'Go to the gym',
            completed: false,
          },
          {
            id: uuidv4(),
            task: 'Do my homework',
            completed: false,
          }]);
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== '') {
            setItems([...items, { id: uuidv4(), task: task, completed: false }])
            setTask('');
        }
    }

    const handleOnChange = (e) => {
        const {
            target: { value },
        } = e;
        setTask(value);
    }

    const markAsCompleted = (id) => {
        const foundTask = items.find((task) => task.id === id);
        foundTask.completed = true;
        setItems([...items]);
    }

    const removeTask = (id) => {
        const filteredTasks = items.filter((task) => task.id !== id);
        setItems(filteredTasks);
    }


    return (
        <div className="Todo">
            <h1> New Task </h1>
            <form onSubmit={handleOnSubmit}>
                <input value={task} onChange={handleOnChange} />{' '}
            </form>
            <List items={items} markAsCompleted={markAsCompleted} removeTask={removeTask} />{' '}
        </div>
    );
}

export default Todo;
