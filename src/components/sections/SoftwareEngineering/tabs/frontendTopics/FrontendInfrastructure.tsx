/* ===== Imports ===== */
import { SectionTitle } from '@/components/common';

/* ===== Component Function ===== */
const FrontendInfrastructure = () => {
	/* ===== JSX Return ===== */
	return (
		<div>
			<SectionTitle level='h3'>Frontend Infrastructure</SectionTitle>

			<p className='mb-6 text-gray-600'>
				Frontend infrastructure is everything that supports the development, testing, building, and deployment of frontend
				applications. It is the invisible machinery that determines how fast your team ships, how confidently they deploy, and
				how quickly they detect and recover from issues in production. A mature frontend infrastructure scales the team, not
				just the application.
			</p>

			{/* ===== Build Systems & Bundlers ===== */}
			<SectionTitle level='h4'>Build Systems & Bundlers</SectionTitle>

			<div className='mb-4 overflow-x-auto'>
				<table className='w-full text-left text-sm'>
					<thead>
						<tr className='border-b border-gray-200 bg-gray-50'>
							<th className='px-4 py-3 font-semibold text-gray-700'>Tool</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Speed</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Configuration</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Best For</th>
						</tr>
					</thead>

					<tbody>
						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Vite</td>
							<td className='px-4 py-3 text-gray-600'>
								Very fast (native ES modules in dev, esbuild/Rollup in prod)
							</td>
							<td className='px-4 py-3 text-gray-600'>Minimal — sensible defaults</td>
							<td className='px-4 py-3 text-gray-600'>Applications (React, Vue, Svelte)</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>webpack</td>
							<td className='px-4 py-3 text-gray-600'>Slow (JS-based compilation)</td>
							<td className='px-4 py-3 text-gray-600'>Highly configurable — plugin ecosystem</td>
							<td className='px-4 py-3 text-gray-600'>Legacy apps, complex custom setups</td>
						</tr>

						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>esbuild</td>
							<td className='px-4 py-3 text-gray-600'>Extremely fast (written in Go)</td>
							<td className='px-4 py-3 text-gray-600'>Limited plugin API</td>
							<td className='px-4 py-3 text-gray-600'>Libraries, simple bundling tasks</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>Turbopack</td>
							<td className='px-4 py-3 text-gray-600'>Very fast (Rust-based, Vercel)</td>
							<td className='px-4 py-3 text-gray-600'>Integrated with Next.js</td>
							<td className='px-4 py-3 text-gray-600'>Next.js applications</td>
						</tr>

						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Rollup</td>
							<td className='px-4 py-3 text-gray-600'>Fast</td>
							<td className='px-4 py-3 text-gray-600'>Moderate — plugin-based</td>
							<td className='px-4 py-3 text-gray-600'>Library bundling, ES module output</td>
						</tr>

						<tr>
							<td className='px-4 py-3 font-medium text-gray-800'>Parcel</td>
							<td className='px-4 py-3 text-gray-600'>Fast</td>
							<td className='px-4 py-3 text-gray-600'>Zero-config</td>
							<td className='px-4 py-3 text-gray-600'>Prototypes, small projects, learning</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Note:</strong> The bundler ecosystem is converging on Rust/Go-based tools for speed. Vite dominates the
					application space with its instant dev server and broad framework support. For new projects, Vite is the default
					choice unless you have specific requirements that demand another tool.
				</p>
			</div>

			{/* ===== Monorepo Strategies ===== */}
			<SectionTitle level='h4'>Monorepo Strategies</SectionTitle>

			<div className='mb-6 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<h5 className='mb-2 font-semibold text-blue-800'>Tools</h5>

					<div className='space-y-3 text-sm text-blue-700'>
						<div>
							<p className='font-medium'>Nx</p>

							<p>
								Full-featured build system with computation caching, dependency graph visualization, and code
								generators. Supports remote caching for CI speedups. Opinionated but powerful.
							</p>
						</div>

						<div>
							<p className='font-medium'>Turborepo</p>

							<p>
								Lightweight task runner focused on speed. Remote caching via Vercel. Simpler than Nx, integrates
								with any package manager.
							</p>
						</div>

						<div>
							<p className='font-medium'>pnpm Workspaces</p>

							<p>
								Minimal approach — symlinked{' '}
								<code className='inline-block translate-y-[-1px] rounded bg-blue-100 px-1 text-xs'>
									node_modules
								</code>
								, workspace protocol for cross-package dependencies. No task orchestration (pair with Turborepo or
								Nx for that).
							</p>
						</div>
					</div>
				</div>

				<div className='rounded-lg border border-green-200 bg-green-50 p-4'>
					<h5 className='mb-2 font-semibold text-green-800'>Benefits & Challenges</h5>

					<div className='space-y-3 text-sm text-green-700'>
						<div>
							<p className='mb-1 font-medium'>Benefits</p>

							<ul className='space-y-1'>
								<li className='flex items-start'>
									<span className='mr-2 text-green-500'>+</span>
									Shared code without publishing to npm
								</li>

								<li className='flex items-start'>
									<span className='mr-2 text-green-500'>+</span>
									Atomic cross-package changes
								</li>

								<li className='flex items-start'>
									<span className='mr-2 text-green-500'>+</span>
									Unified linting/testing configuration
								</li>

								<li className='flex items-start'>
									<span className='mr-2 text-green-500'>+</span>
									Single PR for cross-cutting changes
								</li>
							</ul>
						</div>

						<div>
							<p className='mb-1 font-medium'>Challenges</p>

							<ul className='space-y-1'>
								<li className='flex items-start'>
									<span className='mr-2 text-red-400'>-</span>
									Longer CI times without task caching
								</li>

								<li className='flex items-start'>
									<span className='mr-2 text-red-400'>-</span>
									Complex tooling setup
								</li>

								<li className='flex items-start'>
									<span className='mr-2 text-red-400'>-</span>
									Repository size growth
								</li>

								<li className='flex items-start'>
									<span className='mr-2 text-red-400'>-</span>
									Requires discipline in package boundaries
								</li>
							</ul>
						</div>

						<p className='text-xs text-green-600'>
							<strong>Advice:</strong> Start simple (pnpm workspaces) and add orchestration (Turborepo/Nx) when CI
							times become painful.
						</p>
					</div>
				</div>
			</div>

			{/* ===== CI/CD for Frontend ===== */}
			<SectionTitle level='h4'>CI/CD for Frontend</SectionTitle>

			<div className='mb-4 overflow-x-auto'>
				<div className='flex min-w-[600px] items-center justify-between gap-2'>
					<div className='rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-gray-700'>Push</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-blue-300 bg-blue-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-blue-700'>Lint & Types</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-green-300 bg-green-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-green-700'>Unit Tests</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-purple-300 bg-purple-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-purple-700'>Build</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-orange-300 bg-orange-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-orange-700'>Integration Tests</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-teal-300 bg-teal-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-teal-700'>Preview Deploy</p>
					</div>

					<div className='flex flex-col items-center'>
						<span className='text-gray-400'>&rarr;</span>
					</div>

					<div className='rounded-lg border-2 border-emerald-300 bg-emerald-50 px-4 py-3 text-center'>
						<p className='text-sm font-bold text-emerald-700'>Production Deploy</p>
					</div>
				</div>
			</div>

			<div className='mb-6 rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
				<div className='space-y-4 text-sm text-gray-600'>
					<div>
						<p className='font-medium text-gray-800'>Parallelism</p>

						<p>
							Run lint, type checking, and unit tests in parallel jobs — they don't depend on each other. Build
							only after they pass. This structure ensures fast feedback while maintaining correctness.
						</p>
					</div>

					<div>
						<p className='font-medium text-gray-800'>Caching</p>

						<p>
							Cache{' '}
							<code className='inline-block translate-y-[-1px] rounded bg-gray-200 px-1 text-xs'>
								node_modules
							</code>{' '}
							(keyed on lockfile hash) and build artifacts between runs. This can cut CI time by 50-70%. Most CI
							providers (GitHub Actions, GitLab CI) have native caching support.
						</p>
					</div>

					<div>
						<p className='font-medium text-gray-800'>Preview Deployments</p>

						<p>
							Deploy every PR to a unique URL for visual review. Vercel and Netlify do this automatically. This
							replaces screenshots in code review and lets reviewers interact with the actual application.
						</p>
					</div>

					<div>
						<p className='font-medium text-gray-800'>Pipeline Budget</p>

						<p>
							Keep total CI time under 10 minutes. Beyond that, developers context-switch and stop watching the
							pipeline. If it's too slow, split the test suite, add remote caching, or parallelize more
							aggressively.
						</p>
					</div>
				</div>
			</div>

			{/* ===== Testing Strategies ===== */}
			<SectionTitle level='h4'>Testing Strategies</SectionTitle>

			<p className='mb-4 text-gray-600'>
				The Testing Trophy (Kent C. Dodds model) challenges the traditional testing pyramid by emphasizing integration tests
				over unit tests. The reasoning: integration tests exercise real component behavior — user interactions, DOM output,
				and composition — giving the highest confidence per line of test code. Unit tests remain valuable for complex pure
				logic, while E2E tests cover critical user paths through the full stack.
			</p>

			<div className='mb-4 overflow-x-auto'>
				<table className='w-full text-left text-sm'>
					<thead>
						<tr className='border-b border-gray-200 bg-gray-50'>
							<th className='px-4 py-3 font-semibold text-gray-700'>Layer</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Tools</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Speed</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>Confidence</th>
							<th className='px-4 py-3 font-semibold text-gray-700'>What It Tests</th>
						</tr>
					</thead>

					<tbody>
						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Static Analysis</td>
							<td className='px-4 py-3 text-gray-600'>TypeScript, ESLint</td>
							<td className='px-4 py-3 text-gray-600'>Instant</td>
							<td className='px-4 py-3 text-gray-600'>Low-Medium</td>
							<td className='px-4 py-3 text-gray-600'>Type errors, lint violations, coding standards</td>
						</tr>

						<tr className='border-b border-gray-100 bg-gray-50/50'>
							<td className='px-4 py-3 font-medium text-gray-800'>Unit Tests</td>
							<td className='px-4 py-3 text-gray-600'>Vitest, Jest</td>
							<td className='px-4 py-3 text-gray-600'>Fast (~ms per test)</td>
							<td className='px-4 py-3 text-gray-600'>Medium</td>
							<td className='px-4 py-3 text-gray-600'>Pure functions, utilities, hooks in isolation</td>
						</tr>

						<tr className='border-b border-gray-100'>
							<td className='px-4 py-3 font-medium text-gray-800'>Integration Tests</td>
							<td className='px-4 py-3 text-gray-600'>React Testing Library, Vitest</td>
							<td className='px-4 py-3 text-gray-600'>Moderate (~100ms per test)</td>
							<td className='px-4 py-3 text-gray-600'>High</td>
							<td className='px-4 py-3 text-gray-600'>
								Component behavior, user interactions, DOM output
							</td>
						</tr>

						<tr>
							<td className='px-4 py-3 font-medium text-gray-800'>End-to-End (E2E)</td>
							<td className='px-4 py-3 text-gray-600'>Playwright, Cypress</td>
							<td className='px-4 py-3 text-gray-600'>Slow (~seconds per test)</td>
							<td className='px-4 py-3 text-gray-600'>Very High</td>
							<td className='px-4 py-3 text-gray-600'>
								Full user flows through the real application
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Recommended ratio:</strong> Heavy on integration tests (they give the best confidence per effort),
					moderate unit tests for complex logic, and a thin E2E layer covering critical user paths (login, checkout, core
					workflow). Avoid testing implementation details — test behavior.
				</p>
			</div>

			{/* ===== Feature Flags ===== */}
			<SectionTitle level='h4'>Feature Flags</SectionTitle>

			<div className='mb-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
				<div className='mb-4 rounded-md bg-slate-50 p-3'>
					<pre className='text-xs text-slate-700'>
{`// Custom hook wrapping a feature flag provider
const useFeatureFlag = (flag: string): boolean => {
  const { flags } = useContext(FeatureFlagContext);
  return flags[flag] ?? false;
};

// Usage in a component
const Checkout = () => {
  const showNewCheckout = useFeatureFlag('new-checkout-flow');

  return showNewCheckout ? <NewCheckoutFlow /> : <LegacyCheckout />;
};`}
					</pre>
				</div>

				<p className='mb-3 text-sm text-gray-600'>
					Feature flags decouple deployment from release. You can merge and deploy code that isn't active yet, then
					gradually roll it out by percentage, user segment, or geography. This enables:
				</p>

				<ul className='mb-3 space-y-1 text-sm text-gray-600'>
					<li className='flex items-start'>
						<span className='mr-2 text-green-500'>&#10003;</span>
						<strong>Safe deployments</strong> — new code ships but isn't exposed to users until the flag is enabled
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-green-500'>&#10003;</span>
						<strong>A/B testing</strong> — show different experiences to different user segments and measure outcomes
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-green-500'>&#10003;</span>
						<strong>Instant rollback</strong> — just flip the flag off instead of deploying a revert
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-green-500'>&#10003;</span>
						<strong>Trunk-based development</strong> — everyone commits to main; incomplete features hide behind flags
					</li>
				</ul>

				<p className='text-xs text-gray-500'>
					<strong>Services:</strong> LaunchDarkly, Unleash, Statsig, ConfigCat
				</p>
			</div>

			<div className='mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4'>
				<p className='text-sm text-amber-800'>
					<strong>Warning:</strong> Feature flags are tech debt if not cleaned up. Every flag adds a conditional code path
					that must be maintained and tested. Establish a policy: remove flags within 2 weeks of full rollout. Track stale
					flags in your backlog.
				</p>
			</div>

			{/* ===== Monitoring & Observability ===== */}
			<SectionTitle level='h4'>Monitoring & Observability</SectionTitle>

			<div className='mb-6 grid gap-4 md:grid-cols-3'>
				<div className='rounded-lg border border-green-200 bg-green-50 p-4'>
					<h5 className='mb-2 font-semibold text-green-800'>Error Tracking</h5>

					<p className='mb-3 text-sm text-green-700'>
						Captures runtime exceptions with full stack traces, user context, and breadcrumbs (recent user actions).
						Source maps in production enable readable stack traces. Set up alerting for error spikes to catch regressions
						immediately after deploys.
					</p>

					<p className='text-xs text-green-600'>
						<strong>Tools:</strong> Sentry, Bugsnag, Datadog RUM
					</p>
				</div>

				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<h5 className='mb-2 font-semibold text-blue-800'>Performance Monitoring</h5>

					<p className='mb-3 text-sm text-blue-700'>
						Tracks Core Web Vitals (LCP, INP, CLS) per deploy to catch regressions. Lighthouse CI runs in the pipeline
						and fails the build if metrics degrade. Real User Monitoring (RUM) measures actual user experience, not
						synthetic benchmarks.
					</p>

					<p className='text-xs text-blue-600'>
						<strong>Tools:</strong> Sentry Performance, Vercel Analytics, web-vitals library
					</p>
				</div>

				<div className='rounded-lg border border-purple-200 bg-purple-50 p-4'>
					<h5 className='mb-2 font-semibold text-purple-800'>User Analytics</h5>

					<p className='mb-3 text-sm text-purple-700'>
						Session replay shows exactly what users see and do — clicks, scrolls, navigation. Heatmaps reveal
						interaction patterns. Funnel analysis identifies drop-off points. Helps prioritize performance and UX
						improvements where they matter most.
					</p>

					<p className='text-xs text-purple-600'>
						<strong>Tools:</strong> PostHog, FullStory, Hotjar, Amplitude
					</p>
				</div>
			</div>

			{/* ===== Micro-Frontends ===== */}
			<SectionTitle level='h4'>Micro-Frontends</SectionTitle>

			<div className='mb-4 grid gap-4 md:grid-cols-2'>
				<div className='rounded-lg border border-teal-200 bg-teal-50 p-4'>
					<h5 className='mb-2 font-semibold text-teal-800'>Approaches</h5>

					<div className='space-y-3 text-sm text-teal-700'>
						<div>
							<p className='font-medium'>Module Federation (webpack 5 / Vite)</p>

							<p>
								Load remote modules at runtime. Shared dependencies are deduped. Most popular approach for
								production micro-frontend architectures.
							</p>
						</div>

						<div>
							<p className='font-medium'>iframe Isolation</p>

							<p>
								Each micro-frontend runs in its own iframe. Complete isolation but poor UX — no shared routing,
								styling, or seamless interaction between parts.
							</p>
						</div>

						<div>
							<p className='font-medium'>Web Components</p>

							<p>
								Framework-agnostic custom elements. Good encapsulation but limited interop with React's rendering
								model and state management.
							</p>
						</div>

						<div>
							<p className='font-medium'>Route-based Composition</p>

							<p>
								Each route is owned by a different team/app. A shell app handles routing and loads the appropriate
								micro-frontend per path.
							</p>
						</div>
					</div>
				</div>

				<div className='rounded-lg border border-orange-200 bg-orange-50 p-4'>
					<h5 className='mb-2 font-semibold text-orange-800'>Trade-offs</h5>

					<div className='space-y-3 text-sm text-orange-700'>
						<div>
							<p className='font-medium'>Team Autonomy</p>

							<p>
								Independent deploy cycles and tech choices per team. Each team can ship features without
								coordinating releases with other teams.
							</p>
						</div>

						<div>
							<p className='font-medium'>vs. UX Consistency</p>

							<p>
								Design system fragmentation and inconsistent interactions across boundaries. Maintaining a unified
								look and feel requires strict governance.
							</p>
						</div>

						<div>
							<p className='font-medium'>vs. Bundle Duplication</p>

							<p>
								Shared React, shared design system, and shared utilities potentially loaded multiple times,
								inflating the total bundle size.
							</p>
						</div>

						<div>
							<p className='font-medium'>vs. Runtime Complexity</p>

							<p>
								Version conflicts, shared state challenges, and debugging across boundaries add significant
								operational overhead.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='mb-6 flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4'>
				<span className='mt-0.5 text-red-500'>&#10007;</span>

				<p className='text-sm text-red-700'>
					<strong>Anti-pattern:</strong> Micro-frontends add significant architectural overhead. They are a solution to
					organizational scaling (multiple teams needing to deploy independently), not technical scaling. If a single team
					can own the entire frontend, a well-structured monolith with good module boundaries is simpler, faster, and
					easier to maintain.
				</p>
			</div>

			{/* ===== Key Takeaways ===== */}
			<div className='rounded-xl border border-blue-200 bg-blue-50 p-6'>
				<h4 className='mb-3 text-xl font-semibold text-blue-800'>Key Takeaways</h4>

				<ul className='space-y-2 text-blue-700'>
					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>&#8226;</span>
						Choose a bundler that matches your needs — Vite for applications, Rollup for libraries
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>&#8226;</span>
						Monorepos with task caching (Nx, Turborepo) unlock shared code without publishing overhead
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>&#8226;</span>
						Keep the CI pipeline under 10 minutes — parallelize, cache, and use preview deployments
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>&#8226;</span>
						Test at the integration level (React Testing Library) for the best confidence-to-cost ratio
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>&#8226;</span>
						Feature flags decouple deployment from release — but clean them up after rollout
					</li>

					<li className='flex items-start'>
						<span className='mr-2 text-blue-500'>&#8226;</span>
						Micro-frontends are for organizational scaling, not technical scaling — adopt only when genuinely needed
					</li>
				</ul>
			</div>
		</div>
	);
};

/* ===== Exports ===== */
export default FrontendInfrastructure;
