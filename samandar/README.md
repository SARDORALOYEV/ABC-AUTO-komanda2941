# Samandar

## Sizning komponentlaringiz

| # | Komponent | Fayl yo'li (qayerda kod yozasiz) |
|---|-----------|----------------------------------|
| 1 | `SavedCarsGrid.jsx` | `samandar/SavedCarsGrid.jsx` |
| 2 | `VehicleListCard.jsx` | `samandar/VehicleListCard.jsx` |
| 3 | `VehicleGridCard.jsx` | `samandar/VehicleGridCard.jsx` |

### Qanday kod yozish kerak?
- Faylni oching: `samandar/VehicleGridCard.jsx` (yoki boshqa komponent)
- Ichidagi JSX kodni Tailwind CSS klasslari bilan yozing
- `useState`, `useEffect` kabi React hooklaridan foydalanish MUMKIN
- Faqat UI dizaynni chiroyli qiling

## Sizning sahifalaringiz

Bu sahifalarga kirib o'z komponentlaringizni ko'rish uchun:

| # | Sahifa | Route (brauzerga yozing) |
|---|--------|--------------------------|
| 1 | Express Credit | http://localhost:5173/express-credit |
| 2 | Installment | http://localhost:5173/installment |
| 3 | Taxi Credit | http://localhost:5173/taxi-credit |
| 4 | Taxi Credit Detail | http://localhost:5173/taxi-credit/1 |

## Headerdan qanday topasiz (Navigatsiya)

| Sahifangiz | Headerda nima bosasiz |
|-----------|----------------------|
| Express Credit (`/express-credit`) | **КРЕДИТ И РАССРОЧКА** ustiga hover → dropdown dan **Экспресс-кредит** |
| Installment (`/installment`) | **КРЕДИТ И РАССРОЧКА** ustiga hover → dropdown dan **Рассрочка** |
| Taxi Credit (`/taxi-credit`) | **ТАКСИ В КРЕДИТ** ni bosing |
| Taxi Credit Detail (`/taxi-credit/1`) | **ТАКСИ В КРЕДИТ** → ochilgan sahifada birinchi e'lonni bosing |

## Yo'riqnoma
1. `npm run dev` terminalda ishga tushiring
2. Brauzerda http://localhost:5173/express-credit ni oching
3. O'z komponentlaringizni `samandar/` papkasidagi fayllarda tahrirlang
4. O'zgarishlarni ko'rish uchun sahifani qayta yuklang
