import { Button } from "@/button";
import { ReactNode } from "react";

export default async function Home() {
  const btns: ReactNode[] = [];
  for (let i = 0; i < 2; i++) {
    btns.push(
      <Button key={i} className={`size-${(i % 3) + 1}`}>
        Test
      </Button>
    );
  }

  return <main>{btns}</main>;
}
