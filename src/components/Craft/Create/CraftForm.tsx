"use client";

import { CraftCreateRequestDto } from "@/Dtos/Request/Create/CraftCreateRequestDto";
import { CategoryResponseDto } from "@/Dtos/Response/CategoryResponseDto";
import { TechniqueTypeResponseDto } from "@/Dtos/Response/TechniqueTypeResponseDto";
import { CraftCategoryIds } from "./CraftCategoryIds";
import { CraftTechniqueTypesIds } from "./CraftTechniqueTypeIds";
import { CultureResponseDto } from "@/Dtos/Response/CultureResponseDto";
import { CraftCultureId } from "./CraftCultureId";
import { CraftProperty } from "./CraftPropertys";
import { BaseCatalogCreateRequestDto } from "@/Dtos/Request/Create/BaseCatalogCreateRequestDto";

interface propsCraft {
  formDataCraft: CraftCreateRequestDto;
  onSubmit: any;
  handleChange: any;
  category: CategoryResponseDto[];
  handleRemoveCategory: any;
  handleAddCategory: any;
  categoryIds: number[];
  technique: TechniqueTypeResponseDto[];
  handleAddTechnique: any;
  handleRemoveTechnique: any;
  techniqueTypeIds: number[];
  culture: CultureResponseDto[];
  handleChangeCulture: any;
  handleAddProperty: any;
  property: BaseCatalogCreateRequestDto;
  handleImageChange: any;
}

export function CraftModal({
  formDataCraft,
  onSubmit,
  handleChange,
  category,
  handleRemoveCategory,
  handleAddCategory,
  categoryIds,
  technique,
  handleAddTechnique,
  handleRemoveTechnique,
  techniqueTypeIds,
  culture,
  handleChangeCulture,
  handleAddProperty,
  property,
  handleImageChange,
}: propsCraft) {
  return (
    <form onSubmit={onSubmit} className="p-4 md:p-5 content-between">
      <div className="px-2">
        <div>
          <label
            htmlFor="Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <input
            className="block w-500px rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            name="Name"
            placeholder="Nombre"
            value={formDataCraft.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="Description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descripción del producto
          </label>
          <textarea
            id="Description"
            name="Description"
            value={formDataCraft.Description}
            onChange={handleChange}
            rows={4}
            placeholder="Escriba la descripción del producto aquí"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <div>
            <label
              htmlFor="Price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Precio
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                className="block w-500px rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                name="Price"
                id="price"
                placeholder="0.00"
                value={formDataCraft.Price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="History"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Historia
            </label>
            <textarea
              id="History"
              name="History"
              value={formDataCraft.History}
              onChange={handleChange}
              rows={4}
              placeholder="Escriba la historia del producto aquí"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <CraftCultureId
          culture={culture}
          handleChangeCulture={handleChangeCulture}
        />
        <CraftCategoryIds
          category={category}
          handleRemoveCategory={handleRemoveCategory}
          handleAddCategory={handleAddCategory}
          categoryIds={categoryIds}
        />
        <CraftTechniqueTypesIds
          technique={technique}
          handleAddTechnique={handleAddTechnique}
          handleRemoveTechnique={handleRemoveTechnique}
          techniqueTypeIds={techniqueTypeIds}
        />
      </div>
      <div>
        {/* <CraftProperty
          handleAddProperty={handleAddProperty}
          property={property}
        /> */}
      </div>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        />
      </div>
      <button
        type="submit"
        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="me-1 -ms-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Crear Artesania
      </button>
    </form>
  );
}
