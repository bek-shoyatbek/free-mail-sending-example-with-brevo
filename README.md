# Brevo orqali bepul mail jo'natish

Bu loyiha NestJS yordamida Brevo SMTP serveridan foydalanib bepul mail xabarlarni jo'natish imkoniyatini ko'rsatadi. Bu ayniqsa foydalanuvchilarni ro'yxatdan o'tkazish jarayonida tasdiqlash kodlarini jo'natish uchun foydalidir.

## Loyiha haqida

Google'ning bepul mail jo'natish xizmati yopilganidan so'ng, ko'plab dasturchilar alternative yechimlar qidirmoqda. Ushbu loyiha Brevo SMTP serveridan foydalanib, bepul va ishonchli tarzda mail xabarlarni jo'natish imkoniyatini taqdim etadi.

## O'rnatish

1. Loyihani clone qiling
2. Kerakli packages'larni o'rnating:

```bash
npm install
```

3. `.env.example` faylidan nusxa olib, `.env` fayl yarating
4. `.env` fayliga o'z sozlamalaringizni kiriting

## Muhit sozlamalari (.env)

```plaintext
# Ilova porti
APP_PORT=5400

# Brevo SMTP sozlamalari
BREVO_SMTP_KEY="your_brevo_smtp_key"
BREVO_LOGIN="your_brevo_login"
BREVO_SMTP_SERVER="smtp-relay.brevo.com"
SMTP_PORT=587

# Jo'natuvchi email manzili
MAIL_FROM="your_mail_sender"
```

### Brevo sozlamalarini olish

1. [Brevo](https://app.brevo.com) saytidan ro'yxatdan o'ting
2. [SMTP kalitlarini sozlash](https://app.brevo.com/settings/keys/smtp) bo'limiga o'ting
3. Yangi SMTP kalit yarating
4. Olingan ma'lumotlarni `.env` fayliga joylang

## Ishga tushirish

Loyihani ishga tushirish uchun quyidagi buyruqlardan foydalaning:

```bash
# Ishlab chiqish rejimida ishga tushirish
npm run start:dev

# Ishlab chiqarish rejimida build qilish
npm run build

# Ishlab chiqarish rejimida ishga tushirish
npm run start:prod

# Kod sifatini tekshirish
npm run lint
```

## API Hujjatlari

API hujjatlarini ko'rish uchun ilova ishga tushirilgandan so'ng quyidagi manzilga tashrif buyuring:

```
GET /api-docs
```

## Foydalanish

API orqali mail jo'natish uchun Swagger hujjatlaridan foydalaning. Hujjatlar orqali barcha mavjud endpointlar va ularning ishlash tartibini ko'rishingiz mumkin.

## Muhim eslatmalar

- Brevo'ning bepul tarifi kuniga 300 tagacha xabar jo'natish imkonini beradi
- Tasdiqlash kodlarini jo'natishda xavfsizlik choralarini ko'ring
- Production muhitida `.env` faylini git repozitoriyaga qo'shmaslik tavsiya etiladi

## Yordam

Qo'shimcha savol va takliflar uchun [Issues](https://github.com/your-username/your-repo/issues) bo'limidan foydalaning.
