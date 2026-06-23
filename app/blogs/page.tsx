import Link from "next/link";
import { Poppins } from "next/font/google";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Insights & Insurance Intelligence | Vestigo Advisory",
  description:
    "Thought leadership on IRDAI regulations, commercial insurance, claims management and enterprise risk from Vestigo's advisory team.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const dynamic = "force-dynamic";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  image?: string;
  category?: string;
  published_at?: string;
  author?: string;
  paragraph?: string;
};

async function getPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch("https://admin.vestigoinsurance.com/api/blogs", {
      cache: "no-store",
    });

    if (!res.ok) return [];
    const result: BlogPost[] | { data: BlogPost[] } = await res.json();

    if (Array.isArray(result)) return result;
    if (Array.isArray(result?.data)) return result.data;

    return [];
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className={`${poppins.className} min-h-screen bg-slate-50/50`}>
      {/* ================= HERO SECTION (DARK) ================= */}
      <section className="bg-slate-900 pt-20 pb-24 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <header className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              <BookOpen size={14} /> Our Journal
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight max-w-4xl">
              Risk Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Insurance Intelligence
              </span>
            </h1>
            <p className="mt-6 text-slate-400 text-lg max-w-2xl leading-relaxed">
              Expert analysis on risk management, corporate compliance, and the
              evolving landscape of global insurance.
            </p>
          </header>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      </section>

      {/* ================= BLOG CONTENT SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {!posts || posts.length === 0 ? (
            <div className="text-center py-32 border-2 border-dashed border-slate-200 rounded-[3rem] bg-white">
              <p className="text-xl text-slate-400 max-w-xl mx-auto italic">
                Insights from our advisors on risk, compliance and industry
                developments - Coming soon...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col bg-white border border-slate-400 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500"
                >
                  {/* IMAGE CONTAINER */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="text-slate-300 w-12 h-12" />
                      </div>
                    )}
                    {/* Floating Category Badge */}
                    {post.category && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur-md text-blue-700 rounded-lg shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT AREA */}
                  <div className="p-8 flex flex-col flex-grow">
                    {/* Meta Info - Differentiated colors */}
                    <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-blue-500" />
                        {post.published_at
                          ? post.published_at.split("T")[0]
                          : "May 2026"}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User size={14} className="text-blue-500" />
                        {post.author || "Advisory"}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8">
                      {post.paragraph ||
                        "Expert insights and advisory notes regarding the current landscape of risk management and strategic insurance."}
                    </p>

                    {/* BUTTON AREA */}
                    <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="flex items-center gap-2 text-blue-600 font-extrabold text-xs tracking-tight group/link"
                      >
                        READ FULL ARTICLE
                        <ArrowRight
                          size={16}
                          className="group-hover/link:translate-x-1.5 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
