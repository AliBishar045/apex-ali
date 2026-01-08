import { useState } from "react";
import { SchoolFacility } from "@/types/school";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FacilitiesGalleryProps {
  facilities: SchoolFacility[];
}

const FacilitiesGallery = ({ facilities }: FacilitiesGalleryProps) => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Facilities" },
    { id: "academic", label: "Academic" },
    { id: "sports", label: "Sports & Co-curricular" },
    { id: "boarding", label: "Boarding & Life" },
  ];

  const getFilteredFacilities = (category: string) => {
    if (category === "all") return facilities;
    return facilities.filter((f) => f.category === category);
  };

  return (
    <div className="space-y-8">
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4">
            {categories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredFacilities(cat.id).map((facility) => (
                <div
                  key={facility.id}
                  className="group relative overflow-hidden rounded-2xl aspect-video border border-border shadow-sm bg-card"
                >
                  <img
                    src={facility.image_url || "/placeholder.svg"}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1 drop-shadow-sm">
                        {facility.name}
                      </h4>
                      {facility.description && (
                        <p className="text-white/90 text-sm line-clamp-2 drop-shadow-sm">
                          {facility.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {getFilteredFacilities(cat.id).length === 0 && (
                <div className="col-span-full text-center py-12 text-muted-foreground bg-muted/20 rounded-xl border border-dashed">
                  No facilities found in this category.
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FacilitiesGallery;
