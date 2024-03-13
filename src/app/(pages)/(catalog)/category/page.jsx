
import { GetCategory } from '@/utils/Category/getCategory';
import Card from "@/components/Card/Card";

export default async function Page() {
    const data = await GetCategory();
    return (
        <div>
            {data.Data.map(category => (
                <Card params={category} key={category.Id} />
            ))}
        </div>
    );
}
