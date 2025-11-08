import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

const upscResults = [
  { air: "1", name: "Ishita Kishore", program: "2 Year Integrated Program" },
  { air: "7", name: "Aditya Srivastava", program: "Prelims + Mains Program" },
  { air: "12", name: "Anurag Jauhari", program: "Foundation Course" },
];

const sscResults = [
  { air: "3", name: "Priya Sharma", program: "SSC CGL Classroom Program" },
  { air: "8", name: "Rahul Verma", program: "SSC CHSL Program" },
  { air: "15", name: "Anjali Singh", program: "SSC CGL Online Program" },
];

const bankingResults = [
  { name: "Vikram Gupta", exam: "IBPS PO 2024 - Selected" },
  { name: "Sneha Patel", exam: "SBI Clerk 2024 - Selected" },
  { name: "Amit Kumar", exam: "RBI Grade B 2024 - Selected" },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Outstanding Results
        </h2>

        <div className="space-y-8 max-w-6xl mx-auto">
          {/* UPSC Results */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Trophy className="h-6 w-6" />
                UPSC CSE 2024 Results
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {upscResults.map((result, index) => (
                  <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{result.air}</span>
                    </div>
                    <div className="text-2xl font-bold text-secondary mb-2">AIR {result.air}</div>
                    <div className="font-semibold mb-1">{result.name}</div>
                    <div className="text-sm text-muted-foreground">{result.program}</div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="text-primary w-full mt-6">
                See all results
              </Button>
            </CardContent>
          </Card>

          {/* SSC Results */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Trophy className="h-6 w-6" />
                SSC 2024-25 Results
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {sscResults.map((result, index) => (
                  <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{result.air}</span>
                    </div>
                    <div className="text-2xl font-bold text-secondary mb-2">AIR {result.air}</div>
                    <div className="font-semibold mb-1">{result.name}</div>
                    <div className="text-sm text-muted-foreground">{result.program}</div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="text-primary w-full mt-6">
                See all results
              </Button>
            </CardContent>
          </Card>

          {/* Banking Results */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Trophy className="h-6 w-6" />
                Banking & Insurance Results
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {bankingResults.map((result, index) => (
                  <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Trophy className="w-12 h-12 text-white" />
                    </div>
                    <div className="font-semibold mb-1">{result.name}</div>
                    <div className="text-sm text-muted-foreground">{result.exam}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
