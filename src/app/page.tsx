import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

export default async function Home() {

  const user = await prisma.user.findMany()
  return <div>this is a page

    <Button>Click me</Button>
    {JSON.stringify(user)}
  </div>;
}
