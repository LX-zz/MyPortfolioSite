import { LockKeyhole } from "lucide-react";

type AdminLoginPanelProps = {
  error?: string;
};

const errorMessages: Record<string, string> = {
  "wrong-password": "Пароль не подошел. Проверьте значение и попробуйте еще раз.",
  "not-configured": "ADMIN_PASSWORD не задан. Добавьте пароль в .env и перезапустите проект.",
};

export function AdminLoginPanel({ error }: AdminLoginPanelProps) {
  return (
    <section className="mx-auto max-w-md rounded-lg border border-white/10 bg-neutral-950 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
      <div className="grid size-12 place-items-center rounded-lg border border-cyan-200/20 bg-cyan-300/10 text-cyan-200">
        <LockKeyhole className="size-6" />
      </div>
      <h1 className="mt-6 text-3xl font-semibold text-white">Панель заявок</h1>
      <p className="mt-3 text-sm leading-6 text-neutral-400">
        Введите пароль администратора, чтобы открыть список заявок.
      </p>
      {error ? (
        <p className="mt-4 rounded-md border border-red-300/25 bg-red-300/10 p-3 text-sm text-red-100">
          {errorMessages[error] ?? "Не удалось выполнить вход."}
        </p>
      ) : null}
      <form action="/api/admin/login" method="post" className="mt-6 grid gap-4">
        <label>
          <span className="mb-2 block text-sm font-medium text-neutral-200">Пароль</span>
          <input
            className="focus-ring w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white transition placeholder:text-neutral-500 hover:border-white/20 focus:border-cyan-200"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Введите пароль"
            required
          />
        </label>
        <button className="focus-ring rounded-md border border-cyan-100/25 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-50 transition hover:border-cyan-200/45 hover:bg-cyan-300/[0.16]">
          Войти
        </button>
      </form>
    </section>
  );
}
