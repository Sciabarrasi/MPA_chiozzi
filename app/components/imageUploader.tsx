/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import type { CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { ImageIcon, Trash2 } from 'lucide-react';

interface CloudinaryUploadResultInfo {
  public_id: string;
  secure_url: string;
}

export default function ImageUploader({
  label,
  onUpload,
  maxImages,
}: {
  label: string;
  onUpload: (result: { publicId: string; url: string }) => void;
  maxImages: number;
}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleDelete = () => {
    setImageUrl(null);
    onUpload({ publicId: '', url: '' });
  };

  const handleUploadSuccess = (results: CloudinaryUploadWidgetResults) => {
    const info = typeof results.info === 'string' 
      ? { public_id: '', secure_url: results.info } 
      : results.info as CloudinaryUploadResultInfo;

    if (info?.secure_url) {
      setImageUrl(info.secure_url);
      onUpload({
        publicId: info.public_id,
        url: info.secure_url
      });
    }
  };

  return (
    <div className="border border-zinc-700 rounded-md p-4 bg-zinc-800 relative">
      <div className="flex items-center justify-center h-40 border-2 border-dashed border-zinc-700 rounded overflow-hidden">
        {imageUrl ? (
          <div className="relative w-full h-full group">
            <img
              src={imageUrl}
              alt="Uploaded"
              className="w-full h-full object-contain rounded"
            />
            <div className="absolute bottom-2 right-2 flex gap-2">
              <Button
                variant="destructive"
                size="sm"
                className="bg-red-600/90 hover:bg-red-700/90 text-white"
                onClick={handleDelete}
              >
                <Trash2 className="h-4 w-4 mr-1" /> Eliminar
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center p-4">
            <ImageIcon className="h-10 w-10 text-text-secondary mx-auto mb-2" />
            <p className="text-text-secondary mb-2">
              Arrastra una imagen o haz clic para seleccionar
            </p>
            <CldUploadWidget
              uploadPreset="prueba"
              options={{
                cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
                maxFiles: maxImages,
              }}
              onSuccess={handleUploadSuccess}
            >
              {({ open }) => (
                <Button
                  variant="outline"
                  className="border-zinc-700 text-text-secondary hover:text-white hover:border-white"
                  onClick={() => open()}
                >
                  {label}
                </Button>
              )}
            </CldUploadWidget>
          </div>
        )}
      </div>

      {imageUrl && (
        <div className="mt-3 flex justify-center">
          <CldUploadWidget
            uploadPreset="prueba"
            options={{
              cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
              maxFiles: maxImages,
            }}
            onSuccess={handleUploadSuccess}
          >
            {({ open }) => (
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-700 text-text-secondary hover:text-white hover:border-white"
                onClick={() => open()}
              >
                <ImageIcon className="h-4 w-4 mr-2" /> Subir nueva imagen
              </Button>
            )}
          </CldUploadWidget>
        </div>
      )}
    </div>
  );
}