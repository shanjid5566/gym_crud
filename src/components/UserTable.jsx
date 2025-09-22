import { BiPencil, BiX } from "react-icons/bi";
import { BsPersonBadge } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserTable = ({ users, setUsers }) => {
// Edit user handler
  const handleEditUser = (id) => {
    console.log("Edit user with ID:", id);
  }
  // Delete user handler

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gym-curd.vercel.app/create-users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      {/* Button */}
      <div className="w-full max-w-5xl flex justify-start mb-4">
        <Link
          to={"/create-users"}
          className="text-gray-700 hover:text-indigo-600"
        >
          <button className="flex items-center gap-2 bg-purple-50 text-purple-700 border border-purple-200 px-4 py-2 rounded-lg shadow hover:bg-purple-100">
            <span className="material-icons-outlined text-sm">New User</span>
            <BsPersonBadge></BsPersonBadge>
          </button>
        </Link>
      </div>

      {/* Table container */}
      <div className="w-full max-w-5xl overflow-x-auto">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">@Email</th>
              <th className="py-3 px-4">Gender</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                <td className="py-3 px-4">{idx + 1}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.gender}</td>
                <td className="py-3 px-4">{user.status}</td>
                <td className="py-3 px-4 flex gap-2">
                  <Link 
                  to={`/users/${user._id}`}
                  className="p-2 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100" onClick={() => handleEditUser(user._id)}>
                    <BiPencil size={16} />
                  </Link>
                  <button
                    className="p-2 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100"
                    onClick={() => handleDelete(user._id)}
                  >
                    <BiX />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
