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
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <TrendingUp className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-gray-900 font-sans tracking-tight">وكالة تسويق المحتوى</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#why-us" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">لماذا نحن؟</a>
          <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">خدماتنا</a>
          <a href="#process" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">خطوات العمل</a>
          <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200">
            ابدأ الآن
          </button>
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
          فرصة استثنائية للمنشآت الصغيرة والمتوسطة في السوق السعودي لبناء علامة تجارية قوية من خلال محتوى فيديو احترافي واستراتيجيات تسويقية ذكية.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group">
            احجز استشارتك المجانية
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
            شاهد أعمالنا
          </button>
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
              src="https://picsum.photos/seed/agency/800/800" 
              alt="Team working" 
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
          <button className="px-10 py-5 bg-emerald-500 text-white rounded-full font-bold text-xl hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-900/20">
            احجز جلستك الآن - مجاناً
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold text-gray-900">وكالة تسويق المحتوى</span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2026 جميع الحقوق محفوظة. تقديم: الوليد حافظ
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">تويتر</a>
          <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">لينكد إن</a>
          <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">إنستقرام</a>
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
      </main>
      <Footer />
    </div>
  );
}
