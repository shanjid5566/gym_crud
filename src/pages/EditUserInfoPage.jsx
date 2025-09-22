import Header from "../components/Header";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const EditUserInfoPage = () => {
  const loadUser = useLoaderData();
  const [user] = useState(loadUser);
  const navigate = useNavigate();

  const handleUpdataSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const status = e.target.status.value;

    const updatedUser = { name, email, gender, status };
    fetch(`https://gym-curd.vercel.app/users/${user[0]._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          Swal.fire("User Information Update successfully..");
          e.target.reset();
          navigate("/gym_crud");
        }
      });
  };
  return (
    <div>
      <Header></Header>
      <main>
        <section>
          <div className="container mx-auto px-4 py-10">
            <Link
              to={"/"}
              className="text-purple-700 hover:underline text-sm inline-block mb-6"
            >
              &laquo; All Users
            </Link>

            <div className="bg-white rounded-2xl shadow-md p-6 max-w-6xl mx-auto">
              <h2 className="text-center text-2xl font-bold text-gray-700">
                Update User Account
              </h2>
              <p className="text-center text-gray-400 text-sm mb-6">
                Use the below form to Updata your Account
              </p>

              <form onSubmit={handleUpdataSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    defaultValue={user[0]?.name}
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
                    defaultValue={user[0]?.email}
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
                        defaultChecked={
                          user[0]?.gender === "Male" ? "checked" : ""
                        }
                        className="text-emerald-500 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-gray-700">Male</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        defaultChecked={
                          user[0]?.gender === "Female" ? "checked" : ""
                        }
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
                        defaultChecked={
                          user[0]?.status === "Active" ? "checked" : ""
                        }
                        className="text-emerald-500 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-gray-700">Active</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value="Inactive"
                        defaultChecked={
                          user[0]?.status === "Inactive" ? "checked" : ""
                        }
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
        </section>
      </main>
    </div>
  );
};
export default EditUserInfoPage;
