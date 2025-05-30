import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Smart Solutions for Clean Energy Storage
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          We specialize in <span className="font-semibold text-emerald-600 dark:text-emerald-400">patent-protected, Type-3 composite gas cylinders</span> designed for high-pressure, ultra-low temperature storage of liquefiable gases. 
          Our advanced systems are engineered to efficiently capture and store boil-off gas, 
          reduce methane emissions, and <span className="font-semibold text-blue-600 dark:text-blue-400">eliminate the need for costly re-liquefaction</span>.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
          Built for performance and safety, our ultra-low temperature cylinders can store 
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">greater quantities of gas at the same volume</span>, making them ideal for sustainable storage. 
          Our technology contributes to a cleaner, low-carbon future.
        </p>
      </main>
      <footer className="mt-10 text-center text-gray-600 dark:text-gray-400 space-x-6">
        <a href="mailto:akvarun@icloud.com" className="hover:underline">
          Varun Aiyaswamy Kannan
        </a>
        <span>|</span>
        <a href="mailto:rbharathwaj2003@gmail.com" className="hover:underline">
          Bharathwaj Ramanathan
        </a>
      </footer>
    </div>
  );
}

