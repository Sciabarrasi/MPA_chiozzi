"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  text: string;
  className?: string;
  filePath?: string;
  fileName?: string;
  files?: Array<{ path: string; name?: string }>;
}

export function DownloadButton({ 
  text, 
  className = "", 
  filePath, 
  fileName,
  files 
}: DownloadButtonProps) {
  
  const handleDownload = async (path: string, name?: string) => {
    try {
      const fullPath = path.startsWith('/public') ? path : `/public${path}`;
      
      const response = await fetch(fullPath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = name || path.split('/').pop() || 'documento';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('Error al descargar:', error);
      alert('Error al descargar el archivo. Por favor intente nuevamente.');
    }
  };

  const handleClick = () => {
    if (files && files.length > 0) {
      files.forEach((file, index) => {
        setTimeout(() => {
          handleDownload(file.path, file.name);
        }, index * 300);
      });
    } else if (filePath) {
      handleDownload(filePath, fileName);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`flex items-center gap-1 xs:gap-2 bg-primary/70 hover:bg-primary/80 text-white w-full max-w-[280px] xs:max-w-none sm:w-auto text-xs sm:text-sm md:text-base leading-tight ${className}`}
    >
      <Download className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
      {text}
    </Button>
  );
}