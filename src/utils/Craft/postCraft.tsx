import { CraftCreateRequestDto } from "@/Dtos/Request/Create/CraftCreateRequestDto";
import { CraftResponseDto } from "@/Dtos/Response/CraftResponseDto";
import { APIResponse } from "@/Dtos/Response/ApiResponse";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ikl2YW5HYXJjaWEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiSXZhbiBHdWFkYWx1cGUgR2FyY2lhIEZsb3JlcyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Iml2YW5AZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2RhdGVvZmJpcnRoIjoiMjIvMDMvMjAyNCAxMToxNDowOSBhLiBtLiIsIlVzZXJBY2NvdW50VHlwZSI6IjIiLCJDcmFmdG1hbklkIjoiMSIsIm5iZiI6MTcxMTEyNzY0OSwiZXhwIjoxNzExMTYzNjQ5LCJpc3MiOiJodHRwczovL2dpdGh1Yi5jb20vRGFya0Nyb25lczEiLCJhdWQiOiJodHRwczovL2dpdGh1Yi5jb20vRGFya0Nyb25lczEifQ.2f-uQI8gaqvTj0uwQWzygNuvTjYrJfY1TW2DpHObEqs";

// export async function PostCraft(
//   formData: CraftCreateRequestDto
// ): Promise<void> {
//   const response = await fetch("http://localhost:5149/api/Craft", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(formData),
//   });

//   if (!response.ok) {
//     throw new Error("Error al enviar datos");
//   }
// }

export const PostCraft = async (
  formData: CraftCreateRequestDto
): Promise<CraftResponseDto> => {
  try {
    const response = await fetch("http://localhost:5149/api/Craft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const data: APIResponse<CraftResponseDto> = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error in PostCraft:", error);
    throw error;
  }
};
