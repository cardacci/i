/* ===== Imports ===== */
import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const PerformanceOptimization = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h3'>Performance Optimization</SectionTitle>

			<p className='mb-6 text-gray-600'>
				Performance is not an afterthought — it is a feature. Slow applications lose users: a 100ms delay in load time reduces
				conversion by 7%. Frontend performance optimization spans the entire pipeline from how the browser constructs the page to
				how efficiently your JavaScript runs. The goal is to minimize the time from click to content.
			</p>

			{/* ===== The Critical Rendering Path ===== */}
			<SectionTitle level='h4'>The Critical Rendering Path</SectionTitle>

			<div className='mb-4 overflow-x-auto'>
				<div className='flex min-w-[600px] items-center justify-between gap-2'>
					<div className='rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-gray-700'>HTML Parsing</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-blue-300 bg-blue-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-blue-700'>DOM</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-purple-300 bg-purple-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-purple-700'>CSSOM</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-green-300 bg-green-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-green-700'>Render Tree</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-orange-300 bg-orange-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-orange-700'>Layout</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-teal-300 bg-teal-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-teal-700'>Paint</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-emerald-300 bg-emerald-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-emerald-700'>Composite</p>
					</div>
				</div>
			</div>

			<p className='mb-6 text-gray-600'>
				The critical rendering path is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on
				screen. Render-blocking CSS and parser-blocking JavaScript delay first paint. Every resource the browser encounters before
				it can render must be downloaded, parsed, and executed or applied. Optimization strategies include: inline critical CSS so
				the browser doesn't wait for an external stylesheet, use{' '}
				<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>async</code> or{' '}
				<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>defer</code> on script tags to prevent
				parser blocking, preload key resources with{' '}
				<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>{'<link rel="preload">'}</code>, and
				minimize the total number of render-blocking resources in the document head.
			</p>

			{/* ===== Bundle Size & Tree Shaking ===== */}
			<SectionTitle level='h4'>Bundle Size & Tree Shaking</SectionTitle>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<h5 className='mb-2 font-semibold text-blue-800'>Bundle Analysis</h5>

					<p className='text-sm text-blue-700'>
						Large bundles directly hurt load time. Use{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>webpack-bundle-analyzer</code> or{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>rollup-plugin-visualizer</code>{' '}
						to identify heavy dependencies. Common offenders include: moment.js (~300 kB — replace with date-fns or dayjs),
						lodash (import individual functions like{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>lodash/debounce</code> instead of
						the entire library), and large icon packs (import only the icons you actually use).
					</p>
				</div>

				<div className='rounded-lg border border-green-200 bg-green-50 p-4'>
					<h5 className='mb-2 font-semibold text-green-800'>Tree Shaking</h5>

					<p className='text-sm text-green-700'>
						Tree shaking eliminates unused exports from the final bundle. It only works with ES modules (
						<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>import</code>/
						<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>export</code>), not CommonJS (
						<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>require</code>). Barrel files (
						<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>index.ts</code> that re-export
						everything) can defeat tree shaking if the bundler can't prove exports are side-effect-free. Mark packages as{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>"sideEffects": false</code> in{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>package.json</code> to enable
						aggressive dead-code elimination.
					</p>
				</div>
			</div>

			{/* ===== Code Splitting Strategies ===== */}
			<SectionTitle level='h4'>Code Splitting Strategies</SectionTitle>

			<div className='mb-6 space-y-4'>
				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-3 flex items-center gap-2'>
						<span className='rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>Route-based</span>
						<h5 className='font-semibold text-gray-800'>Split by Route</h5>
					</div>

					<p className='mb-3 text-sm text-gray-600'>
						The most common strategy. Each route becomes a separate chunk loaded on navigation. Use{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>
							React.lazy(() =&gt; import('./Dashboard'))
						</code>{' '}
						with <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>{'<Suspense>'}</code>. The
						initial bundle only contains the shell and the current route — everything else is fetched on demand. This strategy
						is covered in detail in the Routing tab.
					</p>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-3 flex items-center gap-2'>
						<span className='rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800'>Component-based</span>
						<h5 className='font-semibold text-gray-800'>Split by Component</h5>
					</div>

					<p className='mb-3 text-sm text-gray-600'>
						Split heavy components that aren't needed on initial load — rich text editors, chart libraries, modals with complex
						content. Load them on user interaction such as a button click or tab switch.
					</p>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
							{`const RichEditor = lazy(() => import('./RichEditor'));

// Only loaded when user clicks "Edit"
{isEditing && (
  <Suspense fallback={<Skeleton />}>
    <RichEditor />
  </Suspense>
)}`}
						</pre>
					</div>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-3 flex items-center gap-2'>
						<span className='rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800'>Library-based</span>
						<h5 className='font-semibold text-gray-800'>Split by Library</h5>
					</div>

					<p className='text-sm text-gray-600'>
						Move large dependencies into separate chunks. Bundlers like Vite and webpack can be configured to split vendor code
						automatically. Use dynamic{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>import()</code> for libraries
						only needed in specific flows — for example, loading a PDF renderer only when the user opens a document preview, or
						loading a charting library only on the analytics page.
					</p>
				</div>
			</div>

			{/* ===== Virtualization for Large Lists ===== */}
			<SectionTitle level='h4'>Virtualization for Large Lists</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Rendering 10,000 DOM nodes destroys performance — layout, paint, and memory all suffer. Virtualization renders only the
				visible items plus a small overscan buffer. As the user scrolls, items are recycled: rows leaving the viewport are removed
				from the DOM, and new rows entering it are created in their place.
			</p>

			<div className='mb-4 rounded-md bg-slate-50 p-3'>
				<pre className='text-xs text-slate-700'>
					{`// Using TanStack Virtual
const virtualizer = useVirtualizer({
  count: items.length,
  estimateSize: () => 50,
  getScrollElement: () => parentRef.current,
});

return (
  <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
    <div style={{ height: virtualizer.getTotalSize() }}>
      {virtualizer.getVirtualItems().map((row) => (
        <div
          key={row.key}
          style={{
            height: row.size,
            position: 'absolute',
            top: row.start,
            width: '100%',
          }}
        >
          {items[row.index].name}
        </div>
      ))}
    </div>
  </div>
);`}
				</pre>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Trade-offs:</strong> Virtualization has real costs. Native browser search (Ctrl+F) won't find off-screen items,
					screen readers may have difficulty with dynamic content, and print layouts break. Consider whether your use case truly
					needs 10,000+ items visible — often, better filtering, pagination, or search makes virtualization unnecessary.
				</p>
			</div>

			{/* ===== Memoization ===== */}
			<SectionTitle level='h4'>Memoization: React.memo, useMemo, useCallback</SectionTitle>

			<div className='mb-4 overflow-x-auto'>
				<table className='w-full text-left text-sm'>
					<thead>
						<tr className='border-b border-gray-200 bg-gray-50'>
							<th className='px-4 py-3 font-semibold text-gray-700'>Tool</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>What It Memoizes</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>When to Use</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Common Mistake</th>
						</tr>
					</thead>

					<tbody>
						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>React.memo</td>
							<td className='px-4 py-3 text-gray-600'>Component output — skips re-render if props are shallowly equal</td>
							<td className='px-4 py-3 text-gray-600'>Child components with expensive render, receiving stable props</td>
							<td className='px-4 py-3 text-gray-600'>
								Wrapping components that receive new objects/arrays/functions every render (the memo never fires)
							</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>useMemo</td>
							<td className='px-4 py-3 text-gray-600'>Return value of a computation</td>
							<td className='px-4 py-3 text-gray-600'>
								Expensive derived values, objects/arrays passed as props to memoized children
							</td>
							<td className='px-4 py-3 text-gray-600'>
								Memoizing trivial calculations where the overhead of memoization exceeds the saved work
							</td>
						</tr>

						<tr>
							<td className='px-4 py-3 font-medium text-gray-800'>useCallback</td>
							<td className='px-4 py-3 text-gray-600'>Function reference</td>
							<td className='px-4 py-3 text-gray-600'>
								Event handlers passed to memoized children, functions in dependency arrays
							</td>
							<td className='px-4 py-3 text-gray-600'>
								Wrapping every function "just in case" — adds complexity without measurable benefit
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>React team's advice:</strong> Don't memoize by default. Profile first using React DevTools Profiler. If a
					component re-renders frequently and each render is expensive, then memoize. The cost of comparison and memory is not
					free — memoization is an optimization with its own overhead.
				</p>
			</div>

			{/* ===== Web Workers ===== */}
			<SectionTitle level='h4'>Web Workers for Heavy Computation</SectionTitle>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-purple-200 bg-purple-50 p-4'>
					<h5 className='mb-2 font-semibold text-purple-800'>When to Use</h5>

					<p className='mb-3 text-sm text-purple-700'>
						JavaScript is single-threaded — heavy computation blocks the main thread, causing UI jank (dropped frames,
						unresponsive input). Offload work to a Web Worker when you need to:
					</p>

					<ul className='space-y-1 text-sm text-purple-700'>
						<li className='flex items-start'>
							<span className='mr-2 text-purple-500'>•</span>
							Parse large JSON or CSV files
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-purple-500'>•</span>
							Process or manipulate images
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-purple-500'>•</span>
							Run complex search or filter algorithms
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-purple-500'>•</span>
							Perform cryptographic operations
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-purple-500'>•</span>
							Execute data transformation pipelines
						</li>
					</ul>
				</div>

				<div className='rounded-lg border border-teal-200 bg-teal-50 p-4'>
					<h5 className='mb-2 font-semibold text-teal-800'>Implementation</h5>

					<p className='mb-3 text-sm text-teal-700'>
						Workers run in a separate thread with no DOM access. Communication happens via{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-teal-100 px-1 text-xs'>postMessage</code> /{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-teal-100 px-1 text-xs'>onmessage</code>:
					</p>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
							{`// worker.js
self.onmessage = ({ data }) => {
  const result = heavyComputation(data);

  self.postMessage(result);
};

// main thread
const worker = new Worker('./worker.js');

worker.postMessage(largeDataset);
worker.onmessage = ({ data }) => {
  setResult(data);
};`}
						</pre>
					</div>

					<p className='mt-3 text-xs text-teal-600'>
						<strong>Tip:</strong> The Comlink library provides a more ergonomic RPC-style API over postMessage, letting you call
						worker functions as if they were local async functions.
					</p>
				</div>
			</div>

			{/* ===== Image Optimization ===== */}
			<SectionTitle level='h4'>Image Optimization</SectionTitle>

			<div className='mb-6 overflow-x-auto'>
				<table className='w-full text-left text-sm'>
					<thead>
						<tr className='border-b border-gray-200 bg-gray-50'>
							<th className='px-4 py-3 font-semibold text-gray-700'>Technique</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Impact</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Implementation</th>
						</tr>
					</thead>

					<tbody>
						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Modern formats (WebP/AVIF)</td>
							<td className='px-4 py-3 text-gray-600'>25-50% smaller than JPEG/PNG</td>
							<td className='px-4 py-3 text-gray-600'>
								<code className='inline-block translate-y-[-1px] rounded bg-gray-100 px-1 text-xs'>{'<picture>'}</code>{' '}
								element with format fallbacks, or CDN auto-conversion
							</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>Responsive images</td>
							<td className='px-4 py-3 text-gray-600'>Serve right size for viewport</td>
							<td className='px-4 py-3 text-gray-600'>
								<code className='inline-block translate-y-[-1px] rounded bg-gray-100 px-1 text-xs'>srcset</code> and{' '}
								<code className='inline-block translate-y-[-1px] rounded bg-gray-100 px-1 text-xs'>sizes</code> attributes;{' '}
								<code className='inline-block translate-y-[-1px] rounded bg-gray-100 px-1 text-xs'>{'<Image>'}</code>{' '}
								component in Next.js
							</td>
						</tr>

						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Lazy loading</td>
							<td className='px-4 py-3 text-gray-600'>Defer off-screen images</td>
							<td className='px-4 py-3 text-gray-600'>
								Native{' '}
								<code className='inline-block translate-y-[-1px] rounded bg-gray-100 px-1 text-xs'>loading="lazy"</code>{' '}
								attribute — zero JavaScript needed
							</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>CDN optimization</td>
							<td className='px-4 py-3 text-gray-600'>On-the-fly resize, crop, format conversion</td>
							<td className='px-4 py-3 text-gray-600'>Cloudinary, imgix, Vercel Image Optimization</td>
						</tr>

						<tr>
							<td className='px-4 py-3 font-medium text-gray-800'>Blur-up placeholders</td>
							<td className='px-4 py-3 text-gray-600'>Show blurred tiny image while full image loads</td>
							<td className='px-4 py-3 text-gray-600'>Base64-encoded 10px thumbnail as placeholder, sharp for generation</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* ===== Core Web Vitals ===== */}
			<SectionTitle level='h4'>Core Web Vitals</SectionTitle>

			<div className='mb-6 grid gap-4 md:grid-cols-3'>
				<div className='rounded-lg border border-green-200 bg-green-50 p-4'>
					<h5 className='mb-1 font-semibold text-green-800'>LCP</h5>

					<p className='mb-2 text-xs font-medium text-green-600'>Largest Contentful Paint</p>

					<p className='mb-3 text-sm text-green-700'>
						Measures how quickly the main content loads. This is the time it takes for the largest visible element (hero image,
						heading block, or video) to appear.
					</p>

					<p className='mb-2 text-sm font-semibold text-green-800'>Target: {'<'} 2.5s</p>

					<ul className='space-y-1 text-xs text-green-700'>
						<li className='flex items-start'>
							<span className='mr-1 text-green-500'>•</span>
							Preload the hero image
						</li>

						<li className='flex items-start'>
							<span className='mr-1 text-green-500'>•</span>
							Use SSR/SSG for above-the-fold content
						</li>

						<li className='flex items-start'>
							<span className='mr-1 text-green-500'>•</span>
							Eliminate render-blocking resources
						</li>

						<li className='flex items-start'>
							<span className='mr-1 text-green-500'>•</span>
							Optimize server response time
						</li>
					</ul>
				</div>

				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<h5 className='mb-1 font-semibold text-blue-800'>INP</h5>

					<p className='mb-2 text-xs font-medium text-blue-600'>Interaction to Next Paint</p>

					<p className='mb-3 text-sm text-blue-700'>
						Measures responsiveness to user input (replaces FID). INP considers all interactions during the page lifecycle and
						reports the worst latency, giving a more complete picture of interactivity.
					</p>

					<p className='mb-2 text-sm font-semibold text-blue-800'>Target: {'<'} 200ms</p>

					<ul className='space-y-1 text-xs text-blue-700'>
						<li className='flex items-start'>
							<span className='mr-1 text-blue-500'>•</span>
							Break up long tasks with scheduler.yield()
						</li>

						<li className='flex items-start'>
							<span className='mr-1 text-blue-500'>•</span>
							Minimize main thread work
						</li>

						<li className='flex items-start'>
							<span className='mr-1 text-blue-500'>•</span>
							Use startTransition for non-urgent updates
						</li>

						<li className='flex items-start'>
							<span className='mr-1 text-blue-500'>•</span>
							Defer heavy JS with web workers
						</li>
					</ul>
				</div>

				<div className='rounded-lg border border-orange-200 bg-orange-50 p-4'>
					<h5 className='mb-1 font-semibold text-orange-800'>CLS</h5>

					<p className='mb-2 text-xs font-medium text-orange-600'>Cumulative Layout Shift</p>

					<p className='mb-3 text-sm text-orange-700'>
						Measures visual stability — elements shouldn't jump around. CLS captures how much the page layout shifts
						unexpectedly during its entire lifespan.
					</p>

					<p className='mb-2 text-sm font-semibold text-orange-800'>Target: {'<'} 0.1</p>

					<ul className='space-y-1 text-xs text-orange-700'>
						<li className='flex items-start'>
							<span className='mr-1 text-orange-500'>•</span>
							Set explicit width/height on images and embeds
						</li>

						<li className='flex items-start'>
							<span className='mr-1 text-orange-500'>•</span>
							Reserve space for dynamic content (ads, fonts)
						</li>

						<li className='flex items-start'>
							<span className='mr-1 text-orange-500'>•</span>
							Use font-display: swap with size-adjusted fallbacks
						</li>
					</ul>
				</div>
			</div>

			{/* ===== Key Takeaways ===== */}
			<div className='rounded-xl border border-blue-200 bg-blue-50 p-6'>
				<h4 className='mb-3 text-xl font-semibold text-blue-800'>Key Takeaways</h4>

				<ul className='space-y-2 text-blue-700'>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Understand the critical rendering path to know what blocks your first paint
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Measure bundle size regularly; tree shaking only works with ES module imports
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Virtualize long lists instead of rendering thousands of DOM nodes
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Memoize deliberately after profiling, not prematurely — it has its own cost
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Optimize images first — they are usually the biggest performance win for the least effort
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Target Core Web Vitals (LCP {'<'} 2.5s, INP {'<'} 200ms, CLS {'<'} 0.1) as your performance budget
					</li>
				</ul>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default PerformanceOptimization;
