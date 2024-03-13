import { CategoryCreateRequestDto } from "@/Dtos/Request/Create/CategoryCreateRequestDto";

// Simulamos el envío a la API
export async function PostCategory(
  formData: CategoryCreateRequestDto
): Promise<void> {
  const response = await fetch("http://localhost:5149/api/Category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        `Bearer ${token}`,
    },
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    throw new Error("Error al enviar datos");
  }
}
