export const GetCategorytId = async ({ Id }: { Id: number }) => {
  try {
    const response = await fetch(`http://localhost:5149/api/Category/${Id}`);
    const data = await response.json();
    return data;
  } catch (error) {}
};
