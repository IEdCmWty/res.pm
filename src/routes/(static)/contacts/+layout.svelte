<script>
	let { children } = $props();
</script>

<div class="flex flex-col items-center pb-16">
	<article class="article my-8 w-full max-w-5xl self-center sm:my-12">
		{@render children()}
	</article>
</div>
