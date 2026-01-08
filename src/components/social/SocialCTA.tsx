import { Facebook, Instagram, Youtube } from "lucide-react";
import { trackSocialClick } from "@/lib/analytics";
import { Button } from "@/components/ui/button";

interface SocialCTAProps {
  schoolName: string;
  className?: string;
}

const SocialCTA = ({ schoolName, className = "" }: SocialCTAProps) => {
  const handleClick = (platform: string) => {
    trackSocialClick(platform, schoolName);
  };

  return (
    <div className={`bg-primary/5 rounded-xl p-8 text-center ${className}`}>
      <h3 className="font-display font-bold text-2xl mb-2 text-primary">
        Join Our Community
      </h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Follow {schoolName} on social media for daily updates, student achievements, and behind-the-scenes moments.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          variant="outline"
          size="lg"
          className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          asChild
          onClick={() => handleClick("Facebook")}
        >
          <a
            href="https://www.facebook.com/p/Apex-Group-Of-Schools-KE-100079193852877/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow ${schoolName} on Facebook`}
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </a>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="gap-2 border-pink-600 text-pink-600 hover:bg-pink-50"
          asChild
          onClick={() => handleClick("Instagram")}
        >
          <a
            href="https://www.instagram.com/apexschool_ke/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow ${schoolName} on Instagram`}
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="gap-2 border-red-600 text-red-600 hover:bg-red-50"
          asChild
          onClick={() => handleClick("YouTube")}
        >
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Subscribe to ${schoolName} on YouTube`}
          >
            <Youtube className="w-5 h-5" />
            YouTube
          </a>
        </Button>
      </div>
    </div>
  );
};

export default SocialCTA;
