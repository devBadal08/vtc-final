import { notFound } from "next/navigation";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

// Data Fetching
async function getPost(slug) {
  try {
    const decodedSlug = decodeURIComponent(slug);
    const res = await fetch(
      `https://admin.vestigoinsurance.com/api/blogs/${decodedSlug}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) return null;
    const result = await res.json();
    return result?.data || result || null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  // Clean date formatting
  const formattedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "May 2026";

  return (
    <main className={`${poppins.className} min-h-screen bg-slate-50`}>
      {/* ================= HERO SECTION (DARK) ================= */}
      <section className="bg-slate-900 pt-12 pb-20 px-6 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-10 group text-sm font-medium"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Journal
          </Link>

          <header>
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-black text-blue-400 uppercase tracking-widest mb-6">
              <span className="flex items-center gap-1.5 bg-blue-500/10 px-3 py-1 rounded-md">
                <Calendar size={12} /> {formattedDate}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-md text-slate-300">
                <Clock size={12} /> {post.reading_time || 6} Min Read
              </span>
              {post.category && (
                <span className="bg-blue-600 text-white px-3 py-1 rounded-md">
                  {post.category}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    {post.author || "Vestigo"}
                  </p>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      </section>

      {/* ================= ARTICLE CONTENT ================= */}
      <section className="pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* FEATURED IMAGE - FIXED SIZE */}
          {post.image && (
            <div className="relative max-w-3xl mx-auto aspect-[16/10] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-slate-200 mb-16 shadow-2xl -mt-20 z-20 bg-white p-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* CONTENT AREA */}
          <div className="max-w-4xl mx-auto py-6 px-4">
            <div
              className="
                /* Vertical space between all paragraphs and headers */
                space-y-3
                
                /* Base text styling */
                text-slate-700 text-lg leading-[1.8]
                
                /* ONLY BOLD STYLING: Target <strong> and <b> tags */
                [&_strong]:font-bold [&_strong]:text-slate-900
                [&_b]:font-bold [&_b]:text-slate-900
                
                /* Ensure headings are also bold if you use them */
                [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:text-slate-900
                [&_h3]:font-bold [&_h3]:text-xl [&_h3]:text-slate-900

                /* Clean spacing for paragraphs and list items */
                [&_p]:block
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-4
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-4"
              dangerouslySetInnerHTML={{
                __html: typeof post.content === "string" ? post.content : "",
              }}
            />
          </div>
          {post.gallery?.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {post.gallery.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={`https://admin.vestigoinsurance.com/storage/${item.url}`}
                        alt={item.desc || `Gallery ${index + 1}`}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>

                    {item.desc && (
                      <p className="text-sm text-slate-400 text-center">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FOOTER CTA */}
          <footer className="mt-10 p-10 md:p-16 rounded-[3rem] bg-slate-900 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to secure your future?
              </h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                Consult with our experts for tailored risk management
                strategies.
              </p>
              <Link
                href="/contact"
                className="inline-flex px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
