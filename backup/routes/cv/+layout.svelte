<script>
	import { UI_BUTTON } from '@sitis/ui__svelte/UI_BUTTON';
	import { UI_BG_GRADIENT__GRAINY } from '@sitis/ui__svelte/UI_BG_GRADIENT__GRAINY';

	let { children } = $props();
</script>

<div class="flex flex-col items-center pb-16">
	<div
		class="hero-banner xs:p-8 relative z-1 flex w-full flex-col items-center justify-center gap-6 overflow-hidden p-16 text-center lg:gap-12 lg:p-40 print:!hidden"
	>
		<h1>Artem Attvud</h1>
		<h2>🧿 Senior Front-End Developer</h2>
		<div class="flex flex-wrap justify-center gap-2">
			<UI_BUTTON color="contrast" onclick={() => window?.print()} proportion="lg"
				>Download CV</UI_BUTTON
			>
			<UI_BUTTON
				proportion="lg"
				is_enabled__hover_visual
				html_tag="a"
				href={`/contacts`}
				color="contrast"
				variant="outlined">Contacts</UI_BUTTON
			>
		</div>
		<UI_BG_GRADIENT__GRAINY />
	</div>

	<article class="article my-8 w-full max-w-[1200px] self-center sm:my-16">
		{@render children()}
	</article>
</div>

<style type="text/css" media="screen">
	.hero-banner {
		h1 {
			font-weight: bold;
			font-size: var(--text-lg-hero);
			line-height: var(--tw-leading, var(--text-lg-hero--line-height));
			@media (width >= 64rem) {
				font-size: var(--text-xl-hero);
				line-height: var(--tw-leading, var(--text-xl-hero--line-height));
			}
		}
		h2 {
			font-weight: bold;
			font-size: var(--text-lg-h2);
			line-height: var(--tw-leading, var(--text-lg-h2--line-height));
			@media (width >= 64rem) {
				font-size: var(--text-xl-h2);
				line-height: var(--tw-leading, var(--text-xl-h2--line-height));
			}
		}
		h3 {
			font-weight: bold;
			font-size: var(--text-lg-h3);
			line-height: var(--tw-leading, var(--text-lg-h3--line-height));
			text-decoration: line-through;
			opacity: 50%;
			@media (width >= 64rem) {
				font-size: var(--text-xl-h3);
				line-height: var(--tw-leading, var(--text-xl-h3--line-height));
			}
		}
	}
</style>
