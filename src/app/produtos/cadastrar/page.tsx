import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import ContainerCadastrar from "@/components/pages/Cadastrar/ContainerCadastrar";

const Cadastrar = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/");
  }

  return <ContainerCadastrar />;
};

export default Cadastrar;
