const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <h3 className="text-4xl font-bold arabic-text mb-2">ض</h3>
            <p className="text-primary-foreground/80 arabic-text">مقهى ض - تجربة قهوة استثنائية</p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a href="#home" className="hover:text-accent transition-colors arabic-text">الرئيسية</a>
            <a href="#menu" className="hover:text-accent transition-colors arabic-text">القائمة</a>
            <a href="#about" className="hover:text-accent transition-colors arabic-text">من نحن</a>
            <a href="#contact" className="hover:text-accent transition-colors arabic-text">تواصل معنا</a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60 text-sm arabic-text">
              © 2024 مقهى ض. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;