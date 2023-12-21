import { FaCalendar, FaHouse, FaInbox, FaSheetPlastic, FaSquarePollVertical, FaTableList, FaUser, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

  

    

    return (
        <div className="flex">
            {/* sidebar of dashboard */}



            <div className="  w-64 min-h-screen bg-gradient-to-r from-indigo-500  to-[#4F6F52] ... text-white glass shadow-black shadow-xl ">

                <div>
                    <img
                        className="h-56"
                        src={'https://i.ibb.co/Js1T1y3/Green-Black-Illustration-Simple-Community-Logo-2-removebg-preview.png'} alt="" />
                    <h2 className="text-center mb-10 text-2xl font-bold">Dashboard</h2>
                    <div className="divider "></div>
                </div>


                <ul className="menu menu-dropdown-show p-4">
                    <>
                        <li className="flex p-2">

                            <NavLink to='/dashboard/userhome'><FaHouse className="text-2xl" />Employee Home</NavLink>
                        </li>
                        <li className="flex p-2">

                            <NavLink to='/dashboard/createtask'> <FaCalendar className="text-2xl" />Create New Taks</NavLink>
                        </li>
                        <li className="flex p-2">

                            <NavLink to='/dashboard/tasklist'> <FaSheetPlastic className="text-2xl" />Task List</NavLink>
                        </li>
                    </>
                </ul>



                <li className="flex p-2">

                    <NavLink to='/'><FaHouse className="text-2xl" /> Home</NavLink>
                </li>
            </div>


            {/* dashboard content  */}
            <div className="flex-1 bg-gradient-to-r from-[#6B240C]  to-[#994D1C] ... glass p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
