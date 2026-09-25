import { Link } from "@tanstack/react-router";

export function LegalPage({ title }: { title: string }) {
  return (
    <main className="mx-auto max-w-reading px-6 py-20">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← YRT Institute</Link>
      <h1 className="mt-8 font-serif text-5xl text-foreground">{title}</h1>
      <p className="mt-6 text-muted-foreground">[{title} — to add]</p>
    </main>
  );
}
