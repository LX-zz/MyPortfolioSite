export default function Loading() {
  return (
    <main className="container-page flex min-h-[70vh] items-center justify-center pt-28">
      <div className="w-full max-w-2xl">
        <div className="mb-5 h-px w-28 bg-cyan-300/30" />
        <div className="space-y-3">
          <div className="h-8 w-4/5 bg-white/10" />
          <div className="h-8 w-3/5 bg-white/10" />
          <div className="h-px w-full bg-white/10" />
          <div className="h-px w-2/3 bg-white/10" />
        </div>
      </div>
    </main>
  );
}
