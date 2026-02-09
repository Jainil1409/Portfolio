import Link from 'next/link';

export default function BlogPreview() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      excerpt: 'Learn how to build fast web applications with the latest Next.js features.',
      date: 'Feb 1, 2026',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'React Hooks Explained',
      excerpt: 'A comprehensive guide to understanding and using React Hooks effectively.',
      date: 'Jan 25, 2026',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Tailwind CSS Best Practices',
      excerpt: 'Tips and tricks for writing maintainable Tailwind CSS code.',
      date: 'Jan 20, 2026',
      readTime: '6 min read',
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Latest Blog Posts
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Thoughts on web development, React, Next.js, and more.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 text-slate-900 hover:text-blue-600">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              <div className="flex gap-4 text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
