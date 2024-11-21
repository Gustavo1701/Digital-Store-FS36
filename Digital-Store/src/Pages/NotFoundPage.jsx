import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-100">404</h1>
      <p className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mt-4">
        Oops! Página não encontrada.
      </p>
      <p className="text-gray-500 dark:text-gray-500 mt-2">
        Parece que você se perdeu. A página que você está procurando não existe.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200"
      >
        Voltar para a Home
      </a>
    </div>
  );
};

export default NotFoundPage;
