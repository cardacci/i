/* ===== Imports ===== */
import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const RoutingAndNavigation = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h3'>Routing & Navigation</SectionTitle>

			<p className='mb-6 text-gray-600'>
				Routing is the backbone of single-page application navigation. It maps URLs to views, enables the browser's back/forward
				buttons to work as expected, and determines how users share and bookmark deep links into your application. A well-designed
				routing architecture also unlocks performance wins through code splitting and lazy loading.
			</p>

			{/* ===== Client-Side vs. Server-Side Routing ===== */}
			<SectionTitle level='h4'>Client-Side vs. Server-Side Routing</SectionTitle>

			<p className='mb-4 text-gray-600'>
				The fundamental routing split: does navigation happen in the browser or on the server? Modern frameworks increasingly blur
				this line, but understanding both models is essential.
			</p>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<h5 className='mb-2 font-semibold text-blue-800'>Client-Side Routing</h5>

					<p className='text-sm text-blue-700'>
						Intercepts link clicks and updates the DOM via the History API (<code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>pushState</code>,{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>replaceState</code>) without a full page reload. The JavaScript framework
						manages transitions and renders the appropriate view. Result: instant transitions, persistent app state, and a
						native-like user experience.
					</p>

					<p className='mt-2 text-xs text-blue-600'>
						<strong>Used by:</strong> React Router, TanStack Router, Vue Router
					</p>
				</div>

				<div className='rounded-lg border border-green-200 bg-green-50 p-4'>
					<h5 className='mb-2 font-semibold text-green-800'>Server-Side Routing</h5>

					<p className='text-sm text-green-700'>
						Sends every navigation as a full HTTP request. The server returns a complete HTML page. Result: simpler mental
						model, inherent SEO, but slower transitions and a full state reset on each navigation. Frameworks like Next.js and
						Remix provide a hybrid model that starts server-rendered and transitions to client-side routing after hydration.
					</p>

					<p className='mt-2 text-xs text-green-600'>
						<strong>Used by:</strong> Next.js, Remix, Astro, traditional MPAs
					</p>
				</div>
			</div>

			{/* ===== Route Configuration Patterns ===== */}
			<SectionTitle level='h4'>Route Configuration Patterns</SectionTitle>

			<p className='mb-4 text-gray-600'>
				How you define routes varies significantly across frameworks. Each pattern trades off explicitness for convenience and
				type safety.
			</p>

			<div className='mb-6 space-y-4'>
				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-3 flex items-center gap-2'>
						<span className='rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>Basic</span>
						<h5 className='font-semibold text-gray-800'>File-Based Routing</h5>
					</div>

					<p className='mb-3 text-sm text-gray-600'>
						Convention over configuration. A file at <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>pages/about.tsx</code> automatically
						becomes <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>/about</code>. Used by Next.js, Remix, and Nuxt. The file system{' '}
						<em>is</em> the route config — no separate router definition needed.
					</p>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`pages/
├── index.tsx        → /
├── about.tsx        → /about
├── blog/
│   ├── index.tsx    → /blog
│   └── [slug].tsx   → /blog/:slug
└── dashboard/
    └── settings.tsx → /dashboard/settings`}
						</pre>
					</div>

					<p className='mt-3 text-xs text-gray-500'>
						<strong>Tradeoff:</strong> Simple to start with, but renaming files changes URLs. Dynamic segments use bracket
						notation.
					</p>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-3 flex items-center gap-2'>
						<span className='rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800'>Intermediate</span>
						<h5 className='font-semibold text-gray-800'>Declarative Config (React Router v6)</h5>
					</div>

					<p className='mb-3 text-sm text-gray-600'>
						Explicit route definitions using <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>createBrowserRouter</code> and route objects.
						You control the route tree directly, which makes complex nesting and data loading patterns straightforward.
					</p>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog/:slug', element: <BlogPost /> },
    ],
  },
]);`}
						</pre>
					</div>

					<p className='mt-3 text-xs text-gray-500'>
						<strong>Tradeoff:</strong> More boilerplate but full control over route structure, loaders, and error boundaries.
					</p>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-3 flex items-center gap-2'>
						<span className='rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800'>Advanced</span>
						<h5 className='font-semibold text-gray-800'>Type-Safe Routing (TanStack Router)</h5>
					</div>

					<p className='mb-3 text-sm text-gray-600'>
						Generates route types from your route tree, so every{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>{'<Link to=... />'}</code> and{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>useParams()</code> call is fully type-checked at compile time. Typos
						in route paths or missing parameters become build errors instead of runtime bugs.
					</p>

					<p className='text-xs text-gray-500'>
						<strong>Tradeoff:</strong> Steeper learning curve and more setup, but eliminates an entire class of routing-related
						bugs at compile time.
					</p>
				</div>
			</div>

			{/* ===== Nested Routes & Layouts ===== */}
			<SectionTitle level='h4'>Nested Routes & Layouts</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Nested routes compose layouts. A parent route renders a shell (header, sidebar) with an{' '}
				<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>{'<Outlet />'}</code> that renders the child route's content. Pathless (layout)
				routes add UI wrappers without adding a URL segment.
			</p>

			<div className='mb-4 rounded-md bg-slate-50 p-3'>
				<pre className='text-xs text-slate-700'>
{`<Route element={<DashboardLayout />} path="dashboard">
  <Route element={<Overview />} index />
  <Route element={<Settings />} path="settings" />
  <Route element={<Analytics />} path="analytics" />
