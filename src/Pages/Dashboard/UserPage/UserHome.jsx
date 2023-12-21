import { useQuery } from "@tanstack/react-query";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const UserHome = () => {


    const axiosPublic = useAxiosPublic();
    const user = useAuth();
    // console.log(user.user.photoURL);



    const { data: tasklist = [], refetch } = useQuery({
        queryKey: ['tasklist'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasklist?email=${user.user.email}`);
            return res.data;
        }
    });

    console.log(tasklist);
   

    const handleDelete = (id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            axiosPublic
              .delete(`/tasklist/${id}`)
              .then((res) => {
                if (res.data && res.data.modifiedCount > 0) {
                  Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
                } else {
                  Swal.fire('Succsess', ' delete the task.', 'success');
                }
                refetch()
              })
              .catch((error) => {
                console.error('Error deleting task:', error);
                Swal.fire('Error', 'An error occurred while deleting the task.', 'error');
              });
              refetch()
          }
        });
      };
      
   
    const priorityColorClass = (priority) => {
        switch (priority) {
          case 'low':
            return 'text-green-500';
          case 'moderate':
            return 'text-yellow-500';
          case 'high':
            return 'text-red-500';
          default:
            return '';
        }
      };
      


    return (
        <div className="grid justify-center">
            <div>
                {/* Section Title */}
                <SectionTitle
                    heading={'Employee Site'}
                    subheading={'This is employee site'}
                />
            </div>

            <div>
                {/* Statistics */}
                <div className="stats shadow">
                    {/* Your Task Stat */}
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Your Task</div>
                        <div className="stat-value text-primary">{tasklist.length}</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    {/* Page Views Stat */}
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    {/* Tasks Done Stat */}
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src={user.user.photoURL} alt="user-avatar" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>
                </div>

                {/* Task Table */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-white text-center mb-4">Task You Added</h2>


                    <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
  <thead className="bg-gray-200 text-gray-700">
    <tr className="border-collapse text-left">
      <th className="py-3 px-4 border-b">Title</th>
      <th className="py-3 px-4 border-b">Details</th>
      <th className="py-3 px-4 border-b">Date</th>
      <th className="py-3 px-4 border-b">Priority</th>
      <th className="py-3 px-4 border-b">Update</th>
      <th className="py-3 px-4 border-b">Delete</th>
    </tr>
  </thead>
  <tbody className="text-gray-800">
    {tasklist.map((task) => (
      <tr key={task.id} className=" ">
        <td className="py-3 px-4 border-b">{task.title}</td>
       
        <td className="py-3 px-4 border-b">{task.description}</td>
        <td className="py-3 px-4 border-b">{task.deadline}</td>
        <td className={`py-3 px-4 border-b ${priorityColorClass(task.priority)}`}>
          {task.priority}
        </td>


        <td className="py-3 px-4 border-b">
         
         <Link to={`/dashboard/updatetask/${task._id}`}>
         <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
            
          >
            Update
          </button>
         </Link>
         
        
        </td>
        <td className="py-3 px-4 border-b">
          
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md"
            onClick={() => handleDelete(task._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>



                </div>
            </div>
        </div>
    );
};

export default UserHome;