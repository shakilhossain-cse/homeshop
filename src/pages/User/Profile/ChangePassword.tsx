

function ChangePassword() {
  return (
    <div className="shadow rounded bg-white px-4 py-6 pb-8 w-full">
      <div>
        <h3 className="text-lg font-medium mb-4 capitalize">
          Profile Information
        </h3>
        <form className="space-y-4">
          <div className="grid grid-cols-11 gap-4">
            <div className="col-span-12 md:col-span-6">
              <label htmlFor="firstName" className="text-gray-600 mb-2 block">
                Current Password
              </label>
              <input id="firstName" type="text" className="input-box" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <label htmlFor="lastName" className="text-gray-600 mb-2 block">
                New Password
              </label>
              <input id="lastName" type="text" className="input-box" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <label htmlFor="lastName" className="text-gray-600 mb-2 block">
                Confirm Password
              </label>
              <input id="lastName" type="text" className="input-box" />
            </div>
          </div>
        
          <button className="block px-5 mt-4 py-1 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition">
            Save Change
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
