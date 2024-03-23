"use client"

import CreateCategory from '@/components/Category/Create/CreateCategory';
import { useState } from 'react';

export default function Page() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const PostCategorySuccess = () => {
        setIsSubmitted(true);
    };

    return (
        <div>
            {!isSubmitted ? (
                <CreateCategory onSubmitSuccess={PostCategorySuccess} />
            ) : (
                <p>Formulario enviado con éxito</p>
            )}
        </div>
    );
}
