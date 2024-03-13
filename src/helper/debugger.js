import debug from 'debug';

let l = debug("app:log");
let e = debug("app:error");
let i = debug("app:info");
let w = debug("app:warning");
let f = debug("app:flash");

/*
    Colores
    1 - verde
    2 - amarillo
    3 - celeste
    4 - rosa
    5 - error
*/

l.color = debug.colors[1];
w.color = debug.colors[2];
i.color = debug.colors[3];
f.color = debug.colors[4];
e.color = debug.colors[5];

export const log = l;
export const warning = w;
export const info = i;
export const flash = f;
export const error = e;
