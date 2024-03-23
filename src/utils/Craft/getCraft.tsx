import { APIResponse } from "@/Dtos/Response/ApiResponse";
import { CraftResponseDto } from "@/Dtos/Response/CraftResponseDto";

export const GetCraft = async (): Promise<CraftResponseDto[]> => {
  try {
    const response = await fetch("http://localhost:5149/api/Craft?IsDeleted=false");
    const data: APIResponse<CraftResponseDto[]> = await response.json();
    return data.Data; // Devuelve los datos de artesanía
  } catch (error) {
    console.error("Error al obtener datos de artesanía:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};
