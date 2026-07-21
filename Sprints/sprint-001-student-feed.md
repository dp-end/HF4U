# Sprint 001 — Öğrenci Keşif Akışı

**Süre:** 2 gün

---

# Sprint Hedefi

Öğrenci akışının ilk sürümünü oluşturmak.

Öğrenciler artık sıkıcı etkinlik listeleri görmemelidir.

Bunun yerine sosyal medya platformlarından ilham alan modern bir etkinlik keşif sayfası deneyimlemelidir.

---

# İş Hedefi

Öğrenci şunları yapabilmelidir:

- Giriş yapabilmeli
- Onaylanmış etkinlikleri keşfedebilmeli
- Etkinlikleri rahatça gezebilmeli
- Etkinliklerde arama yapabilmeli
- Modern bir arayüz deneyimlemeli

Uygulama bir üniversite bilgi sistemi yerine gerçek bir ürün gibi hissettirmeye başlamalıdır.

---

# Backend

Backend değişikliği gerekmez.

Mevcut API kullanılacaktır.

Endpoint:

GET /api/events

---

# Frontend Görevleri

## Proje Temizliği

- [ ] Kalan `any` tiplerini kaldır
- [ ] Her servisin güçlü tip kullandığından emin ol
- [ ] Klasör yapısını gözden geçir
- [ ] Signals kullanımını doğrula

## Ortak Componentler

Tekrar kullanılabilir componentler oluştur.

- [ ] Navbar
- [x] Event Card
- [x] Search Bar
- [x] Category Filter
- [ ] Empty State
- [ ] Loading Skeleton

## Öğrenci Akışı

- [x] Landing page
- [ ] Featured Event
- [x] Event Feed
- [x] Responsive Layout
- [x] Search Input
- [x] Category Chips

## UI

Verilen Figma ilhamı takip edilmelidir.

Gereksinimler:

- Büyük etkinlik kartları
- Modern boşluk düzeni
- Yuvarlatılmış köşeler
- Responsive yapı
- Yumuşak gölgeler
- Minimal tasarım

---

# Teknik Kurallar

- Angular Signals kullan.
- Standalone componentler kullan.
- Tekrar kullanılabilir componentler kullan.
- `any` kullanma.
- ApiResponse<T> kullan.
- Gereksiz CSS tekrarı yapma.

---

# Tamamlanma Tanımı

Öğrenci şunları yapabilir:

✅ Giriş yapabilir

✅ Etkinlik akışını görebilir

✅ Etkinliklerde arama yapabilir

✅ Responsive kartları gezebilir

Tüm veriler backend’den gelir.

Mock veri kullanılmaz.

---

# Teslim Çıktısı

Spring Boot backend’e bağlı modern öğrenci akışı.
