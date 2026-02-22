/* ===== Imports ===== */
import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const RealWorldExamples = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h3'>Real-World Examples</SectionTitle>

			<p className='mb-6 text-gray-600'>
				The best way to understand frontend system design is to study how real applications solve real problems. Each
				application below presents a unique combination of challenges — from real-time collaboration to offline playback — and
				demonstrates how the concepts from the other tabs come together in production.
			</p>

			{/* ===== Twitter/X Feed ===== */}
			<div className='mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
				<div className='mb-3 flex items-center gap-3'>
					<span className='text-2xl'>💬</span>
					<div>
						<h5 className='font-semibold text-gray-800'>Twitter/X Feed</h5>
						<p className='text-sm text-gray-500'>Real-time social feed with infinite scroll, optimistic interactions, and complex state</p>
					</div>
				</div>

				<div className='mb-4'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Key Challenges</h6>
					<ul className='space-y-1 text-sm text-gray-600'>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Infinite scroll with cursor-based pagination
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Optimistic like/retweet/bookmark updates with rollback
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Real-time new tweet indicators via WebSocket
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Complex nested state (tweet → retweet → quoted tweet)
						</li>
					</ul>
				</div>

				<div className='mb-3'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Concepts Applied</h6>
					<div className='flex flex-wrap gap-2'>
						<span className='rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>State Management</span>
						<span className='rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800'>Data Fetching</span>
						<span className='rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800'>Performance</span>
						<span className='rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800'>Rendering Patterns</span>
					</div>
				</div>

				<div className='rounded-md bg-gray-50 p-3'>
					<p className='text-xs text-gray-600'>
						<strong>Architecture Insight:</strong> Twitter normalizes tweet data in a flat cache keyed by tweet ID. This prevents
						duplicate data when the same tweet appears in multiple contexts (feed, replies, bookmarks) and makes optimistic updates
						consistent across views.
					</p>
				</div>
			</div>

			{/* ===== Spotify Web Player ===== */}
			<div className='mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
				<div className='mb-3 flex items-center gap-3'>
					<span className='text-2xl'>🎵</span>
					<div>
						<h5 className='font-semibold text-gray-800'>Spotify Web Player</h5>
						<p className='text-sm text-gray-500'>Music streaming with persistent playback, offline support, and cross-device sync</p>
					</div>
				</div>

				<div className='mb-4'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Key Challenges</h6>
					<ul className='space-y-1 text-sm text-gray-600'>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Persistent audio player that survives navigation
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Complex playback state machine (play, pause, skip, shuffle, repeat, queue)
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Cross-device sync via Spotify Connect
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Offline playlist caching with service workers
						</li>
					</ul>
				</div>

				<div className='mb-3'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Concepts Applied</h6>
					<div className='flex flex-wrap gap-2'>
						<span className='rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>State Management</span>
						<span className='rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800'>Routing & Navigation</span>
						<span className='rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800'>Component Architecture</span>
						<span className='rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800'>Performance</span>
					</div>
				</div>

				<div className='rounded-md bg-gray-50 p-3'>
					<p className='text-xs text-gray-600'>
						<strong>Architecture Insight:</strong> The playback engine runs outside React's render cycle as a singleton service.
						React components subscribe to its state via a custom hook, preventing unnecessary re-renders when only the progress bar
						needs updating.
					</p>
				</div>
			</div>

			{/* ===== Google Docs ===== */}
			<div className='mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
				<div className='mb-3 flex items-center gap-3'>
					<span className='text-2xl'>📝</span>
					<div>
						<h5 className='font-semibold text-gray-800'>Google Docs</h5>
						<p className='text-sm text-gray-500'>Real-time collaborative document editor with conflict resolution and presence</p>
					</div>
				</div>

				<div className='mb-4'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Key Challenges</h6>
					<ul className='space-y-1 text-sm text-gray-600'>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Operational Transformation (OT) for conflict-free collaborative editing
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Cursor presence indicators for multiple users
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Rich text editing with complex DOM manipulation
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Offline editing with sync on reconnect
						</li>
					</ul>
				</div>

				<div className='mb-3'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Concepts Applied</h6>
					<div className='flex flex-wrap gap-2'>
						<span className='rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800'>Data Fetching</span>
						<span className='rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>State Management</span>
						<span className='rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800'>Performance</span>
						<span className='rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800'>Design Systems</span>
					</div>
				</div>

				<div className='rounded-md bg-gray-50 p-3'>
					<p className='text-xs text-gray-600'>
						<strong>Architecture Insight:</strong> Google Docs uses Operational Transformation to reconcile concurrent edits. Each
						keystroke is transformed against pending operations from other users before being applied, ensuring all clients converge
						to the same document state.
					</p>
				</div>
			</div>

			{/* ===== Figma ===== */}
			<div className='mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
				<div className='mb-3 flex items-center gap-3'>
					<span className='text-2xl'>🎨</span>
					<div>
						<h5 className='font-semibold text-gray-800'>Figma</h5>
						<p className='text-sm text-gray-500'>Browser-based design tool with canvas rendering, real-time collaboration, and plugin system</p>
					</div>
				</div>

				<div className='mb-4'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Key Challenges</h6>
					<ul className='space-y-1 text-sm text-gray-600'>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Rendering complex vector graphics on a 2D canvas (not DOM)
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Real-time multiplayer cursors and selections
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Custom rendering engine compiled to WebAssembly
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Plugin sandbox isolation via iframes
						</li>
					</ul>
				</div>

				<div className='mb-3'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Concepts Applied</h6>
					<div className='flex flex-wrap gap-2'>
						<span className='rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800'>Performance</span>
						<span className='rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800'>Data Fetching</span>
						<span className='rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>State Management</span>
						<span className='rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-800'>Infrastructure</span>
					</div>
				</div>

				<div className='rounded-md bg-gray-50 p-3'>
					<p className='text-xs text-gray-600'>
						<strong>Architecture Insight:</strong> Figma's rendering engine is written in C++ compiled to WebAssembly, bypassing the
						DOM entirely. This gives it near-native performance for complex vector operations that would be impossibly slow with SVG
						or regular Canvas 2D.
					</p>
				</div>
			</div>

			{/* ===== Notion ===== */}
			<div className='mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
				<div className='mb-3 flex items-center gap-3'>
					<span className='text-2xl'>📓</span>
					<div>
						<h5 className='font-semibold text-gray-800'>Notion</h5>
						<p className='text-sm text-gray-500'>Block-based workspace combining docs, databases, wikis, and project management</p>
					</div>
				</div>

				<div className='mb-4'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Key Challenges</h6>
					<ul className='space-y-1 text-sm text-gray-600'>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Block-based content model (each paragraph, heading, image is a block)
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Nested pages and databases with relational data
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Drag-and-drop reordering across block types
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Offline support with conflict resolution
						</li>
					</ul>
				</div>

				<div className='mb-3'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Concepts Applied</h6>
					<div className='flex flex-wrap gap-2'>
						<span className='rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800'>Component Architecture</span>
						<span className='rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>State Management</span>
						<span className='rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800'>Routing & Navigation</span>
						<span className='rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800'>Data Fetching</span>
					</div>
				</div>

				<div className='rounded-md bg-gray-50 p-3'>
					<p className='text-xs text-gray-600'>
						<strong>Architecture Insight:</strong> Notion's block model is recursive — a page is a block that contains blocks, each
						of which can contain more blocks. This uniform data model simplifies the component architecture: a single BlockRenderer
						handles all block types via a type discriminator.
					</p>
				</div>
			</div>

			{/* ===== Vercel Dashboard ===== */}
			<div className='mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
				<div className='mb-3 flex items-center gap-3'>
					<span className='text-2xl'>▲</span>
					<div>
						<h5 className='font-semibold text-gray-800'>Vercel Dashboard</h5>
						<p className='text-sm text-gray-500'>Developer platform dashboard with real-time deployment logs, analytics, and team management</p>
					</div>
				</div>

				<div className='mb-4'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Key Challenges</h6>
					<ul className='space-y-1 text-sm text-gray-600'>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Real-time streaming deployment logs via Server-Sent Events
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Complex routing with team/project/deployment hierarchy
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Performance monitoring dashboards with heavy charting
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Git integration status and webhook management
						</li>
					</ul>
				</div>

				<div className='mb-3'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Concepts Applied</h6>
					<div className='flex flex-wrap gap-2'>
						<span className='rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800'>Rendering Patterns</span>
						<span className='rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800'>Data Fetching</span>
						<span className='rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800'>Routing & Navigation</span>
						<span className='rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-800'>Infrastructure</span>
					</div>
				</div>

				<div className='rounded-md bg-gray-50 p-3'>
					<p className='text-xs text-gray-600'>
						<strong>Architecture Insight:</strong> Vercel uses Server-Sent Events for deployment logs rather than WebSockets. SSE is
						simpler, automatically reconnects, and works over HTTP/2 — ideal for the unidirectional log streaming use case.
					</p>
				</div>
			</div>

			{/* ===== Shopify Storefront ===== */}
			<div className='mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
				<div className='mb-3 flex items-center gap-3'>
					<span className='text-2xl'>🛒</span>
					<div>
						<h5 className='font-semibold text-gray-800'>Shopify Storefront</h5>
						<p className='text-sm text-gray-500'>E-commerce platform serving millions of storefronts with custom themes and checkout</p>
					</div>
				</div>

				<div className='mb-4'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Key Challenges</h6>
					<ul className='space-y-1 text-sm text-gray-600'>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Performance at scale — every millisecond of load time affects conversion
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Cart state that persists across sessions
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Dynamic product pages with variants, pricing, and inventory
						</li>
						<li className='flex items-start'>
							<span className='mr-2 text-gray-400'>•</span>
							Third-party script management (analytics, chat, payment providers)
						</li>
					</ul>
				</div>

				<div className='mb-3'>
					<h6 className='mb-2 text-sm font-semibold text-gray-700'>Concepts Applied</h6>
					<div className='flex flex-wrap gap-2'>
						<span className='rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800'>Rendering Patterns</span>
						<span className='rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800'>Performance</span>
						<span className='rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800'>Design Systems</span>
						<span className='rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-800'>Infrastructure</span>
					</div>
				</div>

				<div className='rounded-md bg-gray-50 p-3'>
					<p className='text-xs text-gray-600'>
						<strong>Architecture Insight:</strong> Shopify uses Hydrogen (a React-based framework on Remix) with streaming SSR for
						storefronts. Product pages are statically generated with ISR, while the cart and checkout use client-side rendering
						behind authentication.
					</p>
				</div>
			</div>

			{/* ===== Notice Box ===== */}
			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Notice:</strong> Every application uses a different mix of patterns. There is no single correct architecture — only
					trade-offs chosen deliberately for each product's unique constraints. The skill of frontend system design is knowing which
					patterns to apply, where, and why.
				</p>
			</div>

			{/* ===== Key Takeaways ===== */}
			<div className='rounded-xl border border-blue-200 bg-blue-50 p-6'>
				<h4 className='mb-3 text-xl font-semibold text-blue-800'>Key Takeaways</h4>
				<ul className='space-y-2 text-blue-700'>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Real applications combine multiple rendering patterns across different routes and features
					</li>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						State architecture decisions (normalized cache, CRDT, state machines) depend on the domain
					</li>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Real-time features (collaboration, live feeds) demand WebSocket or SSE infrastructure
					</li>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Performance optimization priorities differ: e-commerce optimizes for load time, design tools optimize for interaction
					</li>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Design systems ensure consistency across large applications with many contributors
					</li>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						The best architecture is the simplest one that meets the product's specific constraints
					</li>
				</ul>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default RealWorldExamples;
