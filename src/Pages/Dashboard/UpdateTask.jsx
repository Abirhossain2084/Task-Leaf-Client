// CreateTask.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useAuth from '../../Hooks/useAuth';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateTask = () => {
    const { handleSubmit, control, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const user = useAuth();
    console.log(user.user.displayName);
    console.log(user.user.email);

    const params = useParams();

    console.log(params.id);
   
   
    const task =useLoaderData();
    console.log(task);

   
    const onSubmit = async (data) => {
        try {
            // Assuming you have the task ID available (replace 'YOUR_TASK_ID' with the actual task ID)
            const taskId = task._id;

            // Make a PATCH request to update the task
            const response = await axiosSecure.patch(`/tasklist/${taskId}`, data);

            // Check if the update was successful
            if (response.status === 200) {
                Swal.fire('Success', 'Task updated successfully', 'success');
            } else {
                Swal.fire('Error', 'Failed to update task', 'error');
            }
        } catch (error) {
            console.error('Error updating task:', error);
            Swal.fire('Error', 'An error occurred while updating the task', 'error');
        }
    };

    return (
        <div>
            <div>
                <SectionTitle
                    heading={'Update Task'}
                    subheading={'This is employee site'}
                />
            </div>
            <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md ">
                <h1 className="text-2xl text-center text-white font-bold mb-4">Update the task "{task.title}"</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4"> 
                        <label htmlFor="title" className="block text-sm font-medium text-white">
                            Title
                        </label>
                        <Controller
                            name="title"
                            control={control}
                            defaultValue={task.title}
                            
                            render={({ field }) => <input {...field} className="mt-1 p-2 w-full border rounded-md" />}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-white">
                            Description
                        </label>
                        <Controller
                            name="description"
                            control={control}
                            defaultValue={task.description}
                            render={({ field }) => <textarea {...field} className="mt-1 p-2 w-full border rounded-md" />}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="deadline" className="block text-sm font-medium text-white">
                            Deadline
                        </label>
                        <Controller
                            name="deadline"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input type="date" {...field} className="mt-1 p-2 w-full border rounded-md" />}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="priority" className="block text-sm font-medium text-white">
                            Priority
                        </label>
                        <Controller
                            name="priority"
                            control={control}
                            defaultValue="low"  // Set the default value to "low"
                            render={({ field }) => (
                                <select {...field} className="mt-1 p-2 w-full border rounded-md">
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                </select>
                            )}
                        />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;
