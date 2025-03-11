import type React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => (
  <Card className="bg-background border-none">
    <CardContent className="p-6 flex flex-col items-center text-center bg-[#2A2A2A] rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-highlight">{title}</h3>
      <div className="relative w-full h-48 mb-6 overflow-hidden flex items-center justify-center">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg object-cover mx-auto"
        />
      </div>
      <p className="text-text-secondary">{description}</p>
    </CardContent>
  </Card>
);

export default ServiceCard;