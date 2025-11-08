import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
const toppers = [
  {
    rank: "1",
    name: "ISHITA KISHORE",
    program: "2 Year Integrated Program",
  },
  {
    rank: "4",
    name: "CAT RANKER DIVYANSHU",
    program: "Prelims + Mains Program",
  },
  {
    rank: "7",
    name: "ADITYA SRIVASTAVA",
    program: "2 Year Integrated Program",
  },
  {
    rank: "12",
    name: "ANURAG JAUHARI",
    program: "Foundation Course",
  },
  {
    rank: "15",
    name: "GARIMA LOHIYA",
    program: "Prelims + Mains Program",
  },
];
const stats = [
  {
    number: "3",
    label: "in Top 10\nAIR",
  },
  {
    number: "28",
    label: "in Top 100\nAIR",
  },
  {
    number: "95",
    label: "in Top 500\nAIR",
  },
  {
    number: "156",
    label: "Final\nSelections",
  },
];
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <section className="bg-hero text-primary-foreground py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                MEET OUR CHAMPIONS OF CIVIL SERVICES.
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                UPSC CSE 2025
              </h2>
            </div>

            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8 py-6"
            >
              ENROL NOW
            </Button>

            <p className="text-sm">
              Start your success journey with Kota Minds
            </p>
          </div>

          {/* Right Content - Stats Card */}
          <div className="bg-white text-foreground rounded-lg p-6 md:p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-2xl md:text-3xl">1000+ STUDENTS</span>
              </div>
              <div className="text-xl font-semibold">QUALIFIED</div>
              <p className="text-sm text-muted-foreground mt-1">
                (With Our Classroom Program)
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-secondary text-secondary-foreground rounded-lg p-4 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4">
              *Still Counting
            </p>
          </div>
        </div>

        {/* Toppers Showcase */}
        <div className="mt-12 bg-white text-foreground rounded-lg p-6 md:p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-bold">
              Top Performers - UPSC CSE 2024
            </h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentSlide(Math.min(1, currentSlide + 1))}
                disabled={currentSlide === 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {toppers.map((topper, index) => (
              <div
                key={index}
                className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {topper.rank}
                  </span>
                </div>
                <div className="text-lg font-bold text-secondary mb-1">
                  AIR {topper.rank}
                </div>
                <div className="font-semibold text-sm mb-1">{topper.name}</div>
                <div className="text-xs text-muted-foreground">
                  {topper.program}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
