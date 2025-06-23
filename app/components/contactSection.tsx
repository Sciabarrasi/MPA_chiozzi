import type React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#18181B" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">¿Listo para comenzar?</h2>
        <p className="mb-8" style={{ color: "#B0B0B0" }}>
          Contactanos para conversar sobre tu{" "}
          <span className="font-semibold" style={{ color: "#ED7D00" }}>
            próximo proyecto
          </span>
        </p>
        <Link className="text-white px-8 py-6 text-lg" href="/contacto">
          <Button
            className="text-white px-8 py-6 text-lg"
            style={{ backgroundColor: "#ED7D00" }}
          >
            Hablemos
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
