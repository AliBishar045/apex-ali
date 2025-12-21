import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "254720253298";
  const message = encodeURIComponent("Hello! I'm interested in learning more about APEX GROUP OF SCHOOLS. Please provide more information about admissions.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground px-4 py-2 rounded-xl shadow-card whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium border border-border">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
