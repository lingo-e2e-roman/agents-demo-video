import { useTranslations } from "next-intl";

export default function LearnPage() {
  const t = useTranslations("learn");
  return (
    <main>
      <h1>{t("hero.title")}</h1>
      <a className="btn btn-primary" href="/learn/what-is-solana">
        {t("hero.start-learning")}
      </a>
    </main>
  );
}
