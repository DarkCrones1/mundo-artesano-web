"use client"

import CreateCultureModal from "@/components/Culture/Create/CreateCultureModal";
import { useState } from "react"

export default function Page() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const PostCultureSuccess = () => {
        setIsSubmitted(true)
    }

    return (
        <div>
            {!isSubmitted ? (
                <CreateCultureModal onSubmitSuccess={PostCultureSuccess} />
            ) : (
                <p>Formulario enviado con éxito</p>
            )}
        </div>
    )
}