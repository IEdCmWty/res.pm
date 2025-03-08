<script>
	import { ct_array_to_html_class } from '@sitis/tools__js/ct_array_to_html_class';
	import {
		UI_HERO_BANNER_BASE_CLASS,
		UI_HERO_BANNER_GRADIENT_BASE_CLASS,
		UI_HERO_BANNER_WRAPPER_CLASS
	} from './constants';
</script>

<div class={UI_HERO_BANNER_BASE_CLASS}>
	<div
		class={ct_array_to_html_class([
			'effect absolute top-0 left-0 z-1 h-full w-full bg-repeat opacity-50'
		])}
	></div>

	<div class={UI_HERO_BANNER_WRAPPER_CLASS} role="region">
		<div
			class={ct_array_to_html_class([
				UI_HERO_BANNER_GRADIENT_BASE_CLASS,
				'loop-animation gradient-01 h-[400px] w-[400px] md:h-[700px] md:w-[700px]'
			])}
		></div>
		<div
			class={ct_array_to_html_class([
				UI_HERO_BANNER_GRADIENT_BASE_CLASS,
				'loop-animation gradient-02 h-[300px] w-[300px] md:h-[600px] md:w-[600px]'
			])}
		></div>
		<div
			class={ct_array_to_html_class([
				UI_HERO_BANNER_GRADIENT_BASE_CLASS,
				'loop-animation gradient-03 h-[200px] w-[200px] md:h-[500px] md:w-[500px]'
			])}
		></div>
	</div>
</div>

<style>
	.effect {
		background-image: url('./assets/grain-02.png');
		background-size: 40px 40px;

		@media (width >= 48rem) {
			background-size: auto;
		}

		@media (prefers-color-scheme: dark) {
			background-image: url('./assets/grain-01.png');
		}
	}

	.loop-animation {
		animation-iteration-count: infinite;
	}

	.gradient-01 {
		background: #ff0080;
		filter: contrast(150);
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
		z-index: -1;
		left: 40%;
		filter: contrast(150);
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
		background: #7928ca;
		filter: contrast(150);
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
