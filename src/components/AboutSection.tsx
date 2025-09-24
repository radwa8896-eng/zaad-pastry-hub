import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 arabic-text">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="animate-slide-up">
          <Card className="menu-card bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <div className="text-6xl mb-6 arabic-text text-accent">ض</div>
                
                <p className="text-lg md:text-xl leading-relaxed text-card-foreground arabic-text mb-6">
                  مقهى <strong className="text-accent">ض</strong> هو وجهتكم المثالية لتجربة قهوة استثنائية في أجواء دافئة ومريحة. 
                  نحن نؤمن بأن القهوة ليست مجرد مشروب، بل هي تجربة تجمع الأحباب وتخلق اللحظات الجميلة.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground arabic-text mb-8">
                  نقدم أجود أنواع القهوة المحمصة طازجة يومياً، بالإضافة إلى مجموعة متنوعة من المعجنات 
                  والحلويات المحضرة بحب وعناية فائقة من قبل فريقنا المتخصص.
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-3 gap-6 mt-12">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">☕</span>
                    </div>
                    <h3 className="font-semibold text-primary arabic-text">قهوة طازجة</h3>
                    <p className="text-sm text-muted-foreground arabic-text mt-2">محمصة يومياً</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🥐</span>
                    </div>
                    <h3 className="font-semibold text-primary arabic-text">معجنات طازجة</h3>
                    <p className="text-sm text-muted-foreground arabic-text mt-2">محضرة يومياً</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <h3 className="font-semibold text-primary arabic-text">أجواء دافئة</h3>
                    <p className="text-sm text-muted-foreground arabic-text mt-2">مريحة وهادئة</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;