import React from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Globe,
  Code,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

const Products = () => {
  const styles = `
  :root { --marquee-speed: 28s; }

  @keyframes marquee-scroll {
    0%   { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
  }

  .marquee {
    overflow: hidden;
    position: relative;
    -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
            mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  }

  .marquee__track {
    display: flex;
    width: max-content;
    will-change: transform;
    backface-visibility: hidden;
    transform: translate3d(0,0,0);
    animation: marquee-scroll var(--marquee-speed) linear infinite;
  }

  .marquee__item img {
    filter: grayscale(25%);
    opacity: 0.9;
    transition: transform 200ms ease, filter 200ms ease, opacity 200ms ease;
  }
  .marquee__item:hover img {
    filter: grayscale(0%);
    opacity: 1;
    transform: translateY(-3px);
  }

  /* ---- Scrollbar Theme ---- */
  .scroll-theme {
    scrollbar-width: thin;
    scrollbar-color: var(--sb-thumb) transparent;
  }

  :root{
    --sb-thumb: rgba(139, 92, 246, 0.9);  /* purple */
    --sb-thumb-2: rgba(59, 130, 246, 0.9); /* blue */
    --sb-track: transparent;
    --sb-rail: rgba(255,255,255,0.1);
  }

  .scroll-theme::-webkit-scrollbar{
    width: 10px;
    height: 10px;
  }
  .scroll-theme::-webkit-scrollbar-track{
    background: var(--sb-track);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
    border-radius: 9999px;
    margin: 4px;
  }
  .scroll-theme::-webkit-scrollbar-thumb{
    border-radius: 9999px;
    background: linear-gradient(180deg, var(--sb-thumb), var(--sb-thumb-2));
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.25);
  }
  .scroll-theme::-webkit-scrollbar-thumb:hover{
    filter: saturate(1.15);
  }

  /* ---- Compact Section Helpers ---- */
  .section-tight-y {
    padding-top: clamp(1.5rem, 2vw, 2.5rem);
    padding-bottom: clamp(1.5rem, 2vw, 2.5rem);
  }
  .section-gap-tight {
    margin-top: clamp(1.25rem, 1.5vw, 2rem);
  }

  /* ---- Marquee Label ---- */
  .marquee__label {
    font-size: 0.85rem;
    line-height: 1.25;
    font-weight: 500;
    color: hsl(var(--foreground) / 0.9);
    letter-spacing: -0.01em;
  }
  @media (min-width: 768px){
    .marquee__label{ font-size: 0.95rem; }
  }
  `;

  const portfolioSamples = [
    {
      id: 1,
      name: "Harshini",
      role: "Senior Full Stack .NET Developer",
      category: "Web Development",
      image:
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1758568659/Screenshot_2025-09-18_190348_vxdg1q.png",
      description:
        "Modern dark theme portfolio with hexagonal profile image and clean layout.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        ".NET 8",
        "ASP.NET",
        "C#",
        "Azure",
        "Kafka",
        "EF Core",
      ],
      live: "https://harshini-adusumilli-portfolio.vercel.app/",
    },
    {
      id: 2,
      name: "Priya",
      role: "Database Administrator",
      category: "Database Administration",
      image:
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1758568659/Screenshot_2025-09-18_191227_h0buvi.png",
      description:
        "Creative portfolio showcasing design projects with interactive elements.",
      technologies: ["Python", "SQL", "Hadoop", "Hive", "Spark"],
      live: "vamsiportfoliowebsite.netlify.app",
    },
  ];

  const counts = portfolioSamples.reduce<Record<string, number>>((acc, p) => {
    acc.All = (acc.All || 0) + 1;
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  const categories = [
    { name: "All", icon: <Globe className="h-4 w-4" />, count: counts.All || 0 },
    { name: "Web Development", icon: <Code className="h-4 w-4" />, count: counts["Web Development"] || 0 },
    { name: "Database Administration", icon: <Briefcase className="h-4 w-4" />, count: counts["Database Administration"] || 0 },
  ];

  const normalizeUrl = (url: string) =>
    url?.startsWith("http") ? url : `https://${url}`;

  const techList = [
    { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "Tailwind", src: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Vite", src: "https://cdn.simpleicons.org/vite" },
    { name: "React Router", src: "https://cdn.simpleicons.org/reactrouter" },
    { name: "GitHub", src: "https://cdn.simpleicons.org/github" },
    { name: "Framer Motion", src: "https://tsh.io/wp-content/uploads/fly-images/32664/framer-motion-logo-1-312x211.png" },
    { name: "Netlify", src: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
    { name: "Vercel", src: "https://cdn.simpleicons.org/vercel" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  ];

  return (
    <div className="min-h-screen scroll-theme">
      <Navbar />
      <style>{styles}</style>

      {/* Header */}
      <section className="section-tight-y px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Portfolio Samples
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Explore real student portfolios that helped them land top roles.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8 section-gap-tight">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <Button
              key={category.name}
              variant={index === 0 ? "default" : "outline"}
              className={`glass-button ${
                index === 0 ? "bg-gradient-primary text-white" : ""
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </section>

      {/* Portfolio Cards */}
      <section className="px-4 sm:px-6 lg:px-8 section-gap-tight">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioSamples.map((p) => (
            <Card key={p.id} className="glass-card border-0 hover-glow group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-6 text-center">
                <CardTitle className="text-2xl font-bold">{p.name}</CardTitle>
                <p className="text-muted-foreground">{p.role}</p>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-center">
                <p className="text-muted-foreground mb-4">{p.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {p.technologies.map((t, i) => (
                    <Badge key={i} variant="outline" className="text-primary border-primary/20">
                      {t}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="icon" asChild className="glass-button">
                  <a href={normalizeUrl(p.live)} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools Used */}
      <section className="section-gap-tight">
        <div className="h-px bg-border/50"></div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto py-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Tools Used
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              A refined modern stack powering these portfolios.
            </p>

            <div className="glass-card rounded-3xl ring-1 ring-border/30 shadow-glow">
              <div className="marquee relative rounded-3xl overflow-hidden">
                <div className="marquee__track py-5 sm:py-6">
                  <div className="flex items-center gap-8 sm:gap-10 pr-8 sm:pr-10">
                    {techList.map((t) => (
                      <div key={`g1-${t.name}`} className="marquee__item inline-flex items-center gap-3">
                        <img
                          src={t.src}
                          alt={t.name}
                          className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                        />
                        <span className="marquee__label">{t.name}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex items-center gap-8 sm:gap-10 pr-8 sm:pr-10"
                    aria-hidden="true"
                  >
                    {techList.map((t) => (
                      <div key={`g2-${t.name}`} className="marquee__item inline-flex items-center gap-3">
                        <img
                          src={t.src}
                          alt={t.name}
                          className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                        />
                        <span className="marquee__label">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 border-t border-border/30 text-xs text-muted-foreground">
                Icons shown for reference — your project includes only used tools.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
