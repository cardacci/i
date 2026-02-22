/* ===== Imports ===== */
import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const StateManagement = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h3'>State Management</SectionTitle>

			<p className='mb-6 text-gray-600'>
				State is the data that drives your UI. Every interactive element — a toggle, a form input, a list that filters — depends
				on state. The challenge isn't managing state itself; it's deciding <em>where</em> state lives, <em>who</em> owns it, and{' '}
				<em>how</em> it flows through the component tree.
			</p>

			{/* ===== Types of State ===== */}
			<SectionTitle level='h4'>Types of State</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Not all state is the same. Classifying state by its nature helps you pick the right tool for managing it.
			</p>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<h5 className='mb-2 font-semibold text-blue-800'>UI State</h5>

					<p className='text-sm text-blue-700'>
						Controls what the user sees: modals open/closed, active tab, sidebar collapsed, tooltip visible. Ephemeral and
						local — usually lives in the component that owns it.
					</p>

					<p className='mt-2 text-xs text-blue-600'>
						<strong>Tool:</strong> useState, useReducer
					</p>
				</div>

				<div className='rounded-lg border border-green-200 bg-green-50 p-4'>
					<h5 className='mb-2 font-semibold text-green-800'>Server State</h5>

					<p className='text-sm text-green-700'>
						Data that originates from a backend: user profiles, product lists, API responses. It's asynchronous, has a
						lifecycle (loading, success, error), and can become stale.
					</p>

					<p className='mt-2 text-xs text-green-600'>
						<strong>Tool:</strong> React Query (TanStack Query), SWR, RTK Query
					</p>
				</div>

				<div className='rounded-lg border border-purple-200 bg-purple-50 p-4'>
					<h5 className='mb-2 font-semibold text-purple-800'>Global App State</h5>

					<p className='text-sm text-purple-700'>
						Shared across many components: current user, theme preference, locale, permissions. Needs to be accessible from
						anywhere in the tree without prop drilling.
					</p>

					<p className='mt-2 text-xs text-purple-600'>
						<strong>Tool:</strong> Context API, Redux, Zustand, Jotai
					</p>
				</div>

				<div className='rounded-lg border border-orange-200 bg-orange-50 p-4'>
					<h5 className='mb-2 font-semibold text-orange-800'>Form State</h5>

					<p className='text-sm text-orange-700'>
						Input values, validation errors, dirty/touched flags, submission status. Complex because it involves synchronous
						validation, async validation, and dynamic field arrays.
					</p>

					<p className='mt-2 text-xs text-orange-600'>
						<strong>Tool:</strong> React Hook Form, Formik, native controlled inputs
					</p>
				</div>

				<div className='rounded-lg border border-teal-200 bg-teal-50 p-4'>
					<h5 className='mb-2 font-semibold text-teal-800'>URL State</h5>

					<p className='text-sm text-teal-700'>
						The current route, query parameters, and hash fragments. Often overlooked as state, but it determines what page is
						shown, what filters are applied, and enables deep linking.
					</p>

					<p className='mt-2 text-xs text-teal-600'>
						<strong>Tool:</strong> React Router, useSearchParams, nuqs
					</p>
				</div>

				<div className='rounded-lg border border-rose-200 bg-rose-50 p-4'>
					<h5 className='mb-2 font-semibold text-rose-800'>Persistent State</h5>

					<p className='text-sm text-rose-700'>
						Survives page refreshes: user preferences, draft content, onboarding progress. Stored in localStorage,
						sessionStorage, IndexedDB, or cookies.
					</p>

					<p className='mt-2 text-xs text-rose-600'>
						<strong>Tool:</strong> localStorage + custom hook, zustand/persist, useSyncExternalStore
					</p>
				</div>
			</div>

			{/* ===== Local State: useState & useReducer ===== */}
			<SectionTitle level='h4'>Local State: useState & useReducer</SectionTitle>

			<p className='mb-4 text-gray-600'>
				The default and most common form of state. Before reaching for any library, ask: "can this state live in the component
				that uses it?" If yes, use local state.
			</p>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<h5 className='mb-2 font-semibold text-gray-800'>useState</h5>

					<p className='mb-3 text-sm text-gray-600'>
						Best for simple, independent values. Each call manages a single piece of state with a direct setter.
					</p>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`const [count, setCount] = useState(0);
const [isOpen, setIsOpen] = useState(false);
const [query, setQuery] = useState('');`}
						</pre>
					</div>

					<p className='mt-3 text-xs text-gray-500'>
						<strong>Best for:</strong> toggles, counters, form inputs, simple UI state.
					</p>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<h5 className='mb-2 font-semibold text-gray-800'>useReducer</h5>

					<p className='mb-3 text-sm text-gray-600'>
						Best when state transitions are complex or multiple values change together. Centralizes logic in a reducer function.
					</p>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`const [state, dispatch] = useReducer(
  reducer, initialState
);

dispatch({ type: 'ADD_ITEM', payload: item });
dispatch({ type: 'RESET' });`}
						</pre>
					</div>

					<p className='mt-3 text-xs text-gray-500'>
						<strong>Best for:</strong> forms with validation, multi-step wizards, state machines, undo/redo.
					</p>
				</div>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Rule of thumb:</strong> if you find yourself calling multiple <code className='inline-block translate-y-[-1px] rounded bg-amber-100 px-1 text-xs'>setState</code> functions
					together in the same handler, consider useReducer. It makes the state transition explicit and testable as a pure
					function.
				</p>
			</div>

			{/* ===== Lifting State & Context ===== */}
			<SectionTitle level='h4'>Sharing State: Lifting Up & Context</SectionTitle>

			<p className='mb-4 text-gray-600'>
				When two sibling components need the same state, it must live in their closest common ancestor. This is "lifting state
				up." When the distance between the state owner and the consumer grows, Context avoids prop drilling.
			</p>

			<div className='mb-6 space-y-4'>
				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-3 flex items-center gap-2'>
						<span className='rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>Pattern</span>
						<h5 className='font-semibold text-gray-800'>Lifting State Up</h5>
					</div>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`// Parent owns the state
const Parent = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <List items={items} onSelect={setSelected} />
      <Detail item={selected} />
    </>
  );
};`}
						</pre>
					</div>

					<p className='mt-3 text-xs text-gray-500'>
						<strong>Limitation:</strong> works well for 1-2 levels. Beyond that, you're prop drilling.
					</p>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-3 flex items-center gap-2'>
						<span className='rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800'>Pattern</span>
						<h5 className='font-semibold text-gray-800'>Context API</h5>
					</div>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`// Create a context
const ThemeContext = createContext('light');

// Provide it high in the tree
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>

// Consume it anywhere below
const theme = useContext(ThemeContext);`}
						</pre>
					</div>

					<div className='mt-3 rounded-md border border-red-100 bg-red-50/50 p-3'>
						<p className='text-xs text-red-700'>
							<strong>Performance caveat:</strong> every component consuming a Context re-renders when the context value
							changes. For frequently-changing state (mouse position, animations), this can cause performance issues.
							Mitigate by splitting contexts by update frequency or using{' '}
							<code className='inline-block translate-y-[-1px] rounded bg-red-100 px-1 text-xs'>useMemo</code> on the provider value.
						</p>
					</div>
				</div>
			</div>

			{/* ===== Global State Libraries ===== */}
			<SectionTitle level='h4'>Global State Libraries</SectionTitle>

			<p className='mb-4 text-gray-600'>
				When Context isn't enough — because of performance, devtools, middleware, or complexity — dedicated state management
				libraries fill the gap. The ecosystem has evolved from one dominant solution to a diverse set of tools, each with
				different philosophies.
			</p>

			<div className='mb-6 overflow-x-auto'>
				<table className='w-full text-left text-sm'>
					<thead>
						<tr className='border-b border-gray-200 bg-gray-50'>
							<th className='px-4 py-3 font-semibold text-gray-700'>Library</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Philosophy</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Best For</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Bundle Size</th>
						</tr>
					</thead>

					<tbody>
						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Redux Toolkit</td>
							<td className='px-4 py-3 text-gray-600'>Single store, reducers, actions, middleware</td>
							<td className='px-4 py-3 text-gray-600'>Large apps with complex state logic, time-travel debugging</td>
							<td className='px-4 py-3 text-gray-500'>~11 kB</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>Zustand</td>
							<td className='px-4 py-3 text-gray-600'>Minimal API, hooks-based, no boilerplate</td>
							<td className='px-4 py-3 text-gray-600'>Small-medium apps wanting simplicity with power</td>
							<td className='px-4 py-3 text-gray-500'>~1.5 kB</td>
						</tr>

						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Jotai</td>
							<td className='px-4 py-3 text-gray-600'>Atomic model — bottom-up, primitive atoms compose</td>
							<td className='px-4 py-3 text-gray-600'>Fine-grained reactivity, derived state, avoiding re-renders</td>
							<td className='px-4 py-3 text-gray-500'>~3.5 kB</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>Valtio</td>
							<td className='px-4 py-3 text-gray-600'>Proxy-based, mutable API with immutable snapshots</td>
							<td className='px-4 py-3 text-gray-600'>Developers who prefer mutable syntax, rapid prototyping</td>
							<td className='px-4 py-3 text-gray-500'>~3 kB</td>
						</tr>

						<tr>
							<td className='px-4 py-3 font-medium text-gray-800'>XState</td>
							<td className='px-4 py-3 text-gray-600'>Finite state machines and statecharts</td>
							<td className='px-4 py-3 text-gray-600'>Complex workflows: auth flows, multi-step forms, media players</td>
							<td className='px-4 py-3 text-gray-500'>~15 kB</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* ===== Server State ===== */}
			<SectionTitle level='h4'>Server State: A Different Category</SectionTitle>

			<p className='mb-4 text-gray-600'>
				The single biggest paradigm shift in modern React state management is recognizing that server data is not the same as
				client state. Mixing the two in Redux or Context creates unnecessary complexity. Dedicated tools handle the unique
				challenges of server state: caching, background refetching, stale data, pagination, and optimistic updates.
			</p>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<h5 className='mb-2 font-semibold text-gray-800'>TanStack Query (React Query)</h5>

					<div className='mb-3 rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`const { data, isLoading, error } = useQuery({
  queryKey: ['users', filters],
  queryFn: () => fetchUsers(filters),
  staleTime: 5 * 60 * 1000, // 5 min
});`}
						</pre>
					</div>

					<ul className='space-y-1 text-sm text-gray-600'>
						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Automatic caching and deduplication
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Background refetching on window focus
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Built-in optimistic updates
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Pagination and infinite scroll helpers
						</li>
					</ul>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<h5 className='mb-2 font-semibold text-gray-800'>SWR (Stale-While-Revalidate)</h5>

					<div className='mb-3 rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
{`const { data, error, isLoading } = useSWR(
  '/api/users',
  fetcher
);`}
						</pre>
					</div>

					<ul className='space-y-1 text-sm text-gray-600'>
						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Minimal API — one hook for most cases
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Built by Vercel, great Next.js integration
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Lightweight at ~4 kB
						</li>

						<li className='flex items-start'>
							<span className='mr-2 text-green-500'>✓</span>
							Revalidation on focus, reconnect, interval
						</li>
					</ul>
				</div>
			</div>

			{/* ===== State Machines ===== */}
			<SectionTitle level='h4'>State Machines for Complex Flows</SectionTitle>

			<p className='mb-4 text-gray-600'>
				When a component has well-defined states and transitions — and impossible states should be impossible — finite state
				machines (FSMs) are the right model. They make state transitions explicit and prevent bugs like "loading and error at the
				same time."
			</p>

			<div className='mb-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
				<h5 className='mb-3 font-semibold text-gray-800'>Example: Authentication Flow as a State Machine</h5>

				<div className='overflow-x-auto'>
					<div className='flex min-w-[600px] items-center justify-between gap-2'>
						<div className='rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-gray-700'>Logged Out</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-gray-500'>LOGIN</span>
							<span className='text-gray-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-yellow-300 bg-yellow-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-yellow-700'>Authenticating</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-green-500'>SUCCESS</span>
							<span className='text-green-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-green-300 bg-green-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-green-700'>Logged In</p>
						</div>

						<div className='flex flex-col items-center'>
							<span className='text-xs text-gray-500'>LOGOUT</span>
							<span className='text-gray-400'>→</span>
						</div>

						<div className='rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-center'>
							<p className='text-sm font-bold text-gray-700'>Logged Out</p>
						</div>
					</div>

					<div className='mt-2 flex min-w-[600px] justify-center'>
						<div className='flex items-center gap-2'>
							<span className='text-xs text-gray-400'>↑ From Authenticating:</span>
							<span className='text-xs text-red-500'>ERROR → </span>
							<div className='rounded-lg border-2 border-red-300 bg-red-50 px-3 py-1.5 text-center'>
								<p className='text-xs font-bold text-red-700'>Auth Error</p>
							</div>
							<span className='text-xs text-gray-500'> → RETRY → Authenticating</span>
						</div>
					</div>
				</div>

				<p className='mt-4 text-xs text-gray-500'>
					With a state machine, you can't accidentally show a "Welcome" message while still in the "Authenticating" state. The
					current state dictates exactly which transitions are valid.
				</p>
			</div>

			{/* ===== Decision Framework ===== */}
			<SectionTitle level='h4'>Decision Framework: Where Should This State Live?</SectionTitle>

			<div className='mb-6 rounded-xl border border-gray-200 bg-gray-50 p-6'>
				<div className='space-y-3'>
					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>1</span>

						<p className='text-sm text-gray-700'>
							<strong>Does only one component use it?</strong> → <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>useState</code> in
							that component.
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>2</span>

						<p className='text-sm text-gray-700'>
							<strong>Do a few siblings share it?</strong> → Lift state to their common parent.
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>3</span>

						<p className='text-sm text-gray-700'>
							<strong>Do distant components share it, but it changes rarely?</strong> → Context API (theme, locale, auth).
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>4</span>

						<p className='text-sm text-gray-700'>
							<strong>Does it come from an API?</strong> → Server state tool (TanStack Query, SWR).
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>5</span>

						<p className='text-sm text-gray-700'>
							<strong>Is it complex, shared, and changes often?</strong> → Global store (Zustand, Redux Toolkit, Jotai).
						</p>
					</div>

					<div className='flex items-start gap-3'>
						<span className='rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800'>6</span>

						<p className='text-sm text-gray-700'>
							<strong>Does it have well-defined states and transitions?</strong> → State machine (XState, useReducer with
							discriminated unions).
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
						Classify state first (UI, server, global, form, URL, persistent) — the category dictates the tool.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Start local with useState. Only move state outward when multiple components genuinely need it.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Server state is not client state. Use TanStack Query or SWR instead of putting API data in Redux.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Context is great for infrequent updates (theme, auth). For frequent updates, prefer Zustand or Jotai.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						State machines prevent impossible states. Use them for complex flows like authentication, payments, or media
						players.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						The best state management is the least you can get away with. Complexity is a cost, not a feature.
					</li>
				</ul>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default StateManagement;
