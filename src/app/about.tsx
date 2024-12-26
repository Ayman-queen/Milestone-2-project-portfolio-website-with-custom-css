import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-green-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-green-600">About Us</h1>
        <p className="mt-4 text-xl text-green-700">
          We are dedicated to providing top-notch services and high-quality products.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
