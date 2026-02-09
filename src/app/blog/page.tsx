import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog | Portfolio',
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      excerpt: 'Learn how to build fast web applications with the latest Next.js features including App Router, Server Components, and more.',
      content: 'This is a comprehensive guide to getting started with Next.js 14...',
      date: 'Feb 1, 2026',
      readTime: '5 min read',
      category: 'Next.js',
    },
    {
      id: 2,
      title: 'React Hooks Explained',
      excerpt: 'A deep dive into React Hooks - useState, useEffect, useContext, and custom hooks. Learn best practices and common pitfalls.',
      content: 'React Hooks revolutionized how we write functional components...',
      date: 'Jan 25, 2026',
      readTime: '8 min read',
      category: 'React',
    },
    {
      id: 3,
      title: 'Tailwind CSS Best Practices',
      excerpt: 'Tips and tricks for writing maintainable Tailwind CSS code. Component extraction, configuration, and optimization strategies.',
      content: 'Tailwind CSS is a utility-first CSS framework...',
      date: 'Jan 20, 2026',
      readTime: '6 min read',
      category: 'CSS',
    },
    {
      id: 4,
      title: 'TypeScript for React Developers',
      excerpt: 'Learn how to use TypeScript effectively in React projects. Types, interfaces, and best practices for type-safe React code.',
      content: 'TypeScript provides powerful type checking for JavaScript...',
      date: 'Jan 15, 2026',
      readTime: '7 min read',
      category: 'TypeScript',
    },
    {
      id: 5,
      title: 'Building Full-Stack Applications with Next.js',
      excerpt: 'How to build complete full-stack applications using Next.js API routes, databases, and deployment strategies.',
      content: 'Next.js makes it easy to build full-stack applications...',
      date: 'Jan 10, 2026',
      readTime: '10 min read',
      category: 'Next.js',
    },
    {
      id: 6,
      title: 'Performance Optimization Techniques',
      excerpt: 'Essential techniques for optimizing React and Next.js applications. Code splitting, lazy loading, and performance monitoring.',
      content: 'Performance is crucial for user experience...',
      date: 'Jan 5, 2026',
      readTime: '9 min read',
      category: 'Performance',
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-300">
              Articles about web development, React, Next.js, and more.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="border-b border-gray-200 pb-8 last:border-b-0 hover:bg-slate-50 p-6 rounded-lg transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold text-slate-900">
                      <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                        {post.title}
                      </Link>
                    </h2>
                    <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded whitespace-nowrap">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Read Article →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
