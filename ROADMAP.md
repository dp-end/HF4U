# UniEvents Yol Haritası

> Ürün geliştirme yol haritası

---

# Mevcut Sürüm

Sürüm: MVP (0.1)

Mevcut durum:

🟢 Backend çekirdeği tamamlandı

🟡 Frontend geliştirmesi devam ediyor

---

# Ürün Hedefi

UniEvents, sosyal medya esintili bir üniversite etkinlik keşif platformudur.

Proje geleneksel bir etkinlik yönetim sistemi değildir.

Amaç, üniversite etkinliklerini keşfetmeyi Instagram veya TikTok gezmek kadar keyifli hale getirmektir.

Öğrenciler kampüs yaşamını zengin medya içerikleri üzerinden keşfetmelidir.

---

# Geliştirme Stratejisi

Geliştirme birden fazla faz halinde tamamlanacaktır.

Her faz, bir sonrakine geçmeden önce işlevsel hale getirilmelidir.

Mevcut faz tamamlanmadan yeni faz başlatılmamalıdır.

---

# Faz 1 — Çekirdek Platform

Durum:

🟢 Devam ediyor

Hedef:

Çalışan tam bir etkinlik platformu oluşturmak.

---

## Backend

### Kimlik Doğrulama

- [x] JWT Authentication
- [x] Login
- [x] Kayıt
- [x] BCrypt password encoding
- [x] Security configuration
- [x] JWT filter
- [x] Role authorization

### Kullanıcı Rolleri

- [x] Öğrenci
- [x] Kulüp yöneticisi
- [x] Yönetici

### Etkinlik

- [x] Etkinlik oluşturma
- [x] Etkinlik güncelleme
- [x] Etkinlik silme
- [x] Etkinlik detayı
- [x] Etkinlik listesi

### Kayıt

- [x] Etkinliğe kayıt
- [x] Kayıt iptali
- [x] Kayıtlarım

### Etkinlik Onayı

- [x] Beklemede
- [x] Onaylama
- [x] Reddetme

### Hata Yönetimi

- [x] Global exception handler
- [x] Özel exceptionlar
- [x] ApiResponse

---

## Frontend

### Kimlik Doğrulama

- [x] Login
- [x] Kayıt
- [x] JWT storage
- [x] Çıkış
- [x] Auth guard
- [x] Role guard
- [x] HTTP interceptor

### Öğrenci

- [x] Etkinlikleri çekme
- [x] Öğrenci akışı
- [x] Etkinlik detayı
- [x] Kayıt butonu
- [x] Kayıt iptali
- [x] Kayıtlarım

### Kulüp

- [ ] Dashboard
- [ ] Etkinlik oluşturma
- [ ] Etkinlik düzenleme
- [ ] Etkinlik silme
- [ ] Etkinliklerim
- [ ] Katılımcılar

### Admin

- [ ] Dashboard
- [ ] Onay bekleyen etkinlikler
- [ ] Onaylama
- [ ] Reddetme
- [ ] Etkinlik yönetimi

---

# Faz 2 — Medya Platformu

Durum:

⚪ Planlandı

Hedef:

Etkinlikleri zengin medya içeriklerine dönüştürmek.

## Backend

### Etkinlik Medyası

Yeni entity:

EventMedia

Alanlar:

- id
- eventId
- mediaUrl
- mediaType
- orderIndex

Medya tipleri:

- IMAGE
- VIDEO

### Depolama

Başlangıç:

- Local storage

Gelecek:

- AWS S3
- Cloudinary

### API

- Medya yükleme
- Medya silme
- Medya güncelleme
- Medya sıralama

## Frontend

### Etkinlik Kartı

Desteklenecekler:

- Hero image
- Galeri
- Swipe
- Video

### Etkinlik Detayı

Desteklenecekler:

- Image slider
- Video player
- Poster preview

---

# Faz 3 — Sosyal Platform

Durum:

⚪ Planlandı

Hedef:

Kulüpleri içerik üreticilerine dönüştürmek.

## Backend

- Kulüp profili
- Takip sistemi
- Bildirim
- Favoriler

