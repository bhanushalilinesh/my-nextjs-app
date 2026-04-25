import Head from 'next/head';
import Link from 'next/link';

export const dummyPosts = [
  {
    id: '1',
    title: 'The Future of Web Development with Next.js',
    excerpt: 'Explore how Next.js is revolutionizing the way we build modern web applications with its hybrid rendering and powerful features.',
    date: 'April 25, 2026',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS: From Zero to Hero',
    excerpt: 'A comprehensive guide to building beautiful, responsive user interfaces at the speed of thought using Tailwind CSS utility classes.',
    date: 'April 20, 2026',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'Creating Stunning UIs with React and Framer Motion',
    excerpt: 'Learn how to add life to your React applications with fluid, physics-based animations using the Framer Motion library.',
    date: 'April 15, 2026',
    readTime: '6 min read'
  }
];

export default function BlogList() {
  return (
    <div>
      <Head>
        <title>Blog | Linesh Codes</title>
      </Head>
      
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-10">Our Blog</h1>
        
        <div className="grid gap-6">
          {dummyPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group block">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 p-6 sm:p-8 transition-shadow">
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3">
                  {post.title}
                </h2>
                <div className="flex items-center space-x-3 text-sm text-slate-500 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="text-indigo-600 font-medium flex items-center text-sm">
                  Read article 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
