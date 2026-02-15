// ===== LANGUAGE DATA =====
let currentLang = "ru";

// ===== PRODUCTS DATA (8 products, bilingual) =====
const products = [
  {
    id: 1,
    image: "images/products/SERĂ_400×250×200cm.png",
    badge: { ru: "Хит продаж", ro: "Bestseller" },
    badgeClass: "",
    name: { ru: "EcoSera 4.0 x 2.5m", ro: "EcoSera 4.0 x 2.5m" },
    shortSpecs: {
      ru: "4.0 x 2.5 м \u2022 Каркас 1.2 мм \u2022 Поликарбонат 4мм",
      ro: "4.0 x 2.5 m \u2022 Cadru 1.2 mm \u2022 Policarbonat 4mm",
    },
    priceOld: { ru: "12 500 lei", ro: "12 500 lei" },
    priceCurrent: { ru: "9 900 lei", ro: "9 900 lei" },
    priceValue: 9900,
    specs: {
      ru: [
        "<strong>Размер:</strong> 4.0 x 2.5 м (10 м\u00b2)",
        "<strong>Каркас:</strong> оцинкованная сталь, 1.2 мм",
        "<strong>Покрытие:</strong> поликарбонат 4 мм с UV-защитой",
        "<strong>Высота:</strong> 2.0 м",
        "<strong>Шаг дуг:</strong> 65 см",
        "<strong>Нагрузка:</strong> до 150 кг/м\u00b2 снега",
      ],
      ro: [
        "<strong>Dimensiune:</strong> 4.0 x 2.5 m (10 m\u00b2)",
        "<strong>Cadru:</strong> o\u021bel galvanizat, 1.2 mm",
        "<strong>Acoperire:</strong> policarbonat 4 mm cu protec\u021bie UV",
        "<strong>\u00cenaltime:</strong> 2.0 m",
        "<strong>Pasul arcurilor:</strong> 65 cm",
        "<strong>Sarcina:</strong> p\u00e2na la 150 kg/m\u00b2 zapada",
      ],
    },
    kit: {
      ru: [
        "Каркас в сборе",
        "Поликарбонатные панели",
        "1 дверь + 1 форточка",
        "Комплект креплений",
        "Инструкция по сборке",
      ],
      ro: [
        "Cadru asamblat",
        "Panouri policarbonat",
        "1 usa + 1 fereastra",
        "Set de fixare",
        "Instruc\u021biuni de asamblare",
      ],
    },
    bonus: {
      ru: "БОНУС: система капельного полива",
      ro: "BONUS: sistem de irigare prin pic\u0103rare",
    },
  },
  {
    id: 2,
    image: "images/products/SERĂ_400×300×200cm.png",
    badge: { ru: "Популярный", ro: "Popular" },
    badgeClass: "popular",
    name: { ru: "EcoSera 4.0 x 3.0m", ro: "EcoSera 4.0 x 3.0m" },
    shortSpecs: {
      ru: "4.0 x 3.0 м \u2022 Каркас 1.2 мм \u2022 Поликарбонат 4мм",
      ro: "4.0 x 3.0 m \u2022 Cadru 1.2 mm \u2022 Policarbonat 4mm",
    },
    priceOld: { ru: "18 500 lei", ro: "18 500 lei" },
    priceCurrent: { ru: "14 900 lei", ro: "14 900 lei" },
    priceValue: 14900,
    specs: {
      ru: [
        "<strong>Размер:</strong> 4.0 x 3.0 м (12 м\u00b2)",
        "<strong>Каркас:</strong> оцинкованная сталь, 1.2 мм",
        "<strong>Покрытие:</strong> поликарбонат 4 мм с UV-защитой",
        "<strong>Высота:</strong> 2.0 м",
        "<strong>Шаг дуг:</strong> 65 см",
        "<strong>Нагрузка:</strong> до 160 кг/м\u00b2 снега",
      ],
      ro: [
        "<strong>Dimensiune:</strong> 4.0 x 3.0 m (12 m\u00b2)",
        "<strong>Cadru:</strong> o\u021bel galvanizat, 1.2 mm",
        "<strong>Acoperire:</strong> policarbonat 4 mm cu protec\u021bie UV",
        "<strong>\u00cenaltime:</strong> 2.0 m",
        "<strong>Pasul arcurilor:</strong> 65 cm",
        "<strong>Sarcina:</strong> p\u00e2na la 160 kg/m\u00b2 zapada",
      ],
    },
    kit: {
      ru: [
        "Каркас в сборе",
        "Поликарбонатные панели",
        "2 двери + 2 форточки",
        "Комплект креплений и уплотнителей",
        "Инструкция по сборке",
      ],
      ro: [
        "Cadru asamblat",
        "Panouri policarbonat",
        "2 usi + 2 ferestre",
        "Set de fixare si garnituri",
        "Instruc\u021biuni de asamblare",
      ],
    },
    bonus: {
      ru: "БОНУС: система капельного полива",
      ro: "BONUS: sistem de irigare prin pic\u0103rare",
    },
  },
  {
    id: 3,
    image: "images/products/SERĂ_450×300×200cm.png",
    badge: null,
    badgeClass: "",
    name: { ru: "EcoSera 4.5 x 3.0m", ro: "EcoSera 4.5 x 3.0m" },
    shortSpecs: {
      ru: "4.5 x 3.0 м \u2022 Каркас 1.2 мм \u2022 Поликарбонат 4мм",
      ro: "4.5 x 3.0 m \u2022 Cadru 1.2 mm \u2022 Policarbonat 4mm",
    },
    priceOld: { ru: "24 500 lei", ro: "24 500 lei" },
    priceCurrent: { ru: "19 900 lei", ro: "19 900 lei" },
    priceValue: 19900,
    specs: {
      ru: [
        "<strong>Размер:</strong> 4.5 x 3.0 м (13.5 м\u00b2)",
        "<strong>Каркас:</strong> оцинкованная сталь, 1.2 мм",
        "<strong>Покрытие:</strong> поликарбонат 4 мм с UV-защитой",
        "<strong>Высота:</strong> 2.0 м",
        "<strong>Шаг дуг:</strong> 65 см",
        "<strong>Нагрузка:</strong> до 160 кг/м\u00b2 снега",
      ],
      ro: [
        "<strong>Dimensiune:</strong> 4.5 x 3.0 m (13.5 m\u00b2)",
        "<strong>Cadru:</strong> o\u021bel galvanizat, 1.2 mm",
        "<strong>Acoperire:</strong> policarbonat 4 mm cu protec\u021bie UV",
        "<strong>\u00cenaltime:</strong> 2.0 m",
        "<strong>Pasul arcurilor:</strong> 65 cm",
        "<strong>Sarcina:</strong> p\u00e2na la 160 kg/m\u00b2 zapada",
      ],
    },
    kit: {
      ru: [
        "Каркас в сборе",
        "Поликарбонатные панели",
        "2 двери + 2 форточки",
        "Комплект креплений и уплотнителей",
        "Инструкция и видео",
      ],
      ro: [
        "Cadru asamblat",
        "Panouri policarbonat",
        "2 usi + 2 ferestre",
        "Set de fixare si garnituri",
        "Instruc\u021biuni si video",
      ],
    },
    bonus: {
      ru: "БОНУС: капельный полив + винтовые соединения",
      ro: "BONUS: irigare prin pic\u0103rare + conexiuni cu \u0219uruburi",
    },
  },
  {
    id: 4,
    image: "images/products/SERĂ_500×250×200cm.png",
    badge: null,
    badgeClass: "",
    name: { ru: "EcoSera 5.0 x 2.5m", ro: "EcoSera 5.0 x 2.5m" },
    shortSpecs: {
      ru: "5.0 x 2.5 м \u2022 Усиленный каркас \u2022 Поликарбонат 6мм",
      ro: "5.0 x 2.5 m \u2022 Cadru ranforsat \u2022 Policarbonat 6mm",
    },
    priceOld: { ru: "29 000 lei", ro: "29 000 lei" },
    priceCurrent: { ru: "24 500 lei", ro: "24 500 lei" },
    priceValue: 24500,
    specs: {
      ru: [
        "<strong>Размер:</strong> 5.0 x 2.5 м (12.5 м\u00b2)",
        "<strong>Каркас:</strong> усиленная оцинкованная сталь, 1.5 мм",
        "<strong>Покрытие:</strong> поликарбонат 6 мм с UV-защитой",
        "<strong>Высота:</strong> 2.0 м",
        "<strong>Шаг дуг:</strong> 50 см (усиленный)",
        "<strong>Нагрузка:</strong> до 200 кг/м\u00b2 снега",
      ],
      ro: [
        "<strong>Dimensiune:</strong> 5.0 x 2.5 m (12.5 m\u00b2)",
        "<strong>Cadru:</strong> o\u021bel galvanizat ranforsat, 1.5 mm",
        "<strong>Acoperire:</strong> policarbonat 6 mm cu protec\u021bie UV",
        "<strong>\u00cenaltime:</strong> 2.0 m",
        "<strong>Pasul arcurilor:</strong> 50 cm (ranforsat)",
        "<strong>Sarcina:</strong> p\u00e2na la 200 kg/m\u00b2 zapada",
      ],
    },
    kit: {
      ru: [
        "Усиленный каркас в сборе",
        "Поликарбонат 6мм",
        "2 двери + 2 форточки",
        "Усиленные крепления",
        "Инструкция и видео",
      ],
      ro: [
        "Cadru ranforsat asamblat",
        "Policarbonat 6mm",
        "2 usi + 2 ferestre",
        "Fix\u0103ri ranforsate",
        "Instruc\u021biuni si video",
      ],
    },
    bonus: {
      ru: "БОНУС: капельный полив + винтовые соединения",
      ro: "BONUS: irigare prin pic\u0103rare + conexiuni cu \u0219uruburi",
    },
  },
  {
    id: 5,
    image: "images/products/SERĂ_600×300×200cm.png",
    badge: { ru: "Лучшая цена", ro: "Cel mai bun pre\u021b" },
    badgeClass: "",
    name: { ru: "EcoSera 6.0 x 3.0m", ro: "EcoSera 6.0 x 3.0m" },
    shortSpecs: {
      ru: "6.0 x 3.0 м \u2022 Усиленный каркас \u2022 Поликарбонат 6мм",
      ro: "6.0 x 3.0 m \u2022 Cadru ranforsat \u2022 Policarbonat 6mm",
    },
    priceOld: { ru: "35 000 lei", ro: "35 000 lei" },
    priceCurrent: { ru: "28 900 lei", ro: "28 900 lei" },
    priceValue: 28900,
    specs: {
      ru: [
        "<strong>Размер:</strong> 6.0 x 3.0 м (18 м\u00b2)",
        "<strong>Каркас:</strong> усиленная оцинкованная сталь, 1.5 мм",
        "<strong>Покрытие:</strong> поликарбонат 6 мм с UV-защитой",
        "<strong>Высота:</strong> 2.0 м",
        "<strong>Шаг дуг:</strong> 50 см",
        "<strong>Нагрузка:</strong> до 200 кг/м\u00b2 снега",
      ],
      ro: [
        "<strong>Dimensiune:</strong> 6.0 x 3.0 m (18 m\u00b2)",
        "<strong>Cadru:</strong> o\u021bel galvanizat ranforsat, 1.5 mm",
        "<strong>Acoperire:</strong> policarbonat 6 mm cu protec\u021bie UV",
        "<strong>\u00cenaltime:</strong> 2.0 m",
        "<strong>Pasul arcurilor:</strong> 50 cm",
        "<strong>Sarcina:</strong> p\u00e2na la 200 kg/m\u00b2 zapada",
      ],
    },
    kit: {
      ru: [
        "Усиленный каркас в сборе",
        "Поликарбонат 6мм",
        "2 двери + 4 форточки",
        "Усиленные крепления",
        "Инструкция и видео",
      ],
      ro: [
        "Cadru ranforsat asamblat",
        "Policarbonat 6mm",
        "2 usi + 4 ferestre",
        "Fix\u0103ri ranforsate",
        "Instruc\u021biuni si video",
      ],
    },
    bonus: {
      ru: "БОНУС: капельный полив + винтовые соединения + семена",
      ro: "BONUS: irigare + conexiuni cu \u0219uruburi + semin\u021be",
    },
  },
  {
    id: 6,
    image: "images/products/SERĂ_800×300×200cm.png",
    badge: null,
    badgeClass: "",
    name: { ru: "EcoSera 8.0 x 3.0m", ro: "EcoSera 8.0 x 3.0m" },
    shortSpecs: {
      ru: "8.0 x 3.0 м \u2022 Усиленный каркас \u2022 Поликарбонат 6мм",
      ro: "8.0 x 3.0 m \u2022 Cadru ranforsat \u2022 Policarbonat 6mm",
    },
    priceOld: { ru: "42 000 lei", ro: "42 000 lei" },
    priceCurrent: { ru: "35 500 lei", ro: "35 500 lei" },
    priceValue: 35500,
    specs: {
      ru: [
        "<strong>Размер:</strong> 8.0 x 3.0 м (24 м\u00b2)",
        "<strong>Каркас:</strong> усиленная оцинкованная сталь, 1.5 мм",
        "<strong>Покрытие:</strong> поликарбонат 6 мм с UV-защитой",
        "<strong>Высота:</strong> 2.0 м",
        "<strong>Шаг дуг:</strong> 50 см",
        "<strong>Нагрузка:</strong> до 200 кг/м\u00b2 снега",
      ],
      ro: [
        "<strong>Dimensiune:</strong> 8.0 x 3.0 m (24 m\u00b2)",
        "<strong>Cadru:</strong> o\u021bel galvanizat ranforsat, 1.5 mm",
        "<strong>Acoperire:</strong> policarbonat 6 mm cu protec\u021bie UV",
        "<strong>\u00cenaltime:</strong> 2.0 m",
        "<strong>Pasul arcurilor:</strong> 50 cm",
        "<strong>Sarcina:</strong> p\u00e2na la 200 kg/m\u00b2 zapada",
      ],
    },
    kit: {
      ru: [
        "Усиленный каркас в сборе",
        "Поликарбонат 6мм",
        "2 двери + 4 форточки",
        "Усиленные крепления",
        "Инструкция и видео",
      ],
      ro: [
        "Cadru ranforsat asamblat",
        "Policarbonat 6mm",
        "2 usi + 4 ferestre",
        "Fix\u0103ri ranforsate",
        "Instruc\u021biuni si video",
      ],
    },
    bonus: {
      ru: "БОНУС: полный комплект бонусов",
      ro: "BONUS: set complet de bonusuri",
    },
  },
  {
    id: 7,
    image: "images/products/SERĂ_1000×300×200cm.png",
    badge: { ru: "Премиум", ro: "Premium" },
    badgeClass: "popular",
    name: { ru: "EcoSera 10.0 x 3.0m", ro: "EcoSera 10.0 x 3.0m" },
    shortSpecs: {
      ru: "10.0 x 3.0 м \u2022 Премиум каркас \u2022 Поликарбонат 6мм",
      ro: "10.0 x 3.0 m \u2022 Cadru premium \u2022 Policarbonat 6mm",
    },
    priceOld: { ru: "52 000 lei", ro: "52 000 lei" },
    priceCurrent: { ru: "43 900 lei", ro: "43 900 lei" },
    priceValue: 43900,
    specs: {
      ru: [
        "<strong>Размер:</strong> 10.0 x 3.0 м (30 м\u00b2)",
        "<strong>Каркас:</strong> премиум оцинкованная сталь, 1.5 мм",
        "<strong>Покрытие:</strong> поликарбонат 6 мм с UV-защитой",
        "<strong>Высота:</strong> 2.0 м",
        "<strong>Шаг дуг:</strong> 50 см",
        "<strong>Нагрузка:</strong> до 220 кг/м\u00b2 снега",
      ],
      ro: [
        "<strong>Dimensiune:</strong> 10.0 x 3.0 m (30 m\u00b2)",
        "<strong>Cadru:</strong> o\u021bel galvanizat premium, 1.5 mm",
        "<strong>Acoperire:</strong> policarbonat 6 mm cu protec\u021bie UV",
        "<strong>\u00cenaltime:</strong> 2.0 m",
        "<strong>Pasul arcurilor:</strong> 50 cm",
        "<strong>Sarcina:</strong> p\u00e2na la 220 kg/m\u00b2 zapada",
      ],
    },
    kit: {
      ru: [
        "Премиум каркас в сборе",
        "Поликарбонат 6мм",
        "2 двери + 4 форточки",
        "Премиум крепления",
        "Инструкция и видео",
      ],
      ro: [
        "Cadru premium asamblat",
        "Policarbonat 6mm",
        "2 usi + 4 ferestre",
        "Fix\u0103ri premium",
        "Instruc\u021biuni si video",
      ],
    },
    bonus: {
      ru: "БОНУС: полный комплект бонусов + термометр",
      ro: "BONUS: set complet de bonusuri + termometru",
    },
  },
  {
    id: 8,
    image: "images/products/SERĂ_1000×300×250cm.png",
    badge: null,
    badgeClass: "",
    name: {
      ru: "EcoSera 10.0 x 3.0m (High)",
      ro: "EcoSera 10.0 x 3.0m (High)",
    },
    shortSpecs: {
      ru: "10.0 x 3.0 м \u2022 Премиум каркас \u2022 Поликарбонат 6мм",
      ro: "10.0 x 3.0 m \u2022 Cadru premium \u2022 Policarbonat 6mm",
    },
    priceOld: { ru: "62 000 lei", ro: "62 000 lei" },
    priceCurrent: { ru: "52 900 lei", ro: "52 900 lei" },
    priceValue: 52900,
    specs: {
      ru: [
        "<strong>Размер:</strong> 10.0 x 3.0 м (30 м\u00b2)",
        "<strong>Каркас:</strong> премиум оцинкованная сталь, 1.5 мм",
        "<strong>Покрытие:</strong> поликарбонат 6 мм с UV-защитой",
        "<strong>Высота:</strong> 2.5 м",
        "<strong>Шаг дуг:</strong> 50 см",
        "<strong>Нагрузка:</strong> до 220 кг/м\u00b2 снега",
      ],
      ro: [
        "<strong>Dimensiune:</strong> 10.0 x 3.0 m (30 m\u00b2)",
        "<strong>Cadru:</strong> o\u021bel galvanizat premium, 1.5 mm",
        "<strong>Acoperire:</strong> policarbonat 6 mm cu protec\u021bie UV",
        "<strong>\u00cenaltime:</strong> 2.5 m",
        "<strong>Pasul arcurilor:</strong> 50 cm",
        "<strong>Sarcina:</strong> p\u00e2na la 220 kg/m\u00b2 zapada",
      ],
    },
    kit: {
      ru: [
        "Премиум каркас в сборе",
        "Поликарбонат 6мм",
        "2 двери + 6 форточек",
        "Премиум крепления",
        "Инструкция и видео",
      ],
      ro: [
        "Cadru premium asamblat",
        "Policarbonat 6mm",
        "2 usi + 6 ferestre",
        "Fix\u0103ri premium",
        "Instruc\u021biuni si video",
      ],
    },
    bonus: {
      ru: "БОНУС: полный комплект бонусов + термометр + перчатки",
      ro: "BONUS: set complet de bonusuri + termometru + m\u0103nu\u0219i",
    },
  },
];

