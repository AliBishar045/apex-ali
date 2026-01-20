import { Quote, Star, GraduationCap } from "lucide-react";

interface Testimonial {
  id: string;
  parent_name: string;
  child_name: string | null;
  school: string | null;
  content: string;
  rating: number;
  is_featured: boolean;
}

const Testimonials = () => {
  // Testimonials data updated with parent feedback
  // Static testimonials data replacing Supabase fetch
  const testimonials: Testimonial[] = [
    {
      id: "1",
      parent_name: "Ali Dakane",
      child_name: "Bukhari",
      school: "Boys High School",
      content: "The transformation I've seen in my son is remarkable. His discipline and academic focus have improved tremendously. The school strikes a perfect balance between religion and modern education.",
      rating: 5,
      is_featured: true,
    },
    {
      id: "2",
      parent_name: "Mrs. Zulekha",
      child_name: "Amina",
      school: "Girls High School",
      content: "I am impressed by the emphasis on moral values alongside academic excellence. My daughter is thriving both socially and academically in this safe environment.",
      rating: 5,
      is_featured: true,
    },
    {
      id: "3",
      parent_name: "Mama Zainab",
      child_name: "Zainab",
      school: "Junior School",
      content: "My daughter loves going to school every day. The CBC curriculum is implemented so well, and the teachers are incredibly caring and patient with the little ones.",
      rating: 5,
      is_featured: false,
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Quote className="w-4 h-4" />
            <span className="text-sm font-semibold">What Parents Say</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="text-gradient">Hundreds of Families</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from parents who have entrusted us with their children's education 
            and witnessed remarkable transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 ${
                testimonial.is_featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Featured Badge */}
              {testimonial.is_featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary/10 text-secondary text-xs font-bold px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              )}

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.parent_name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.parent_name}</p>
                  {testimonial.child_name && (
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{testimonial.child_name.includes("Alumni") ? "" : "Parent of "}{testimonial.child_name}</span>
                    </div>
                  )}
                  {testimonial.school && (
                    <p className="text-primary text-xs font-medium">{testimonial.school}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card rounded-2xl p-8 shadow-soft border border-border">
            <p className="text-lg font-display font-bold text-foreground mb-2">
              Join Our Growing Family
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Be part of the success stories. Apply for admission today!
            </p>
            <a
              href="/admissions"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              <GraduationCap className="w-5 h-5" />
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
