import CraftDetail from "@/components/Craft/Card/CraftDetail";
import { GetCraftId } from "@/utils/Craft/getCraftId";

export default async function Page({ params }) {
    const data = await GetCraftId(params)
    return (
        <div>
            <CraftDetail craft={data} key={data.Id} />
        </div>
    )
}
