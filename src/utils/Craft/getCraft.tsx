export const GetCraft = async () => {
  try {
    const response = await fetch(
      "http://localhost:5149/api/Craft?IsDeleted=false"
    );
    const data = await response.json();
    return data;
  } catch (error) {}
};
