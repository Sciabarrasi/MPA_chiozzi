/*
import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import cloudinary from "@/lib/cloudinary";
export const config = {
  api: {
    bodyParser: false, // Importante para manejar archivos
  },
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  const form = new formidable.IncomingForm({ keepExtensions: true });
  form.parse(req, async (err, fields, files) => {
    if (err)
      return res.status(500).json({ error: "Error al procesar el formulario" });
    const file = files.image;
    if (!file || Array.isArray(file)) {
      return res.status(400).json({ error: "Archivo no válido" });
    }
    try {
      const result = await cloudinary.uploader.upload(file.filepath, {
        folder: "dashboard_images",
      });
      return res.status(200).json({ url: result.secure_url });
    } catch (error) {
      console.error("Error al subir la imagen a Cloudinary:", error);
      return res
        .status(500)
        .json({ error: "Error al subir la imagen a Cloudinary" });
    }
  });
}

*/