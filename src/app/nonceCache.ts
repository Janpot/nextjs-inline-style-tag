import * as React from "react";
export type NonceCache = { current: string | null };
export const nonceCache = React.cache((): NonceCache => ({ current: null }));