// ===== RENDER CATALOG =====
function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  const detailText = currentLang === "ru" ? "Подробнее" : "Detalii";
  const orderText = currentLang === "ru" ? "Заказать" : "Comanda";

  grid.innerHTML = products
    .map(
      (p) => `
    <div class="catalog-card" onclick="openProductModal(${p.id})">
     
      <div class="catalog-card-image">
        <img src="${p.image}" alt="${p.name[currentLang]}" loading="lazy">
      </div>
       ${p.badge ? `<div class="catalog-card-badge ${p.badgeClass}">${p.badge[currentLang]}</div>` : ""}
      <div class="catalog-card-body">
        <h3>${p.name[currentLang]}</h3>
        <p class="catalog-specs">${p.shortSpecs[currentLang]}</p>
        <div class="catalog-price">
          <span class="price-old">${p.priceOld[currentLang]}</span>
          <span class="price-current">${p.priceCurrent[currentLang]}</span>
        </div>
        <div class="catalog-card-actions">
          <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); openProductModal(${p.id})">${detailText}</button>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); openOrderModal('${p.name[currentLang]} \u2014 ${p.priceCurrent[currentLang]}')">${orderText}</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  // Re-init scroll animations for new cards
  initScrollAnimations();
}

// ===== POPULATE ORDER SELECT =====
function populateOrderSelect() {
  const select = document.getElementById("model");
  const placeholder =
    currentLang === "ru" ? "Выберите модель" : "Selecta\u021bi modelul";
  select.innerHTML = `<option value="">${placeholder}</option>`;
  products.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.name[currentLang];
    opt.dataset.price = p.priceValue;
    opt.textContent = `${p.name[currentLang]} \u2014 ${p.priceCurrent[currentLang]}`;
    select.appendChild(opt);
  });
}

// ===== UPDATE PRICE FIELD =====
function updateOrderPrice() {
  const select = document.getElementById("model");
  const priceInput = document.getElementById("orderPrice");
  const selectedOption = select.options[select.selectedIndex];

  if (selectedOption && selectedOption.dataset.price) {
    priceInput.value = selectedOption.dataset.price;
    console.log("Updated order price:", priceInput.value);
  } else {
    priceInput.value = "";
  }
}

document.getElementById("model").addEventListener("change", updateOrderPrice);

// ===== PRODUCT DETAIL MODAL =====
function openProductModal(id) {
  const p = products.find((pr) => pr.id === id);
  if (!p) return;

  const kitLabel = currentLang === "ru" ? "Комплектация:" : "Echipare:";
  const orderBtn = currentLang === "ru" ? "Заказать" : "Comanda";
  const callBtn = currentLang === "ru" ? "Позвонить" : "Suna acum";

  const modal = document.getElementById("productModal");
  const body = document.getElementById("productModalBody");

  body.innerHTML = `
    <div class="product-modal-grid">
      <div class="product-modal-image">
        <img src="${p.image}" alt="${p.name[currentLang]}">
      </div>
      <div class="product-modal-info">
        <h2>${p.name[currentLang]}</h2>
        <p class="catalog-specs">${p.shortSpecs[currentLang]}</p>
        <div class="catalog-price">
          <span class="price-old">${p.priceOld[currentLang]}</span>
          <span class="price-current">${p.priceCurrent[currentLang]}</span>
        </div>
        <ul class="product-modal-specs">
          ${p.specs[currentLang].map((s) => `<li>${s}</li>`).join("")}
        </ul>
        <p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:8px;font-weight:600;">${kitLabel}</p>
        <ul class="product-modal-specs">
          ${p.kit[currentLang].map((k) => `<li>${k}</li>`).join("")}
          <li class="bonus">${p.bonus[currentLang]}</li>
        </ul>
        <div class="product-modal-actions">
          <button class="btn btn-primary" onclick="closeProductModal(); openOrderModal('${p.name[currentLang]} \u2014 ${p.priceCurrent[currentLang]}')">${orderBtn}</button>
          <a href="tel:+37369123456" class="btn btn-call">${callBtn}</a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ===== ORDER MODAL =====
function openOrderModal(productName) {
  const modal = document.getElementById("orderModal");
  const form = document.getElementById("orderForm");
  const success = document.getElementById("orderSuccess");
  const error = document.getElementById("orderError");

  // Reset form
  form.style.display = "flex";
  success.style.display = "none";
  if (error) error.style.display = "none";
  form.reset();

  // Populate select
  populateOrderSelect();

  // Pre-select product if provided
  if (productName) {
    const select = document.getElementById("model");
    const name = productName.split(" \u2014 ")[0];
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === name) {
        select.selectedIndex = i;
        break;
      }
    }
  }

  // Update hidden price field
  updateOrderPrice();

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  const modal = document.getElementById("orderModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ===== LANGUAGE SWITCHER =====
function switchLanguage(lang) {
  currentLang = lang;

  // Update lang buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update all elements with data-ru / data-ro
  document.querySelectorAll("[data-" + lang + "]").forEach((el) => {
    const text = el.getAttribute("data-" + lang);
    if (text) {
      // Check if element has children that should be preserved (like links)
      if (el.tagName === "H1" || el.classList.contains("form-note")) {
        el.innerHTML = text;
      } else if (
        el.children.length === 0 ||
        el.tagName === "SPAN" ||
        el.tagName === "STRONG" ||
        el.tagName === "P" ||
        el.tagName === "H2" ||
        el.tagName === "H3" ||
        el.tagName === "A" ||
        el.tagName === "LI" ||
        el.tagName === "LABEL" ||
        el.tagName === "BUTTON" ||
        el.tagName === "OPTION"
      ) {
        // For elements that might have HTML content (like bold, links)
        if (text.includes("<")) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-placeholder-" + lang + "]").forEach((el) => {
    el.placeholder = el.getAttribute("data-placeholder-" + lang);
  });

  // Update html lang
  document.documentElement.lang = lang === "ru" ? "ru" : "ro";

  // Re-render catalog
  renderCatalog();

  // Re-populate order select
  populateOrderSelect();
}

// ===== RESET ORDER FORM =====
function resetOrderForm() {
  const form = document.getElementById("orderForm");
  const success = document.getElementById("orderSuccess");
  const error = document.getElementById("orderError");

  form.style.display = "flex";
  success.style.display = "none";
  error.style.display = "none";
  form.reset();

  // Reset error classes
  form.querySelectorAll(".error").forEach((el) => el.classList.remove("error"));

  // Reset submit button
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
  }
}

// ===== BURGER MENU =====
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileNav.classList.toggle("open");
});

