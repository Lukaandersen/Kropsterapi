"use client"

import PageContent from "@/components/PageContent";
import Footer from "@/components/blocks/Footer/Footer";
import Navigation from "@/components/blocks/Navigation/Navigation";
export default function Page() {
  return (
    <div className="bg-lightBeige">
      <Navigation />
      <PageContent />
      <Footer />
    </div>
  );
}
