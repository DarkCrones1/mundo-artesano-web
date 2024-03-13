
export const GetCategory = async () => {
    try {
        const response = await fetch('http://localhost:5149/api/Category?IsDeleted=false')
        const data = response.json()
        return data
    } catch (error) {

    }
}