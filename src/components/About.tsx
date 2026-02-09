export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl -z-10 animate-float"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900 animate-fade-in">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="animate-slide-in-left">
              <img
                src="/jainil-profile.jpg"
                alt="Jainil Vyas"
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="animate-slide-in-right">
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              I&apos;m Jainil Vyas, a motivated Computer Engineering student at <span className="font-semibold text-blue-600">LJ University</span> currently in my 4th semester. I&apos;m a <span className="font-semibold text-blue-600">React Intern at LiveBird Technologies</span> where I&apos;m applying my programming skills to build beautiful and performant web applications.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              I have strong expertise in full-stack web development with React, Node.js, and modern JavaScript frameworks. I&apos;m proficient in Python, Java, and JavaScript, and have hands-on experience with MySQL and MongoDB databases. My passion lies in creating responsive, user-friendly interfaces and solving complex problems through code.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              I&apos;ve completed several projects spanning full-stack development, Python applications, Java systems, and IoT solutions. I&apos;m eager to continue learning new technologies and best practices. Feel free to reach out to discuss internship opportunities, project collaborations, or just have a chat!
            </p>

            <div className="space-y-3 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href="mailto:jainilvyas1414@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold link-underline">jainilvyas1414@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a href="tel:+916359257718" className="text-blue-600 hover:text-blue-700 font-semibold link-underline">+91-6359257718</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-slate-900 font-semibold">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="text-sm text-gray-600">Current Role</p>
                  <p className="text-slate-900 font-semibold">React Intern @ LiveBird Technologies</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="text-sm text-gray-600">Education</p>
                  <p className="text-slate-900 font-semibold">B.E. Computer Engineering, LJ University (2023-2027)</p>
                </div>
              </div>
            </div>

            {/* CV Download Section */}
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1 rounded-2xl mt-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">📄</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Download My CV</h3>
                <p className="text-gray-600 mb-6">Get a copy of my resume with full work experience and qualifications</p>
                <a
                  href="/Jainil_Vyas_CV.pdf"
                  download="Jainil_Vyas_CV.pdf"
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 mx-auto"
                >
                  <span>⬇️</span> Download CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
