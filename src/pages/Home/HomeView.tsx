import React from 'react';
import { Brain, Hammer, ArrowRight, Code2, Cpu, Globe, Layers, Palette, Terminal, ChevronRight } from "lucide-react";
interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const cardData = [
  {
    title: "Santander",
    subtitle: "Atuamos no time global de pagamentos na america latina.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500",
    icon: Globe
  },
  {
    title: "Q2 Bank",
    subtitle: "Construimos soluções para maquinas POS na transiçāo de meio de pagamento para banco.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500",
    icon: Globe
  },
  {
    title: "Opah IT",
    subtitle: "Time de desenvolvimento de transações, pagamentos e segurança dentro do banco digital.",
    imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=500",
    icon: Globe
  }
];

import type { LucideIcon } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  icon: LucideIcon;
};

const Card = ({ title, subtitle, imageUrl, icon: Icon }: ProjectCardProps) => (
  <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/10 flex flex-col h-full border border-gray-800 group">
    <div className="relative h-56 w-full overflow-hidden p-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover rounded-xl opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute top-8 right-8 bg-white/95 p-2 rounded-lg shadow-xl">
        <Icon className="w-5 h-5 text-indigo-900" />
      </div>
    </div>

    <div className="p-6 flex flex-col grow text-left">
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed grow">
        {subtitle}
      </p>

      <button className="w-full py-3 px-4 border border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn">
        Ver Detalhes
        <ChevronRight
          size={18}
          className="group-hover/btn:translate-x-1 transition-transform"
        />
      </button>
    </div>
  </div>
);


const TechLogo = ({ name, Icon }: { name: string; Icon: LucideIcon }) => (
  <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer px-8">
    <div className="flex items-center gap-3 group">
      <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 transition-colors group-hover:bg-purple-500/20">
        <Icon size={20} />
      </div>
      <span className="text-slate-300 font-semibold text-sm tracking-widest uppercase">{name}</span>
    </div>
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => (
  <div className="flex-1 bg-white rounded-xl border border-slate-200 p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-purple-300 hover:shadow-xl group">
    <div className="mb-4 p-5 rounded-2xl bg-purple-50 text-purple-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-purple-100">
      <Icon size={30} />
    </div>
    <h3 className="text-slate-800 font-bold text-xl mb-2">{title}</h3>
    <p className="text-slate-500 text-sm font-medium text-center leading-relaxed">
      {description}
    </p>
  </div>
);

export const HomeView = () => (
  
  <div className="min-h-screen bg-slate-950 flex flex-col text-center space-y-8 py-12 px-6">
    
    <div className="w-full mt-24 max-w-5xl mx-auto rounded-2xl border
    border-slate-200 bg-white p-4 shadow-2xl overflow-hidden transition-transform hover:scale-[1.01] duration-500">
    
      {/* Browser-style Header */}
      <div className="flex items-center gap-2 mb-4 px-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="ml-4 h-4 w-32 bg-slate-100 rounded" />
      </div>

      {/* Internal Content Area: The Two Purple Cards */}
      <div className="min-h-[400px] w-full bg-slate-50 rounded-lg shadow-2xl flex flex-col md:flex-row gap-6 p-6 border border-dashed border-slate-300 items-stretch">
        <ServiceCard
          Icon={Brain}
          title="Brainstorming & IA"
          description="Estratégias inteligentes e insights baseados em dados para o seu produto."
        />
        <ServiceCard
          Icon={Hammer}
          title="Construindo produto"
          description="Desenvolvimento ágil com as tecnologias mais modernas do mercado."
        />
      </div>
    </div>

    <div className="flex justify-start mt-42 font-medium text-wide text-2xl">
      <h1 className='tracking-[0.0.1em]'>Tecnologias</h1>
      <ArrowRight className='mt-1 ml-4 mb-18 text-indigo-500' size={26} />
    </div>

    <div className="w-full max-w-5xl mx-auto py-0">
      <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-16">Nossas stacks</p>
      
      <div className="relative group overflow-hidden">
        {/* Gradient Overlays for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-slate-950 to-transparent z-10" />
        
        {/* Infinite Scroll Wrapper */}
        <div className="flex animate-infinite-scroll space-x-12 whitespace-nowrap py-4">
          <TechLogo name="Kotlin" Icon={Cpu} />
          <TechLogo name="Tailwind" Icon={Layers} />
          <TechLogo name="HTML5" Icon={Globe} />
          <TechLogo name="NodeJS" Icon={Terminal} />
          <TechLogo name="TypeScript" Icon={Code2} />
          <TechLogo name="Figma" Icon={Palette} />
          {/* Duplicate for seamless looping */}
          <TechLogo name="Kotlin" Icon={Cpu} />
          <TechLogo name="Tailwind" Icon={Layers} />
          <TechLogo name="HTML5" Icon={Globe} />
          <TechLogo name="NodeJS" Icon={Terminal} />
          <TechLogo name="TypeScript" Icon={Code2} />
          <TechLogo name="Figma" Icon={Palette} />
        </div>
      </div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mt-55">Empresas que atuamos</p>

      <div className="min-h-scre py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              imageUrl={card.imageUrl}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  </div>

    <style>{`
      @keyframes infinite-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .animate-infinite-scroll {
        display: flex;
        width: max-content;
        animation: infinite-scroll 25s linear infinite;
      }
    `}</style>
  </div>
);

export default function HomeViews() {
  return <HomeView />;
}