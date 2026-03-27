import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

export default function LanguageSwitcher({ className, ...props }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  const isEn = lang === "en";

  const toggleLanguage = () => {
    const newLang = isEn ? "pt" : "en";
    i18n.changeLanguage(newLang);
    navigate(`/${newLang}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`
        relative inline-flex items-center
        h-7 w-15 rounded-xl
        bg-surface border border-non-interactive
        cursor-pointer transition-colors duration-300
        ${className ?? ""}
      `}
      aria-label={`Switch language to ${isEn ? "Português" : "English"}`}
      {...props}
    >
      <span
        className={`
          absolute left-1.5 text-[10px] font-sans font-medium px-1
          transition-opacity duration-300
          ${isEn ? "text-secundary opacity-50" : "text-primary opacity-100"}
        `}
      >
        PT
      </span>
      <span
        className={`
          absolute right-1.5 text-[10px] font-sans font-medium
          transition-opacity duration-300 px-1
          ${isEn ? "text-primary opacity-100" : "text-secundary opacity-50"}
        `}
      >
        EN
      </span>
    </button>
  );
}
