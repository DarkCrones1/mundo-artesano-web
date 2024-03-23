"use client";

import { CultureCreateRequestDto } from "@/Dtos/Request/Create/CultureCreateRequestDto";
import { PostCulture } from "@/utils/Culture/postCulture";
import { ChangeEvent, FormEvent, useState } from "react";

interface AddCultureProps {
  onSubmitSuccess: () => void;
}

export default function CreateCultureModal({
  onSubmitSuccess,
}: AddCultureProps) {
  const [formData, setFormData] = useState<CultureCreateRequestDto>({
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
      await PostCulture(formData);
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
