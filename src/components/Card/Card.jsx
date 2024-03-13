'use client';

export default function Card({ params }) {
    return (
        <div>
            {/* <h1>{params.Id}</h1> */}
            <h2>{params.Name}</h2>
            <p>{params.Description}</p>
            {/* <img src={params.CategoryPictureUrl} alt="Imagen de categoria" width={100} height={100}/> */}
            <img src="http://localhost:5149/image-craft/192bf284-a7af-4e5e-b8a9-72983b8b796f.jpg" alt="Imagen de categoria" width={100} height={100}/>
        </div>
    );
}
