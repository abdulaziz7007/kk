# Meni kechir ❤️

Iliq qog‘oz va eski maktub uslubidagi, mobilga mos uzr so‘rash sayti. Next.js App Router, TypeScript, Tailwind CSS v4 va Framer Motion bilan yozilgan.

## Ishga tushirish

1. Node.js 20.9 yoki undan yangisini o‘rnating: https://nodejs.org/
2. Terminalda loyiha papkasiga kiring.
3. Quyidagilarni bajaring:

```bash
npm install
npm run dev
```

4. Brauzerda http://localhost:3000 manzilini oching.

## Build tekshiruvi

```bash
npm run build
npm start
```

## O‘zgartirish

- Rasmlar: `public/images/` (o‘z rasmlaringizni qo‘yib, `src/app/page.tsx` dagi `IMG` ro‘yxatini yangilang)
- Asosiy matnlar va sahifalar: `src/app/page.tsx`
- Ranglar va responsive dizayn: `src/app/globals.css`
- Sahifa nomi va tavsifi: `src/app/layout.tsx`

## Internetga joylash

GitHub’ga yuklab, Vercel’da import qiling. Framework sifatida Next.js aniqlanadi; build buyrug‘i `npm run build`, output sozlamasini odatda bo‘sh qoldiring.

Bu loyiha server yoki ma’lumotlar bazasini talab qilmaydi. Tugmalar, maktubni ochish, modal oyna va animatsiyalar brauzerda ishlaydi.
