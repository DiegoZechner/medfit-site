export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-medium text-slate-700">med fit wohlfühlschön</div>
          <div>Am Kehlerpark 2 · A-6850 Dornbirn</div>
          <div>
            Tel.{" "}
            <a href="tel:+436781330011" className="underline">
              +43 678 133 00 11
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:office@med-fit.com" className="underline">
            office@med-fit.com
          </a>
          <a href="#" className="underline">
            Impressum
          </a>
          <a href="#" className="underline">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}

