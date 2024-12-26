import Link from 'next/link';
import { FC } from 'react';

const Contact: FC = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Contact</h1>
      <p className="mt-4 text-gray-600">
        This page can include a contact form or your contact details.
      </p>
      <Link href="/" className="text-pink-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default Contact;

