import React, { useMemo, useState } from "react";
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

/**
 * Final version — normal default scrollbar + category hidden on cards,
 * but counts stay visible in the category bar.
 */

const Products = () => {
  // ---------- NEW: state for category filter ----------
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Normalized styles (no scrollbar overrides)
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

  .marquee__item {
    transition: transform 200ms ease, opacity 200ms ease, filter 200ms ease;
  }
  .marquee__item img {
    filter: grayscale(20%);
    opacity: 0.9;
    transition: transform 200ms ease, filter 200ms ease, opacity 200ms ease;
  }
  .marquee__item:hover img {
    filter: grayscale(0%);
    opacity: 1;
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee__track { animation: none; }
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
        "Modern dark theme portfolio with hexagonal profile image and clean layout. Features responsive design and smooth animations.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        ".NET 8",
        "ASP.NET",
        "Angular",
        "C#",
        "Azure",
        "Kafka",
        "EF Core",
        "OAuth2",
      ],
      live: "",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      name: "Priya",
      role: "Database Administrator",
      category: "Database Administration",
      image:
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1758568659/Screenshot_2025-09-18_191227_h0buvi.png",
      description:
        "Creative and colorful portfolio showcasing design projects with interactive elements and beautiful typography.",
      technologies: [
        "Python",
        "SQL",
        "Hadoop",
        "Hive",
        "Spark",
        "Pandas",
        "Numpy",
        "Matplotlib",
      ],
      live: "vamsiportfoliowebsite.netlify.app",
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      name: "Sai Ram",
      role: "Frontend Developer",
      category: "Frontend Development",
      image:
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1758568659/Screenshot_2025-09-18_192257_lizxnw.png",
      description:
        "Clean minimalist portfolio with professional presentation and smooth user experience. Perfect for showcasing web projects.",
      technologies: ["Python", "C Programming", "HTML", "CSS"],
      live: "https://statuesque-yeot-c24296.netlify.app/",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: 4,
      name: "Kathyaini",
      role: "Senior Full Stack .NET Developer",
      category: "Web Development",
      image:
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1758571812/Screenshot_2025-09-23_013946_bhb3ja.png",
      description:
        "Modern dark theme portfolio with hexagonal profile image and clean layout. Features responsive design and smooth animations.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        ".NET 8",
        "ASP.NET",
        "C#",
        "Kafka",
        "EF Core",
      ],
      live: "https://harshini-adusumilli-tvgd.bolt.host/",
      gradient: "from-blue-500 to-purple-600",
    },
  ];

  // Counts for badges
  const counts = portfolioSamples.reduce<Record<string, number>>((acc, p) => {
    acc.All = (acc.All || 0) + 1;
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  const categories = [
    { name: "All", icon: <Globe className="h-4 w-4" />, count: counts.All || 0 },
    { name: "Web Development", icon: <Code className="h-4 w-4" />, count: counts["Web Development"] || 0 },
    { name: "Database Administration", icon: <Briefcase className="h-4 w-4" />, count: counts["Database Administration"] || 0 },
    { name: "Frontend Development", icon: <GraduationCap className="h-4 w-4" />, count: counts["Frontend Development"] || 0 },
  ];

  const normalizeUrl = (url: string) => (url?.startsWith("http") ? url : `https://${url}`);

  const techList = [
    { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "npm", src: "https://cdn.simpleicons.org/npm" },
    { name: "Vite", src: "https://cdn.simpleicons.org/vite" },
    { name: "React Router", src: "https://cdn.simpleicons.org/reactrouter" },
    { name: "GitHub", src: "https://cdn.simpleicons.org/github" },
    { name: "Framer Motion", src: "https://tsh.io/wp-content/uploads/fly-images/32664/framer-motion-logo-1-312x211.png" },
    { name: "Netlify", src: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
    { name: "Vercel", src: "https://cdn.simpleicons.org/vercel" },
    { name: "VS Code", src: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ];

  // ---------- NEW: memoized filtered list ----------
  const filteredPortfolios = useMemo(() => {
    if (selectedCategory === "All") return portfolioSamples;
    return portfolioSamples.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, portfolioSamples]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <style>{styles}</style>

      <div className="pt-20 pb-0">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio Samples
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore our collection of professionally designed portfolios that
              have helped students land their dream jobs at top companies.
            </p>
            <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto mb-12">
              <h3 className="text-xl font-semibold mb-4">📁 500+ Reference Portfolios Available</h3>
              <p className="text-muted-foreground mb-4">
                Access our complete collection of portfolio templates and resume samples
              </p>
              <Button asChild className="bg-gradient-primary hover:opacity-90 text-white shadow-glow">
                <a
                  href="https://1024terabox.com/s/1wzFmZ0t7f_9J3BO8bR6v9g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View All References (Google Drive)
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const isActive = selectedCategory === category.name;
              return (
                <Button
                  key={category.name}
                  variant={isActive ? "default" : "outline"}
                  className={`glass-button ${isActive ? "bg-gradient-primary text-white" : ""}`}
                  onClick={() => setSelectedCategory(category.name)}
                  aria-pressed={isActive}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <Badge
                    variant={isActive ? "secondary" : "outline"}
                    className={`ml-2 ${isActive ? "" : "border-primary/20 text-primary"}`}
                  >
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </section>

        {/* Portfolio Cards */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredPortfolios.map((portfolio) => (
              <Card
                key={portfolio.id}
                className="glass-card border-0 hover-lift hover-glow group overflow-hidden h-[600px]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={portfolio.image}
                    alt={portfolio.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                </div>
                <CardHeader className="p-6 text-center">
                  <CardTitle className="text-2xl font-bold mb-2">{portfolio.name}</CardTitle>
                  <p className="text-muted-foreground text-lg">
                    {portfolio.role}
                  </p>
                  {/* Category badge intentionally hidden */}
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground mb-6 text-center">{portfolio.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {portfolio.technologies.map((tech, index) => (
                      <Badge
                        key={`${portfolio.id}-${tech}-${index}`}
                        variant="outline"
                        className="glass-button border-primary/20 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3 justify-center">
                    <Button variant="outline" size="icon" asChild className="glass-button">
                      <a href={normalizeUrl(portfolio.live)} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Optional empty-state when no items match */}
            {filteredPortfolios.length === 0 && (
              <div className="col-span-full text-center text-muted-foreground">
                No portfolios in “{selectedCategory}”.
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <div className="max-w-4xl mx-auto glass-card p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Portfolio?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get started with our AI-powered platform and create a portfolio that stands out.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-glow text-lg px-8 py-4">
                Get Custom Portfolio
              </Button>
            </Link>
          </div>
        </section>
      </div>

      {/* Tools Used */}
      <section className="mt-8 sm:mt-10 lg:mt-12">
        <div className="h-px bg-border/50"></div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto py-10 sm:py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Tools Used
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A modern toolkit that powers fast, reliable, and beautiful portfolios.
            </p>

            <div className="glass-card rounded-3xl ring-1 ring-border/30 shadow-glow">
              <div className="relative marquee rounded-3xl overflow-hidden">
                <div
                  className="marquee__track py-5 sm:py-6 md:py-7"
                  aria-label="Scrolling list of technologies used (SVG icons)"
                >
                  {[0, 1].map((g) => (
                    <div
                      key={g}
                      className="flex items-center gap-8 sm:gap-10 md:gap-12 pr-8 sm:pr-10 md:pr-12"
                      aria-hidden={g === 1}
                    >
                      {techList.map((t) => (
                        <div key={`${g}-${t.name}`} className="marquee__item inline-flex items-center gap-3 sm:gap-4 md:gap-5">
                          <img
                            src={t.src}
                            alt={t.name}
                            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
                          />
                          <span className="text-sm sm:text-base font-medium tracking-tight text-foreground/90">
                            {t.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-4 sm:px-6 md:px-8 py-4 border-t border-border/30 text-center">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Icons shown for reference — your final build ships only the libraries you use.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-6 md:px-8 py-4 border-t border-border/30 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            * prices may vary according to the style and size of the portfolio.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
