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

/**
 * Notes:
 * - Marquee is rebuilt to avoid "blinking"/jumping by using two identical groups
 *   and animating the track from 0% to -50% with translate3d for GPU stability.
 * - Icons are SVG from multiple sources; all rendered at a slightly smaller size.
 * - If you want local SVGs, replace `src` with your imported URL (e.g., import nextLogo from "@/assets/next.svg").
 */

const Products = () => {
  // ---- Stable, non-blinking marquee styles ----
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
    width: max-content; /* ensures content width fits its children */
    will-change: transform;
    backface-visibility: hidden;
    transform: translate3d(0,0,0);
    animation: marquee-scroll var(--marquee-speed) linear infinite;
  }

  /* Respect reduced motion */
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
      live: "https://harshini-adusumilli-portfolio.vercel.app/",
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

  // Dynamic category counts
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

  // Vector SVG icons (uniform size). Replace with local SVGs if desired.
  type TechItem = { name: string; src: string };
  const techList: TechItem[] = [
    // Simple Icons
    { name: "Next.js",        src: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "Tailwind CSS",   src: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "npm",            src: "https://cdn.simpleicons.org/npm" },
    { name: "Vite",           src: "https://cdn.simpleicons.org/vite" },
    { name: "React Router",   src: "https://cdn.simpleicons.org/reactrouter" },
    { name: "GitHub",         src: "https://cdn.simpleicons.org/github" },
    { name: "Framer-Motion",  src: "https://tsh.io/wp-content/uploads/fly-images/32664/framer-motion-logo-1-312x211.png"},
    { name: "Netlify",        src: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
    { name: "Vercel",         src: "https://cdn.simpleicons.org/vercel" },
    { name: "VS Code",        src: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" },
    { name: "React",          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Inject local styles for marquee */}
      <style>{styles}</style>

      <div className="pt-20 pb-0">
        {/* Header Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio Samples
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore our collection of professionally designed portfolios that
              have helped students land their dream jobs at top companies.
            </p>

            {/* Reference Drive Link */}
            <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto mb-12">
              <h3 className="text-xl font-semibold mb-4">📁 500+ Reference Portfolios Available</h3>
              <p className="text-muted-foreground mb-4">
                Access our complete collection of portfolio templates and resume samples
              </p>
              <Button asChild className="bg-gradient-primary hover:opacity-90 text-white shadow-glow">
                <a
                  href="https://drive.google.com/drive/folders/1SxebnMofr8TcnM2eDkcMIxGcQG0Y-0uC?usp=sharing"
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

        {/* Category Filters */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={category.name}
                  variant={index === 0 ? "default" : "outline"}
                  className={`glass-button ${index === 0 ? "bg-gradient-primary text-white" : ""}`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {portfolioSamples.map((portfolio) => (
                <Card
                  key={portfolio.id}
                  className="glass-card border-0 hover-lift hover-glow group overflow-hidden h-[600px]"
                >
                  {/* Portfolio Preview Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={portfolio.image}
                      alt={`${portfolio.name} preview`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.onerror = null;
                        el.src = "https://via.placeholder.com/1200x600?text=Portfolio+Preview";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                  </div>

                  <CardHeader className="p-6">
                    <div className="text-center">
                      <CardTitle className="text-2xl font-bold mb-2">{portfolio.name}</CardTitle>
                      <p className="text-muted-foreground text-lg mb-3">{portfolio.role}</p>
                      <Badge variant="secondary" className="text-sm px-3 py-1">
                        {portfolio.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground mb-6 text-center">{portfolio.description}</p>

                    {/* Technologies */}
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

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Link to={`/sample-portfolio/${portfolio.id}`} className="flex-1">
                        {/* Optional 'View Portfolio' button could go here */}
                      </Link>
                      <Button variant="outline" size="icon" asChild className="glass-button">
                        <a
                          href={normalizeUrl(portfolio.live)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${portfolio.name} live site`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 rounded-3xl">
              <h2 className="text-4xl font-bold mb-6">Ready to Create Your Portfolio?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get started with our AI-powered platform and create a portfolio that stands out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-glow text-lg px-8 py-4">
                    Get Custom Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ---- Tools Used Section ---- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Tools & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with modern tools and frameworks to ensure high performance, 
              scalability, and exceptional user experience
            </p>
          </div>

          {/* Marquee Container */}
          <div className="glass-card rounded-3xl p-8 border-0 hover-glow">
            <div className="relative marquee rounded-2xl overflow-hidden ring-1 ring-border/20 bg-background/50">
              <div
                className="marquee__track py-6 sm:py-8"
                aria-label="Scrolling list of technologies used (SVG icons)"
              >
                {/* Group 1 */}
                <div className="flex items-center gap-10 sm:gap-12 md:gap-16 pr-10 sm:pr-12 md:pr-16">
                  {techList.map((t) => (
                    <div 
                      key={`g1-${t.name}`} 
                      className="inline-flex items-center gap-4 sm:gap-5 md:gap-6 transition-transform duration-300 hover:scale-110"
                    >
                      <div className="relative">
                        <img
                          src={t.src}
                          alt={t.name}
                          className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain filter brightness-0 invert-0 dark:brightness-0 dark:invert"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            el.onerror = null;
                            el.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect width='100%25' height='100%25' fill='%23eee'/%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' font-size='14' fill='%23999'%3EICON%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                      <span className="text-base sm:text-lg md:text-xl font-medium text-foreground whitespace-nowrap">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Group 2 (duplicate for seamless loop) */}
                <div
                  className="flex items-center gap-10 sm:gap-12 md:gap-16 pr-10 sm:pr-12 md:pr-16"
                  aria-hidden="true"
                >
                  {techList.map((t) => (
                    <div 
                      key={`g2-${t.name}`} 
                      className="inline-flex items-center gap-4 sm:gap-5 md:gap-6 transition-transform duration-300 hover:scale-110"
                    >
                      <div className="relative">
                        <img
                          src={t.src}
                          alt={t.name}
                          className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain filter brightness-0 invert-0 dark:brightness-0 dark:invert"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="text-base sm:text-lg md:text-xl font-medium text-foreground whitespace-nowrap">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---- /Tools Used Section ---- */}
    </div>
  );
};

export default Products;
