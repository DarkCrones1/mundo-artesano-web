"use client"

import CreateCraft from '@/components/Craft/Create/CreateCraft'
import { useState } from 'react'

export default function page() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const PostCraftSuccess = () => {
        setIsSubmitted(true)
    }

    return (
        <div>
            {!isSubmitted ? (
                <CreateCraft onSubmitSuccess={PostCraftSuccess} />
            ) : (
                <p>
                    El formulario ha sido enviado con éxito
                </p>
            )}
        </div>
    )
}
