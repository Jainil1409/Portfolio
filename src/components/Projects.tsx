import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SoulTrekker - Trekking Website',
      description: 'A comprehensive full-stack platform for discovering and booking trekking adventures with user authentication and booking management.',
      tech: ['React', 'Node.js', 'MongoDB', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80',
      link: '#',
      status: 'Featured',
    },
    {
      id: 2,
      title: 'Hospital Management System',
      description: 'Full-stack hospital management system with patient records, appointment scheduling, and staff management.',
      tech: ['React', 'Node.js', 'Express', 'MySQL'],
      image: 'https://www.linkedin.com/pulse/hospital-management-system-challapalli-manoj',
      link: '#',
      status: 'Featured',
    },
    {
      id: 3,
      title: 'Electronic Hub',
      description: 'E-commerce platform for electronic products with product listing, shopping cart, and order management features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&q=80',
      link: '#',
      status: 'Featured',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-slate-50 relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl -z-10 animate-float"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects. Check out the full project list to see more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg card-hover card-glow animate-scale-in stagger-item-${index + 1} group`}
            >
              <div className="h-48 bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/50"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/30"></div>
                <p className="text-white text-center text-sm font-semibold relative z-10 px-4">{project.title}</p>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <span className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 px-3 py-1 rounded-full whitespace-nowrap font-semibold">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm link-underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center animate-slide-in-up">
          <Link
            href="/projects"
            className="btn-primary"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
