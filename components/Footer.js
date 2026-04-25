export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Linesh Codes. All rights reserved.
        </p>
        <p className="mt-2 sm:mt-0">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
