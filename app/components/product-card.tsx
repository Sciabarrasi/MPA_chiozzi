"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProductCardProps {
  title: string
  description: string
  imageSrc: string
  imagePosition?: string
  color: string
}

export function ProductCard({ title, description, imageSrc, imagePosition = "center", color }: ProductCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="bg-background border-zinc-800 overflow-hidden">
      <CardHeader className="pb-0">
        <CardTitle className={`text-xl text-${color}`}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="relative h-64 mb-4 overflow-hidden rounded-md">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>
        <CardDescription className="text-text-secondary">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="link" className={`text-${color} p-0 flex items-center`}>
              Ver más detalles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-background border-zinc-800 text-white">
            <DialogHeader>
              <DialogTitle className={`text-2xl text-${color}`}>{title}</DialogTitle>
              <DialogDescription className="text-text-secondary pt-2">
                Información detallada sobre este producto
              </DialogDescription>
            </DialogHeader>
            <div className="relative h-72 my-4 overflow-hidden rounded-md">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
                style={{ objectPosition: imagePosition }}
              />
            </div>
            <div className="space-y-4">
              <p className="text-text-secondary">{description}</p>
              <div className="border-t border-zinc-800 pt-4">
                <h4 className="text-lg font-medium mb-2">Características principales:</h4>
                <ul className="list-disc pl-5 text-text-secondary space-y-1">
                  <li>Alta calidad de impresión</li>
                  <li>Materiales premium resistentes</li>
                  <li>Personalización completa</li>
                  <li>Entrega rápida</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

