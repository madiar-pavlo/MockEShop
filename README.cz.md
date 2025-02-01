# The Mock E-Shop 🛒

**The Mock E-Shop** je projekt, který jsem vytvořil pomocí **React stacku**. Chtěl jsem si vyzkoušet moderní technologie a zároveň si zlepšit své dovednosti ve vývoji webových aplikací. Tento projekt ukazuje, co všechno umím:
- Pracovat s externími SDK
- Komunikovat s backendem
- Vytvářet backendovou logiku (pouze logika, backend je bez kódu díky Supabase)
- Přihlašovat uživatele pomocí přihlašovacích údajů nebo přes Google (OAuth)
- Validovat formuláře
- Implementovat filtry a nekonečný scroll pomocí RTK Query

---

## Jak to funguje?
1. Rozhraní je jednoduché a intuitivní. Stačí se **přihlásit**, abyste mohli vyzkoušet všechny funkce Mock E-Shopu. 🔑

---

## Co plánuju dál?
1. Přesunout projekt na **Next.js** – chci vyzkoušet jeho výhody.
2. Přepsat a lépe organizovat kód (některé komponenty nejsou úplně "čisté").
3. Možná přejdu z RTK Query na **Tanstack Query** – uvidím, co bude lepší.
4. Vytvořit Redux slice pro složitější logiku rozhraní, místo abych používal React Context API.
5. Lokalizace: Přidat podporu pro více jazyků (například angličtinu a češtinu), aby byla platforma dostupnější pro širší publikum.

---

## A co dlouhodobě?
1. Chci si vytvořit vlastní backend pro Mock E-Shop. Zvažuji JavaScript backend framework, Javu nebo C#. Ještě se rozhodnu. 😊

---

## Podrobnější popis

### Domovská stránka
1. **Úvodní sekce (Hero Section)** – vítá uživatele a představuje projekt.
2. **Náhled produktů** – ukazuje, jaké produkty může Mock E-Shop nabízet.
3. **Sekce funkcí** – popisuje, co všechno tento e-shop umí.

---

### Produkty

#### Stránka katalogu
1. **Filtry**:
   - Uložení filtrů přímo v URL – můžete sdílet odkaz s vybranými filtry.
   - Vyhledávací pole.
   - Nastavení cenového rozsahu.
   - Výběr kategorie.
   - ***Plánované funkce***:
     - Filtrování podle hodnocení produktů.
2. **Nekonečný scroll s produkty**:
   - Během načítání se zobrazuje "kostra" (skeleton).
   - Po nastavení filtrů se zobrazí normální seznam produktů.
   - **Karta produktu**:
     - Obrázky produktů se zobrazují v posuvníku (použil jsem **Swiper**). Zaměřil jsem se hlavně na logiku, vlastní UI mám v jiném projektu.

#### Stránka produktu
1. ID produktu se předává přes parametry `react-router`.
2. **Výběr barvy a velikosti**.
3. **Počet kusů**:
   - Maximální počet závisí na vybrané variantě a velikosti.
4. ***Plánované funkce***:
   - **Recenze**:
     - Uživatelé mohou psát recenze nebo komentáře.
     - Lajkování a odpovídání na komentáře ostatních.

---

### Košík
1. **Ikona košíku** – ukazuje, kolik produktů máte v košíku, aniž byste ho museli otevřít.
2. Zobrazuje položky, které jste přidali do košíku.
3. Můžete odstranit položky, které už nechcete.
4. Zobrazuje celkovou cenu.

---

### Uživatel

#### Přihlašovací stránka
1. Validace přihlašovacích údajů.
2. Po registraci vám přijde potvrzovací e-mail.
3. Přihlášení nebo registrace přes **Google (OAuth)**.
4. ***Plánované funkce***:
   - Po přihlášení přesměrování na stránku s čekáním na potvrzení – chci přidat **WebSockets**, aby to bylo v reálném čase.
   - Možnost obnovení hesla.

#### Profilová stránka
1. Zobrazuje vaši fotku, pokud jste se přihlásili přes **Google**.
2. Zobrazuje váš e-mail.
3. Zobrazuje vaše jméno, pokud jste se přihlásili přes **Google**.
4. **Historie objednávek** – můžete si prohlédnout, co jste si koupili a za kolik.
5. ***Plánované funkce***:
   - **Historie komentářů a recenzí**.
   - **Oblíbené nebo uložené produkty**.
   - Možná přidání dodacích údajů (číslo domu, adresa), ale ještě nevím.

---

### Objednávka

#### Stránka potvrzení objednávky
1. Formulář pro zadání platebních údajů – validace **číslo karty**, **DD/MM** a **CVV**.
2. Zobrazuje položky v košíku.

#### Stránka informací o objednávce
1. Zobrazuje všechny necitlivé informace o objednávce (neukládám údaje o kartě – to je nelegální) a položky v košíku.

---

Tento projekt je stále ve vývoji, a já se těším, jak ho budu dál vylepšovat! 🚀 Pokud máte nějaké připomínky nebo nápady, klidně mi napište nebo přispějte. Budu rád za každou zpětnou vazbu! 😊