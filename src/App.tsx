/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  BarChart3, 
  Video, 
  Share2, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Zap,
  MessageSquare,
  Instagram,
  Linkedin
} from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_URL = "https://wa.me/966543449227";
const INSTAGRAM_URL = "https://www.instagram.com/ruwaah.sa/";
const TIKTOK_URL = "https://www.tiktok.com/@ruwaah.sa";
const LINKEDIN_URL = "https://www.linkedin.com/company/ruwaah-agency/";
const LOGO_URL = "https://lh3.googleusercontent.com/d/1gCXIpq3pVEiX5iuYvLAUcOmSaxe0pUmi";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.33 6.33 0 0 1-1.87-1.5c-.02 3.1-.03 6.2-.03 9.3 0 1.2-.2 2.44-.88 3.41-.7 1.02-1.74 1.74-2.93 2.1-.88.28-1.82.38-2.73.32-1.53-.1-3.04-.74-4.13-1.83-1.1-1.1-1.74-2.6-1.83-4.13-.12-2.13.7-4.3 2.2-5.83 1.3-1.3 3.14-2.1 5-2.11.12 0 .24 0 .36.01v4.13a3.5 3.5 0 0 0-1.39.4c-.93.48-1.6 1.46-1.7 2.51-.11 1.13.39 2.26 1.25 3.01.82.73 2.01.97 3.03.63 1.02-.34 1.85-1.21 2.13-2.23.1-.38.15-.78.15-1.17V.02z"/>
  </svg>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="رُواة للتسويق الالكتروني" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
          <span className="text-xl font-bold text-gray-900 font-sans tracking-tight">رُواة للتسويق الالكتروني</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#why-us" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">لماذا نحن؟</a>
          <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">خدماتنا</a>
          <a href="#partners" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">عملائنا</a>
          <a href="#process" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">خطوات العمل</a>
          
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200"
          >
            ابدأ الآن
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-700" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
          نحو بناء حضور رقمي قوي وقابل للتوسع
        </span>
        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
          حوّل حضورك الرقمي إلى <br />
          <span className="text-indigo-600">محرك نمو حقيقي</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
          فرصة استثنائية للمنشآت الصغيرة والمتوسطة في السوق السعودي لبناء علامة تجارية قوية من خلال محتوى احترافي واستراتيجيات تسويقية ذكية.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group"
          >
            احجز استشارتك المجانية
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const WhyUs = () => (
  <section id="why-us" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square bg-indigo-100 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
              alt="التسويق الرقمي والنمو" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Zap className="text-emerald-600 w-6 h-6" />
              </div>
              <span className="font-bold text-gray-900">نموذج منخفض التكلفة</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              نقدم حلولاً احترافية تناسب ميزانية المنشآت الصغيرة دون التضحية بالجودة.
            </p>
          </div>
        </motion.div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">لماذا تختار وكالتنا؟</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center">
                <Users className="text-indigo-600 w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">سد فجوة الموارد والخبرة</h3>
                <p className="text-gray-600 leading-relaxed">
                  نعلم أن المنشآت الصغيرة تعاني من شح الكوادر المتخصصة. نحن نعمل كفريقك التسويقي المتكامل، نوفر لك الخبرة التي تحتاجها دون تكاليف التوظيف الباهظة.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center">
                <BarChart3 className="text-indigo-600 w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">بديل ذكي للوكالات الكبرى</h3>
                <p className="text-gray-600 leading-relaxed">
                  الوكالات الكبرى ترهق ميزانيتك بتكاليف إدارية ضخمة. نموذجنا يعتمد على الكفاءة والتركيز على النتائج الملموسة، مما يجعل خدماتنا قابلة للتكرار والتوسع مع نمو عملك.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center">
                <CheckCircle2 className="text-indigo-600 w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">تركيز محلي برؤية عالمية</h3>
                <p className="text-gray-600 leading-relaxed">
                  نفهم طبيعة السوق السعودي والتحولات الرقمية المتسارعة، ونصيغ محتواك بلغة تلامس طموح واحتياجات العميل المحلي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "تحليل السوق والعملاء",
      description: "لا نبدأ عشوائياً؛ نقوم بدراسة معمقة للمنافسين وتحليل سلوك جمهورك الرقمي لنفتح لك آفاقاً جديدة للوصول للعملاء الذين يبحثون عنك فعلاً.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "إنتاج المحتوى الاحترافي",
      description: "نحول 'الريلز' إلى أداة إعلانية جبارة. من كتابة السيناريوهات الجذابة إلى التصوير والمونتاج عالي الجودة، نصنع محتوى يوقف التمرير ويحفز التفاعل.",
      icon: <Video className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "النشر الذكي للمحتوى",
      description: "المحتوى الرائع يحتاج لتوقيت أروع. نضمن وصول رسالتك لأقصى مدى من خلال الجدولة الذكية في أوقات الذروة التي يتواجد فيها جمهورك المستهدف.",
      icon: <Share2 className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "إدارة الحملات الإعلانية",
      description: "هدفنا النهائي هو المبيعات. ندير حملاتك الممولة بدقة متناهية لنحول المشاهدات والاعجابات إلى صفقات ملموسة وعائد استثماري حقيقي.",
      icon: <Target className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا المتكاملة</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">نرافقك في رحلة نجاحك الرقمي من التحليل وحتى تحقيق المبيعات.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "جلسة الاكتشاف المجانية",
      description: "نجلس معك لنفهم أهدافك، تحدياتك، والفرص الرقمية المتاحة لنمو عملك.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "دراسة العميل والسوق",
      description: "نقوم بتحليل معمق لجمهورك ومنافسيك لنبني استراتيجية محتوى تميزك عن الآخرين.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "عرض الخدمة المخصصة",
      description: "نقدم لك باقة مصممة خصيصاً لاحتياجاتك، مع خطة واضحة وتوقعات واقعية للعائد.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-indigo-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800/50 skew-x-12 translate-x-32 -z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">كيف نبدأ؟</h2>
          <p className="text-indigo-200 text-xl">خطوات بسيطة تفصلك عن التميز الرقمي</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-indigo-500/50 -translate-x-12" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mb-6 border-4 border-indigo-800 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-indigo-100 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-emerald-500 text-white rounded-full font-bold text-xl hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-900/20"
          >
            احجز جلستك الآن - مجاناً
          </a>
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = [
    "https://lh3.googleusercontent.com/d/13ALJib8-kKIJVoehvRTxQW5V9ykLHoJB",
    "https://lh3.googleusercontent.com/d/1FSmJCfv0k2R3xY6qc1gzC4b-BjazgJLa",
    "https://lh3.googleusercontent.com/d/1tOVsYqd7wppn8CCjc6paWfH4d2sKAEFy",
    "https://lh3.googleusercontent.com/d/14oAyaQT8MRc-1ninQ3n07U04JunjE495",
    "https://lh3.googleusercontent.com/d/1MMeJvvZSaZPNb6E1bvEevxMjxPpMD4fR"
  ];

  return (
    <section id="partners" className="py-20 bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">شركاء النجاح</h2>
          <p className="text-gray-600">نفخر بثقة عملائنا الذين شاركناهم رحلة نموهم الرقمي</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500">
          {partners.map((logo, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="h-12 md:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FloatingWhatsApp = () => (
  <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 pointer-events-none">
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform pointer-events-auto group"
    >
      <svg 
        viewBox="0 0 24 24" 
        className="w-10 h-10 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 font-bold text-gray-900 pointer-events-auto relative after:content-[''] after:absolute after:top-1/2 after:-right-2 after:-translate-y-1/2 after:border-8 after:border-transparent after:border-l-white"
    >
      تواصل معنا
    </motion.div>
  </div>
);

const Footer = () => (
  <footer className="py-12 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="رُواة للتسويق الالكتروني" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
          <span className="text-lg font-bold text-gray-900">رُواة للتسويق الالكتروني</span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2026 جميع الحقوق محفوظة.
        </p>
        <div className="flex gap-6">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
            <TikTokIcon className="w-6 h-6" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-right" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Process />
        <Partners />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
