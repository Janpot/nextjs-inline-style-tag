import { Button } from "@/button";
import { ReactNode } from "react";

export default function Home() {
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
