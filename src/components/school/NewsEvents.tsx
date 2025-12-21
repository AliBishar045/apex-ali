import { useEffect, useState } from "react";
import { Calendar, Newspaper, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface NewsEvent {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  type: string;
  event_date: string | null;
  is_featured: boolean;
  created_at: string;
}

const NewsEvents = () => {
  const [items, setItems] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "news" | "events">("all");
  const KCSE2024_CONTENT =
    "We are proud to announce that Apex Boys High School students have achieved outstanding results in the 2024 KCSE examinations. With a school mean grade of 7.2, our students have demonstrated the fruit of hard work, dedication, and quality teaching. Special congratulations to our top students who scored straight B+ grades.";

  useEffect(() => {
    const fetchNewsEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("news_events")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(6);

        if (error) throw error;
        const updated = (data || []).map((item) => {
          if (
            item.type === "news" &&
            (item.title.toLowerCase().includes("admissions") ||
              /mean grade/i.test(item.content))
          ) {
            return { ...item, content: KCSE2024_CONTENT };
          }
          return item;
        });
        setItems(updated);
      } catch (error) {
        console.error("Error fetching news/events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsEvents();
  }, []);

  const filteredItems = items.filter(item => {
    if (activeTab === "all") return true;
    return item.type === activeTab.slice(0, -1); // Remove 's' from 'news' and 'events'
  });

  const featuredItem = items.find(item => item.is_featured);

  if (loading) {
    return (
      <section className="py-24 bg-background">
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
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Newspaper className="w-4 h-4" />
            <span className="text-sm font-semibold">Latest Updates</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            News &{" "}
            <span className="text-gradient">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, announcements, and upcoming events 
            from APEX GROUP OF SCHOOLS.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { key: "all", label: "All" },
            { key: "news", label: "News" },
            { key: "events", label: "Events" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "all" | "news" | "events")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card text-muted-foreground hover:bg-accent border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Item */}
        {featuredItem && activeTab === "all" && (
          <div className="mb-12">
            <div className="relative bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  {featuredItem.type === "event" ? (
                    <>
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>
                        {featuredItem.event_date
                          ? format(new Date(featuredItem.event_date), "MMMM d, yyyy")
                          : "Date TBA"}
                      </span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{format(new Date(featuredItem.created_at), "MMMM d, yyyy")}</span>
                    </>
                  )}
                  <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-full capitalize">
                    {featuredItem.type}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  {featuredItem.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredItem.content}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems
            .filter(item => !item.is_featured || activeTab !== "all")
            .map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                    {item.type === "event" ? (
                      <>
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>
                          {item.event_date
                            ? format(new Date(item.event_date), "MMM d, yyyy")
                            : "Date TBA"}
                        </span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>{format(new Date(item.created_at), "MMM d, yyyy")}</span>
                      </>
                    )}
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      item.type === "event" 
                        ? "bg-secondary/10 text-secondary"
                        : "bg-primary/10 text-primary"
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="text-primary p-0 h-auto hover:bg-transparent hover:translate-x-1 transition-transform">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No {activeTab === "all" ? "updates" : activeTab} available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsEvents;
