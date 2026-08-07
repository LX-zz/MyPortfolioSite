export default function Loading() {
  return (
    <main className="container-page flex min-h-[70vh] items-center justify-center pt-28">
      <div className="w-full max-w-2xl rounded-lg border border-white/10 bg-neutral-950/80 p-6 shadow-2xl">
        <div className="mb-5 h-4 w-28 rounded bg-cyan-300/20" />
        <div className="space-y-3">
          <div className="h-8 w-4/5 rounded bg-white/10" />
          <div className="h-8 w-3/5 rounded bg-white/10" />
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-2/3 rounded bg-white/10" />
        </div>
      </div>
    </main>
  );
}
