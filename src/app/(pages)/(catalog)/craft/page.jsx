import CardCraft from "@/components/Craft/Card/CardCraft";
import { GetCraft } from "@/utils/Craft/getCraft";


export default async function Page() {
    const data = await GetCraft()
    return (
        <div>
            {data.map(craft => (
                <CardCraft craft={craft} />
            ))}
        </div>
    );
}
