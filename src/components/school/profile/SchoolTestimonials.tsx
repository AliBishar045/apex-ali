import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

interface SchoolTestimonialsProps {
  testimonials: Testimonial[];
}

const SchoolTestimonials = ({ testimonials }: SchoolTestimonialsProps) => {
  return (
    <div className="py-12 bg-primary/5 rounded-3xl my-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          What Parents Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear from our community about their experience at Apex Group of Schools.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-8">
        {testimonials.map((item, index) => (
          <div 
            key={index} 
            className="bg-background p-6 rounded-2xl shadow-sm border border-border flex flex-col relative"
          >
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 flex-grow italic">
              "{item.content}"
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <Avatar>
                <AvatarImage src={item.image} />
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                  {item.name[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold text-sm">{item.name}</h4>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolTestimonials;
