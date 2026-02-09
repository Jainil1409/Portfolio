import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 border-t border-blue-400/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Jainil Vyas</h3>
            <p className="text-gray-400">
              React Intern at LiveBird Technologies. Building beautiful web experiences with modern technologies. Computer Engineering student at LJ University.
            </p>
          </div>
          <div className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-blue-300 transition-colors link-underline">Home</Link></li>
              <li><Link href="/projects" className="hover:text-blue-300 transition-colors link-underline">Projects</Link></li>
              <li><Link href="/#about" className="hover:text-blue-300 transition-colors link-underline">About</Link></li>
              <li><Link href="/#contact" className="hover:text-blue-300 transition-colors link-underline">Contact</Link></li>
            </ul>
          </div>
          <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Social</h4>
            <div className="flex flex-col space-y-2 text-gray-400">
              <a href="https://github.com" className="hover:text-blue-300 transition-colors link-underline">GitHub</a>
              <a href="https://linkedin.com/in/jainil-vyas" className="hover:text-blue-300 transition-colors link-underline">LinkedIn</a>
              <a href="mailto:jainilvyas1414@gmail.com" className="hover:text-blue-300 transition-colors link-underline">Email</a>
            </div>
          </div>
          <div className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact</h4>
            <div className="flex flex-col space-y-2 text-gray-400 text-sm">
              <a href="tel:+916359257718" className="hover:text-blue-300 transition-colors">📱 +91-6359257718</a>
              <a href="mailto:jainilvyas1414@gmail.com" className="hover:text-blue-300 transition-colors break-all">📧 jainilvyas1414@gmail.com</a>
              <p>📍 Ahmedabad, Gujarat</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          <p>&copy; {currentYear} Jainil Vyas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
