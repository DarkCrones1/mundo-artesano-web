"use client";

import { CraftCreateRequestDto } from "@/Dtos/Request/Create/CraftCreateRequestDto";
import { PostCraft } from "@/utils/Craft/postCraft";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { GetCategory } from "@/utils/Category/getCategory";
import { GetTechniqueType } from "@/utils/Techniquetype/getTechniquetype";
import { BaseCatalogResponseDto } from "@/Dtos/Response/BaseCatalogResponseDto";
import { BaseCatalogCreateRequestDto } from "@/Dtos/Request/Create/BaseCatalogCreateRequestDto";
import { CraftModal } from "./CraftForm";
import { GetCulture } from "@/utils/Culture/getCulture";
import { CraftResponseDto } from "@/Dtos/Response/CraftResponseDto";
import { ImageCreateRequestDto } from "@/Dtos/Request/Create/ImageCreateRequestDto";
import { postCraftImage } from "@/utils/Craft/postCraftImage";

interface AddCraftProps {
  onSubmitSuccess: () => void;
}

export default function CreateCraft({ onSubmitSuccess }: AddCraftProps) {
  useEffect(() => {
    const fetchData = async () => {
      const fetchCategories = await GetCategory();
      const fetchTechniques = await GetTechniqueType();
      const fetchCultures = await GetCulture();
      setCategory(fetchCategories);
      setTechnique(fetchTechniques);
      setCulture(fetchCultures);
    };

    fetchData();
  }, []);

  const [formDataCraft, setFormDataCraft] = useState<CraftCreateRequestDto>({
    Name: "",
    Description: "",
    Price: 0,
    History: "",
    CultureId: 0,
    CategoryIds: [],
    TechniqueTypeIds: [],
    Propertys: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataCraft((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // sube la imagen despues de recuperar la info del craft
  const [formImageCraft, setFormImageCraft] = useState<ImageCreateRequestDto>(
    {} as ImageCreateRequestDto
  );

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormImageCraft((prevData) => ({
        ...prevData,
        file: file,
      }));
    }
  };

  //Envia el formulario
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const craftResponseFetch = await PostCraft(formDataCraft);
      setFormImageCraft((prevData) => ({
        ...prevData,
        entityAssigmentId: craftResponseFetch?.Id!,
      }));
    } catch (error) {
      console.error("Error:", error);
    }
  };

    // Se ejecuta el efecto de hacer el await de la imagen cuando cambia xD
  useEffect(() => {
    const uploadImage = async () => {
      try {
        if (formImageCraft.entityAssigmentId) {
          await postCraftImage(formImageCraft);
          onSubmitSuccess();
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
    uploadImage();
  }, [formImageCraft]);

  // Añade el array de Categorias al formDAta
  const [category, setCategory] = useState<BaseCatalogResponseDto[]>([]);
  const [categoryIds, setCategoryIds] = useState<number[]>([]);

  const handleAddCategory = () => {
    const selectElement = document.getElementById(
      "opcionesC"
    ) as HTMLSelectElement;
    const seleecttedCategoryId = parseInt(selectElement.value);
    setCategoryIds((prevIds) => [...prevIds, seleecttedCategoryId]);
  };

  const handleRemoveCategory = (id: number) => {
    setCategoryIds((prevItem) => {
      return prevItem.filter((currentItem) => currentItem !== id);
    });
  };

  useEffect(() => {
    setFormDataCraft((prevState) => ({
      ...prevState,
      CategoryIds: categoryIds,
    }));
  }, [categoryIds]);

  // Añade el array de Tecnicas al formData
  const [technique, setTechnique] = useState<BaseCatalogResponseDto[]>([]);
  const [techniqueTypeIds, setTechniquetypeIds] = useState<number[]>([]);

  const handleAddTechnique = () => {
    const selectElement = document.getElementById(
      "opcionesT"
    ) as HTMLSelectElement;
    const selecttedTechniqueId = parseInt(selectElement.value);
    setTechniquetypeIds((prevIds) => [...prevIds, selecttedTechniqueId]);
  };

  const handleRemoveTechnique = (id: number) => {
    setTechniquetypeIds((prevItem) => {
      return prevItem.filter((currentItem) => currentItem !== id);
    });
  };

  useEffect(() => {
    setFormDataCraft((prevState) => ({
      ...prevState,
      TechniqueTypeIds: techniqueTypeIds,
    }));
  }, [techniqueTypeIds]);

  // Selecciona la Cultura y lo añade al formData
  const [culture, setCulture] = useState<BaseCatalogResponseDto[]>([]);
  const [cultureId, setCultureId] = useState<number>(1);

  const handleChangeCulture = () => {
    const selectElement = document.getElementById(
      "opcionesCu"
    ) as HTMLSelectElement;
    const selecttedCultureId = parseInt(selectElement.value);
    setCultureId(selecttedCultureId);
  };

  useEffect(() => {
    setFormDataCraft((prevState) => ({
      ...prevState,
      CultureId: cultureId,
    }));
  }, [cultureId]);

  const [formCraftProperty, setFormCraftProperty] =
    useState<BaseCatalogCreateRequestDto>({} as BaseCatalogCreateRequestDto);

  const handleAddProperty = () => {};

  return (
    <CraftModal
      formDataCraft={formDataCraft}
      onSubmit={onSubmit}
      handleChange={handleChange}
      category={category}
      handleRemoveCategory={handleRemoveCategory}
      handleAddCategory={handleAddCategory}
      categoryIds={categoryIds}
      technique={technique}
      handleAddTechnique={handleAddTechnique}
      handleRemoveTechnique={handleRemoveTechnique}
      techniqueTypeIds={techniqueTypeIds}
      culture={culture}
      handleChangeCulture={handleChangeCulture}
      handleAddProperty={handleAddProperty}
      property={formCraftProperty}
      handleImageChange={handleImageChange}
    />
  );
}
