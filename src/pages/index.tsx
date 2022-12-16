import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  return <main>
    <Button><Link href={"login"}>Login</Link></Button>
  </main>
}
