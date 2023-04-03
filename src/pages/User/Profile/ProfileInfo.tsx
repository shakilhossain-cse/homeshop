import React from 'react'

function ProfileInfo() {
  return (
    <div className="shadow rounded bg-white px-4 py-6 pb-8 w-full">
    <div>
      <h3 className="text-lg font-medium mb-4 capitalize">
        Profile Information
      </h3>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="text-gray-600 mb-2 block">
              First Name
            </label>
            <input id="firstName" type="text" className="input-box" />
          </div>
          <div>
            <label htmlFor="lastName" className="text-gray-600 mb-2 block">
              Last Name
            </label>
            <input id="lastName" type="text" className="input-box" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="Birthday" className="text-gray-600 mb-2 block">
              Birthday
            </label>
            <input id="Birthday" type="date" className="input-box" />
          </div>
          <div>
            <label htmlFor="gender" className="text-gray-600 mb-2 block">
              Gender
            </label>
            <select id="gender" className="input-box">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Email Address
            </label>
            <input id="email" type="email" className="input-box" />
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-600 mb-2 block">
              Phone Number
            </label>
            <input id="phone" type="text" className="input-box" />
          </div>
        </div>
        <button className="block px-5 mt-4 py-1 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition">
          Save Change
        </button>
      </form>
    </div>
  </div>
  )
}

export default ProfileInfo