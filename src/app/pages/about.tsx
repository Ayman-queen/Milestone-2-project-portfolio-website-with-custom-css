import Link from 'next/link';
import { FC } from 'react';

const About: FC = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
      <p className="mt-4 text-gray-600">
        This is the about page where you can introduce yourself or your company.
      </p>
      <Link href="/" className="text-pink-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default About;


