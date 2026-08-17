/**
 * Navigation structure.
 *
 * Exactly four destinations plus the persistent Connect action (D-006).
 * No other destination exists in v1; introducing a fifth is an architectural
 * decision to be recorded in `12_Decision_Record.md`.
 *
 * Connect is kept separate from the four because it is an action rather than
 * a peer destination, and the header presents it as one.
 */
export interface NavItem {
	href: string;
	label: string;
}

export const primaryNav: readonly NavItem[] = [
	{ href: '/', label: 'Home' },
	{ href: '/work', label: 'Work' },
	{ href: '/thinking', label: 'Thinking' },
	{ href: '/journey', label: 'Journey' },
];

export const connectNav: NavItem = { href: '/connect', label: 'Connect' };

/**
 * Marks the destination a path belongs to, so `/work/a-project` highlights
 * Work. Home matches only itself, since every path starts with `/`.
 */
export function isCurrent(pathname: string, href: string): boolean {
	const path = pathname.replace(/\/+$/, '') || '/';
	if (href === '/') return path === '/';
	return path === href || path.startsWith(`${href}/`);
}
