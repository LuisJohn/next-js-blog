import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-9">
        <Link href="/" className="font-bold text-3xl">
            LuisJohn<span className="text-primary">.Pro</span>
        </Link>
        <p className="text-sm">Proudly Developed by Talk. Lda</p>
    </footer>
  )
}