</Route>

// DashboardLayout.tsx
const DashboardLayout = () => (
  <div className="grid grid-cols-[240px_1fr]">
    <Sidebar />
    <main>
      <Outlet />  {/* Child route renders here */}
    </main>
  </div>
);`}
				</pre>
			</div>

			<div className='mb-6 rounded-lg border border-gray-200 bg-gray-50 p-5'>
				<ol className='space-y-2 text-sm text-gray-700'>
					<li className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>1</span>

						<p>
							<strong>Parent route renders the layout shell</strong> — the header, sidebar, and any chrome that persists
							across child pages.
						</p>
					</li>

					<li className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>2</span>

						<p>
							<strong><code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>{'<Outlet />'}</code> acts as a slot</strong> for child
							content — it's where the matched child route component renders.
						</p>
					</li>

					<li className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>3</span>

						<p>
							<strong>Navigating between children only swaps the outlet</strong> — the layout persists, avoiding unnecessary
							re-renders of shared UI.
						</p>
					</li>

					<li className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>4</span>

						<p>
							<strong>Pathless layout routes</strong> wrap children without adding a URL segment — useful for auth gates or
							shared providers.
						</p>
					</li>
				</ol>
			</div>

			{/* ===== Protected Routes & Auth Guards ===== */}
			<SectionTitle level='h4'>Protected Routes & Auth Guards</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Many applications have sections that require authentication. Rather than checking auth status inside every page
				component, a dedicated route guard component handles the check once and protects all children.
			</p>

			<div className='mb-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
				<div className='mb-3 flex items-center gap-2'>
					<span className='rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800'>Pattern</span>
					<h5 className='font-semibold text-gray-800'>ProtectedRoute Wrapper</h5>
				</div>

				<div className='rounded-md bg-slate-50 p-3'>
					<pre className='text-xs text-slate-700'>
{`const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) return <Navigate replace to="/login" />;

  return children;
};

// Usage in route config
<Route
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
  path="dashboard"
/>`}
					</pre>
				</div>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Best practice:</strong> Place auth guards at the layout level, not inside every page. A single{' '}
					<code className='inline-block translate-y-[-1px] rounded bg-amber-100 px-1 text-xs'>ProtectedRoute</code> wrapping the dashboard layout route protects all
					its children automatically. This keeps page components focused on rendering content, not checking permissions.
				</p>
			</div>

			{/* ===== Code Splitting & Lazy Loading by Route ===== */}
			<SectionTitle level='h4'>Code Splitting & Lazy Loading by Route</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Route-based code splitting is the most impactful lazy loading strategy. Each route becomes a separate JavaScript chunk
				that is only downloaded when the user navigates to it, significantly reducing the initial bundle size.
			</p>

			<div className='mb-4 rounded-md bg-slate-50 p-3'>
				<pre className='text-xs text-slate-700'>
{`import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