document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    mobileNav.classList.remove("open");
  });
});

// ===== HEADER SCROLL =====
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===== TABS =====
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
const productMainImage = document.querySelector(".product-image img");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = "tab-" + tab.dataset.tab;
    const newImage = tab.dataset.image;

    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(targetId).classList.add("active");

    // Switch image if data-image is provided
    if (newImage && productMainImage) {
      productMainImage.src = newImage;
    }
  });
});

// ===== ACCORDION =====
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const isOpen = item.classList.contains("open");

    document.querySelectorAll(".accordion-item").forEach((i) => {
      i.classList.remove("open");
    });

    if (!isOpen) {
      item.classList.add("open");
    }
  });
});

// ===== ORDER FORM =====
const orderForm = document.getElementById("orderForm");
const orderSuccess = document.getElementById("orderSuccess");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const siteUrl = window.location.href;
  let valid = true;
  console.log(siteUrl);
  name.classList.remove("error");
  phone.classList.remove("error");

  if (!name.value.trim()) {
    name.classList.add("error");
    valid = false;
  }

  if (!phone.value.trim() || phone.value.replace(/\D/g, "").length < 8) {
    phone.classList.add("error");
    valid = false;
  }

  if (valid) {
    const submitBtn = orderForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Block button
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";
    submitBtn.innerHTML =
      currentLang === "ru" ? "Отправка..." : "Se trimite...";

    const price = document.getElementById("orderPrice").value;
    const priceInt = parseInt(String(price).replace(/[^\d]/g, ""), 10) || 0;

    // Collect data for AmoCRM
    const formData = {
      name: name.value.trim(),
      phone: phone.value.trim(),
      model: document.getElementById("model").value,
      price: priceInt,
      siteUrl: siteUrl,
    };

    console.log("Sending to AmoCRM:", formData);

    // Call our new backend API (using relative path)
    fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          console.error("Server error data:", data);
          throw new Error(data.error || "Network response was not ok");
        }
        return data;
      })
      .then((data) => {
        console.log("Success:", data);
        orderForm.style.display = "none";
        orderSuccess.style.display = "block";
        orderError.style.display = "none";
      })
      .catch((error) => {
        console.error("Error:", error);
        orderForm.style.display = "none";
        orderSuccess.style.display = "none";
        orderError.style.display = "block";
      })
      .finally(() => {
        // Small delay for UI and then reset button state if form still visible (shouldn't be)
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.style.opacity = "1";
          submitBtn.innerHTML = originalBtnText;
        }, 500);
      });
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu if open
      burger.classList.remove("active");
      mobileNav.classList.remove("open");
    }
  });
});

