"use client";

import { CraftResponseDto } from "@/Dtos/Response/CraftResponseDto";
import Link from "next/link";

export default function CardCraft({ craft }: { craft: CraftResponseDto }) {
  return (
    <div>
      <section>
        <h1>{craft.Id}</h1>
        <h3>{craft.Name}</h3>
        <h3>{craft.Description}</h3>
        <p>{craft.History}</p>
        <img
          src={craft.CraftPictureUrl}
          alt="Imagen de artesanía"
          width={200}
          height={150}
        />
      </section>
      <section>
        <button onClick={() => {}}>
          <Link href={`/craft/${craft.Id}`}>Click</Link>
        </button>
      </section>
    </div>
  );
}
