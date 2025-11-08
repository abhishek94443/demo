import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ishita Kishore",
    rank: "AIR 1",
    exam: "UPSC CSE 2024",
    quote: "Meet Ishita Kishore, UPSC CSE 2024 AIR 1! In this inspiring interview, Ishita shares her entire civil services preparation journey with Shahdol Institute.",
    badge: "CHAMPION OF CHAMPIONS!",
  },
  {
    name: "Aditya Srivastava",
    rank: "AIR 7",
    exam: "UPSC CSE 2024",
    quote: "Watch the inspiring journey of Aditya Srivastava, who secured All India Rank 7 in UPSC CSE 2024 through dedication, consistency, and expert guidance at Shahdol Institute.",
    badge: "EXCELLENCE PERSONIFIED",
  },
  {
    name: "Priya Sharma",
    rank: "AIR 3",
    exam: "SSC CGL 2024",
    quote: "Meet Priya Sharma, SSC CGL 2024 Topper, AIR 3, as she walks you through her inspiring journey from starting preparation to achieving success in government exams.",
    badge: "SHAHDOL STAR!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-xl text-muted-foreground">Our Pride, Their Stories</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="bg-gradient-to-br from-primary to-accent p-6 text-primary-foreground">
                <Badge className="bg-secondary text-secondary-foreground mb-4">
                  {testimonial.badge}
                </Badge>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">{testimonial.rank.split(" ")[1]}</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{testimonial.rank}</div>
                    <div className="text-sm opacity-90">{testimonial.exam}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              </div>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
