export default function WidgetLanguages() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="font-aspekta font-[650] mb-3">Languages</div>
      <ul className="space-y-3">
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1.5 truncate">
            <span className="text-base mr-1.5">🇬🇧 </span>
            <span className="font-aspekta font-[650] text-sm truncate">
              English
            </span>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1.5 truncate">
            <span className="text-base mr.1.5">🇸🇪 </span>
            <span className="font-aspekta font-[650] text-sm truncate">
              Swedish
            </span>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1.5 truncate">
            <span className="text-base mr-1.5">🇷🇸 </span>
            <span className="font-aspekta font-[650] text-sm truncate">
              Serbian
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
