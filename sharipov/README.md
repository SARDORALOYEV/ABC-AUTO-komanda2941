# Sharipov

## Sizning komponentlaringiz

| # | Komponent | Fayl yo'li (qayerda kod yozasiz) |
|---|-----------|----------------------------------|
| 1 | `Navbar.jsx` | `sharipov/Navbar.jsx` |
| 2 | `AuthModal.jsx` | `sharipov/AuthModal.jsx` |
| 3 | `CompareMatrix.jsx` | `sharipov/CompareMatrix.jsx` |

### Qanday kod yozish kerak?
- Faylni oching: `sharipov/Navbar.jsx` (yoki boshqa komponent)
- Ichidagi JSX kodni Tailwind CSS klasslari bilan yozing
- `useState`, `useEffect` kabi React hooklaridan foydalanish MUMKIN
- Faqat UI dizaynni chiroyli qiling

## Sizning sahifalaringiz

Bu sahifalarga kirib o'z komponentlaringizni ko'rish uchun:

| # | Sahifa | Route (brauzerga yozing) |
|---|--------|--------------------------|
| 1 | Home | http://localhost:5173/ |
| 2 | Catalog | http://localhost:5173/catalog |
| 3 | Brand | http://localhost:5173/brand |
| 4 | Model | http://localhost:5173/model |

**MUHIM:** Sizning `Navbar.jsx` komponentingiz **barcha sahifalarning yuqori qismida** ko'rinadi!

## Headerdan qanday topasiz (Navigatsiya)

| Sahifangiz | Headerda nima bosasiz |
|-----------|----------------------|
| Home (`/`) | **ABC AUTO** logotipini bosing |
| Catalog (`/catalog`) | **КАТАЛОГ АВТО** → ustiga bosish yoki yuqorida **Подбор авто** |
| Brand (`/brand`) | **КАТАЛОГ АВТО** ustiga hover → dropdown dan **Бренды** |
| Model (`/model`) | **КАТАЛОГ АВТО** ustiga hover → dropdown dan **Модели** |

## Yo'riqnoma
1. `npm run dev` terminalda ishga tushiring
2. Brauzerda http://localhost:5173/ ni oching
3. O'z komponentlaringizni `sharipov/` papkasidagi fayllarda tahrirlang
4. O'zgarishlarni ko'rish uchun sahifani qayta yuklang

**MUHIM:** Sizning `Navbar.jsx` komponentingiz barcha sahifalarning yuqori qismida ko'rinadi!
