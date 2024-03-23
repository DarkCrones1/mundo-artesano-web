import { APIResponse } from "@/Dtos/Response/ApiResponse";
import { TechniqueTypeResponseDto } from "@/Dtos/Response/TechniqueTypeResponseDto";

export const GetTechniqueType = async (): Promise<
  TechniqueTypeResponseDto[]
> => {
  try {
    const response = await fetch("http://localhost:5149/api/TechniqueType");
    const data: APIResponse<TechniqueTypeResponseDto[]> = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error al obtener datos de artesanía:", error);
    return [];
  }
};
