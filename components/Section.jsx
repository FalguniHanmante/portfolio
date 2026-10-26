export default function Section({ id, title, children }) {
  return (
    <section id={id} className="relative scroll-mt-20 pb-16 pl-8 md:pl-12">
      <span
        aria-hidden="true"
        className="absolute -left-[8px] top-[14px] h-3.5 w-3.5 rounded-full border-2 border-lilac-deep bg-paper dark:border-lilac dark:bg-pine"
      />
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
