<script>
	import { UI_HERO_BANNER } from '$lib/ui/hero_banner';
	import {
		CHUNK_01,
		CHUNK_02,
		CHUNK_03,
		CHUNK_04,
		CHUNK_05,
		CHUNK_06,
		CHUNK_07,
		CHUNK_08
	} from './constants';
	import { UI_BUTTON } from '@sitis/ui__svelte/UI_BUTTON';
</script>

<div class="flex flex-col items-center">
	<UI_HERO_BANNER>
		<div class="relative z-[1] flex flex-col items-center gap-10 px-8 text-center">
			<p class="text-lg-hero font-bold text-white md:text-xl-hero">Artem Attvud</p>
			<p class="text-lg-h1 font-bold text-white md:text-xl-h3">Front-End Developer 🐛</p>
			<p class="text-lg-h1 font-bold text-white md:text-xl-h3">🐞 UX/UI Designer</p>
			<div class="flex flex-wrap justify-center gap-4">
				<UI_BUTTON color="contrast-reversed" onclick={() => window?.print()} size="lg"
					>Download CV</UI_BUTTON
				>
				<UI_BUTTON
					size="lg"
					html_tag="a"
					href="/contacts"
					color="contrast-reversed"
					variant="outlined">Contacts</UI_BUTTON
				>
			</div>
		</div>
	</UI_HERO_BANNER>
	<article class="mb-12 flex w-full max-w-5xl flex-col px-8">
		<div class="flex w-full flex-col gap-6 py-6">
			<h1 class="text-lg-h1">{CHUNK_01.title}</h1>
			<ul class="divide-y divide-green-500/20 print:divide-slate-200">
				{#each CHUNK_01.content as item}
					<li class="flex justify-between gap-4 px-4 py-2 hover:bg-green-500/20 print:!px-0">
						<span class="text-lg-body">{item.key}</span>
						<span class="text-right text-lg-body">{item.value}</span>
					</li>
				{/each}
			</ul>
		</div>

		<div class="flex w-full flex-col gap-6 pb-12 pt-6">
			<h1 class="text-lg-h1">{CHUNK_02.title}</h1>
			<ul class="divide-y divide-green-500/20 print:divide-slate-200">
				{#each CHUNK_02.content as item}
					<li class="flex justify-between gap-4 px-4 py-2 hover:bg-green-500/20 print:!px-0">
						<span class="text-lg-body">{item.key}</span>
						<span class="text-right text-lg-body">{item.value}</span>
					</li>
				{/each}
			</ul>
		</div>

		<div class="flex w-full flex-col gap-6 pb-12 pt-6">
			<div class="flex flex-wrap items-center justify-between gap-4">
				<h1 class="text-lg-h1">Senior Front-end Developer</h1>
				<p class="text-lg-body text-red-500 print:text-red-600">6 Years of experience</p>
			</div>
			<div class="flex w-full flex-col gap-6 pb-12 pt-6">
				<h2 class="text-lg-h2">{CHUNK_03.title}</h2>
				<ul class="divide-y divide-green-500/20 print:divide-slate-200">
					{#each CHUNK_03.content as item}
						<li class="flex justify-between gap-4 px-4 py-2 hover:bg-green-500/20 print:!px-0">
							<span class="text-lg-body">{item.key}</span>
							<span class="text-right text-lg-body">{item.value}</span>
						</li>
					{/each}
				</ul>
				<h2 class="text-lg-h2">{CHUNK_04.title}</h2>
				<ul class="divide-y divide-green-500/20 print:divide-slate-200">
					{#each CHUNK_04.content as item}
						<li class="flex justify-between gap-4 px-4 py-2 hover:bg-green-500/20 print:!px-0">
							<span class="text-lg-body">{item.value}</span>
						</li>
					{/each}
				</ul>
				<h2 class="text-lg-h2">{CHUNK_05.title}</h2>
				<ul class="divide-y divide-green-500/20 print:divide-slate-200">
					{#each CHUNK_05.content as item}
						<li class="flex justify-between gap-4 px-4 py-2 hover:bg-green-500/20 print:!px-0">
							<span class="text-lg-body">{item.key}</span>
							<span class="text-right text-lg-body">{item.value}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="flex w-full flex-col gap-6">
			<div class="flex flex-wrap items-center justify-between gap-4">
				<h1 class="text-lg-h1">Senior UX/UI Designer</h1>
				<p class="text-lg-body text-red-500 print:text-red-600">9 Years of experience</p>
				<div class="flex w-full flex-col gap-6 pb-12 pt-6">
					<h2 class="text-lg-h2">{CHUNK_06.title}</h2>
					<ul class="divide-y divide-green-500/20 print:divide-slate-200">
						{#each CHUNK_06.content as item}
							<li class="flex justify-between gap-4 px-4 py-2 hover:bg-green-500/20 print:!px-0">
								<span class="text-lg-body">{item.value}</span>
							</li>
						{/each}
					</ul>
					<h2 class="text-lg-h2">{CHUNK_07.title}</h2>
					<ul class="divide-y divide-green-500/20 print:divide-slate-200">
						{#each CHUNK_07.content as item}
							<li class="flex justify-between gap-4 px-4 py-2 hover:bg-green-500/20 print:!px-0">
								<span class="text-lg-body">{item.value}</span>
							</li>
						{/each}
					</ul>
					<h2 class="text-lg-h2">{CHUNK_08.title}</h2>
					<ul class="divide-y divide-green-500/20 print:divide-slate-200">
						{#each CHUNK_08.content as item}
							<li class="flex justify-between gap-4 px-4 py-2 hover:bg-green-500/20 print:!px-0">
								<span class="text-lg-body">{item.key}</span>
								<span class="text-right text-lg-body">{item.value}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="flex w-full flex-col gap-6 py-6">
				<h1 class="text-lg-h1">Recommendations</h1>

				<span class="text-lg-body"
					>My recommendations are available on my <a
						class="text-lg-body underline underline-offset-4"
						href="https://www.linkedin.com/in/artem-attvud/"
						target="_blank">LinkedIn profile page</a
					></span
				>
			</div>
		</div>
	</article>
</div>
