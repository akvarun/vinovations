import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 p-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl w-full px-4 sm:px-0 text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight drop-shadow-md">
          Smart Solutions for <br className="block sm:hidden" /> Clean Energy Storage
        </h1>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
          We specialize in{" "}
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            patent-protected, Type-3 composite gas cylinders
          </span>{" "}
          designed for high-pressure, ultra-low temperature storage of liquefiable gases.
          Our advanced systems efficiently capture and store boil-off gas, reduce methane emissions,
          and{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            eliminate the need for costly re-liquefaction
          </span>.
        </p>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-6 leading-relaxed tracking-wide">
          Built for performance and safety, our ultra-low temperature cylinders store{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            greater quantities of gas at the same volume
          </span>, making them ideal for sustainable storage. Our technology contributes to a cleaner, low-carbon future.
        </p>
      </main>

      <footer className="mt-16 text-center text-gray-600 dark:text-gray-400 space-x-6 text-sm sm:text-base">
        <span className="hidden sm:inline">|</span>
        <a href="mailto:rbharathwaj2003@gmail.com" className="hover:underline transition-colors duration-300">
          Bharathwaj
        </a>
        <span className="hidden sm:inline">|</span>
        <a href="mailto:akvarun@icloud.com" className="hover:underline transition-colors duration-300">
          Varun
        </a>
        <span className="hidden sm:inline">|</span>
      </footer>
    </div>
  );
}

