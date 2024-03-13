"use client"

import AddCategoryCard from '@/components/Category/Modal/Create/CreateCategoryModal';
import { useState } from 'react';

export default function Page() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const PostCategorySuccess = () => {
        setIsSubmitted(true);
    };

    return (
        <div>
            {!isSubmitted ? (
                <AddCategoryCard onSubmitSuccess={PostCategorySuccess} />
            ) : (
                <p>Formulario enviado con éxito</p>
            )}
        </div>
    );
}
