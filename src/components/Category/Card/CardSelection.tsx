"use client";

import { CategoryResponseDto } from "@/Dtos/Response/CategoryResponseDto";
import React, { useState } from "react";

interface CardSelectProps {
  baseCatalog: CategoryResponseDto;
  onSelect: (selected: boolean) => void;
}

export default function CardSelection({ baseCatalog, onSelect }: CardSelectProps) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
    onSelect(!selected); // Aquí notificamos al componente padre si la tarjeta ha sido seleccionada o no
  };

  return (
    <div
      className={`card ${selected ? "selected" : ""}`}
      onClick={toggleSelected}
    >
      <h2 key={baseCatalog.Id}>{baseCatalog.Name}</h2>
    </div>
  );
}
