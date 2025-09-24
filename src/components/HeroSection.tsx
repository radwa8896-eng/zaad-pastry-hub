import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cafe-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="مقهى ض - أجواء دافئة وقهوة أصيلة"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Arabic Logo */}
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold mb-6 arabic-text tracking-wider">
            ض
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 arabic-text">
            مقهى ض
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed arabic-text">
            تجربة قهوة استثنائية مع أجود أنواع القهوة والمعجنات الطازجة في أجواء دافئة ومريحة
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button className="btn-hero">
              اكتشف قائمتنا
            </Button>
            <Button variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg">
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;