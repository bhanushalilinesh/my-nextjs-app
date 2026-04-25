import Head from 'next/head';
import Link from 'next/link';
import { dummyPosts } from './index';

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-indigo-600 font-medium hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{post.title} | Linesh Codes Blog</title>
      </Head>
      
      <article className="max-w-3xl mx-auto py-12">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 mb-8 transition-colors">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all posts
        </Link>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-12">
          <header className="mb-10">
            <div className="flex items-center space-x-3 text-sm text-slate-500 mb-5">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
          </header>
          
          <div className="prose prose-slate lg:prose-lg text-slate-600 max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
              {post.excerpt}
            </p>
            <p>
              This is a moderately styled blog post. It uses clean typography, ample whitespace, and subtle borders to create a reading experience that is pleasant but not overly flashy.
            </p>
            <h3>Main Characteristics of this Design</h3>
            <ul>
              <li><strong>Typography:</strong> Clear, legible fonts with good contrast against the white background.</li>
              <li><strong>Spacing:</strong> Comfortable padding and margins to let the content breathe.</li>
              <li><strong>Subtlety:</strong> Soft shadows and light borders instead of heavy backgrounds and neon colors.</li>
            </ul>
            <p>
              Finding the right balance in web design is crucial. A well-designed site should enhance the content, not distract from it.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = dummyPosts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false, // Since all posts are known
  };
}

export async function getStaticProps({ params }) {
  const post = dummyPosts.find((p) => p.id === params.id) || null;

  return {
    props: {
      post,
    },
  };
}
