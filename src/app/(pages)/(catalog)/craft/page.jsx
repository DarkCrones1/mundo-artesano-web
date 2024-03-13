import CardCraft from "@/components/CraftCard/CardCraft";
import { GetCraft } from "@/utils/Craft/getCraft";


export default async function Page() {
    const data = await GetCraft()
    return (
        <div>
            {data.Data.map(craft => (
                <CardCraft craft={craft} key={craft.Id}/>
            ))}
        </div>
    );
}
