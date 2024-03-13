import CardCraftDetail from "@/components/CraftCard/CardCraft";
import { GetCraftId } from "@/utils/Craft/getCraftId";

export default async function Page({ params }) {
    const data = await GetCraftId(params)
    return (
        <div>
            <CardCraftDetail craft={data.Data} key={data.Id} />

        </div>
    )
}
