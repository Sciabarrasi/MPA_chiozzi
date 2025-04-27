/*
'use client'
import { useState } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  return (
    <div className="p-4 border rounded-md">
      <CldUploadWidget
        uploadPreset="UPLOAD_PRESSET"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSuccess={(result: any) => {
          setImageUrl(result.info.secure_url)
        }}
      >
        {({ open }) => (
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => open()}
          >
            Subir imagen
          </button>
        )}
      </CldUploadWidget>
      {imageUrl && (
        <div className="mt-4">
          <p className="text-sm">Imagen subida:</p>
          <img src={imageUrl} alt="Uploaded" className="w-48 h-auto rounded mt-2" />
        </div>
      )}
    </div>
  )
}
  */