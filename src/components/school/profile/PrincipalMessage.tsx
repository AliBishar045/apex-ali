import { Quote } from "lucide-react";

interface PrincipalMessageProps {
  name: string;
  title: string;
  image?: string;
  message: string[];
}

const PrincipalMessage = ({ name, title, image, message }: PrincipalMessageProps) => {
  return (
    <div className="bg-primary/5 rounded-3xl p-8 md:p-12 my-12 relative overflow-hidden">
      <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10 -z-0" />
      
      <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-4 border-white">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                No Image
              </div>
            )}
          </div>
          <div className="mt-4 text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-foreground">{name}</h3>
            <p className="text-primary font-medium">{title}</p>
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="font-display font-bold text-3xl text-foreground mb-6">
            Message from the {title}
          </h2>
          {message.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
          <div className="pt-4">
            <img 
              src="/signature-placeholder.png" 
              alt="Signature" 
              className="h-12 opacity-50" 
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
