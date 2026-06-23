import ClientsHeader from "@/src/components/pages/clients/ClientsHeader";
import ClientsGrid from "@/src/components/pages/clients/ClientsGrid";

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-32 relative overflow-hidden w-full selection:bg-[#6748FE] selection:text-white">
      {/* Optional: Subtle ambient glow to make the grid pop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 bg-[#6748FE]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Universal Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <ClientsHeader />
        <ClientsGrid />
      </div>
    </main>
  );
}
