import { GetCulture } from '@/utils/Culture/getCulture'
import Card from '@/components/CardCatalogBase/Card.tsx'

export default async function Page() {
    const data = await GetCulture()
    return (
        <div>
            {data.map(baseCatalog => (
                <Card baseCatalog={baseCatalog} key={baseCatalog.Id}/>
            ))}
        </div>
    );
}
