import { APIResponse } from "@/Dtos/Response/ApiResponse";
import { CultureResponseDto } from "@/Dtos/Response/CultureResponseDto";

export const GetCulture = async (): Promise<CultureResponseDto[]> => {
  try {
    const response = await fetch(
      "http://localhost:5149/api/Culture?IsDeleted=false"
    );
    const data: APIResponse<CultureResponseDto[]> = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error al obtener datos de artesanía:", error);
    return [];
  }
};
