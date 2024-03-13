"use client"
import { CraftDetailResponseDto } from "@/Dtos/Response/CraftDetailResponseDto"
import Link from "next/link"

export default function CraftDetail({ craft } : {craft: CraftDetailResponseDto}) {
    return (
        <div>
            <section>
                <h1>{craft.Id}</h1>
                <h3>{craft.Name}</h3>
                <h3>{craft.Description}</h3>
                <p>{craft.History}</p>
                {craft.Category.map((category:any) => (
                    <div>
                        <h3>{category.Name}</h3>
                        <p>{category.Description}</p>
                    </div>
                ))}
                {craft.TechniqueType.map((technique:any) => (
                    <div>
                        <h3>{technique.Name}</h3>
                        <p>{technique.Description}</p>
                    </div>
                ))}
                {craft.Property.map((property:any) => (
                    <div>
                        <h3>{property.Name}</h3>
                        <p>{property.Description}</p>
                    </div>
                ))}
                <img src={craft.CraftPictureUrl} alt="Imagen de artesanía" width={200} height={150} />
            </section>
            <section>
                <button onClick={() => {
                }}>
                    <Link href={"/craft"}>Volver</Link>
                </button>
            </section>
        </div>
    )
}