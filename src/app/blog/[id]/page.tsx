import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog Post | Portfolio',
};

export default function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  // In a real app, you'd fetch the blog post data from a database or CMS
  const blogPost = {
    id: params.id,
    title: 'Sample Blog Post Title',
    date: 'Feb 1, 2026',
    category: 'Web Development',
    readTime: '5 min read',
    content: `
      <h2>Introduction</h2>
      <p>This is a sample blog post. In a full application, you would fetch the actual content from your backend or CMS.</p>
      
      <h2>Content Section</h2>
      <p>Here's where the main content of your blog post would go. You can add as much detail as needed.</p>
      
      <h2>Conclusion</h2>
      <p>Thanks for reading! Feel free to share your thoughts in the comments section.</p>
    `,
  };

  return (
    <>
      <Navigation />
      <main>
        <article className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
              ← Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded">
                  {blogPost.category}
                </span>
                <span className="text-sm text-gray-500">{blogPost.date}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{blogPost.readTime}</span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900">{blogPost.title}</h1>
            </header>

            <div
              className="prose prose-lg max-w-none text-gray-700 space-y-4"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Share This Post</h3>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700">Twitter</a>
                <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:text-blue-700">Facebook</a>
              </div>
            </section>
          </div>
        </article>

        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Like This Post?</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to get notified when I publish new articles.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
