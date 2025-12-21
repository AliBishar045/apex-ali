import { useEffect, useState } from "react";
import { Quote, Star, GraduationCap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .order("is_featured", { ascending: false })
          .limit(6);

        if (error) throw error;
        setTestimonials(data || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-48 mx-auto mb-4" />
              <div className="h-4 bg-muted rounded w-96 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                  {testimonial.child_name && testimonial.school && (
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Parent of {testimonial.child_name}</span>
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

        {testimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No testimonials available at the moment.</p>
          </div>
        )}

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
