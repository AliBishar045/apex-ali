import { Facebook, Instagram, Youtube, ArrowRight, ExternalLink, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trackSocialClick } from "@/lib/analytics";

// Import images directly from source
import boysFormal from "@/assets/boys-formal.jpeg";
import girlsAdmin from "@/assets/girls-admin.jpeg";
import primaryKids from "@/assets/primary-kids.jpg";
import sports from "@/assets/sports.jpg";
import boysGroup from "@/assets/boys-group.jpeg";
import religion1 from "@/assets/religion-1.jpg";
import girlsClassroom from "@/assets/girls-classroom.jpeg";
import boysStudying from "@/assets/boys-studying.jpeg";
import religion2 from "@/assets/religion-2.jpg";
import studentsGroup1 from "@/assets/students-group1.jpeg";
import teachers from "@/assets/teachers.jpg";
import boysTrophy from "@/assets/boys-trophy.jpeg";

// import instagramReel from "@/assets/video-main.mp4";

// Mock data for Instagram Feed with real imported images
const instagramPosts = [
  { id: 1, image: boysFormal, likes: 124, comments: 8 },
  { id: 2, image: girlsAdmin, likes: 256, comments: 14 },
  { id: 3, image: primaryKids, likes: 189, comments: 12 },
  { id: 4, image: sports, likes: 342, comments: 21 },
  { id: 5, image: boysGroup, likes: 156, comments: 5 },
  { id: 6, image: religion1, likes: 203, comments: 18 },
  { id: 7, image: girlsClassroom, likes: 178, comments: 9 },
  { id: 8, image: boysStudying, likes: 245, comments: 16 },
  { id: 9, image: religion2, likes: 167, comments: 7 },
  { id: 10, image: studentsGroup1, likes: 289, comments: 24 },
  { id: 11, image: teachers, likes: 198, comments: 11 },
  { id: 12, image: boysTrophy, likes: 412, comments: 32 },
];

const SocialMediaFeeds = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Connect With Our Community
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Follow us on social media to stay updated with the latest news, events, and student achievements.
            Join our digital ecosystem today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Facebook Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-blue-600 rounded-full text-white shadow-md">
                <Facebook className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Facebook</h3>
            </div>
            <Card className="border-none shadow-lg overflow-hidden h-[500px] bg-card">
              <CardContent className="p-0 h-full">
                {/* Facebook Page Plugin Iframe */}
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FApex-Group-Of-Schools-KE-100079193852877%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                  width="100%" 
                  height="100%" 
                  style={{ border: "none", overflow: "hidden" }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Page Feed"
                ></iframe>
              </CardContent>
            </Card>
            <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a 
                href="https://www.facebook.com/p/Apex-Group-Of-Schools-KE-100079193852877/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackSocialClick("Facebook", "Homepage")}
              >
                Visit Facebook Page <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Instagram Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full text-white shadow-md">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Instagram</h3>
            </div>
            <Card className="border-none shadow-lg overflow-hidden h-[500px] bg-card flex flex-col">
              <CardContent className="p-0 h-full bg-black flex items-center justify-center">
                 {/* <video 
                  src={instagramReel}
                  className="w-full h-full object-contain bg-black" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  controls
                /> */}
                <img 
                  src={boysGroup}
                  alt="Instagram Feed"
                  className="w-full h-full object-cover"
                />
               </CardContent>
            </Card>
            <Button className="w-full gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none" asChild>
              <a 
                href="https://www.instagram.com/apexschool_ke/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackSocialClick("Instagram", "Homepage")}
              >
                Follow on Instagram <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* YouTube Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-red-600 rounded-full text-white shadow-md">
                <Youtube className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">YouTube</h3>
            </div>
            <Card className="border-none shadow-lg overflow-hidden h-[500px] bg-black">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Main Video */}
                <div className="flex-1 relative bg-black">
                  <iframe 
                     className="absolute inset-0 w-full h-full"
                     src="https://www.youtube.com/embed/pMbQW_vDkLQ?autoplay=1&mute=1&rel=0" 
                     title="Apex Schools PP2 2024 Graduation Ceremony"
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                     allowFullScreen
                     loading="lazy"
                   ></iframe>
                </div>
                {/* Video List */}
                <div className="h-[200px] bg-card p-4 overflow-y-auto custom-scrollbar">
                   <div className="space-y-3">
                      {[
                        { id: "pMbQW_vDkLQ", title: "Apex Schools PP2 2024 Graduation Ceremony", views: "1.2K views", time: "2 weeks ago" },
                        { id: "G_cG-ZpyWTg", title: "School Tour: Exploring our State-of-the-Art Facilities", views: "2.4K views", time: "1 month ago" },
                        { id: "sE_y5c_jE4g", title: "Sports Day Highlights 2024", views: "856 views", time: "2 months ago" }
                      ].map((video) => (
                        <div key={video.id} className="flex gap-3 items-start group cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-colors">
                           <div className="w-24 h-16 bg-muted rounded overflow-hidden flex-shrink-0 relative">
                              <img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} alt="Thumbnail" className="w-full h-full object-cover" />
                           </div>
                           <div>
                              <p className="text-sm font-semibold line-clamp-2 group-hover:text-red-600 transition-colors">{video.title}</p>
                              <p className="text-xs text-muted-foreground mt-1">{video.views} • {video.time}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </CardContent>
            </Card>
            <Button className="w-full gap-2 bg-red-600 hover:bg-red-700 text-white" asChild>
              <a 
                href="https://www.youtube.com/@ApexSchools" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackSocialClick("YouTube", "Homepage")}
              >
                Subscribe on YouTube <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialMediaFeeds;
