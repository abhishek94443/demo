import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const answerKeys = {
  upsc: [
    "UPSC CSE Prelims 2024 Answer Key & Solutions",
    "UPSC CAPF 2024 Answer Key & Solutions",
  ],
  ssc: [
    "SSC CGL Tier-1 2025 Answer Key & Solutions",
    "SSC CHSL 2024 Answer Key & Solutions",
  ],
  banking: [
    "IBPS PO Prelims 2024 Answer Key & Solutions",
    "SBI Clerk Mains 2024 Answer Key & Solutions",
  ],
};

const AnswerKeysSection = () => {
  return (
    <section className="py-16 bg-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Official Answer Keys & Solutions
        </h2>

        <Tabs defaultValue="upsc" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
            <TabsTrigger value="upsc" className="bg-primary text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 text-sm md:text-base font-semibold">
              UPSC
            </TabsTrigger>
            <TabsTrigger value="ssc" className="bg-primary text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 text-sm md:text-base font-semibold">
              SSC
            </TabsTrigger>
            <TabsTrigger value="banking" className="bg-primary text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 text-sm md:text-base font-semibold">
              Banking
            </TabsTrigger>
          </TabsList>

          {Object.entries(answerKeys).map(([key, items]) => (
            <TabsContent key={key} value={key}>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 space-y-4">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm md:text-base">{item}</p>
                      </div>
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                  <Button variant="link" className="text-primary w-full mt-4">
                    See all answers/ solutions
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AnswerKeysSection;
