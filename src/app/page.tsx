import { Button } from "@/button";
import { ReactNode } from "react";
import { nonceCache } from "./nonceCache";
import { headers } from "next/headers";

export default async function Home() {
  const nonce = (await headers()).get("x-nonce");
  console.log("set page nonce", nonce);
  nonceCache().current = nonce;

  const btns: ReactNode[] = [];
  for (let i = 0; i < 1000; i++) {
    btns.push(
      <Button key={i} className={`size-${(i % 3) + 1}`}>
        Test
      </Button>
    );
  }

  return <main>{btns}</main>;
}
