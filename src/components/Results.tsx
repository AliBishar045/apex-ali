import { TrendingUp } from "lucide-react";
import readingImage from "@/assets/nairobi-reading.jpeg";
import phoneImage from "@/assets/nairobi-phone.jpeg";
import chartGold from "@/assets/chart-gold.png";
import chartGbp from "@/assets/chart-gbp.png";
import chartBtc from "@/assets/chart-btc.png";

const Results = () => {
  const testimonials = [
    {
      name: "James K.",
      role: "Student",
      content:
        "The mentorship completely changed my approach to trading. I went from losing money to consistent profits in just 3 months.",
    },
    {
      name: "Sarah M.",
      role: "Student",
      content:
        "The signals are incredibly accurate. Nairobi FX explains everything so well that I'm learning while making money.",
    },
    {
      name: "David O.",
      role: "Student",
      content:
        "Best investment I've made. The course material is comprehensive and the support is outstanding.",
    },
  ];

  const tradingPairs = [
    { pair: "XAUUSD", desc: "Gold Trading", winRate: "78%" },
    { pair: "GBPUSD", desc: "Cable Pairs", winRate: "72%" },
    { pair: "EURUSD", desc: "Euro Dollar", winRate: "75%" },
    { pair: "BTCUSD", desc: "Bitcoin", winRate: "68%" },
  ];

  const tradingCharts = [
    { image: chartGold, label: "XAUUSD Analysis", desc: "Gold price action with VCM model" },
    { image: chartGbp, label: "GBPUSD Setup", desc: "Cable pair reversal pattern" },
    { image: chartBtc, label: "BTCUSD Trade", desc: "Bitcoin continuation setup" },
  ];

  return (
    <section id="results" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase mb-4">
            Proven Results
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Real Results, Real{" "}
            <span className="text-gradient">Success Stories</span>
          </h2>
        </div>

        {/* Trading Pairs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {tradingPairs.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-xl font-bold text-foreground">{item.pair}</p>
              <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
              <p className="text-2xl font-bold text-primary">{item.winRate}</p>
              <p className="text-xs text-muted-foreground">Win Rate</p>
            </div>
          ))}
        </div>

        {/* Trading Charts Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Live Trading <span className="text-gradient">Analysis</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {tradingCharts.map((chart, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={chart.image}
                    alt={chart.label}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">{chart.label}</p>
                  <p className="text-sm text-muted-foreground">{chart.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials and Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={readingImage}
                alt="Nairobi FX Trader studying"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={phoneImage}
                alt="Nairobi FX Trader analyzing markets"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold">
              What My Students Say
            </h3>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
              >
                <p className="text-muted-foreground italic mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
