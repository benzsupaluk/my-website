export default function WorkDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed h-[calc(100dvh_-_240px)] w-[calc(100dvw_-_280px)] ml-4 bg-gray-100/10 border border-gray-300 overflow-auto rounded-2xl md:p-6 sm:p-4 p-2">
      <div className="mx-auto max-w-[840px]">{children}</div>
    </div>
  );
}
