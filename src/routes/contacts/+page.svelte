<script>
	import { CHUNK_01 } from './constants';
</script>

<div class="flex flex-col items-center">
	<article class="mb-12 flex w-full max-w-5xl flex-col px-8">
		<div class="flex w-full flex-col gap-6 py-6">
			<h1 class="text-lg-h1">{CHUNK_01.title}</h1>
			<ul class="divide-y divide-green-500/20 print:divide-slate-200">
				{#each CHUNK_01.content as item}
					<li class="flex justify-between gap-4 px-4 py-2 hover:bg-green-500/20">
						<span class="text-lg-body">{item.key}</span>
						<a
							class="text-right text-lg-body underline underline-offset-4"
							target="_blank"
							href={item.value}>{item.value}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</article>
</div>
