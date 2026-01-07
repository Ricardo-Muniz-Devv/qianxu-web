import { useState, useEffect } from 'react';
import { 
  Brain, 
  Hammer, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Palette, 
  Terminal, 
  Smartphone,
  Menu,
  X,
  ChevronRight 
} from "lucide-react";

import type { LucideIcon } from 'lucide-react';
import Logo from '../assets/ic-nav.svg'

const cardData = [
  {
    id: 1,
    title: "Santander",
    subtitle: "Atuamos no time global de pagamentos na america latina.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    url: "https://developer.santander.com.br",
    icon: Globe
  },
  {
    id: 2,
    title: "Q2 Bank",
    subtitle: "Construimos soluções para maquinas POS e meios de pagamento.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    url: "https://www.q2.com",
    icon: Smartphone
  },
  {
    id: 3,
    title: "Opah IT",
    subtitle: "Time de desenvolvimento e transações e segurança.",
    imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
    url: "https://opah.com.br",
    icon: Code2
  }
];

const techStacks = [
  { name: "Kotlin", Icon: Cpu },
  { name: "Tailwind", Icon: Layers },
  { name: "HTML5", Icon: Globe },
  { name: "NodeJS", Icon: Terminal },
  { name: "TypeScript", Icon: Code2 },
  { name: "Figma", Icon: Palette }
];

