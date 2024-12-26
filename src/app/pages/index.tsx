import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-gray-100 min-h-screen">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Hey,
          <br />
          My Name is <span className="text-pink-500">Ayman Shaheen</span>
          <br />
          I am a <span className="text-pink-500">Next.js Developer</span>
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          I specialize in building high-quality web applications using Next.js. I love exploring new technologies and constantly learning to improve my skills. When I'm not coding, you can find me enjoying nature or reading a good book.
        </p>
        <div className="mt-6">
          <Link href="/about" className="text-pink-500 hover:underline">
            About Me
          </Link>
          <br />
          <Link href="/portfolio" className="text-pink-500 hover:underline">
            Portfolio
          </Link>
          <br />
          <Link href="/contact" className="text-pink-500 hover:underline">
            Contact
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <div className="relative w-60 h-60 md:w-72 md:h-72">
          <Image
            src="/hijab-girl.jpg" // Path to the image in the 'public' directory
            alt="Profile Picture"
            layout="fill" // Makes the image fill its container
            objectFit="cover" // Ensures the image covers the container without distortion
            objectPosition="center" // Center the image to focus on the middle
            className="rounded-full border-4 border-pink-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

