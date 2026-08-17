/**
 * User-facing interface strings.
 *
 * Kept out of components so the platform stays i18n-ready at no cost (D-026).
 * Strings are added here when a component needs one, never in advance.
 */
export const ui = {
	skipToContent: 'Skip to content',
	siteName: "3G'sO",
	/** Distinguishes the header and footer navigations for assistive technology. */
	primaryNavLabel: 'Primary',
	footerNavLabel: 'Footer',
	/** Accessible name for the wordmark link, which reads only as the site name. */
	homeLinkLabel: "3G'sO — home",
	notFound: {
		code: '404',
		title: 'Page not found',
		description: 'This page does not exist. Continue from one of the destinations below.',
		body: 'The page you were looking for does not exist, or it has moved.',
		nextHeading: 'Continue from here',
	},
} as const;
