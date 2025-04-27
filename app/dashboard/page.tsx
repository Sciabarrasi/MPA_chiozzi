/*
"use client";
import ImageUploader from "../components/imageUploader";
export default function DashboardPage() {
  const handleImageUpload = (imageUrl: string) => {
    // Aquí puedes hacer lo que necesites con la URL de la imagen
    console.log("Imagen subida:", imageUrl);
    // Por ejemplo, guardarla en tu base de datos
    // await saveImageToDatabase(imageUrl);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-xl mb-4">Subir Avatar</h2>
        <ImageUploader
          label="Subir Avatar"
          onUpload={handleImageUpload}
          maxImages={1}
        />
      </div>
      //poner para solamente subir una imagen
      <div className="mb-8">
        <h2 className="text-xl mb-4">Galería de Productos</h2>
        <ImageUploader
          label="Agregar Imágenes"
          onUpload={handleImageUpload}
          maxImages={5}
        />
      </div>
    </div>
  );
}
*/