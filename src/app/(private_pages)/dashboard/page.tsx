import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage(props) {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <>
        <div>Bienvenido</div>
        <pre>{JSON.stringify(session)}</pre>
      </>
    );
  }

  redirect("/api/auth/signin");
}
