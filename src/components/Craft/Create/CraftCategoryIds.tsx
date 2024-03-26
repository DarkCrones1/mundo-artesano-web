"use client";

import { CategoryResponseDto } from "@/Dtos/Response/CategoryResponseDto";

export function CraftCategoryIds({
  category,
  handleRemoveCategory,
  handleAddCategory,
  categoryIds,
}: {
  category: CategoryResponseDto[];
  handleRemoveCategory: any;
  handleAddCategory: any;
  categoryIds: number[];
}) {
  const unselectedCategory = category.filter(
    (cat) => !categoryIds.includes(cat.Id)
  );
  const SelectedCategory = category.filter((cat) =>
    categoryIds.includes(cat.Id)
  );

  return (
    <div>
      <div className="col-span-2 sm:col-span-1 flex flex-col">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Categorias disponibles
        </label>
        <div>
          {unselectedCategory.length > 0 ? (
            <select
              id="opcionesC"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              {unselectedCategory.map((category) => (
                <option key={category.Id} value={category.Id}>
                  {category.Name}
                </option>
              ))}
            </select>
          ) : (
            <div className="flex justify-center items-center">
              <span
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
          rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full
          p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-primary-500
          dark:focus:border-primary-500"
              >
                Vacío
              </span>
            </div>
          )}
          <button
            type="button"
            id="addCategory"
            onClick={handleAddCategory}
            className={`text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
              category.length === categoryIds.length
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-blue-500"
            }`}
            disabled={category.length === categoryIds.length}
          >
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Agregar Categoria
          </button>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 flex flex-col">
        <span className="mb-2">Categorías seleccionadas</span>{" "}
        <ul className="flex flex-wrap">
          {SelectedCategory.sort((a, b) => a.Name.localeCompare(b.Name)).map(
            (category, index) => (
              <span
                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 flex-col"
                key={index}
              >
                {category.Name}
                <button
                  type="button"
                  className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                  data-dismiss-target="#badge-dismiss-default"
                  aria-label="Remove"
                  onClick={() => handleRemoveCategory(category.Id)}
                >
                  <svg
                    className="w-2 h-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Remove badge</span>
                </button>
              </span>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
