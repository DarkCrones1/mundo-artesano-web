// export const GetCraftId = async ({ Id }: { Id: number }) => {
//   try {
//     const response = await fetch(`http://localhost:5149/api/Craft/${Id}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {}
// };

import { APIResponse } from "@/Dtos/Response/ApiResponse";
import { CraftDetailResponseDto } from "@/Dtos/Response/CraftDetailResponseDto";

export const GetCraftId = async ({
  Id,
}: {
  Id: number;
}): Promise<CraftDetailResponseDto[]> => {
  try {
    const response = await fetch(`http://localhost:5149/api/Craft/${Id}`);
    const data: APIResponse<CraftDetailResponseDto[]> = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error al obtener datos de artesanía:", error);
    return [];
  }
};
