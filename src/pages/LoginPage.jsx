import React, { useRef } from 'react';

function LoginPage() {
    // useRef is used to get the value directly 
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    function handleForm(event) {
        event.preventDefault();

        // Get values directly from the refs
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;

        console.log("Username:", userName);
        console.log("Password:", password);

        // Clear the input fields after submission
        userNameRef.current.value = "";
        passwordRef.current.value = "";
    }

    return (
        <div className="h-screen bg-gradient-to-r from-purple-300 to-purple-600 flex items-center justify-center">
            <div className="max-w-md w-full mx-4">
                <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-6">ChatHive</h1>
                <form className="p-6 bg-white shadow-lg rounded-lg" onSubmit={handleForm}>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-gray-700 font-semibold mb-1">UserName</label>
                        <input
                            id="userName"
                            type="text"
                            ref={userNameRef} // Attach ref
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            aria-required="true"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            ref={passwordRef} // Attach ref
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            aria-required="true"
                        />
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="text-blue-500 hover:underline cursor-pointer">Forgot Password?</span>
                        <span className="text-blue-500 hover:underline cursor-pointer">Sign Up?</span>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
