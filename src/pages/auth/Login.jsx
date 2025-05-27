import React, { useState } from 'react';

function Login() {
  // State variables to hold the input values
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for username/email input changes
  const handleUsernameOrEmailChange = (event) => {
    setUsernameOrEmail(event.target.value);
  };

  // Event handler for password input changes
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default browser form submission (page reload)
    console.log('Login submitted with:', { usernameOrEmail, password });
    // In a real application, you would send this data to your backend for authentication.
    // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify({ usernameOrEmail, password }) });
  };

  return (
    // Outer container:
    // - `min-h-screen`: Ensures the container takes at least the full height of the viewport.
    // - `bg-gradient-to-br from-blue-500 to-purple-600`: Creates a beautiful background gradient.
    // - `flex items-center justify-center`: Uses flexbox to center its child (the login card) both horizontally and vertically.
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      {/* Login Card Container: */}
      {/* - `bg-white`: White background for the card. */}
      {/* - `rounded-xl`: Large rounded corners for a modern look. */}
      {/* - `shadow-2xl`: A prominent shadow to make the card "pop" off the background. */}
      {/* - `p-8 md:p-10`: Responsive padding (more on larger screens). */}
      {/* - `max-w-md`: Limits the maximum width of the card for better readability on large screens. */}
      {/* - `w-full`: Ensures the card takes full width on smaller screens, up to max-w-md. */}
      {/* - `transform transition-all duration-300 hover:scale-105`: Adds a subtle hover effect. */}
      <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 max-w-md w-full transform transition-all duration-300 hover:scale-105">
        {/* Login Title: */}
        {/* - `text-4xl`: Large, prominent text size. */}
        {/* - `font-extrabold`: Extra bold font weight. */}
        {/* - `text-center`: Centers the text. */}
        {/* - `text-gray-800`: Dark gray text color. */}
        {/* - `mb-8`: Margin bottom for spacing. */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Welcome Back!</h2>

        <form onSubmit={handleSubmit}>
          {/* Username/Email Input Group: */}
          {/* - `mb-6`: Margin bottom for spacing between input groups. */}
          <div>
            {/* Label: */}
            {/* - `block`: Makes the label a block-level element, ensuring it sits above the input. */}
            {/* - `text-gray-700 text-sm font-semibold`: Styling for the label text. */}
            {/* - `mb-2`: Margin bottom for spacing between label and input. */}
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="usernameOrEmail">
              Username or Email
            </label>
            {/* Input Field: */}
            {/* - `w-full`: Takes full width of its parent. */}
            {/* - `p-3`: Padding inside the input. */}
            {/* - `border border-gray-300`: Light gray border. */}
            {/* - `rounded-lg`: Rounded corners for the input field. */}
            {/* - `focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`:
                 Focus styles: removes default outline, adds a blue ring, and makes border transparent
                 when focused for a cleaner look. */}
            {/* - `transition duration-200`: Smooth transition for focus effects. */}
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              id="usernameOrEmail"
              type="text"
              placeholder="Enter your username or email"
              value={usernameOrEmail}
              onChange={handleUsernameOrEmailChange}
              required // HTML5 validation: makes this field required
            />
          </div>

          {/* Password Input Group: */}
          {/* - `mb-8`: Larger margin bottom before the button. */}
          <div className="mb-8">
            {/* Label: */}
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            {/* Input Field: */}
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required // HTML5 validation: makes this field required
            />
          </div>

          {/* Buttons and Links Container: */}
          {/* - `flex flex-col md:flex-row items-center justify-between`:
                 Flex container for buttons/links. Stacks them on small screens (`flex-col`)
                 and puts them side-by-side on medium screens and up (`md:flex-row`).
                 Centers items vertically (`items-center`) and distributes space (`justify-between`). */}
          {/* - `gap-4`: Adds space between flex items. */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Login Button: */}
            {/* - `bg-gradient-to-r from-blue-600 to-blue-800`: A vibrant blue gradient. */}
            {/* - `hover:from-blue-700 hover:to-blue-900`: Darker gradient on hover. */}
            {/* - `text-white`: White text. */}
            {/* - `font-bold py-3 px-6`: Padding and bold font. */}
            {/* - `rounded-lg`: Rounded corners. */}
            {/* - `focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`:
                 Focus styles for accessibility. */}
            {/* - `transition duration-300`: Smooth transition for hover/focus effects. */}
            {/* - `w-full md:w-auto`: Full width on small screens, auto width on medium screens and up. */}
            <button
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 w-full md:w-auto"
              type="submit"
            >
              Login
            </button>
            {/* Forgot Password Link: */}
            {/* - `inline-block`: Allows padding and margin. */}
            {/* - `align-baseline`: Aligns text to the baseline. */}
            {/* - `font-semibold text-sm`: Font styling. */}
            {/* - `text-blue-600 hover:text-blue-800`: Blue text, darker blue on hover. */}
            {/* - `transition duration-200`: Smooth transition for hover effect. */}
            <a className="inline-block align-baseline font-semibold text-sm text-blue-600 hover:text-blue-800 transition duration-200" href="/forgot-password">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
