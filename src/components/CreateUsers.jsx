import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CreateUsers = () => {

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const status = e.target.status.value;
    // console.log(gender,status)
    const user = { name, email, gender, status };

    fetch("https://gym-curd.vercel.app/create-users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
            Swal.fire("User Added successfully..");
            e.target.reset();
            Navigate('/gym_crud')
        }

      });
  };
  return (
    <div className="container mx-auto px-4 py-10">
      <Link
        to={"/gym_crud"}
        className="text-purple-700 hover:underline text-sm inline-block mb-6"
      >
        &laquo; All Users
      </Link>

      <div className="bg-white rounded-2xl shadow-md p-6 max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-bold text-gray-700">
          New User
        </h2>
        <p className="text-center text-gray-400 text-sm mb-6">
          Use the below form to create a new account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Gender
            </label>
            <div className="flex items-center space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="text-emerald-500 focus:ring-emerald-500"
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="text-emerald-500 focus:ring-emerald-500"
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Status
            </label>
            <div className="flex items-center space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  className="text-emerald-500 focus:ring-emerald-500"
                />
                <span className="ml-2 text-gray-700">Active</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  className="text-emerald-500 focus:ring-emerald-500"
                />
                <span className="ml-2 text-gray-700">Inactive</span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white font-medium rounded-md py-2 hover:bg-emerald-600 transition-colors"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsers;
