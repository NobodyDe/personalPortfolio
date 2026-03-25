// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function SEO({ title, description }) {
  const { lang } = useParams();
  const fullTitle = title
    ? `${title} — Henrique Santos`
    : "Henrique Santos — Engenheiro de Software";

  return (
    <Helmet>
      {/* Muda o <html lang="..."> dinamicamente */}
      <html lang={lang || "pt"} />

      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph — para quando compartilhar no LinkedIn/WhatsApp */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="URL_DA_SUA_OG_IMAGE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
