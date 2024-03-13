export const GetCraftId = async ({ Id }: { Id: number }) => {
  try {
    const response = await fetch(`http://localhost:5149/api/Craft/${Id}`);
    const data = await response.json();
    return data;
  } catch (error) {}
};
