// CreateTask.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useAuth from '../../Hooks/useAuth';

const CreateTask = () => {
    const { handleSubmit, control, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const user = useAuth();
    console.log(user.user.displayName);
    console.log(user.user.email);

    const onSubmit = async (data) => {
        try {
            const userData = {
                userName: user.user.displayName,
                email: user.user.email,
            };

            // Merge task data with user data
            const requestData = { ...data, ...userData };

            const response = await axiosSecure.post('/tasklist', requestData);

            if (response.status === 200) {
                console.log('Task created successfully');
                // Optionally, you can redirect or perform other actions after successful task creation
                reset(); // Clear the form fields

                // Show SweetAlert upon successful task creation
                Swal.fire({
                    icon: 'success',
                    title: 'Task Created',
                    text: 'Your task has been created successfully!',
                });
            } else {
                console.error('Failed to create task');
            }
        } catch (error) {
            console.error('Error creating task', error);
        }
    };

    return (
        <div>
            <div>
                <SectionTitle
                    heading={'Employee Site'}
                    subheading={'This is employee site'}
                />
            </div>
            <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md ">
                <h1 className="text-2xl text-center text-white font-bold mb-4">Create new task Task</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-white">
                            Title
                        </label>
                        <Controller
                            name="title"
                            control={control}
                            defaultValue=""
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
                            defaultValue=""
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

export default CreateTask;
