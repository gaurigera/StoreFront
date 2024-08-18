import Logo from "@/components/ui/logo";
import AuthForm from "@/components/user/login";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      <div className="h-fit w-fit m-auto flex flex-col items-center space-y-4">
        <Logo />
        <AuthForm className={"flex flex-col"} />
      </div>
    </main>
  );
}
