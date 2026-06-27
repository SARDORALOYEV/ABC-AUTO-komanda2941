# Dinislom

## Sizning komponentlaringiz

| # | Komponent | Fayl yo'li (qayerda kod yozasiz) |
|---|-----------|----------------------------------|
| 1 | `SellerCard.jsx` | `dinislom/SellerCard.jsx` |

### Qanday kod yozish kerak?
- Faylni oching: `dinislom/SellerCard.jsx`
- Ichidagi JSX kodni Tailwind CSS klasslari bilan yozing
- `useState`, `useEffect` kabi React hooklaridan foydalanish MUMKIN
- Faqat UI dizaynni chiroyli qiling

## Sizning sahifalaringiz

Bu sahifalarga kirib o'z komponentlaringizni ko'rish uchun:

| # | Sahifa | Route (brauzerga yozing) |
|---|--------|--------------------------|
| 1 | Comparison New | http://localhost:5173/comparison-new |
| 2 | Comparison Taxi | http://localhost:5173/comparison-taxi |

## Headerdan qanday topasiz (Navigatsiya)

| Sahifangiz | Headerda nima bosasiz |
|-----------|----------------------|
| Comparison New (`/comparison-new`) | O'ngdagi 📊 **иконка** ustiga hover → **Сравнение новых** |
| Comparison Taxi (`/comparison-taxi`) | O'ngdagi 📊 **иконка** ustiga hover → **Сравнение такси** |

## Yo'riqnoma
1. `npm run dev` terminalda ishga tushiring
2. Brauzerda http://localhost:5173/comparison-new ni oching
3. O'z komponentingizni `dinislom/` papkasidagi faylda tahrirlang
4. O'zgarishlarni ko'rish uchun sahifani qayta yuklang
