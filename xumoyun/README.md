# Xumoyun

## Sizning komponentlaringiz

| # | Komponent | Fayl yo'li (qayerda kod yozasiz) |
|---|-----------|----------------------------------|
| 1 | `BlogHome.jsx` | `xumoyun/BlogHome.jsx` |
| 2 | `HeroBanner.jsx` | `xumoyun/HeroBanner.jsx` |
| 3 | `MediaGallery.jsx` | `xumoyun/MediaGallery.jsx` |

### Qanday kod yozish kerak?
- Faylni oching: `xumoyun/BlogHome.jsx` (yoki boshqa komponent)
- Ichidagi JSX kodni Tailwind CSS klasslari bilan yozing
- `useState`, `useEffect` kabi React hooklaridan foydalanish MUMKIN
- Faqat UI dizaynni chiroyli qiling

## Sizning sahifalaringiz

Bu sahifalarga kirib o'z komponentlaringizni ko'rish uchun:

| # | Sahifa | Route (brauzerga yozing) |
|---|--------|--------------------------|
| 1 | Trim | http://localhost:5173/trim |
| 2 | Used Cars | http://localhost:5173/used-cars |
| 3 | Used Car Detail | http://localhost:5173/used-cars/1 |
| 4 | Favorites | http://localhost:5173/favorites |

## Headerdan qanday topasiz (Navigatsiya)

| Sahifangiz | Headerda nima bosasiz |
|-----------|----------------------|
| Trim (`/trim`) | **КАТАЛОГ АВТО** ustiga hover → dropdown dan **Комплектации** |
| Used Cars (`/used-cars`) | **АВТО С ПРОБЕГОМ** ni bosing |
| Used Car Detail (`/used-cars/1`) | **АВТО С ПРОБЕГОМ** → ochilgan sahifada birinchi e'lonni bosing |
| Favorites (`/favorites`) | Yuqori o'ngda ❤️ **иконка**ни bosing |

## Yo'riqnoma
1. `npm run dev` terminalda ishga tushiring
2. Brauzerda http://localhost:5173/trim ni oching
3. O'z komponentlaringizni `xumoyun/` papkasidagi fayllarda tahrirlang
4. O'zgarishlarni ko'rish uchun sahifani qayta yuklang
