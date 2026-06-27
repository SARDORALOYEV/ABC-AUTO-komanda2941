# Shoxa

## Sizning komponentlaringiz

| # | Komponent | Fayl yo'li (qayerda kod yozasiz) |
|---|-----------|----------------------------------|
| 1 | `VehicleBasicInfoForm.jsx` | `shoxa/VehicleBasicInfoForm.jsx` |
| 2 | `FilterSidebar.jsx` | `shoxa/FilterSidebar.jsx` |
| 3 | `MyListingsTable.jsx` | `shoxa/MyListingsTable.jsx` |

### Qanday kod yozish kerak?
- Faylni oching: `shoxa/FilterSidebar.jsx` (yoki boshqa komponent)
- Ichidagi JSX kodni Tailwind CSS klasslari bilan yozing
- `useState`, `useEffect` kabi React hooklaridan foydalanish MUMKIN
- Faqat UI dizaynni chiroyli qiling

## Sizning sahifalaringiz

Bu sahifalarga kirib o'z komponentlaringizni ko'rish uchun:

| # | Sahifa | Route (brauzerga yozing) |
|---|--------|--------------------------|
| 1 | Collections | http://localhost:5173/collections |
| 2 | Collection Detail | http://localhost:5173/collections/1 |
| 3 | Family Car | http://localhost:5173/family-car |
| 4 | First Car | http://localhost:5173/first-car |

## Yo'riqnoma
1. `npm run dev` terminalda ishga tushiring
2. Brauzerda http://localhost:5173/collections ni oching
3. O'z komponentlaringizni `shoxa/` papkasidagi fayllarda tahrirlang
4. O'zgarishlarni ko'rish uchun sahifani qayta yuklang