const App = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Routes>
      <Route element={<Dashboard />} path="/dashboard" />
      <Route element={<Settings />} path="/settings" />
    </Routes>
  </Suspense>
);`}
				</pre>
			</div>

			<p className='mb-4 text-sm text-gray-600'>
				Each <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>{'lazy(() => import(...))'}</code> call creates a separate JS chunk. The
				bundle for <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>/settings</code> is only downloaded when the user navigates there.
				The <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>{'<Suspense>'}</code> boundary displays a fallback while the chunk loads.
			</p>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Performance tip:</strong> For even better perceived performance, prefetch route chunks on link hover:{' '}
					<code className='inline-block translate-y-[-1px] rounded bg-amber-100 px-1 text-xs'>
						{"<Link onMouseEnter={() => import('./pages/Settings')} to='/settings'>"}
					</code>. The chunk starts downloading before the user clicks, making the transition feel instant. Some routers like
					TanStack Router support this pattern natively via route preloading.
				</p>
			</div>

			{/* ===== Deep Linking & URL State ===== */}
			<SectionTitle level='h4'>Deep Linking & URL State</SectionTitle>

			<p className='mb-4 text-gray-600'>
				The URL is one of the most powerful state containers in a web application. Encoding UI state in the URL enables
				shareability, bookmarking, and browser history integration — all for free.
			</p>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-purple-200 bg-purple-50 p-4'>
					<h5 className='mb-2 font-semibold text-purple-800'>Search Parameters</h5>

					<p className='text-sm text-purple-700'>
						Search parameters (<code className='inline-block translate-y-[-1px] rounded bg-purple-100 px-1 text-xs'>?sort=name&page=2</code>) are the primary way to
						encode UI state in the URL. Use <code className='inline-block translate-y-[-1px] rounded bg-purple-100 px-1 text-xs'>useSearchParams</code> to read and
						write them. This enables shareable filtered views — a user can copy the URL and share their exact filter
						configuration. Libraries like <code className='inline-block translate-y-[-1px] rounded bg-purple-100 px-1 text-xs'>nuqs</code> provide type-safe search
						params with automatic serialization and validation.
					</p>

					<p className='mt-2 text-xs text-purple-600'>
						<strong>Use for:</strong> filters, sorting, pagination, selected tabs, search queries
					</p>
				</div>

				<div className='rounded-lg border border-teal-200 bg-teal-50 p-4'>
					<h5 className='mb-2 font-semibold text-teal-800'>Hash Fragments</h5>

					<p className='text-sm text-teal-700'>
						Hash fragments (<code className='inline-block translate-y-[-1px] rounded bg-teal-100 px-1 text-xs'>#section-3</code>) traditionally anchor to page
						sections. In SPAs, they can also serve as a lightweight state mechanism that does not trigger server requests.
						Common for anchor navigation within long pages or for tab selection in documentation sites.
					</p>

					<p className='mt-2 text-xs text-teal-600'>
						<strong>Use for:</strong> in-page anchors, scroll targets, lightweight tab state
					</p>
				</div>
			</div>

			{/* ===== History Management & Navigation Guards ===== */}
			<SectionTitle level='h4'>History Management & Navigation Guards</SectionTitle>

			<p className='mb-4 text-gray-600'>
				The browser's history stack is the foundation of navigation. Understanding how entries are pushed, replaced, and popped
				is critical for building predictable navigation experiences.
			</p>

			<div className='mb-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
				<h5 className='mb-3 font-semibold text-gray-800'>History Stack Flow</h5>

				<div className='overflow-x-auto'>
					<div className='flex min-w-[600px] items-center justify-between gap-2'>
						<div className='rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-gray-700'>Home</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-blue-500'>push</span>
							<span className='text-blue-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-blue-300 bg-blue-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-blue-700'>Products</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-blue-500'>push</span>
							<span className='text-blue-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-green-300 bg-green-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-green-700'>Product Detail</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-blue-500'>push</span>
							<span className='text-blue-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-purple-300 bg-purple-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-purple-700'>Cart</p>
						</div>
					</div>

					<div className='mt-2 flex min-w-[600px] justify-center'>
						<div className='flex items-center gap-2'>
							<span className='text-xs text-gray-400'>Note:</span>
							<span className='text-xs text-orange-600'>
								<code className='inline-block translate-y-[-1px] rounded bg-orange-100 px-1 text-xs'>replace</code> replaces the current entry instead of adding one
							</span>
						</div>
					</div>
				</div>
			</div>

			<p className='mb-4 text-sm text-gray-600'>
				Use <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>useNavigate()</code> for programmatic navigation and{' '}
				<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>useBlocker()</code> to prevent navigation when the user has unsaved changes.
				This is essential for forms where accidental navigation would lose user input.
			</p>

			<div className='mb-6 flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4'>
				<div>
					<p className='mb-1 text-sm font-semibold text-red-800'>Anti-Pattern: Direct History Manipulation</p>

					<p className='text-sm text-red-700'>
						Avoid manipulating <code className='inline-block translate-y-[-1px] rounded bg-red-100 px-1 text-xs'>window.history</code> directly or using excessive{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-red-100 px-1 text-xs'>{'navigate(..., { replace: true })'}</code>. This breaks the user's
						expected back button behavior and makes the navigation history unreliable. Let the router manage history; use{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-red-100 px-1 text-xs'>replace</code> only for redirects after form submissions or login
						flows.
					</p>
				</div>
			</div>

			{/* ===== Key Takeaways ===== */}
			<div className='rounded-xl border border-blue-200 bg-blue-50 p-6'>
				<h4 className='mb-3 text-xl font-semibold text-blue-800'>Key Takeaways</h4>

				<ul className='space-y-2 text-blue-700'>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Client-side routing enables SPA experiences; use the History API, not hash-only routing.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Nest routes to share layouts and reduce redundancy — <code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>{'<Outlet />'}</code> is the key primitive.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Protect routes at the layout level, not inside every individual page component.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Lazy-load route chunks to keep the initial bundle small; prefetch on hover for perceived speed.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Treat the URL as state — sync filters, pagination, and selections to query parameters for shareability.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Guard navigation for unsaved changes with <code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>useBlocker</code>, not{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>window.onbeforeunload</code> alone.
					</li>
				</ul>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default RoutingAndNavigation;
