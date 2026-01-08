import { Calendar, ArrowRight, Share2, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { trackShare } from "@/lib/analytics";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image?: string;
}

interface SchoolNewsProps {
  schoolName: string;
  news: NewsItem[];
}

const SchoolNews = ({ schoolName, news }: SchoolNewsProps) => {
  const handleShare = (platform: string, title: string) => {
    trackShare(title, platform);
    
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this news from ${schoolName}: ${title}`);
    
    let shareUrl = "";
    if (platform === "Facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "WhatsApp") {
      shareUrl = `https://wa.me/?text=${text} ${url}`;
    } else if (platform === "Twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-2">
            Latest from {schoolName}
          </h2>
          <p className="text-muted-foreground">
            Stay updated with our latest events, achievements, and activities.
          </p>
        </div>
        <Button variant="outline" asChild className="shrink-0">
          <Link to="/news">
            View All News <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item) => (
          <div 
            key={item.id} 
            className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-video bg-muted relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                {item.category}
              </div>
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-primary/5">
                  No Image
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                {item.date}
              </div>
              <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                {item.summary}
              </p>
              
              <div className="flex items-center justify-between mt-4 border-t pt-4">
                <Button variant="link" className="p-0 h-auto font-bold text-primary">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground">
                      <span className="sr-only">Share</span>
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleShare("Facebook", item.title)}>
                      <Facebook className="w-4 h-4 mr-2" /> Facebook
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleShare("WhatsApp", item.title)}>
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolNews;
