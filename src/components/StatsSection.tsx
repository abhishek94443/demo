import { Building2, GraduationCap, Users } from "lucide-react";

const stats = [
  {
    icon: Building2,
    number: "15+",
    label: "Centers across Madhya Pradesh",
  },
  {
    icon: GraduationCap,
    number: "500+",
    label: "Students qualified in UPSC & Govt. Exams",
  },
  {
    icon: Users,
    number: "100+",
    label: "Expert Faculty & Mentors",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-stats">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          20+ years of excellence
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold text-primary">{stat.number}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
