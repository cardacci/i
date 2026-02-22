/* ===== Imports ===== */
import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const ComponentArchitecture = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h3'>Component Architecture</SectionTitle>

			<p className='mb-6 text-gray-600'>
				Component architecture is the foundation of every frontend application. It determines how UI is decomposed into reusable,
				maintainable pieces and how those pieces communicate. A well-designed component architecture makes the difference between a
				codebase that scales gracefully and one that becomes a tangled mess.
			</p>

			{/* ===== Thinking in Components ===== */}
			<SectionTitle level='h4'>Thinking in Components</SectionTitle>

			<p className='mb-4 text-gray-600'>
				The first skill in frontend system design is learning to see a UI as a tree of components. Every screen can be broken down
				into a hierarchy where each node has a single responsibility. The goal is to find the right level of granularity: too coarse
				and components become monolithic; too fine and you drown in abstraction.
			</p>

			<div className='mb-6 rounded-xl border border-gray-200 bg-gray-50 p-6'>
				<h4 className='mb-3 text-lg font-semibold text-gray-800'>Component Decomposition Process</h4>

				<ol className='list-decimal space-y-2 pl-5 text-gray-700'>
					<li>
						<strong>Identify visual boundaries</strong> — draw boxes around distinct UI regions in the mockup.
					</li>
					<li>
						<strong>Name each box</strong> — if you can't name it clearly, it's probably not a single responsibility.
					</li>
					<li>
						<strong>Establish the hierarchy</strong> — determine parent-child relationships based on containment.
					</li>
					<li>
						<strong>Define data flow</strong> — identify what data each component needs and where it comes from.
					</li>
					<li>
						<strong>Extract shared patterns</strong> — spot repetition and abstract into reusable components.
					</li>
				</ol>
			</div>

			{/* ===== Classification by Responsibility ===== */}
			<SectionTitle level='h4'>Classification by Responsibility</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Components can be classified by what they do. This separation helps enforce the Single Responsibility Principle and makes
				testing significantly easier.
			</p>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<h5 className='mb-2 font-semibold text-blue-800'>Presentational Components</h5>

					<p className='mb-2 text-sm text-blue-700'>
						Concerned only with <em>how things look</em>. They receive data and callbacks via props and render UI. They have no
						side effects, no state management, and no data fetching.
					</p>

					<div className='mt-3 rounded-md bg-blue-100/60 p-3'>
						<code className='text-xs text-blue-900'>{'({ title, onClose }) => <div>...'}</code>
					</div>

					<p className='mt-2 text-xs text-blue-600'>Examples: Button, Card, Avatar, Badge, Modal shell</p>
				</div>

				<div className='rounded-lg border border-green-200 bg-green-50 p-4'>
					<h5 className='mb-2 font-semibold text-green-800'>Container Components</h5>

					<p className='mb-2 text-sm text-green-700'>
						Concerned with <em>how things work</em>. They manage state, fetch data, handle side effects, and wire presentational
						components together. They contain the business logic.
					</p>

					<div className='mt-3 rounded-md bg-green-100/60 p-3'>
						<code className='text-xs text-green-900'>
							{'() => { const data = useFetch(...); return <List items={data} /> }'}
						</code>
					</div>

					<p className='mt-2 text-xs text-green-600'>Examples: UserListPage, DashboardContainer, CheckoutFlow</p>
				</div>

				<div className='rounded-lg border border-purple-200 bg-purple-50 p-4'>
					<h5 className='mb-2 font-semibold text-purple-800'>Layout Components</h5>

					<p className='mb-2 text-sm text-purple-700'>
						Define the spatial arrangement of other components. They handle positioning, spacing, and responsive behavior
						without knowing what content they contain.
					</p>

					<div className='mt-3 rounded-md bg-purple-100/60 p-3'>
						<code className='text-xs text-purple-900'>{'({ sidebar, content }) => <div className="grid">...'}</code>
					</div>

					<p className='mt-2 text-xs text-purple-600'>Examples: PageLayout, SplitPane, Stack, Grid, Sidebar</p>
				</div>

				<div className='rounded-lg border border-orange-200 bg-orange-50 p-4'>
					<h5 className='mb-2 font-semibold text-orange-800'>Higher-Order / Utility Components</h5>

					<p className='mb-2 text-sm text-orange-700'>
						Enhance other components with cross-cutting concerns. They add behavior (auth guards, error boundaries, logging)
						without modifying the original component.
					</p>

					<div className='mt-3 rounded-md bg-orange-100/60 p-3'>
						<code className='text-xs text-orange-900'>
							{'<ErrorBoundary><ProtectedRoute><App /></ProtectedRoute></ErrorBoundary>'}
						</code>
					</div>

					<p className='mt-2 text-xs text-orange-600'>Examples: ErrorBoundary, AuthGuard, Suspense, ThemeProvider</p>
				</div>
			</div>

			{/* ===== Composition Patterns ===== */}
			<SectionTitle level='h4'>Composition Patterns</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Composition is how components are combined to build complex UIs. React's model strongly favors composition over inheritance.
				The key patterns below solve increasingly complex scenarios.
			</p>

			<div className='mb-6 space-y-4'>
				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-2 flex items-center gap-2'>
						<span className='rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>Basic</span>
						<h5 className='font-semibold text-gray-800'>Children Composition</h5>
					</div>

					<p className='mb-3 text-sm text-gray-600'>
						The simplest and most powerful pattern. A component accepts{' '}
						<code className='rounded bg-gray-100 px-1 text-xs'>children</code> and renders them without knowing what they are.
						This is the foundation of all other composition patterns.
					</p>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
							{`<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Any content here</Card.Body>
</Card>`}
						</pre>
					</div>

					<p className='mt-2 text-xs text-gray-500'>
						<strong>When to use:</strong> Wrappers, layouts, containers — whenever a component doesn't need to inspect its
						content.
					</p>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-2 flex items-center gap-2'>
						<span className='rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800'>Intermediate</span>
						<h5 className='font-semibold text-gray-800'>Render Props / Function as Child</h5>
					</div>

					<p className='mb-3 text-sm text-gray-600'>
						A component exposes internal state or logic to its children via a function. The parent provides data, the consumer
						decides how to render it. This inverts control over rendering.
					</p>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
							{`<MouseTracker>
  {({ x, y }) => (
    <Tooltip position={{ x, y }}>
      Cursor is at ({x}, {y})
    </Tooltip>
  )}
</MouseTracker>`}
						</pre>
					</div>

					<p className='mt-2 text-xs text-gray-500'>
						<strong>When to use:</strong> Sharing behavior between components that render differently (mouse tracking, resize
						observers, data fetching). Largely replaced by custom hooks in modern React.
					</p>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
					<div className='mb-2 flex items-center gap-2'>
						<span className='rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800'>Advanced</span>
						<h5 className='font-semibold text-gray-800'>Compound Components</h5>
					</div>

					<p className='mb-3 text-sm text-gray-600'>
						A set of components that work together sharing implicit state. The parent manages state and provides it via Context;
						children consume it without prop drilling. This creates expressive, flexible APIs.
					</p>

					<div className='rounded-md bg-slate-50 p-3'>
						<pre className='text-xs text-slate-700'>
							{`<Select onChange={handleChange}>
  <Select.Trigger>Choose a fruit</Select.Trigger>
  <Select.Options>
    <Select.Option value="apple">Apple</Select.Option>
    <Select.Option value="banana">Banana</Select.Option>
  </Select.Options>
</Select>`}
						</pre>
					</div>

					<p className='mt-2 text-xs text-gray-500'>
						<strong>When to use:</strong> Complex UI widgets with multiple interacting parts: selects, tabs, accordions, menus,
						disclosure panels. Libraries like Radix UI and Headless UI are built on this pattern.
					</p>
				</div>
			</div>

			{/* ===== Atomic Design ===== */}
			<SectionTitle level='h4'>Atomic Design Methodology</SectionTitle>

			<p className='mb-4 text-gray-600'>
				Atomic Design, proposed by Brad Frost, provides a mental model for organizing a component library into five hierarchical
				levels. It maps naturally to how design systems are built and consumed.
			</p>

			<div className='mb-6 overflow-x-auto'>
				<div className='flex min-w-[700px] gap-2'>
					<div className='flex-1 rounded-lg border-2 border-blue-300 bg-blue-50 p-3 text-center'>
						<div className='mb-1 text-2xl'>⚛️</div>
						<h5 className='text-sm font-bold text-blue-800'>Atoms</h5>
						<p className='mt-1 text-xs text-blue-600'>Button, Input, Label, Icon, Badge</p>
						<p className='mt-1 text-xs text-blue-500'>Smallest indivisible UI elements</p>
					</div>

					<div className='flex items-center text-gray-300'>→</div>

					<div className='flex-1 rounded-lg border-2 border-teal-300 bg-teal-50 p-3 text-center'>
						<div className='mb-1 text-2xl'>🧬</div>
						<h5 className='text-sm font-bold text-teal-800'>Molecules</h5>
						<p className='mt-1 text-xs text-teal-600'>SearchBar, FormField, NavItem, Card</p>
						<p className='mt-1 text-xs text-teal-500'>Groups of atoms functioning as a unit</p>
					</div>

					<div className='flex items-center text-gray-300'>→</div>

					<div className='flex-1 rounded-lg border-2 border-green-300 bg-green-50 p-3 text-center'>
						<div className='mb-1 text-2xl'>🦠</div>
						<h5 className='text-sm font-bold text-green-800'>Organisms</h5>
						<p className='mt-1 text-xs text-green-600'>Header, Sidebar, ProductCard, Form</p>
						<p className='mt-1 text-xs text-green-500'>Complex sections of the interface</p>
					</div>

					<div className='flex items-center text-gray-300'>→</div>

					<div className='flex-1 rounded-lg border-2 border-orange-300 bg-orange-50 p-3 text-center'>
						<div className='mb-1 text-2xl'>📄</div>
						<h5 className='text-sm font-bold text-orange-800'>Templates</h5>
						<p className='mt-1 text-xs text-orange-600'>PageLayout, DashboardLayout</p>
						<p className='mt-1 text-xs text-orange-500'>Page structure with placeholder content</p>
					</div>

					<div className='flex items-center text-gray-300'>→</div>

					<div className='flex-1 rounded-lg border-2 border-red-300 bg-red-50 p-3 text-center'>
						<div className='mb-1 text-2xl'>📱</div>
						<h5 className='text-sm font-bold text-red-800'>Pages</h5>
						<p className='mt-1 text-xs text-red-600'>HomePage, CheckoutPage</p>
						<p className='mt-1 text-xs text-red-500'>Templates filled with real data</p>
					</div>
				</div>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Practical note:</strong> Pure Atomic Design can be overly rigid. Most teams adopt a pragmatic variant — for
					example, grouping components into <code className='rounded bg-amber-100 px-1 text-xs'>primitives</code>,{' '}
					<code className='rounded bg-amber-100 px-1 text-xs'>composites</code>, and{' '}
					<code className='rounded bg-amber-100 px-1 text-xs'>features</code> — keeping the spirit of the hierarchy without
					debating whether something is a molecule or an organism.
				</p>
			</div>

			{/* ===== Props API Design ===== */}
			<SectionTitle level='h4'>Designing Component APIs (Props)</SectionTitle>

			<p className='mb-4 text-gray-600'>
				A component's props are its public API. The quality of this API determines how pleasant the component is to use and how
				resilient it is to change. Here are the core principles:
			</p>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'>
					<h5 className='mb-2 font-semibold text-gray-800'>Minimal Surface Area</h5>

					<p className='text-sm text-gray-600'>
						Expose the fewest props necessary. Every additional prop is a maintenance burden and a potential breaking change.
						Start narrow and expand based on real use cases.
					</p>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'>
					<h5 className='mb-2 font-semibold text-gray-800'>Sensible Defaults</h5>

					<p className='text-sm text-gray-600'>
						Most props should have defaults so the component works out of the box. The simplest call should produce a reasonable
						result: <code className='rounded bg-gray-100 px-1 text-xs'>{'<Button>Click</Button>'}</code> should just work.
					</p>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'>
					<h5 className='mb-2 font-semibold text-gray-800'>Consistent Naming</h5>

					<p className='text-sm text-gray-600'>
						Follow conventions: <code className='rounded bg-gray-100 px-1 text-xs'>on[Event]</code> for callbacks,{' '}
						<code className='rounded bg-gray-100 px-1 text-xs'>is/has</code> for booleans,{' '}
						<code className='rounded bg-gray-100 px-1 text-xs'>variant/size</code> for visual variations. Predictable names
						reduce cognitive load.
					</p>
				</div>

				<div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'>
					<h5 className='mb-2 font-semibold text-gray-800'>Composition over Configuration</h5>

					<p className='text-sm text-gray-600'>
						Prefer accepting <code className='rounded bg-gray-100 px-1 text-xs'>children</code> or render functions over adding
						dozens of boolean flags. A <code className='rounded bg-gray-100 px-1 text-xs'>{'<Card>'}</code> that accepts
						children is more flexible than one with <code className='rounded bg-gray-100 px-1 text-xs'>title</code>,{' '}
						<code className='rounded bg-gray-100 px-1 text-xs'>subtitle</code>,{' '}
						<code className='rounded bg-gray-100 px-1 text-xs'>footer</code> props.
					</p>
				</div>
			</div>

			{/* ===== Common Anti-patterns ===== */}
			<SectionTitle level='h4'>Common Anti-patterns</SectionTitle>

			<div className='mb-6 space-y-3'>
				<div className='flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4'>
					<span className='mt-0.5 text-red-500'>✗</span>

					<div>
						<h5 className='font-semibold text-red-800'>Prop Drilling</h5>

						<p className='text-sm text-red-700'>
							Passing props through 5+ levels of components that don't use them. Solve with Context, composition (lifting
							content up), or state management.
						</p>
					</div>
				</div>

				<div className='flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4'>
					<span className='mt-0.5 text-red-500'>✗</span>

					<div>
						<h5 className='font-semibold text-red-800'>God Components</h5>

						<p className='text-sm text-red-700'>
							A single component file with 500+ lines that handles rendering, state, data fetching, and business logic. If you
							can't describe what a component does in one sentence, it's doing too much.
						</p>
					</div>
				</div>

				<div className='flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4'>
					<span className='mt-0.5 text-red-500'>✗</span>

					<div>
						<h5 className='font-semibold text-red-800'>Premature Abstraction</h5>

						<p className='text-sm text-red-700'>
							Creating a reusable component after seeing it once. Wait until you see the same pattern three times (Rule of
							Three). The third usage reveals the true abstraction.
						</p>
					</div>
				</div>

				<div className='flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4'>
					<span className='mt-0.5 text-red-500'>✗</span>

					<div>
						<h5 className='font-semibold text-red-800'>Boolean Prop Explosion</h5>

						<p className='text-sm text-red-700'>
							Components with flags like <code className='rounded bg-red-100 px-1 text-xs'>isPrimary</code>,{' '}
							<code className='rounded bg-red-100 px-1 text-xs'>isSecondary</code>,{' '}
							<code className='rounded bg-red-100 px-1 text-xs'>isOutlined</code>. Use a single{' '}
							<code className='rounded bg-red-100 px-1 text-xs'>variant</code> union type instead.
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
						Decompose UI into a tree of single-responsibility components — name them clearly.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Separate presentation from logic — presentational components are easier to test, reuse, and design.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Favor composition (<code className='rounded bg-blue-100 px-1'>children</code>, compound components) over
						configuration (prop flags).
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Design props as a minimal, consistent API — good defaults, predictable naming, smallest surface area.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Avoid premature abstraction — wait for the third use case before extracting a shared component.
					</li>
				</ul>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default ComponentArchitecture;
