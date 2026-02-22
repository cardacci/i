/* ===== Imports ===== */
import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const RenderingPatterns = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h3'>Rendering Patterns</SectionTitle>

			<p className='mb-6 text-gray-600'>
				Rendering patterns determine when and where HTML is generated for your application. The choice between client-side
				rendering, server-side rendering, static generation, and hybrid approaches has deep implications for performance metrics,
				SEO, infrastructure costs, and developer experience. Understanding the trade-offs is essential for frontend system
				design.
			</p>

			{/* ===== Client-Side Rendering (CSR) ===== */}
			<SectionTitle level='h4'>Client-Side Rendering (CSR)</SectionTitle>

			<p className='mb-4 text-gray-600'>
				With CSR, the browser downloads a minimal HTML file — often just a{' '}
				<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>{'<div id="root">'}</code> — then
				JavaScript builds the entire DOM. All rendering logic runs in the browser. This means the user sees a blank screen
				until the JS bundle downloads, parses, and executes. The trade-off is clear: poor initial load time and bad SEO for
				crawlers that don't run JavaScript, but excellent responsiveness for highly interactive apps behind authentication where
				SEO doesn't matter.
			</p>

			<div className='mb-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
				<h5 className='mb-3 font-semibold text-gray-800'>CSR Request Flow</h5>

				<div className='overflow-x-auto'>
					<div className='flex min-w-[600px] items-center justify-between gap-2'>
						<div className='rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-gray-700'>HTML Shell</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-gray-500'>sends</span>
							<span className='text-gray-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-yellow-300 bg-yellow-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-yellow-700'>Download JS</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-blue-500'>then</span>
							<span className='text-blue-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-blue-300 bg-blue-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-blue-700'>Execute & Render</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-green-500'>finally</span>
							<span className='text-green-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-green-300 bg-green-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-green-700'>Interactive</p>
						</div>
					</div>
				</div>

				<div className='mt-4 rounded-md bg-slate-50 p-3'>
					<pre className='text-xs text-slate-700'>
{`// Typical CSR entry point (Vite + React)
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);`}
					</pre>
				</div>
			</div>

			<p className='mb-6 text-xs text-gray-500'>
				<strong>Best for:</strong> Admin panels, dashboards, internal tools, SPAs behind login.
			</p>

			{/* ===== Server-Side Rendering (SSR) ===== */}
			<SectionTitle level='h4'>Server-Side Rendering (SSR)</SectionTitle>

			<p className='mb-4 text-gray-600'>
				With SSR, the server generates full HTML on each request. The browser receives a complete, visible page immediately.
				Then JavaScript "hydrates" it — attaching event listeners and making it interactive. This yields a faster First
				Contentful Paint (FCP) and better SEO than CSR, but a slower Time to First Byte (TTFB) because the server must compute
				the HTML for every request. The full JS bundle is still required for hydration.
			</p>

			<div className='mb-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
				<h5 className='mb-3 font-semibold text-gray-800'>SSR with Next.js App Router</h5>

				<div className='rounded-md bg-slate-50 p-3'>
					<pre className='text-xs text-slate-700'>
{`// app/users/page.tsx — runs on the server per request
export default async function UsersPage() {
  const users = await fetch('https://api.example.com/users')
    .then(res => res.json());

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
					</pre>
				</div>
			</div>

			<p className='mb-6 text-xs text-gray-500'>
				<strong>Best for:</strong> Dynamic pages that need SEO — product pages, blog posts, user profiles.
			</p>

			{/* ===== Static Site Generation (SSG) & Incremental Static Regeneration (ISR) ===== */}
			<SectionTitle level='h4'>Static Site Generation (SSG) & Incremental Static Regeneration (ISR)</SectionTitle>

			<p className='mb-4 text-gray-600'>
				SSG and ISR occupy opposite ends of the static-dynamic spectrum. SSG pre-builds all pages at build time for maximum
				speed. ISR extends SSG with background revalidation so content stays fresh without full rebuilds.
			</p>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<h5 className='mb-2 font-semibold text-blue-800'>Static Site Generation (SSG)</h5>

					<p className='text-sm text-blue-700'>
						Pages are pre-built at build time into static HTML files. Served from a CDN with near-zero TTFB. No server
						computation per request. Ideal for content that rarely changes: blogs, documentation, marketing pages. The main
						limitation is that a full rebuild is required when content changes — for a large site with thousands of pages,
						this can take minutes.
					</p>

					<p className='mt-2 text-xs text-blue-600'>
						<strong>Tools:</strong> Next.js{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>generateStaticParams</code>,
						Astro, Gatsby
					</p>
				</div>

				<div className='rounded-lg border border-green-200 bg-green-50 p-4'>
					<h5 className='mb-2 font-semibold text-green-800'>Incremental Static Regeneration (ISR)</h5>

					<p className='text-sm text-green-700'>
						Combines SSG's speed with near-real-time content updates. Pages are statically generated but can be revalidated
						in the background after a configurable interval. When a request arrives after the revalidation window, the stale
						page is served immediately while a fresh version is generated for subsequent requests.
					</p>

					<div className='mt-2 rounded-md bg-green-100/50 p-2'>
						<pre className='text-xs text-green-800'>
{`// Next.js ISR configuration
export const revalidate = 60; // Regenerate every 60 seconds`}
						</pre>
					</div>
				</div>
			</div>

			{/* ===== Streaming SSR & React Server Components ===== */}
			<SectionTitle level='h4'>Streaming SSR & React Server Components</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Streaming and React Server Components represent the cutting edge of rendering architecture. They address fundamental
				limitations of traditional SSR: waiting for all data before sending any HTML, and shipping the entire JS bundle for
				hydration.
			</p>

			<div className='mb-6 space-y-4'>
				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-3 flex items-center gap-2'>
						<span className='rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800'>
							Intermediate
						</span>
						<h5 className='font-semibold text-gray-800'>Streaming SSR</h5>
					</div>

					<p className='mb-3 text-sm text-gray-600'>
						Instead of waiting for the entire page to render on the server, streaming SSR sends HTML in chunks using{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>renderToPipeableStream</code>.
						The browser starts painting the first chunks while the server is still computing later parts. Combined with{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>{'<Suspense>'}</code>, slow
						data fetches don't block the entire page — a fallback is shown for loading sections while the rest of the page
						is already visible and interactive.
					</p>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`// Streaming with Suspense boundaries
export default function ProductPage() {
  return (
    <div>
      <Header />            {/* Sent immediately */}
      <ProductInfo />       {/* Sent immediately */}
      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />         {/* Streamed when ready */}
      </Suspense>
      <Suspense fallback={<RecommendationsSkeleton />}>
        <Recommendations /> {/* Streamed when ready */}
      </Suspense>
    </div>
  );
}`}
						</pre>
					</div>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-3 flex items-center gap-2'>
						<span className='rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800'>Advanced</span>
						<h5 className='font-semibold text-gray-800'>React Server Components (RSC)</h5>
					</div>

					<p className='mb-3 text-sm text-gray-600'>
						Components that execute only on the server and send a serialized component tree (not HTML) to the client. Zero
						client-side JavaScript for server components. Client components are explicitly marked with{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>"use client"</code>. RSC
						dramatically reduces bundle size because server-only code — database queries, heavy libraries, markdown
						parsers — never ships to the browser. This is the foundation of the Next.js App Router.
					</p>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`// Server Component (default in App Router) — zero JS sent to client
async function UserProfile({ userId }) {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
  return <div><h2>{user.name}</h2><p>{user.bio}</p></div>;
}

// Client Component — shipped to browser for interactivity
'use client';
function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>{liked ? 'Liked' : 'Like'}</button>;
}`}
						</pre>
					</div>
				</div>
			</div>

			{/* ===== Hydration Strategies ===== */}
			<SectionTitle level='h4'>Hydration Strategies</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Hydration is the process of making server-rendered HTML interactive. The strategy you choose determines how much
				JavaScript ships to the client and how quickly the page becomes interactive. The industry is moving from full hydration
				toward more selective approaches.
			</p>

			<div className='mb-6 overflow-x-auto'>
				<table className='w-full text-left text-sm'>
					<thead>
						<tr className='border-b border-gray-200 bg-gray-50'>
							<th className='px-4 py-3 font-semibold text-gray-700'>Strategy</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>How It Works</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Bundle Cost</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Interactivity Delay</th>
						</tr>
					</thead>

					<tbody>
						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Full Hydration</td>
							<td className='px-4 py-3 text-gray-600'>
								Re-executes all component code on the client to attach event listeners
							</td>
							<td className='px-4 py-3 text-gray-600'>Full bundle required</td>
							<td className='px-4 py-3 text-gray-600'>Longest — entire tree must hydrate</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>Progressive Hydration</td>
							<td className='px-4 py-3 text-gray-600'>
								Prioritizes hydration of visible/interactive components; defers off-screen components
							</td>
							<td className='px-4 py-3 text-gray-600'>Full bundle loaded, execution deferred</td>
							<td className='px-4 py-3 text-gray-600'>Shorter for above-the-fold content</td>
						</tr>

						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Partial Hydration (Islands)</td>
							<td className='px-4 py-3 text-gray-600'>
								Only interactive "islands" are hydrated in a sea of static HTML; static content ships zero JS
							</td>
							<td className='px-4 py-3 text-gray-600'>Minimal — only island bundles</td>
							<td className='px-4 py-3 text-gray-600'>Near-zero for static; fast for islands</td>
						</tr>

						<tr className='bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>Resumability (Qwik)</td>
							<td className='px-4 py-3 text-gray-600'>
								Serializes execution state into HTML; no replay needed — the app "resumes" where the server left off
							</td>
							<td className='px-4 py-3 text-gray-600'>Extremely minimal initial JS</td>
							<td className='px-4 py-3 text-gray-600'>Near-instant — no hydration step</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* ===== Performance Metrics & Trade-offs ===== */}
			<SectionTitle level='h4'>Performance Metrics & Trade-offs</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Each rendering pattern produces a different performance profile across the key web vitals. This comparison provides a
				general framework for reasoning about trade-offs, though real-world results depend heavily on implementation details.
			</p>

			<div className='mb-4 overflow-x-auto'>
				<table className='w-full text-left text-sm'>
					<thead>
						<tr className='border-b border-gray-200 bg-gray-50'>
							<th className='px-4 py-3 font-semibold text-gray-700'>Pattern</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>TTFB</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>FCP</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>TTI</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>SEO</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Infra Cost</th>
						</tr>
					</thead>

					<tbody>
						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>CSR</td>
							<td className='px-4 py-3 text-gray-600'>Fast</td>
							<td className='px-4 py-3 text-gray-600'>Slow</td>
							<td className='px-4 py-3 text-gray-600'>Slow</td>
							<td className='px-4 py-3 text-gray-600'>Poor</td>
							<td className='px-4 py-3 text-gray-600'>Low (static hosting)</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>SSR</td>
							<td className='px-4 py-3 text-gray-600'>Slower</td>
							<td className='px-4 py-3 text-gray-600'>Fast</td>
							<td className='px-4 py-3 text-gray-600'>Medium</td>
							<td className='px-4 py-3 text-gray-600'>Good</td>
							<td className='px-4 py-3 text-gray-600'>High (server per request)</td>
						</tr>

						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>SSG</td>
							<td className='px-4 py-3 text-gray-600'>Fastest</td>
							<td className='px-4 py-3 text-gray-600'>Fastest</td>
							<td className='px-4 py-3 text-gray-600'>Fast</td>
							<td className='px-4 py-3 text-gray-600'>Excellent</td>
							<td className='px-4 py-3 text-gray-600'>Low (CDN)</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>ISR</td>
							<td className='px-4 py-3 text-gray-600'>Fast</td>
							<td className='px-4 py-3 text-gray-600'>Fast</td>
							<td className='px-4 py-3 text-gray-600'>Fast</td>
							<td className='px-4 py-3 text-gray-600'>Excellent</td>
							<td className='px-4 py-3 text-gray-600'>Medium (CDN + background regen)</td>
						</tr>

						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Streaming SSR</td>
							<td className='px-4 py-3 text-gray-600'>Medium</td>
							<td className='px-4 py-3 text-gray-600'>Fast (progressive)</td>
							<td className='px-4 py-3 text-gray-600'>Medium</td>
							<td className='px-4 py-3 text-gray-600'>Good</td>
							<td className='px-4 py-3 text-gray-600'>High</td>
						</tr>

						<tr className='bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>RSC</td>
							<td className='px-4 py-3 text-gray-600'>Medium</td>
							<td className='px-4 py-3 text-gray-600'>Fast</td>
							<td className='px-4 py-3 text-gray-600'>Fast</td>
							<td className='px-4 py-3 text-gray-600'>Good</td>
							<td className='px-4 py-3 text-gray-600'>Medium</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Note:</strong> These are generalizations — actual performance depends on implementation, data fetching
					patterns, bundle size, and infrastructure. Always measure with real user monitoring (RUM), not just synthetic
					benchmarks. A poorly implemented SSR app can easily underperform a well-optimized CSR app.
				</p>
			</div>

			{/* ===== Choosing a Rendering Pattern ===== */}
			<SectionTitle level='h4'>Choosing a Rendering Pattern</SectionTitle>

			<p className='mb-4 text-gray-600'>
				There is no single "best" rendering pattern — the right choice depends on the specific requirements of each page or
				route. Use this decision framework as a starting point.
			</p>

			<div className='mb-6 rounded-xl border border-gray-200 bg-gray-50 p-6'>
				<div className='space-y-3'>
					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>1</span>

						<p className='text-sm text-gray-700'>
							<strong>Is it behind authentication with no SEO needs?</strong> → CSR is often sufficient and simplest.
							Frameworks like Vite + React or Create React App handle this well with minimal configuration.
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>2</span>

						<p className='text-sm text-gray-700'>
							<strong>Does it need SEO with dynamic, per-request data?</strong> → SSR. The server generates fresh HTML on
							every request, ensuring crawlers always see up-to-date content. Next.js App Router makes this the default.
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>3</span>

						<p className='text-sm text-gray-700'>
							<strong>Is the content mostly static or changes infrequently?</strong> → SSG or ISR. SSG for truly static
							content (docs, landing pages); ISR when content updates periodically but a full rebuild is impractical.
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>4</span>

						<p className='text-sm text-gray-700'>
							<strong>Is the page data-heavy with parts that load at different speeds?</strong> → Streaming SSR with
							Suspense. Show the fast parts immediately; stream slower sections as they resolve. No more all-or-nothing
							loading states.
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>5</span>

						<p className='text-sm text-gray-700'>
							<strong>Do you want to minimize client-side JavaScript?</strong> → React Server Components combined with
							Islands architecture. Only ship JS for the interactive parts; everything else stays on the server.
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>6</span>

						<p className='text-sm text-gray-700'>
							<strong>Is it a hybrid app with different needs per route?</strong> → Mix patterns per route. Most
							production apps do this — SSG for the marketing site, SSR for product pages, CSR for the admin dashboard,
							all within the same framework.
						</p>
					</div>
				</div>
			</div>

			{/* ===== Key Takeaways ===== */}
			<div className='rounded-xl border border-blue-200 bg-blue-50 p-6'>
				<h4 className='mb-3 text-xl font-semibold text-blue-800'>Key Takeaways</h4>

				<ul className='space-y-2 text-blue-700'>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						CSR is the simplest but has the worst initial load and SEO characteristics — use it for apps behind
						authentication where search engines don't matter.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						SSR improves FCP and SEO at the cost of server infrastructure and TTFB — every request requires server
						computation.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						SSG is the fastest for static content; ISR adds near-real-time updates without requiring full rebuilds, making
						it practical for content-heavy sites.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Streaming SSR and React Server Components represent the future of rendering — send less JavaScript, render
						faster, and let the server do the heavy lifting.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Islands architecture is ideal when most of the page is static with small interactive areas — Astro and similar
						frameworks make this pattern first-class.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Most production apps use a hybrid approach — different rendering patterns for different routes, optimizing each
						page for its specific requirements.
					</li>
				</ul>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default RenderingPatterns;
