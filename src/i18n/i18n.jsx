/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import es from "./es.json";
import en from "./en.json";

const dict = { es, en };
const I18nContext = createContext({ lang: "es", t: (k)=>k, setLang: ()=>{} });

const get = (obj, path) => path.split(".").reduce((a, p) => (a && a[p] !== undefined ? a[p] : undefined), obj);
const interpolate = (str, vars) => str.replace(/\{\{(\w+)\}\}/g, (_, k) => (vars[k] ?? ""));

export function I18nProvider({ children }) {
  const initial =
    (typeof window !== "undefined" && localStorage.getItem("lang")) ||
    (typeof navigator !== "undefined" && navigator.language?.startsWith("es") ? "es" : "en");

  const [lang, setLang] = useState(initial);

  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);

  const t = useMemo(
    () => (key, vars = {}) => {
      const raw = get(dict[lang], key) ?? get(dict.es, key) ?? key;
      return typeof raw === "string" ? interpolate(raw, vars) : key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);

/* Helper para migrar sin romper textos:
   <Txt k="nav.about">Sobre mí</Txt>
   → si hay traducción, la usa; si no, muestra el texto hijo.
*/
export function Txt({ k, children, ...rest }) {
  const { t } = useI18n();
  const out = t(k);
  return <span {...rest}>{out === k ? children : out}</span>;
}
