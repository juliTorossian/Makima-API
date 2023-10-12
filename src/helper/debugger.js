import debug from 'debug';

let l = debug("app:log");
let e = debug("app:error");
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
e.color = debug.colors[5];
w.color = debug.colors[2];
f.color = debug.colors[4];

export const log = l;
export const error = e;
export const warning = w;
export const flash = f;
