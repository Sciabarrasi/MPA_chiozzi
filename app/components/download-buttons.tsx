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
  
   const handleDownload = () => {
    if (files && files.length > 0) {
      files.forEach((file, index) => {
        setTimeout(() => {
          downloadFile(file.path, file.name);
        }, index * 300);
      });
    } else if (filePath) {
      downloadFile(filePath, fileName);
    } else {
      console.error("No se proporcionó ninguna ruta de archivo");
    }
  };

  const downloadFile = (path: string, name?: string) => {
    try {
      const link = document.createElement("a");
      link.href = path;
      link.download = name || path.split("/").pop() || "documento";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error al descargar:", error);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      className={`flex items-center gap-1 xs:gap-2 bg-primary/70 hover:bg-primary/80 text-white w-full max-w-[280px] xs:max-w-none sm:w-auto text-xs sm:text-sm md:text-base leading-tight ${className}`}
    >
      <Download className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
      {text}
    </Button>
  );
}