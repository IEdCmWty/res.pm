<script>
	import { UI_BG_GRADIENT__GRAINY } from '@sitis/ui__svelte/UI_BG_GRADIENT__GRAINY';
	import { UI_BUTTON } from '@sitis/ui__svelte/UI_BUTTON';

	let { children } = $props();
</script>

<div class="flex flex-col items-center pb-16">
	<div
		class="hero-banner relative z-1 flex w-full flex-col items-center justify-center gap-6 overflow-hidden p-12 text-center font-serif lg:gap-12 lg:p-40 print:text-black"
	>
		<h1>Artem Attvud</h1>
		<h2>🧿 Front-End Developer</h2>
		<div class="flex flex-wrap justify-center gap-2 print:!hidden">
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

	<article class="article my-8 w-full max-w-5xl self-center sm:my-12">
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
	}
</style>
