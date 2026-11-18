import { useTranslations } from "next-intl";

export default function WalletsPage() {
  const t = useTranslations("wallets");
  return (
    <main>
      <p>{t("hero.eyebrow")}</p>
      <h1>{t.rich("hero.headline", { strong: (c) => <strong>{c}</strong> })}</h1>
      <a className="btn btn-primary" href="#directory">
        {t("hero.findWallet")}
      </a>
      <section id="directory">
        <h2>{t("grid.title")}</h2>
        <button className="btn btn-sm">{t("grid.reset-filters")}</button>
        <button className="btn btn-sm">{t("directory.filters.clearAll")}</button>
        <button className="btn btn-sm">{t("card.view-details")}</button>
      </section>
    </main>
  );
}
