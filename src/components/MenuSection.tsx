import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import coffeeImage from "@/assets/coffee-beans.jpg";
import pastriesImage from "@/assets/pastries.jpg";

const MenuSection = () => {
  const coffeeItems = [
    { name: "قهوة عربية تقليدية", price: "15 ريال", description: "قهوة محمصة طازجة بالطريقة التقليدية" },
    { name: "إسبريسو", price: "12 ريال", description: "قهوة إيطالية مركزة ومميزة" },
    { name: "لاتيه", price: "18 ريال", description: "مزيج مثالي من القهوة والحليب الكريمي" },
    { name: "كابتشينو", price: "16 ريال", description: "قهوة كلاسيكية مع رغوة الحليب الناعمة" },
  ];

  const pastryItems = [
    { name: "كرواسان بالزبدة", price: "8 ريال", description: "كرواسان فرنسي طازج ومقرمش" },
    { name: "مافن التوت", price: "10 ريال", description: "كيك ناعم محشو بالتوت الطازج" },
    { name: "معمول بالتمر", price: "6 ريال", description: "حلوى عربية تقليدية محشوة بالتمر" },
    { name: "بسكويت الشوكولاتة", price: "7 ريال", description: "بسكويت مقرمش بقطع الشوكولاتة" },
  ];

  const MenuCard = ({ title, items, image, description }: {
    title: string;
    items: typeof coffeeItems;
    image: string;
    description: string;
  }) => (
    <div className="menu-card group">
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
      </div>
      
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-primary arabic-text">{title}</CardTitle>
        <CardDescription className="text-muted-foreground arabic-text">{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex justify-between items-start border-b border-border/50 pb-3 last:border-0 last:pb-0"
            >
              <div className="flex-1">
                <h4 className="font-semibold text-card-foreground arabic-text">{item.name}</h4>
                <p className="text-sm text-muted-foreground mt-1 arabic-text">{item.description}</p>
              </div>
              <span className="text-accent font-bold text-lg ml-4">{item.price}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );

  return (
    <section className="section-gradient py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 arabic-text">
            قائمتنا المميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto arabic-text">
            اكتشف مجموعة متنوعة من أجود أنواع القهوة والمعجنات الطازجة المحضرة بعناية فائقة
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="animate-slide-up">
            <MenuCard 
              title="المشروبات" 
              items={coffeeItems}
              image={coffeeImage}
              description="قهوة طازجة محمصة يومياً"
            />
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <MenuCard 
              title="المعجنات والحلويات" 
              items={pastryItems}
              image={pastriesImage}
              description="معجنات طازجة محضرة يومياً"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;