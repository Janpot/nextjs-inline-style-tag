// Button.tsx
import * as React from "react";
import { nonceCache } from "./app/nonceCache";

const getCss = React.cache((nonce: string | null) => (
  <style href="button" precedence="components" nonce={nonce ?? undefined}>{`
    .foo {
      color: red;
    }
  `}</style>
));

function Button({ className, ...rest }: any) {
  const nonce = nonceCache().current;
  return (
    <>
      {getCss(nonce)}
      <button {...rest} className={`foo ${className}`} />
    </>
  );
}

export { Button };