## Frontend

- Kulüp profili
- Kulüp akışı
- Takip butonu
- Favori etkinlikler
- Bildirimler
- Profil sayfası

---

# Faz 4 — Keşif

Durum:

⚪ Planlandı

Hedef:

Öğrencilerin etkinlikleri aramak yerine keşfetmesini sağlamak.

## Özellikler

- Trend etkinlikler
- Popüler etkinlikler
- Önerilen etkinlikler
- Yeni eklenenler
- Yakındaki etkinlikler
- Kategori akışı
- Sonsuz kaydırma

---

# Faz 5 — Akıllı Platform

Durum:

⚪ Planlandı

Hedef:

Yapay zeka destekli etkinlik önerileri sunmak.

## Öneri Sistemi

- Öneriler
- İlgi alanı analizi
- Kategori tahmini
- Akıllı akış sıralaması

## Analitik

- En çok görüntülenen etkinlikler
- En çok kayıt alınan etkinlikler
- Kulüp istatistikleri
- Kullanıcı aktivitesi
- Heatmapler

---

# UI Yol Haritası

## Ortak Componentler

- Navbar
- Sidebar
- Footer
- Search bar
- Category chips
- Event card
- Hero card
- Badge
- Button
- Loading component
- Empty state
- Modal
- Dialog
- Toast
- Pagination
- Carousel
- Media viewer

## Öğrenci Sayfaları

- Login
- Kayıt sayfası
- Home feed
- Event detail
- My registrations
- Profile
- Settings

## Kulüp Sayfaları

- Dashboard
- Create event
- My events
- Participants
- Statistics
- Profile

## Admin Sayfaları

- Dashboard
- Pending events
- Users
- Events
- Reports
- Settings

---

# Veritabanı Yol Haritası

Mevcut:

- User
- Role
- Event
- Registration

Gelecek:

- Media
- ClubProfile
- Follow
- Notification
- Comment
- Favorite
- Analytics

---

# API Yol Haritası

- Authentication API
- Öğrenci API
- Club API
- Admin API
- Media API
- Notification API
- Analytics API
- Recommendation API

---

# Mobil Destek

- Responsive layout
- Tablet desteği
- Mobil navigasyon
- Gesture desteği
- Swipe deneyimi

---

# UX Hedefleri

Öğrenciler:

- Sıkıcı tablolar okumamalı
- Etkinlikleri doğal şekilde keşfetmeli
- Aramak yerine kaydırmalı
- Etkinlik içeriğini hızlı tüketebilmeli

Kulüpler:

- Etkinlikleri kolayca tanıtabilmeli
- Zengin medya yükleyebilmeli
- Daha fazla öğrenciye ulaşabilmeli

Yöneticiler:

- Platformu verimli yönetebilmeli
- İçerikleri hızlı onaylayabilmeli
- Platform istatistiklerini izleyebilmeli

---

# Performans Hedefleri

- Lazy loading
- Görsel optimizasyonu
- Video optimizasyonu
- Pagination
- Infinite scroll
- Signal tabanlı rendering
- Code splitting
- Caching

---

# Uzun Vadeli Vizyon

UniEvents kampüsün merkezi dijital platformu haline gelmelidir.

Yalnızca etkinlikleri yönetmek yerine, öğrencilerin üniversite yaşamına medya odaklı ve ilgi çekici içeriklerle katılmasını teşvik etmelidir.

Deneyim, geleneksel bir üniversite portalından çok Instagram veya TikTok’a yakın hissettirmelidir.

---

# Başarı Kriterleri

Proje şu durumda başarılı kabul edilir:

✓ Öğrenciler etkinlikleri gezmekten keyif alır.

✓ Kulüpler aktif biçimde medya açısından zengin içerikler yayınlar.

✓ Etkinlik katılımı artar.

✓ UI modern ve responsive hissettirir.

✓ Platform ölçeklenebilir olur.

✓ Backend temiz mimariyi takip eder.

✓ Frontend tekrar kullanılabilir component mimarisini takip eder.

✓ Proje production’a hazır hale gelir.
