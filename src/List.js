/* eslint-disable */
import React from 'react';

const List = (props) => (
  <ul>
    {props.items.map((item, key) => (
      <li key={key} className={`${item.completed ? 'completed' : 'pending'}`}>
        {item.task}

        <div className="actions">
          <span
            role="button"
            className={item.completed ? 'hide' : 'done'}
            onClick={() => props.markAsCompleted(item.id)}
          >
            <i className="fa fa-check" />
          </span>
          <span role="button" className="trash" onClick={() => props.removeTask(item.id)}>
            <i className="fa fa-trash" />
          </span>
        </div>
      </li>
    ))}
  </ul>
);

export default List;
