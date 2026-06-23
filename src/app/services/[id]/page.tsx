import { notFound } from "next/navigation";
import { servicesData } from "@/src/data/services.data";
import ServiceDetailClient from "@/src/components/pages/services/ServiceDetailClient";

// 1. Change to an async function and define params as a Promise
export default async function ServiceDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // 2. Await the params to extract the ID
  const resolvedParams = await params;
  const currentId = resolvedParams.id;

  // Debugging: This will print the ID in your VS Code terminal
  console.log("The URL is asking for ID:", currentId);

  // 3. Match the ID
  const service = servicesData.services.find((s) => s.id === currentId);

  // 4. Trigger 404 ONLY if it truly doesn't match
  if (!service) {
    console.log("Could not find a match in servicesData for:", currentId);
    notFound();
  }

  return (
    <main className="min-h-screen pt-32">
      <ServiceDetailClient serviceId={service.id} />
    </main>
  );
}

export function generateStaticParams() {
  return servicesData.services.map((service) => ({
    id: service.id, 
  }));
}