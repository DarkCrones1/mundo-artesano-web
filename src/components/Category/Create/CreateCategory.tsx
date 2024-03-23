"use client";

import { CategoryCreateRequestDto } from "@/Dtos/Request/Create/CategoryCreateRequestDto";
import { PostCategory } from "@/utils/Category/postCategory";
import { useState, ChangeEvent, FormEvent } from "react";

interface AddCategoryProps {
  onSubmitSuccess: () => void;
}

export default function CreateCategory({
  onSubmitSuccess,
}: AddCategoryProps) {
  const [formData, setFormData] = useState<CategoryCreateRequestDto>({
    Name: "",
    Description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await PostCategory(formData);
      onSubmitSuccess();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="Name"
        placeholder="Nombre"
        value={formData.Name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="Description"
        placeholder="Descripción"
        value={formData.Description}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
