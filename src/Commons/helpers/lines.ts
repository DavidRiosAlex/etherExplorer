interface slopeProps {
    y1?: number;
    y2?: number;
    x1?: number;
    x2?: number;
}
export function slope ({y1 = 0, y2 = 0, x1 = 0, x2 = 0}: slopeProps) {
    const y = y2 - y1;
    const x = x2 - x1;
    return y / x;
}

export function obtainB ({x = 0, y = 0, m = 0}) {
    return y - x * m;
}


export function coords(coords: slopeProps & {x: number}) {
    const m = slope(coords);
    const b = obtainB({x: coords.x1, y: coords.y1, m});
    return coords.x * m + b;
}