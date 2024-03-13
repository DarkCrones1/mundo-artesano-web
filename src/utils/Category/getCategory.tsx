import { APIResponse } from "@/Dtos/Response/ApiResponse";
import { CategoryResponseDto } from "@/Dtos/Response/CategoryResponseDto";

export const GetCategory = async (): Promise<CategoryResponseDto[]> => {
  try {
    const response = await fetch(
      "http://localhost:5149/api/Category?IsDeleted=false"
    );
    const data: APIResponse<CategoryResponseDto[]> = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error al obtener datos de artesanía:", error);
    return [];
  }
};
