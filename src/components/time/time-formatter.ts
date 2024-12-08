export type TimeComponent = "Y" | "M" | "W" | "D" | "h" | "m" | "s" | "ms";

export type TimeResult = {
    isPast: boolean;
    components: Partial<Record<TimeComponent, number>>;
};

export const timeComponentFactors: Record<TimeComponent, number> = {
    Y: 1 * 1000 * 60 * 60 * 24 * 365,
    M: 1 * 1000 * 60 * 60 * 24 * 30,
    W: 1 * 1000 * 60 * 60 * 24 * 7,
    D: 1 * 1000 * 60 * 60 * 24,
    h: 1 * 1000 * 60 * 60,
    m: 1 * 1000 * 60,
    s: 1 * 1000,
    ms: 1,
};

export type TimeFormatter = (time: number) => TimeResult;
