export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-[#F7FAF8] flex items-center justify-center p-4">
      {children}
    </div>
  );
}