const Navbar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Stacks', id: 'stacks' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-4 bg-slate-950/90 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          <div className="w-12 h-12 pl-1 bg-linear-to-brrounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <img src={ Logo } className="text-white pl-1 rounded-lg" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight ml-0.5">Qia<span className="text-indigo-400">nxu</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`cursor-pointer text-sm font-medium transition-all relative py-1 ${
                activeTab === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
              {activeTab === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full animate-in fade-in zoom-in duration-300" />
              )}
            </button>
          ))}
          <a href='mailto:rcardo.muniz.devv@gmail.com' className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-indigo-500/20">
            Fale Conosco
          </a>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { setActiveTab(link.id); setIsOpen(false); }}
              className={`text-lg font-medium text-left p-2 rounded-lg ${
                activeTab === link.id ? 'text-indigo-400 bg-white/5' : 'text-slate-400'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

type ProjectCardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  url: string;
  icon: LucideIcon;
};

const ProjectCard = ({
  title,
  subtitle,
  imageUrl,
  url,
  icon: Icon
}: ProjectCardProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
  >
    <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/10 flex flex-col h-full border border-gray-800">
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
          <h1>{subtitle}</h1>
        </p>

        <div className="w-full py-3 px-4 border border-indigo-500/30 bg-indigo-500/5 group-hover:bg-indigo-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
          Ver Detalhes
          <ChevronRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>

    </div>
  </a>
);

const TechLogo = ({ name, Icon }: { name: string; Icon: LucideIcon }) => (
  <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 cursor-default px-10 group">
    <div className="flex items-center gap-4">
      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-indigo-400 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
        <Icon size={22} />
      </div>
      <span className="text-slate-400 group-hover:text-white font-bold text-sm tracking-widest uppercase transition-colors">{name}</span>
    </div>
  </div>
);

const Home = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <section className="w-full max-w-7xl mx-auto pt-40 pb-24 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="mb-20 text-center md:text-left">
              <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-wide">Projetos em <span className="text-slate-500 underline decoration-indigo-500/50">Destaque</span></h1>
              <p className="text-slate-400 text-xl max-w-2xl mt-8 leading-relaxed">Soluções tecnológicas robustas desenvolvidas para o ecossistema financeiro e enterprise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {cardData.map((card) => (
                <ProjectCard key={card.id} {...card} />
              ))}
            </div>
          </section>
        );
      case 'stacks':
        return (
          <section className="w-full max-w-6xl mx-auto pt-40 pb-24 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
             <div className="mb-20 text-center">
              <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4">Tecnologias</h2>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Nosso Stack <span className="text-indigo-500">Moderno</span></h1>
              <p className="text-slate-400 text-lg mx-auto max-w-2xl">Utilizamos as ferramentas mais performáticas para garantir escalabilidade global.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
               {techStacks.map((tech) => (
                 <div key={tech.name} className="p-10 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center gap-6 hover:bg-white/10 hover:border-indigo-500/30 transition-all group">
                    <tech.Icon className="text-indigo-400 group-hover:scale-110 transition-transform" size={48} />
                    <span className="text-white font-black tracking-widest uppercase text-lg">{tech.name}</span>
                 </div>
               ))}
            </div>
          </section>
        );
      default:
        return (
          <div className="animate-in fade-in duration-1000">
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto pt-48 mb-20 px-6 text-center">
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">- Disponível para novos projetos -</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mt-4 mb-8">
                Design. Code.{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Innovation.
                </span>
              </h1>
              <p className="leading-relaxed text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-normal">
                Transformamos desafios complexos em produtos digitais escaláveis. Simples, rápido e eficiente.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => setActiveTab('projects')}
                  className="w-full sm:w-auto font-medium px-6 py-3 bg-white cursor-pointer text-slate-950 hover:bg-indigo-500 hover:text-white rounded-xl transition-all flex items-center justify-center gap-3 group shadow-xl shadow-white/5"
                >
                  Ver Cases <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setActiveTab('stacks')}
                  className="w-full sm:w-auto font-medium px-6 py-3 cursor-pointer bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-2xl transition-all"
                >
                  Nossa Stack
                </button>
              </div>
            </section>

            {/* Browser Visualizer */}
            <section className="w-full mt-12 max-w-6xl mx-auto rounded-[2.5rem] border border-slate-800/50 bg-white/5 p-4 shadow-3xl overflow-hidden backdrop-blur-sm px-6 group/browser">
              <div className="flex items-center justify-between mb-4 px-4 opacity-60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="px-6 py-1 bg-white/5 rounded-lg text-[10px] text-slate-400 font-mono tracking-widest">Qianxu products.app</div>
              </div>
              {/* Internal Content Area: Icon maintain top ensured by flex-col and justify-start */}
              <div className="min-h-[400px] w-full bg-slate-50 rounded-[1.8rem] flex flex-col lg:flex-row gap-8 p-8 items-stretch text-slate-900 shadow-inner">
                <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-10 flex flex-col items-center text-center transition-all duration-500 hover:border-indigo-400 hover:shadow-2xl group cursor-default">
                  <div className="mb-8 p-5 rounded-3xl bg-indigo-50 text-indigo-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-indigo-600 group-hover:text-white shadow-sm self-center">
                    <Brain size={32} />
                  </div>
                  <h3 className="text-slate-900 font-black text-xl mb-4 tracking-tight">Strategy & IA</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Mapeamento de jornada e implementação de inteligência artificial generativa aplicada ao negócio.
                  </p>
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-10 flex flex-col items-center text-center transition-all duration-500 hover:border-indigo-400 hover:shadow-2xl group cursor-default">
                  <div className="mb-8 p-5 rounded-3xl bg-indigo-50 text-indigo-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-indigo-600 group-hover:text-white shadow-sm self-center">
                    <Hammer size={32} />
                  </div>
                  <h3 className="text-slate-900 font-black text-xl mb-4 tracking-tight">Full-Stack Dev</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Arquiteturas resilientes em nuvem com entregas contínuas e foco em performance absoluta.
                  </p>
                </div>
              </div>
            </section>

            {/* Marquee Infinite Scroll */}
            <section className="w-full max-w-6xl mx-auto pt-40 pb-20 px-6">
              <div className="flex items-center justify-between mb-16 px-2">
                <h2 className="text-xl font-bold text-white tracking-tight">Stack de Especialidades</h2>
                <div className="h-px bg-linear-to-r from-indigo-500/50 to-transparent grow ml-8" />
              </div>
              <div className="relative group overflow-hidden py-10 border-y border-white/5">
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-slate-950 via-slate-950/80 to-transparent z-10" />
                <div className="flex animate-infinite-scroll space-x-12 whitespace-nowrap">
                  {[...techStacks, ...techStacks].map((tech, idx) => (
                    <TechLogo key={idx} name={tech.name} Icon={tech.Icon} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-center flex flex-col overflow-x-hidden selection:bg-indigo-50 selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="grow">
        {renderContent()}
      </main>

      {/* Footer Section */}
      <footer className="mt-20 py-20 border-t border-white/5 bg-slate-950/50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-left">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 rounded-b-lg mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <img src={Logo} className="text-white rounded-lg" />
              </div>
              <span className="text-white font-black text-2xl tracking-tighter ml-0.3">Qianxu</span>
            </div>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed">
              Elevando o padrão de desenvolvimento de software através de design impecável e código de excelência.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-indigo-400 transition-colors cursor-pointer">Início</button></li>
              <li><button onClick={() => setActiveTab('projects')} className="hover:text-indigo-400 transition-colors cursor-pointer">Projetos</button></li>
              <li><button onClick={() => setActiveTab('stacks')} className="hover:text-indigo-400 transition-colors cursor-pointer">Tecnologias</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Redes</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="https://www.linkedin.com/company/qianxu-app" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://medium.com/@rcardo.muniz.devv" className="hover:text-white transition-colors">Medium</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
          <p>© 2026 Qianxu Digital. Todos os direitos reservados.</p>
        </div>
      </footer>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 40s linear infinite;
        }
        /* Hide scrollbar but keep functionality */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #334155; }
      `}</style>
    </div>
  );
};

export default Home;