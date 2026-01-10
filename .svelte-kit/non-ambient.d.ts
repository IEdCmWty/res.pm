
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/demo" | "/demo/paraglide";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/demo": Record<string, never>;
			"/demo/paraglide": Record<string, never>
		};
		Pathname(): "/" | "/demo" | "/demo/" | "/demo/paraglide" | "/demo/paraglide/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/fonts/icons.css" | "/fonts/icons.woff2" | "/img/app-icons/favicon.png" | "/img/patterns/animals.svg" | "/img/patterns/beach.svg" | "/img/patterns/cats_and_dogs.svg" | "/img/patterns/games.svg" | "/img/patterns/grain-01.png" | "/img/patterns/grain-02.png" | "/img/patterns/late_night_delight.svg" | "/img/patterns/math.svg" | "/img/patterns/paris.svg" | "/img/patterns/snowflakes.svg" | "/img/patterns/space.svg" | "/img/patterns/tattoos.svg" | "/robots.txt" | string & {};
	}
}