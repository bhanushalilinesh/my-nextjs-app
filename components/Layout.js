import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
