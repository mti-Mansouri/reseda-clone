// "use client";
import { Database } from "@/types/database";
import ServiceCard from "./ServiceCard";
type Service = Database["public"]["Tables"]["services"]["Row"];

export default function ServiceList({ services }: { services: Service[] }) {
  return (
    <>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service}></ServiceCard>
      ))}
    </>
  );
}
