# SONRAKİ GÖREV

> Mevcut sprint: Öğrenci Deneyimi MVP

---

# Mevcut Hedef

Öğrenci deneyiminin ilk kullanılabilir sürümünü oluşturmak.

Backend çekirdeği büyük ölçüde tamamlandı.

Mevcut odak, modern ve sosyal medya esintili frontend deneyimini Spring Boot backend ile bağlamak.

Arayüz, UniEvents ürün vizyonuna uyacak şekilde modern, keşif odaklı ve medya öncelikli olmalıdır.

---

# Mevcut Durum

## Backend

✅ Kimlik doğrulama

✅ JWT

✅ Kayıt

✅ Giriş

✅ Rol yetkilendirme

✅ Etkinlik CRUD

✅ Etkinlik onayı

✅ Etkinlik kaydı

✅ Kayıt iptali

✅ Kayıtlarım

---

## Frontend

✅ Angular 21 projesi

✅ Kimlik doğrulama

✅ JWT saklama

✅ Auth interceptor

✅ Auth guard

✅ Role guard

✅ Giriş sayfası

✅ Kayıt sayfası

✅ EventService

✅ Signals

✅ Öğrenci etkinlikleri backend’den çekebiliyor

✅ Öğrenci akışı

✅ Etkinlik detayı

✅ Kayıt butonu

✅ Kayıtlarım

✅ Kayıt iptali

✅ Çıkış

---

# Mevcut Sprint

Sprint 003

Hedef:

Öğrencinin kayıt olduğu etkinlikleri yönetebilmesi.

---

# Görevler

## 1. Proje Temizliği

Öncelik: Yüksek

- [ ] Kalan `any` tiplerini kaldır
- [ ] Tüm API response tiplerini güçlü şekilde tanımla
- [ ] Klasör yapısını gözden geçir
- [ ] Gerekirse tutarsız dosya isimlerini düzelt
- [ ] Reusable UI component klasörünü güçlendir

---

## 2. Ortak Componentler

Öncelik: Yüksek

Tekrar kullanılabilir componentler oluştur.

- [ ] Navbar
- [x] Event Card
- [ ] Button
- [ ] Badge
- [ ] Empty State
- [ ] Loading component
- [x] Search Bar
- [x] Category Chips
- [ ] Toast
- [ ] Dialog

Hiçbir UI gereksiz yere kopyalanmamalıdır.

---

## 3. Öğrenci Akışı

Öncelik: Yüksek

Ana keşif sayfasını güçlendir.

Gereksinimler:

- [ ] Hero section
- [ ] Featured Event
- [x] Search
- [x] Categories
- [x] Scrolling layout
- [x] Responsive cards
- [ ] Modern animations

Backend endpoint:

GET /api/events

---

## 4. Etkinlik Kartı

Her kart şunları göstermelidir:

- [x] Kapak görseli
- [x] Başlık
- [x] Açıklama
- [x] Konum
- [x] Tarih
- [x] Kontenjan
- [x] Durum
- [x] Kayıt butonu

Kartlar ileride görsel galerileri destekleyebilmelidir.

---

## 5. Etkinlik Detayı

Detay sayfası oluşturuldu.

Gereksinimler:

- [x] Hero image
- [ ] Image carousel
- [x] Description
- [x] Location
- [x] Date
- [x] Capacity
- [x] Kayıt butonu
- [x] Success feedback
- [x] Error feedback
- [x] Duplicate registration kontrolü

Backend endpoint:

GET /api/events/{id}

---

## 6. Kayıt

Gereksinimler:

- [x] Kayıt butonu
- [x] Success feedback
- [x] Error feedback
- [x] Duplicate registration engelleme

Backend endpoint:

POST /api/events/{eventId}/register

---

## 7. Kayıtlarım

Gereksinimler:

- [x] Kayıt olunan etkinlikler
- [x] Kayıt iptali
- [x] Empty state
- [x] Profil özeti
- [x] Çıkış

Backend endpointleri:

GET /api/events/my-registrations

DELETE /api/events/{eventId}/registration

---

# Kodlama Kuralları

Her zaman:

✅ Signals kullan

✅ Interface kullan

✅ ApiResponse<T> kullan

✅ Reusable component kullan

✅ Componentleri küçük tut

Asla:

❌ `any` kullanma

❌ İş mantığını component içinde büyütme

❌ UI tekrarına izin verme

---

# UI Kuralları

Proje bir üniversite bilgi sistemi gibi görünmemelidir.

Deneyim modern bir ürün gibi hissettirmelidir.

Esin kaynakları:

- Instagram
- TikTok
- Linear
- Notion
- Stripe Dashboard

Kullanıcı uzun tablolar okumak yerine etkinlikleri keşfetmelidir.

---

# Gelecek Konular

Şimdilik uygulanmayacak.

Bunlar gelecek sprintlere aittir.

- Media Upload
- Multiple Images
- Video Support
- Club Profiles
- Follow Clubs
- Notifications
- AI Recommendations
- Analytics

---

# Tamamlanma Tanımı

Bu sprint şu durumda tamamlanır:

- Öğrenci giriş yapabilir
- Öğrenci modern etkinlik akışını görebilir
- Öğrenci etkinlik detayını açabilir
- Öğrenci etkinliğe kayıt olabilir
- Öğrenci kaydını iptal edebilir
- UI responsive olur
- `any` tipi kalmaz
- Componentler tekrar kullanılabilir olur
- Backend ve frontend tamamen bağlı olur

---

# Sonraki Sprint Önizlemesi

Sprint 004

Hedef:

Etkinlikleri medya açısından daha zengin hale getirmek.

Özellikler:

- Etkinlik görselleri
- Etkinlik videoları
- Galeri
- Carousel
- Swipe deneyimi
- Media upload

Backend:

EventMedia entity

Frontend:

Media componentleri

Carousel

Image viewer

Video player
