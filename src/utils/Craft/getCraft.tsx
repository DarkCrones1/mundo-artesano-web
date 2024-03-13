import { APIResponse } from "@/Dtos/Response/ApiResponse";
import { CraftResponseDto } from "@/Dtos/Response/CraftResponseDto";


export const GetCraft = async (): Promise<CraftResponseDto[]> => {
  try {
    const response = await fetch(
      "http://localhost:5149/api/Craft?IsDeleted=false"
    );
    const data: APIResponse<CraftResponseDto[]> = await response.json();

    return data.Data; // Devuelve los datos de artesanía
  } catch (error) {
    console.error("Error al obtener datos de artesanía:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};

// export const GetCraft = async (): Promise<APIResponse<CraftResponseDto[]>> => {
//   try {
//     const response = await fetch(
//       "http://localhost:5149/api/Craft?IsDeleted=false"
//     );
//     const data: APIResponse<CraftResponseDto[]> = await response.json();
//     return data; // Devuelve los datos de artesanía
//   } catch (error) {
//     console.error("Error al obtener datos de artesanía:", error);
//     return {
//       Data: [],
//       Message: "No se encontraron elementos",
//       Meta: {
//         TotalCount: 0,
//         PageSize: 0,
//         CurrentPage: 0,
//         TotalPages: 0,
//         HasNextPage: false,
//         HasPreviousPage: false,
//         NextPageUrl: "",
//         PreviousPageUrl: "",
//         NextPageNumber: 0,
//         PreviousPageNumber: 0,
//       },
//     }; // Devuelve un array vacío en caso de error
//   }
// };
