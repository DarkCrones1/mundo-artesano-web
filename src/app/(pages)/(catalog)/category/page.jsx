
import { GetCategory } from '@/utils/Category/getCategory';
import Card from "@/components/CardCatalogBase/Card";

export default async function Page() {
    const data = await GetCategory()
    return (
        <div>
            {data.map(baseCatalog => (
                <Card baseCatalog={baseCatalog} />
            ))}
        </div>
    );
}
