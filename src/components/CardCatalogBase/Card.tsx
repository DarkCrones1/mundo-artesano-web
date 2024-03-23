"use client";

import { BaseCatalogResponseDto } from "@/Dtos/Response/BaseCatalogResponseDto";

export default function Card({
  baseCatalog,
}: {
  baseCatalog: BaseCatalogResponseDto;
}) {
  return (
    <div>
      {/* <h1>{params.Id}</h1> */}
      <h2>{baseCatalog.Name}</h2>
      <p>{baseCatalog.Description}</p>
      <img
        src="https://cdn.unotv.com/images/2023/09/gatitos-munchkin-jpg-140420-1024x576.jpg"
        alt="Imagen de categoria"
        width={100}
        height={100}
      />
    </div>
  );
}
