import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const TaskManagementDashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasklist')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const onDragEnd = async (result) => {
    if (!result.destination) return; // dropped outside the list

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);

    // Update the server with the new order of tasks
    try {
      await axios.post('/updateTaskOrder', { tasks: updatedTasks });
    } catch (error) {
      console.error('Error updating task order', error);
    }
  };

  const renderTasks = (priority) => {
    return tasks.map((task, index) => {
      if (task && task.priority === priority) {
        return (
          <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className="bg-white p-2 mb-2 border rounded-md"
              >
                <strong>{task.title}</strong>
                <p>{task.description}</p>
              </div>
            )}
          </Draggable>
        );
      }
      return null;
    });
  };

  return (
    <div>
      <div>
        <SectionTitle
          heading={'Task List'}
          subheading={'This is employee site'}
        />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex">
          <Droppable droppableId="low" direction="vertical">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex-1 p-4 border rounded-md mr-4"
              >
                <h2 className="text-lg text-center text-white font-semibold mb-4">To-Do</h2>
                <hr className='my-4' />
                {renderTasks('low')}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="moderate" direction="vertical">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex-1 p-4 border rounded-md mr-4"
              >
                <h2 className="text-lg text-center text-white font-semibold mb-4">Ongoing</h2>
                <hr className='my-4' />
                {renderTasks('moderate')}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="high" direction="vertical">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex-1 p-4 border rounded-md"
              >
                <h2 className="text-lg text-center text-white font-semibold mb-4">Completed</h2>
                <hr className='my-4' />
                {renderTasks('high')}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskManagementDashboard;
