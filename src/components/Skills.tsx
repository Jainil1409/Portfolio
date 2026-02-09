export default function Skills() {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'Python', 'Java', 'HTML', 'CSS'],
      icon: '💻',
    },
    {
      category: 'Web Development',
      items: ['React', 'Next.js', 'Node.js', 'Django', 'REST APIs'],
      icon: '🚀',
    },
    {
      category: 'Databases & Tools',
      items: ['MongoDB', 'MySQL', 'Git', 'VS Code', 'Express'],
      icon: '⚙️',
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-300 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className={`bg-slate-800/40 backdrop-blur-md border border-blue-400/20 p-8 rounded-2xl hover:border-blue-400/50 transition-all duration-300 card-hover animate-scale-in stagger-item-${index + 1} group`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{skillGroup.icon}</div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-300 transition-colors">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 flex items-center group hover:text-blue-300 transition-colors"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
