import {
	timeComponentFactors,
	type TimeComponent,
	type TimeFormatter,
	type TimeResult
} from './time-formatter';

const thresholds: Record<TimeComponent, number> = {
	Y: Infinity,
	M: 12,
	W: 9,
	D: 21,
	h: 72,
	m: 120,
	s: 60,
	ms: 1000
};

export function BestApproximationTimeFormatter(numComponents = 1, possibleComponents = Object.keys(thresholds)): TimeFormatter {
	if (numComponents < 1) {
		throw new Error('numComponents must be at least 1');
	}

	return (time: number) => {
		const isPast = time < 0;
		time = Math.abs(time);

		const components: TimeResult['components'] = {};

		do {
			let bestComponent: TimeComponent = 'Y';

			for (const component of [...possibleComponents].reverse() as TimeComponent[]) {
				if (time < thresholds[component] * timeComponentFactors[component]) {
					bestComponent = component;
					break;
				}
			}

            const nOfBestComponent = Math.floor(time / timeComponentFactors[bestComponent]);
			components[bestComponent] = nOfBestComponent;
            time -= nOfBestComponent * timeComponentFactors[bestComponent];

            if (bestComponent === 'ms') {
                break;
            }
		} while (Object.keys(components).length < numComponents);

		return {
			isPast,
			components
		};
	};
}
