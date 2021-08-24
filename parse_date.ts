import { parse } from "https://deno.land/std@0.102.0/datetime/mod.ts";

const date = parse("2021-08-10", "yyyy-mm-dd");
console.log(date);
