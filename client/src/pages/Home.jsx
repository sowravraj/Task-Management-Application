import React from 'react';

export default function Home() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Task Management Home</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Welcome to Task Management! Our application is designed to help you organize, prioritize, and manage your tasks effortlessly. Whether you're working on personal projects or collaborating with a team, our intuitive interface and powerful features make task management simple and efficient.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li className="mb-2">Drag-and-Drop Interface: Easily move tasks between columns to reflect their status and progress.</li>
          <li className="mb-2">Secure User Authentication: Sign up, log in, and manage your tasks securely, with the option for Google login.</li>
          <li className="mb-2">Customizable Columns: Organize your tasks within columns that suit your workflow.</li>
          <li className="mb-2">Real-Time Updates: Experience seamless updates across all your devices.</li>
          <li className="mb-2">User Profiles: Personalize your profile with avatars and manage your tasks with a personal touch.</li>
          <li className="mb-2">Task Due Dates and Reminders: Set due dates and receive reminders to stay on top of your deadlines.</li>
          <li className="mb-2">Task Sorting and Searching: Quickly find and sort tasks to enhance your productivity.</li>
        </ul>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed mt-6">
        Get started today and experience a new level of productivity with Task Management. Start managing your tasks like a pro!
      </p>
    </div>
  );
}
