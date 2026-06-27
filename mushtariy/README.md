# Mushtariy

## Sizning komponentlaringiz

| # | Komponent | Fayl yo'li (qayerda kod yozasiz) |
|---|-----------|----------------------------------|
| 1 | `Pagination.jsx` | `mushtariy/Pagination.jsx` |

### Qanday kod yozish kerak?
- Faylni oching: `mushtariy/Pagination.jsx`
- Ichidagi JSX kodni Tailwind CSS klasslari bilan yozing
- `useState`, `useEffect` kabi React hooklaridan foydalanish MUMKIN
- Faqat UI dizaynni chiroyli qiling

## Sizning sahifalaringiz

Bu sahifalarga kirib o'z komponentlaringizni ko'rish uchun:

| # | Sahifa | Route (brauzerga yozing) |
|---|--------|--------------------------|
| 1 | Blog | http://localhost:5173/blog |
| 2 | Article (Blog detail) | http://localhost:5173/blog/1 |

## Headerdan qanday topasiz (Navigatsiya)

| Sahifangiz | Headerda nima bosasiz |
|-----------|----------------------|
| Blog (`/blog`) | **БЛОГ** ni bosing |
| Article (`/blog/1`) | **БЛОГ** → ochilgan sahifada birinchi maqolani bosing |

## Yo'riqnoma
1. `npm run dev` terminalda ishga tushiring
2. Brauzerda http://localhost:5173/blog ni oching
3. O'z komponentingizni `mushtariy/` papkasidagi faylda tahrirlang
4. O'zgarishlarni ko'rish uchun sahifani qayta yuklang
