/* ===== Imports ===== */
import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const DesignSystem = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h3'>Design Systems</SectionTitle>

			<p className='mb-6 text-gray-600'>
				A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number
				of applications. It is the single source of truth for UI: tokens define the visual language, components implement it, and
				documentation teaches it. A mature design system accelerates development, ensures consistency, and bridges the gap between
				design and engineering.
			</p>

			{/* ===== Design Tokens ===== */}
			<SectionTitle level='h4'>Design Tokens</SectionTitle>

			<div className='mb-4 rounded-md bg-slate-50 p-3'>
				<pre className='text-xs text-slate-700'>
					{`/* Primitive Tokens — raw values */
:root {
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-gray-50: #f9fafb;
  --color-gray-900: #111827;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-4: 1rem;
  --radius-md: 0.375rem;
  --font-size-sm: 0.875rem;
}

/* Semantic Tokens — purpose-mapped */
:root {
  --color-primary: var(--color-blue-500);
  --color-primary-hover: var(--color-blue-600);
  --color-bg-page: var(--color-gray-50);
  --color-text-primary: var(--color-gray-900);
  --spacing-component-padding: var(--spacing-4);
}`}
				</pre>
			</div>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<h5 className='mb-2 font-semibold text-blue-800'>Primitive Tokens</h5>

					<p className='text-sm text-blue-700'>
						The raw values of the system: specific colors, spacing scales, font sizes, border radius. They have no semantic
						meaning — <code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>blue-500</code> is just
						a color. These form the complete palette from which everything is drawn.
					</p>
				</div>

				<div className='rounded-lg border border-green-200 bg-green-50 p-4'>
					<h5 className='mb-2 font-semibold text-green-800'>Semantic Tokens</h5>

					<p className='text-sm text-green-700'>
						Map primitive tokens to a purpose:{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>color-primary</code>,{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>color-error</code>,{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>color-bg-surface</code>.
						Semantic tokens are what components actually reference. To change the theme, you remap semantic tokens to different
						primitives — the components don't change at all.
					</p>
				</div>
			</div>

			{/* ===== Theming Architecture ===== */}
			<SectionTitle level='h4'>Theming Architecture</SectionTitle>

			<div className='mb-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
				<div className='rounded-md bg-slate-50 p-3'>
					<pre className='text-xs text-slate-700'>
						{`// Theme switching with CSS custom properties
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <div data-theme={theme}>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

// CSS handles the rest
[data-theme="dark"] {
  --color-bg-page: var(--color-gray-900);
  --color-text-primary: var(--color-gray-50);
  --color-primary: var(--color-blue-400);
}`}
					</pre>
				</div>

				<p className='mt-4 text-sm text-gray-600'>
					The <code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>data-theme</code> attribute swaps
					the semantic token mapping. All components automatically adopt the new theme because they reference semantic variables.
					No JS runtime cost for theming — it's pure CSS.
				</p>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Performance note:</strong> CSS custom properties are the most performant approach to theming. CSS-in-JS
					solutions (styled-components, Emotion) recalculate styles in JavaScript at runtime, which can cause performance issues
					in large applications with frequent theme switches. Prefer CSS custom properties for production design systems.
				</p>
			</div>

			{/* ===== Component API Design ===== */}
			<SectionTitle level='h4'>Component API Design</SectionTitle>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-purple-200 bg-purple-50 p-4'>
					<h5 className='mb-2 font-semibold text-purple-800'>Variants & Sizes</h5>

					<p className='mb-3 text-sm text-purple-700'>
						Use a <code className='inline-block translate-y-[-1px] rounded bg-purple-100 px-1 text-xs'>variant</code> prop for
						visual variations (primary, secondary, ghost, destructive) and a{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-purple-100 px-1 text-xs'>size</code> prop for dimensions
						(sm, md, lg). This replaces boolean prop explosion ({' '}
						<code className='inline-block translate-y-[-1px] rounded bg-purple-100 px-1 text-xs'>isPrimary</code>,{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-purple-100 px-1 text-xs'>isSecondary</code>,{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-purple-100 px-1 text-xs'>isLarge</code>). Use TypeScript
						union types to enforce valid combinations.
					</p>

					<div className='rounded-md bg-purple-100/50 p-3'>
						<pre className='text-xs text-purple-900'>
							{`interface ButtonProps {
  size?: 'lg' | 'md' | 'sm';
  variant?: 'destructive' | 'ghost' | 'primary' | 'secondary';
}

// Usage
<Button size="lg" variant="primary">
  Save
</Button>`}
						</pre>
					</div>
				</div>

				<div className='rounded-lg border border-orange-200 bg-orange-50 p-4'>
					<h5 className='mb-2 font-semibold text-orange-800'>Slot Pattern</h5>

					<p className='mb-3 text-sm text-orange-700'>
						Accept <code className='inline-block translate-y-[-1px] rounded bg-orange-100 px-1 text-xs'>children</code> and
						named slots ( <code className='inline-block translate-y-[-1px] rounded bg-orange-100 px-1 text-xs'>startIcon</code>,{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-orange-100 px-1 text-xs'>endIcon</code>,{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-orange-100 px-1 text-xs'>prefix</code>,{' '}
						<code className='inline-block translate-y-[-1px] rounded bg-orange-100 px-1 text-xs'>suffix</code>) for flexible
						composition. This is more powerful than individual content props because consumers control the rendering.
					</p>

					<div className='rounded-md bg-orange-100/50 p-3'>
						<pre className='text-xs text-orange-900'>
							{`<Button
  startIcon={<SaveIcon />}
  variant="primary"
>
  Save Changes
</Button>

<Input
  endSlot={<SearchIcon />}
  placeholder="Search..."
  startSlot={<span>$</span>}
/>`}
						</pre>
					</div>
				</div>
			</div>

			{/* ===== Accessibility (a11y) ===== */}
			<SectionTitle level='h4'>Accessibility (a11y)</SectionTitle>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='space-y-3'>
					<h5 className='font-semibold text-red-700'>Anti-Patterns</h5>

					<div className='flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4'>
						<span className='mt-0.5 text-red-500'>&#10007;</span>

						<p className='text-sm text-gray-700'>
							Using <code className='inline-block translate-y-[-1px] rounded bg-red-100 px-1 text-xs'>{'<div onClick>'}</code>{' '}
							instead of <code className='inline-block translate-y-[-1px] rounded bg-red-100 px-1 text-xs'>{'<button>'}</code>{' '}
							— no keyboard support, no screen reader role.
						</p>
					</div>

					<div className='flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4'>
						<span className='mt-0.5 text-red-500'>&#10007;</span>

						<p className='text-sm text-gray-700'>
							Missing <code className='inline-block translate-y-[-1px] rounded bg-red-100 px-1 text-xs'>alt</code> text on
							images — invisible to screen readers.
						</p>
					</div>

					<div className='flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4'>
						<span className='mt-0.5 text-red-500'>&#10007;</span>

						<p className='text-sm text-gray-700'>Color as the only indicator (red text for errors without an icon or label).</p>
					</div>

					<div className='flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4'>
						<span className='mt-0.5 text-red-500'>&#10007;</span>

						<p className='text-sm text-gray-700'>Removing focus outlines without providing a visible alternative.</p>
					</div>

					<div className='flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4'>
						<span className='mt-0.5 text-red-500'>&#10007;</span>

						<p className='text-sm text-gray-700'>Auto-playing media without user consent or pause controls.</p>
					</div>
				</div>

				<div className='space-y-3'>
					<h5 className='font-semibold text-green-700'>Good Practices</h5>

					<div className='flex items-start gap-3 rounded-lg border border-green-100 bg-green-50/50 p-4'>
						<span className='mt-0.5 text-green-500'>&#10003;</span>

						<p className='text-sm text-gray-700'>
							Use semantic HTML elements ({' '}
							<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>{'<button>'}</code>,{' '}
							<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>{'<nav>'}</code>,{' '}
							<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>{'<main>'}</code>,{' '}
							<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>{'<form>'}</code>) — they
							provide roles for free.
						</p>
					</div>

					<div className='flex items-start gap-3 rounded-lg border border-green-100 bg-green-50/50 p-4'>
						<span className='mt-0.5 text-green-500'>&#10003;</span>

						<p className='text-sm text-gray-700'>
							Add ARIA attributes only when native elements aren't sufficient ({' '}
							<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>aria-label</code>,{' '}
							<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>aria-expanded</code>,{' '}
							<code className='inline-block translate-y-[-1px] rounded bg-green-100 px-1 text-xs'>role</code>).
						</p>
					</div>

					<div className='flex items-start gap-3 rounded-lg border border-green-100 bg-green-50/50 p-4'>
						<span className='mt-0.5 text-green-500'>&#10003;</span>

						<p className='text-sm text-gray-700'>
							Ensure all interactions work with keyboard (Tab, Enter, Escape, arrow keys).
						</p>
					</div>

					<div className='flex items-start gap-3 rounded-lg border border-green-100 bg-green-50/50 p-4'>
						<span className='mt-0.5 text-green-500'>&#10003;</span>

						<p className='text-sm text-gray-700'>Maintain WCAG AA color contrast: 4.5:1 for normal text, 3:1 for large text.</p>
					</div>

					<div className='flex items-start gap-3 rounded-lg border border-green-100 bg-green-50/50 p-4'>
						<span className='mt-0.5 text-green-500'>&#10003;</span>

						<p className='text-sm text-gray-700'>
							Test with screen readers (VoiceOver, NVDA) — automated tools catch only ~30% of issues.
						</p>
					</div>
				</div>
			</div>

			{/* ===== Responsive Design Patterns ===== */}
			<SectionTitle level='h4'>Responsive Design Patterns</SectionTitle>

			<div className='mb-4 overflow-x-auto'>
				<table className='w-full text-left text-sm'>
					<thead>
						<tr className='border-b border-gray-200 bg-gray-50'>
							<th className='px-4 py-3 font-semibold text-gray-700'>Pattern</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Approach</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Best For</th>
						</tr>
					</thead>

					<tbody>
						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Mobile-first media queries</td>

							<td className='px-4 py-3 text-gray-600'>
								Start with smallest viewport, add complexity with{' '}
								<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>min-width</code>{' '}
								breakpoints
							</td>

							<td className='px-4 py-3 text-gray-600'>General responsive layout, progressive enhancement</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>Container queries</td>

							<td className='px-4 py-3 text-gray-600'>Components respond to their container's size, not the viewport</td>

							<td className='px-4 py-3 text-gray-600'>Reusable components that appear in different-width contexts</td>
						</tr>

						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Fluid typography (clamp())</td>

							<td className='px-4 py-3 text-gray-600'>Font size scales smoothly between a minimum and maximum</td>

							<td className='px-4 py-3 text-gray-600'>Headings and body text that adapt without breakpoint jumps</td>
						</tr>

						<tr>
							<td className='px-4 py-3 font-medium text-gray-800'>Responsive grids (auto-fit/auto-fill)</td>

							<td className='px-4 py-3 text-gray-600'>
								CSS Grid automatically adjusts column count based on available space
							</td>

							<td className='px-4 py-3 text-gray-600'>Card grids, galleries, product listings</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='mb-6 rounded-md bg-slate-50 p-3'>
				<pre className='text-xs text-slate-700'>
					{`/* Fluid typography — no breakpoints needed */
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }

/* Responsive grid — columns adjust automatically */
.card-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}`}
				</pre>
			</div>

			{/* ===== CSS Architecture ===== */}
			<SectionTitle level='h4'>CSS Architecture</SectionTitle>

			<div className='mb-4 overflow-x-auto'>
				<table className='w-full text-left text-sm'>
					<thead>
						<tr className='border-b border-gray-200 bg-gray-50'>
							<th className='px-4 py-3 font-semibold text-gray-700'>Approach</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Philosophy</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Scoping</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Runtime Cost</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Examples</th>
						</tr>
					</thead>

					<tbody>
						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Utility-first</td>

							<td className='px-4 py-3 text-gray-600'>Compose styles from utility classes in markup</td>

							<td className='px-4 py-3 text-gray-600'>Global utilities, unique per combination</td>

							<td className='px-4 py-3 text-gray-600'>Zero (build-time purge)</td>
							<td className='px-4 py-3 text-gray-500'>Tailwind CSS, UnoCSS</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>CSS Modules</td>

							<td className='px-4 py-3 text-gray-600'>Locally scoped class names via build-time hashing</td>

							<td className='px-4 py-3 text-gray-600'>
								File-scoped (
								<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>.module.css</code>)
							</td>

							<td className='px-4 py-3 text-gray-600'>Zero (build-time)</td>
							<td className='px-4 py-3 text-gray-500'>Built into Vite, Next.js, CRA</td>
						</tr>

						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>CSS-in-JS</td>

							<td className='px-4 py-3 text-gray-600'>Styles colocated with components in JavaScript</td>

							<td className='px-4 py-3 text-gray-600'>Component-scoped at runtime</td>

							<td className='px-4 py-3 text-gray-600'>Runtime cost (style injection)</td>
							<td className='px-4 py-3 text-gray-500'>styled-components, Emotion</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>Vanilla Extract</td>

							<td className='px-4 py-3 text-gray-600'>
								Type-safe CSS written in{' '}
								<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>.css.ts</code> files,
								compiled to static CSS
							</td>

							<td className='px-4 py-3 text-gray-600'>File-scoped, type-safe</td>
							<td className='px-4 py-3 text-gray-600'>Zero (build-time)</td>
							<td className='px-4 py-3 text-gray-500'>Vanilla Extract, Sprinkles</td>
						</tr>

						<tr>
							<td className='px-4 py-3 font-medium text-gray-800'>BEM</td>

							<td className='px-4 py-3 text-gray-600'>
								Naming convention for plain CSS ({' '}
								<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>
									block__element--modifier
								</code>
								)
							</td>

							<td className='px-4 py-3 text-gray-600'>Convention-based (manual discipline)</td>

							<td className='px-4 py-3 text-gray-600'>Zero</td>
							<td className='px-4 py-3 text-gray-500'>Any plain CSS project</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Choosing a CSS approach:</strong> There is no universally best CSS approach. Tailwind excels for rapid iteration
					and small teams. CSS Modules provide clean scoping in component-based architectures. CSS-in-JS offers dynamic styling
					but at a runtime cost. Choose based on your team's workflow, performance requirements, and personal preference.
				</p>
			</div>

			{/* ===== Key Takeaways ===== */}
			<div className='rounded-xl border border-blue-200 bg-blue-50 p-6'>
				<h4 className='mb-3 text-xl font-semibold text-blue-800'>Key Takeaways</h4>

				<ul className='space-y-2 text-blue-700'>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Design tokens are the foundation — define colors, spacing, and typography as a structured vocabulary.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Theming should swap semantic token mappings, not rewrite components — use CSS custom properties.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Design component APIs with variants and slots, not boolean prop explosions.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Accessibility must be built in from day one; retrofitting is far more expensive.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Responsive design starts mobile-first; container queries enable truly component-level responsiveness.
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>•</span>
						Choose a CSS architecture that matches your team's workflow and performance requirements.
					</li>
				</ul>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default DesignSystem;
