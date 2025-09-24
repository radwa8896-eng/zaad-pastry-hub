import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="section-gradient py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 arabic-text">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground arabic-text">
            نحن هنا لخدمتكم، تواصلوا معنا في أي وقت
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Location Card */}
          <div className="menu-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary arabic-text">
                <span className="text-2xl">📍</span>
                موقعنا
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground arabic-text leading-relaxed">
                شارع الملك فهد<br />
                حي العليا، الرياض<br />
                المملكة العربية السعودية
              </p>
            </CardContent>
          </div>

          {/* Contact Info Card */}
          <div className="menu-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary arabic-text">
                <span className="text-2xl">📞</span>
                معلومات التواصل
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-card-foreground arabic-text">
                <strong>الهاتف:</strong> 966-11-123-4567+
              </p>
              <p className="text-card-foreground arabic-text">
                <strong>البريد الإلكتروني:</strong> info@cafe-dhad.com
              </p>
              <div>
                <p className="text-card-foreground arabic-text mb-2">
                  <strong>ساعات العمل:</strong>
                </p>
                <p className="text-muted-foreground arabic-text text-sm">
                  السبت - الخميس: 6:00 ص - 12:00 م<br />
                  الجمعة: 2:00 ظ - 12:00 م
                </p>
              </div>
            </CardContent>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="text-center animate-scale-in">
          <Card className="menu-card bg-gradient-to-r from-accent/10 to-accent-light/10 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 arabic-text">
                تابعونا على وسائل التواصل الاجتماعي
              </h3>
              <p className="text-muted-foreground mb-6 arabic-text">
                ابقوا على اطلاع بآخر العروض والمنتجات الجديدة
              </p>
              
              <div className="flex justify-center gap-4 mb-6">
                <Button variant="outline" className="w-12 h-12 rounded-full p-0 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <span className="text-xl">📘</span>
                </Button>
                <Button variant="outline" className="w-12 h-12 rounded-full p-0 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <span className="text-xl">📷</span>
                </Button>
                <Button variant="outline" className="w-12 h-12 rounded-full p-0 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <span className="text-xl">🐦</span>
                </Button>
              </div>
              
              <Button className="btn-hero">
                احجز طاولتك الآن
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;