// ===== CLOSE MODALS ON OVERLAY CLICK =====
document.getElementById("productModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeProductModal();
});

document.getElementById("orderModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeOrderModal();
});

// ===== CLOSE MODALS ON ESC =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProductModal();
    closeOrderModal();
  }
});

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    ".catalog-card, .advantage-card, .reason-card, .review-card, .gallery-item",
  );

  animateElements.forEach((el, i) => {
    if (el.style.opacity === "1") return; // skip already animated
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.5s ease ${(i % 4) * 0.08}s, transform 0.5s ease ${(i % 4) * 0.08}s`;
    observer.observe(el);
  });
}

// ===== PHONE INPUT MASK =====
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");

  if (value.startsWith("373")) {
    value = value.substring(3);
  }

  if (value.length > 8) {
    value = value.substring(0, 8);
  }

  let formatted = "+373";
  if (value.length > 0) {
    formatted += " (" + value.substring(0, 2);
  }
  if (value.length >= 2) {
    formatted += ") " + value.substring(2, 5);
  }
  if (value.length >= 5) {
    formatted += "-" + value.substring(5, 8);
  }

  e.target.value = value.length > 0 ? formatted : "";
});

// ===== LANG SWITCHER EVENT =====
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    switchLanguage(btn.dataset.lang);
  });
});

// ===== INIT =====
renderCatalog();
populateOrderSelect();
