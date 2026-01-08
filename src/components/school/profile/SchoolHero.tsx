import { MapPin } from "lucide-react";

interface SchoolHeroProps {
  name: string;
  location: string;
  image: string;
  description: string;
}

const SchoolHero = ({ name, location, image, description }: SchoolHeroProps) => {
  return (
    <div className="relative h-[60vh] min-h-[500px] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-16 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            <MapPin className="w-4 h-4" />
            {location}
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            {name}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolHero;
