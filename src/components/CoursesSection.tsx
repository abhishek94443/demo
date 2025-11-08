import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = {
  upsc: [
    "Two Year Integrated Classroom Course for UPSC CSE (Prelims + Mains + Interview)",
    "One Year Prelims cum Mains Classroom Course for UPSC CSE",
    "Foundation Course for UPSC CSE (For Graduates)",
  ],
  ssc: [
    "Six Month Integrated Classroom Course for SSC CGL",
    "One Year Classroom Course for SSC CHSL",
    "SSC MTS & Stenographer Preparation Course",
  ],
  banking: [
    "Six Month Classroom Course for IBPS PO & Clerk",
    "One Year Integrated Course for SBI PO & Clerk",
    "RBI Grade B Officer Preparation Course",
  ],
};

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 bg-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Popular Courses
        </h2>

        <Tabs defaultValue="upsc" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
            <TabsTrigger value="upsc" className="bg-primary text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 text-sm md:text-base font-semibold">
              UPSC CSE
            </TabsTrigger>
            <TabsTrigger value="ssc" className="bg-primary text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 text-sm md:text-base font-semibold">
              SSC Exams
            </TabsTrigger>
            <TabsTrigger value="banking" className="bg-primary text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 text-sm md:text-base font-semibold">
              Banking
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upsc">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 space-y-4">
                {courses.upsc.map((course, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm md:text-base">{course}</p>
                  </div>
                ))}
                <Button variant="link" className="text-primary mt-4">
                  Check More
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ssc">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 space-y-4">
                {courses.ssc.map((course, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm md:text-base">{course}</p>
                  </div>
                ))}
                <Button variant="link" className="text-primary mt-4">
                  Check More
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="banking">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 space-y-4">
                {courses.banking.map((course, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm md:text-base">{course}</p>
                  </div>
                ))}
                <Button variant="link" className="text-primary mt-4">
                  Check More
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CoursesSection;
