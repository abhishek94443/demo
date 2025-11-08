import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const announcements = [
  { title: "UPSC CSE 2025 Prelims Exam Date Announced", action: "Check Now", isNew: true },
  { title: "SSC CGL Tier-1 Results 2025", action: "View Now", isNew: false },
  { title: "IBPS PO 2025 Notification Released", action: "Download", isNew: false },
];

const news = [
  { title: "Shahdol Institute Students Excel in UPSC CSE 2024", action: "Read More" },
  { title: "Free Current Affairs Workshop This Weekend", action: "Register" },
  { title: "New Online Test Series for Banking Exams", action: "Enroll Now" },
];

const AnnouncementsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Announcements */}
          <Card className="border-0 shadow-md overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground py-4">
              <CardTitle className="text-xl">Announcements</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {announcements.map((item, index) => (
                <div key={index} className="flex items-start justify-between gap-4 pb-4 border-b last:border-0">
                  <div className="flex items-start gap-2 flex-1">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm">{item.title}</p>
                      {item.isNew && (
                        <Badge className="bg-secondary text-secondary-foreground mt-2">New</Badge>
                      )}
                    </div>
                  </div>
                  <Button size="sm" className="flex-shrink-0">
                    {item.action}
                  </Button>
                </div>
              ))}
              <Button variant="link" className="text-primary w-full">
                Check More
              </Button>
            </CardContent>
          </Card>

          {/* News & Events */}
          <Card className="border-0 shadow-md overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground py-4">
              <CardTitle className="text-xl">News & Events</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {news.map((item, index) => (
                <div key={index} className="flex items-start justify-between gap-4 pb-4 border-b last:border-0">
                  <div className="flex items-start gap-2 flex-1">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm">{item.title}</p>
                  </div>
                  <Button size="sm" className="flex-shrink-0">
                    {item.action}
                  </Button>
                </div>
              ))}
              <Button variant="link" className="text-primary w-full">
                Check More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
