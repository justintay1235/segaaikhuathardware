import LoginForm from "./LoginForm";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;

  return (
    <div className="min-h-screen flex items-center justify-center bg-maroon-950 px-6">
      <div className="w-full max-w-sm flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="font-display italic text-3xl text-ivory-50">Sega.</span>
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Back Office</p>
        </div>
        <LoginForm from={from} />
      </div>
    </div>
  );
}
