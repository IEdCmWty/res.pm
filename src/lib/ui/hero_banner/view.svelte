<script>
	/** @type {import("./types.js").UI_BUTTON_API} */
	let { children, ...rest_props } = $props();
</script>

<div
	class="relative flex h-[360px] w-full items-center justify-center overflow-hidden md:h-[880px] print:!hidden"
>
	{@render children?.()}
	<div class="wrapper" role="region">
		<div class="gradient gradient-01 opacity-60"></div>
		<div class="gradient gradient-02 opacity-60"></div>
		<div class="gradient gradient-03 opacity-60"></div>
	</div>
	<div class="test absolute h-full w-full bg-center bg-repeat"></div>
</div>

<style>
	.test {
		background-image: url('./assets/001.png');
	}
	.wrapper {
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		--tw-blur: blur(64px);
		filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
			var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
		user-select: none;
		pointer-events: none;
	}
	.gradient {
		position: absolute;
		border-radius: 100%;
		opacity: 1;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
	}
	.gradient-01 {
		width: 700px;
		height: 700px;
		background: #ff0080;
		z-index: -2;
		left: 60%;
		top: 40%;
		animation-duration: 11s;
		animation-name: gradient-01;
	}

	@keyframes gradient-01 {
		0% {
			transform: translateY(-50%) translateX(-50%) rotate(-20deg) translateX(20%);
		}
		25% {
			transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg) rotate(80deg)
				translateX(30%);
		}
		50% {
			transform: translateY(-50%) translateX(-50%) rotate(180deg) translateX(25%);
		}
		75% {
			transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg) rotate(240deg) translateX(15%);
		}
		to {
			transform: translateY(-50%) translateX(-50%) rotate(340deg) translateX(20%);
		}
	}
	.gradient-02 {
		width: 600px;
		height: 600px;
		z-index: -1;
		left: 40%;
		background: #50e3c2;
		top: 60%;
		animation-duration: 11s;
		animation-name: gradient-02;
		animation-direction: reverse;
	}

	@keyframes gradient-02 {
		0% {
			transform: translateY(-50%) translateX(-50%) rotate(40deg) translateX(-20%);
		}
		25% {
			transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg) rotate(110deg) translateX(-5%);
		}
		50% {
			transform: translateY(-50%) translateX(-50%) rotate(210deg) translateX(-35%);
		}
		75% {
			transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg) rotate(300deg)
				translateX(-10%);
		}
		to {
			transform: translateY(-50%) translateX(-50%) rotate(400deg) translateX(-20%);
		}
	}
	.gradient-03 {
		width: 500px;
		height: 500px;
		background: #7928ca;
		z-index: -3;
		left: 50%;
		top: 50%;
		animation-duration: 11s;
		animation-name: gradient-03;
	}

	@keyframes gradient-03 {
		0% {
			transform: translateY(-50%) translateX(-50%) translateX(-15%) translateY(10%);
		}
		20% {
			transform: translateY(-50%) translateX(-50%) translateX(20%) translateY(-30%);
		}
		40% {
			transform: translateY(-50%) translateX(-50%) translateX(-25%) translateY(-15%);
		}
		60% {
			transform: translateY(-50%) translateX(-50%) translateX(30%) translateY(20%);
		}
		80% {
			transform: translateY(-50%) translateX(-50%) translateX(5%) translateY(35%);
		}
		to {
			transform: translateY(-50%) translateX(-50%) translateX(-15%) translateY(10%);
		}
	}
</style>
