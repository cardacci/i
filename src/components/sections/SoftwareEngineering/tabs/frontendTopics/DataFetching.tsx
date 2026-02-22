/* ===== Imports ===== */
import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const DataFetching = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h3'>Data Fetching</SectionTitle>

			<p className='mb-6 text-gray-600'>
				Every frontend application needs data from a server. The challenge is not just getting the data — it is managing the
				lifecycle around it: loading states, errors, caching, staleness, deduplication, and keeping the UI in sync when mutations
				happen. Modern data-fetching patterns separate these concerns from component logic.
			</p>

			{/* ===== REST vs. GraphQL ===== */}
			<SectionTitle level='h4'>REST vs. GraphQL: A Frontend Perspective</SectionTitle>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<h5 className='mb-2 font-semibold text-blue-800'>REST</h5>

					<p className='text-sm text-blue-700'>
						REST delivers fixed response shapes per endpoint. The server decides what fields are returned. This can lead to
						over-fetching (receiving 20 fields when you only need 3) or under-fetching (needing data from multiple endpoints).
						REST is simpler to cache because each URL is a unique cache key. Well-suited for CRUD applications with predictable
						data needs.
					</p>

					<div className='mt-3 rounded-md bg-blue-100/50 p-3'>
						<pre className='text-xs text-blue-800'>
{`// Two requests for one view
const user = await fetch('/api/users/1');
const posts = await fetch('/api/users/1/posts');`}
						</pre>
					</div>

					<p className='mt-2 text-xs text-blue-600'>
						<strong>Tools:</strong> fetch, axios, ky
					</p>
				</div>

				<div className='rounded-lg border border-green-200 bg-green-50 p-4'>
					<h5 className='mb-2 font-semibold text-green-800'>GraphQL</h5>

					<p className='text-sm text-green-700'>
						GraphQL lets the client specify exactly which fields it needs in a single request. Eliminates over/under-fetching.
						Requires a client library for caching and state management. Normalized caching is powerful but complex. Best for
						applications with complex data relationships and varied UI views.
					</p>

					<div className='mt-3 rounded-md bg-green-100/50 p-3'>
						<pre className='text-xs text-green-800'>
{`// One request, exact fields
const { data } = useQuery(gql\`
  query { user(id: 1) {
    name
    posts { title }
  }}
\`);`}
						</pre>
					</div>

					<p className='mt-2 text-xs text-green-600'>
						<strong>Tools:</strong> Apollo Client, urql, Relay
					</p>
				</div>
			</div>

			{/* ===== The Fetch Lifecycle ===== */}
			<SectionTitle level='h4'>The Fetch Lifecycle</SectionTitle>

			<div className='mb-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
				<div className='overflow-x-auto'>
					<div className='flex min-w-[600px] items-center justify-between gap-2'>
						<div className='rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-gray-700'>Idle</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-gray-500'>request</span>
							<span className='text-gray-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-yellow-300 bg-yellow-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-yellow-700'>Fetching</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-green-500'>resolve</span>
							<span className='text-green-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-green-300 bg-green-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-green-700'>Success</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-amber-500'>time</span>
							<span className='text-amber-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-amber-300 bg-amber-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-amber-700'>Stale</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-blue-500'>refetch</span>
							<span className='text-blue-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-blue-300 bg-blue-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-blue-700'>Refetching</p>
						</div>
					</div>

					<div className='mt-2 flex min-w-[600px] justify-center'>
						<div className='flex items-center gap-2'>
							<span className='text-xs text-gray-400'>↑ From Fetching:</span>
							<span className='text-xs text-red-500'>reject → </span>

							<div className='rounded-lg border-2 border-red-300 bg-red-50 px-3 py-1.5 text-center'>
								<p className='text-xs font-bold text-red-700'>Error</p>
							</div>

							<span className='text-xs text-gray-500'> → retry → Fetching</span>
						</div>
					</div>
				</div>

				<p className='mt-4 text-sm text-gray-600'>
					Every data request follows a state machine. Libraries like TanStack Query model this explicitly with
					flags: <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>isLoading</code> (first
					fetch, no data yet), <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>isFetching</code> (any
					fetch including background), <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>isStale</code> (data
					exists but may be outdated), <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>isError</code> (last
					fetch failed), and <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>data</code> (the
					cached result). Understanding this lifecycle is critical for building UIs that feel responsive and reliable.
				</p>
			</div>

			{/* ===== Caching Strategies ===== */}
			<SectionTitle level='h4'>Caching Strategies</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Caching determines how your application balances between showing data instantly and keeping it fresh. The right strategy
				depends on how often the data changes and how critical freshness is for the user experience.
			</p>

			<div className='mb-6 overflow-x-auto'>
				<table className='w-full text-left text-sm'>
					<thead>
						<tr className='border-b border-gray-200 bg-gray-50'>
							<th className='px-4 py-3 font-semibold text-gray-700'>Strategy</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>How It Works</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Best For</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Staleness</th>
						</tr>
					</thead>

					<tbody>
						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Stale-While-Revalidate</td>
							<td className='px-4 py-3 text-gray-600'>
								Returns cached data immediately, then revalidates in the background. UI updates when fresh data arrives.
							</td>
							<td className='px-4 py-3 text-gray-600'>Dashboards, feeds, lists</td>
							<td className='px-4 py-3 text-gray-500'>Time-based (staleTime config)</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>Cache-First</td>
							<td className='px-4 py-3 text-gray-600'>
								Returns cached data if available; never hits the network until cache expires.
							</td>
							<td className='px-4 py-3 text-gray-600'>Static reference data, config</td>
							<td className='px-4 py-3 text-gray-500'>TTL-based expiration</td>
						</tr>

						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Network-Only</td>
							<td className='px-4 py-3 text-gray-600'>
								Always fetches from the network; never uses cache.
							</td>
							<td className='px-4 py-3 text-gray-600'>Real-time data, financial tickers</td>
							<td className='px-4 py-3 text-gray-500'>N/A (always fresh)</td>
						</tr>

						<tr className='bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>Cache-and-Network</td>
							<td className='px-4 py-3 text-gray-600'>
								Returns cached data AND fetches from network simultaneously; updates UI when fresh data arrives.
							</td>
							<td className='px-4 py-3 text-gray-600'>Social feeds, email inbox</td>
							<td className='px-4 py-3 text-gray-500'>Immediate + background update</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* ===== Optimistic Updates ===== */}
			<SectionTitle level='h4'>Optimistic Updates</SectionTitle>

			<div className='mb-6 rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
				<div className='mb-3 flex items-center gap-2'>
					<span className='rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>Pattern</span>
					<h5 className='font-semibold text-gray-800'>Immediately Update UI, Roll Back on Error</h5>
				</div>

				<p className='mb-4 text-sm text-gray-600'>
					Optimistic updates immediately reflect the mutation in the UI as if it already succeeded, then roll back if the server
					returns an error. This makes interactions feel instant rather than waiting for a network round trip. The pattern is
					especially effective for actions users expect to be immediate: toggling a like, checking off a todo, or reordering a
					list.
				</p>

				<div className='mb-4 rounded-md bg-slate-50 p-3'>
					<pre className='text-xs text-slate-700'>
{`const mutation = useMutation({
  mutationFn: updateTodo,
  onMutate: async (newTodo) => {
    await queryClient.cancelQueries({ queryKey: ['todos'] });
    const previous = queryClient.getQueryData(['todos']);
    queryClient.setQueryData(['todos'], (old) =>
      old.map((t) => (t.id === newTodo.id ? { ...t, ...newTodo } : t))
    );
    return { previous };
  },
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(['todos'], context.previous);
  },
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  },
});`}
					</pre>
				</div>

				<div className='space-y-2'>
					<p className='text-sm text-gray-600'>
						<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>onMutate</code> saves the
						previous state and applies the optimistic update to the cache before the request is sent.
					</p>

					<p className='text-sm text-gray-600'>
						<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>onError</code> rolls back to
						the previous state if the server rejects the mutation.
					</p>

					<p className='text-sm text-gray-600'>
						<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>onSettled</code> invalidates
						the query to ensure eventual consistency with the server, regardless of success or failure.
					</p>
				</div>
			</div>

			{/* ===== Pagination Patterns ===== */}
			<SectionTitle level='h4'>Pagination Patterns</SectionTitle>

			<p className='mb-4 text-gray-600'>
				When an API returns hundreds or thousands of records, you need a pagination strategy. Each approach makes different
				trade-offs between simplicity, performance, and stability when the underlying data changes.
			</p>

			<div className='mb-6 grid gap-4 md:grid-cols-3'>
				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<h5 className='mb-2 font-semibold text-blue-800'>Offset-Based</h5>

					<p className='text-sm text-blue-700'>
						Uses <code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>?page=2&limit=20</code>.
						Simple to implement. Server can return total count for page numbers. Limitation: inserting or deleting items shifts
						pages — users may see duplicates or miss items.
					</p>

					<p className='mt-2 text-xs text-blue-600'>
						<strong>Best for:</strong> admin tables, reports with stable datasets
					</p>
				</div>

				<div className='rounded-lg border border-green-200 bg-green-50 p-4'>
					<h5 className='mb-2 font-semibold text-green-800'>Cursor-Based</h5>

					<p className='text-sm text-green-700'>
						Uses <code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>?after=abc123&limit=20</code> where
						the cursor is an opaque token (often an encoded timestamp or ID). Stable under insertions and deletions. Scales to
						millions of records. Used by Twitter, GitHub, and Slack APIs.
					</p>

					<p className='mt-2 text-xs text-green-600'>
						<strong>Best for:</strong> large, frequently changing datasets
					</p>
				</div>

				<div className='rounded-lg border border-purple-200 bg-purple-50 p-4'>
					<h5 className='mb-2 font-semibold text-purple-800'>Infinite Scroll</h5>

					<p className='text-sm text-purple-700'>
						Loads the next page when the user scrolls near the bottom. Uses IntersectionObserver or a sentinel element.
						TanStack Query's <code className='inline-block translate-y-[-1px] rounded bg-purple-100 px-1 text-xs'>useInfiniteQuery</code> manages
						page caching. Great for feeds and timelines. Caution: provide a "Back to top" button and consider memory limits
						for very long sessions.
					</p>

					<p className='mt-2 text-xs text-purple-600'>
						<strong>Best for:</strong> social feeds, timelines, search results
					</p>
				</div>
			</div>

			{/* ===== Real-Time Data ===== */}
			<SectionTitle level='h4'>Real-Time Data: WebSockets & SSE</SectionTitle>

			<div className='mb-4 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-teal-200 bg-teal-50 p-4'>
					<h5 className='mb-2 font-semibold text-teal-800'>WebSockets</h5>

					<p className='text-sm text-teal-700'>
						Full-duplex communication — both client and server can send messages at any time. Essential for chat, collaborative
						editing, live gaming, and trading dashboards. Requires explicit reconnection handling. Use heartbeat/ping-pong to
						detect broken connections.
					</p>

					<ul className='mt-3 space-y-1 text-sm text-teal-700'>
						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Bidirectional — client can send and receive
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Low latency after initial handshake
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Binary and text frame support
						</li>
					</ul>

					<p className='mt-2 text-xs text-teal-600'>
						<strong>Libraries:</strong> Socket.io, ws, native WebSocket API
					</p>
				</div>

				<div className='rounded-lg border border-orange-200 bg-orange-50 p-4'>
					<h5 className='mb-2 font-semibold text-orange-800'>Server-Sent Events (SSE)</h5>

					<p className='text-sm text-orange-700'>
						Server-to-client only over standard HTTP. Automatic reconnection built into the browser API. Works over HTTP/2 for
						multiplexed connections. Ideal for notifications, live feeds, deployment logs, and progress updates. Simpler than
						WebSockets when you do not need client-to-server messages.
					</p>

					<ul className='mt-3 space-y-1 text-sm text-orange-700'>
						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Automatic reconnection built-in
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Works over standard HTTP (no upgrade)
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Simple API — just EventSource
						</li>
					</ul>

					<p className='mt-2 text-xs text-orange-600'>
						<strong>API:</strong> EventSource (browser-native), polyfills for older browsers
					</p>
				</div>
			</div>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<h5 className='mb-2 font-semibold text-gray-800'>WebSocket Example</h5>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`const ws = new WebSocket('wss://api.example.com/ws');

ws.onopen = () => {
  ws.send(JSON.stringify({ type: 'subscribe', channel: 'prices' }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  updateUI(data);
};

ws.onclose = () => {
  // Reconnect with exponential backoff
  setTimeout(() => reconnect(), delay);
};`}
						</pre>
					</div>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<h5 className='mb-2 font-semibold text-gray-800'>SSE Example</h5>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`const source = new EventSource('/api/notifications');

source.onmessage = (event) => {
  const notification = JSON.parse(event.data);
  addNotification(notification);
};

source.onerror = () => {
  // Browser auto-reconnects
  console.log('Connection lost, reconnecting...');
};

// Clean up on unmount
return () => source.close();`}
						</pre>
					</div>
				</div>
			</div>

			{/* ===== Error Handling & Retry Strategies ===== */}
			<SectionTitle level='h4'>Error Handling & Retry Strategies</SectionTitle>

			<div className='mb-4 rounded-xl border border-gray-200 bg-gray-50 p-6'>
				<div className='space-y-3'>
					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>1</span>

						<p className='text-sm text-gray-700'>
							<strong>Show inline error messages near the failed action</strong> — not a generic page-level error. Users
							should understand what went wrong and where.
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>2</span>

						<p className='text-sm text-gray-700'>
							<strong>Offer a retry button</strong> for user-initiated recovery. Let the user decide when to try again rather
							than silently retrying indefinitely.
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>3</span>

						<p className='text-sm text-gray-700'>
							<strong>Implement automatic retries with exponential backoff</strong> for transient network errors. Each retry
							waits longer than the last to avoid overwhelming the server.
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>4</span>

						<p className='text-sm text-gray-700'>
							<strong>Use Error Boundaries</strong> for unexpected crashes that should not break the entire app. Error
							Boundaries catch rendering errors and display a fallback UI.
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>5</span>

						<p className='text-sm text-gray-700'>
							<strong>Distinguish retriable errors from non-retriable errors.</strong> 5xx status codes and network timeouts
							are transient — retry them. 4xx errors (bad request, unauthorized) indicate a client-side problem that retrying
							will not fix.
						</p>
					</div>
				</div>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Note:</strong> TanStack Query retries failed queries 3 times by default with exponential backoff.
					Configure <code className='inline-block translate-y-[-1px] rounded bg-amber-100 px-1 text-xs'>retry: false</code> for
					mutations
					and <code className='inline-block translate-y-[-1px] rounded bg-amber-100 px-1 text-xs'>retry: 3, retryDelay: (attempt) =&gt; Math.min(1000 * 2 ** attempt, 30000)</code> for
					queries to match your error recovery strategy.
				</p>
			</div>

			{/* ===== Key Takeaways ===== */}
			<div className='rounded-xl border border-blue-200 bg-blue-50 p-6'>
				<h4 className='mb-3 text-xl font-semibold text-blue-800'>Key Takeaways</h4>

				<ul className='space-y-2 text-blue-700'>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Treat server data as a cache with a lifecycle, not as static global state.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Use TanStack Query or SWR instead of managing loading/error/data state manually.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						GraphQL reduces over-fetching but adds client complexity; REST is simpler for CRUD APIs.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Optimistic updates make the UI feel instant — always implement rollback on error.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Cursor-based pagination is more robust than offset-based for large, changing datasets.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Use WebSockets for bidirectional communication; SSE for server-to-client streams.
					</li>
				</ul>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default DataFetching;
