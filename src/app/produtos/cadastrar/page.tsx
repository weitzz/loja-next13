import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import FormCadastrar from "@/components/pages/Cadastrar/CardCadastrar";

const Cadastrar = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/");
  }

  return <FormCadastrar />;
};

export default Cadastrar;
