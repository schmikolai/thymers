import type { PageLoad } from './$types';

import timers from './timers.json';

export const load: PageLoad = () => {
	return {
		timers
	};
};
