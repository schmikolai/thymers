import { timeComponentFactors, type TimeComponent, type TimeFormatter, type TimeResult } from "./time-formatter";

type TimeFormattingOptions = {
    components: TimeComponent[];
};

const defaultOptions: TimeFormattingOptions = {
    components: ["Y", "M", "W", "D", "h", "m", "s"],
};

export const SimpleTimeFormatter : TimeFormatter = (time: number, options = defaultOptions) => {
    const isPast = time < 0;
    time = Math.abs(time);

    const components: TimeResult["components"] = {};

    for (const component of options.components) {
        const factor = timeComponentFactors[component];
        if (time < factor) continue;
        components[component] = Math.floor(time / factor);
        time %= factor;
    }

    return {
        isPast,
        components,
    };
}