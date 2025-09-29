import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center h-full px-6">
      
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl  text-white tracking-tight mb-4">
          Ayush <span className="text-purple-400">Vishwakarma</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-10">
          Frontend • AI
        </p>

        <Link
          to="/projects"
          className="inline-block rounded-lg bg-purple-600 hover:bg-purple-700 text-white sm:px-6 px-4 sm:py-3 py-2 sm:text-lg text-sm font-medium shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
