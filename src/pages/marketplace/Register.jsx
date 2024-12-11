import React, { useState } from "react";
import { NavLink } from "react-router";
const Register = () => {
  const [formData, setFormDAta] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // 11
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: formData?.email,
        username: formData?.username,
        password: formData?.password,
        name: {
          firstname: formData?.firstname,
          lastname: formData?.lastname,
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: formData?.phone,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border border-gray-200">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                  onChange={(e) =>
                    setFormDAta({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="username"
                  required
                  onChange={(e) =>
                    setFormDAta({ ...formData, username: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your firstname
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="firstname"
                  required
                  onChange={(e) =>
                    setFormDAta({ ...formData, firstname: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your lastname
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="lastname"
                  required
                  onChange={(e) =>
                    setFormDAta({ ...formData, lastname: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="phone"
                  required
                  onChange={(e) =>
                    setFormDAta({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  required
                  onChange={(e) =>
                    setFormDAta({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  required
                  onChange={(e) =>
                    setFormDAta({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <NavLink to="/login" className="btn btn-primary">
                  Login here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
