import { ImageCreateRequestDto } from "@/Dtos/Request/Create/ImageCreateRequestDto";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ikl2YW5HYXJjaWEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiSXZhbiBHdWFkYWx1cGUgR2FyY2lhIEZsb3JlcyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Iml2YW5AZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2RhdGVvZmJpcnRoIjoiMjUvMDMvMjAyNCAwOTozMzo0NCBwLiBtLiIsIlVzZXJBY2NvdW50VHlwZSI6IjIiLCJDcmFmdG1hbklkIjoiMSIsIm5iZiI6MTcxMTQyNDAyNCwiZXhwIjoxNzExNDYwMDI0LCJpc3MiOiJodHRwczovL2dpdGh1Yi5jb20vRGFya0Nyb25lczEiLCJhdWQiOiJodHRwczovL2dpdGh1Yi5jb20vRGFya0Nyb25lczEifQ.Ky5zY-DSL0-tEVPYQJHTJ3i3NqMoCAOh_XHh2ZF9y2k";

export async function postCraftImage(
  imageData: ImageCreateRequestDto
): Promise<void> {
  const formData = new FormData();
  formData.append("EntityAssigmentId", imageData.entityAssigmentId.toString());
  formData.append("File", imageData.file, "image.png");

  const response = await fetch(
    "http://localhost:5149/api/Craft/UploadImageCraft",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },

      body: formData,
    }
  );

  if (!response.ok) throw new Error("Error al enviar datos");
}
