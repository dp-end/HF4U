# UniEvents Yol Haritası

> Ürün geliştirme yol haritası

---

# Mevcut Sürüm

Sürüm: MVP (0.1)

Mevcut durum:

🟢 Backend çekirdeği tamamlandı

🟢 Öğrenci deneyimi MVP tamamlandı

🟢 Medya altyapısı tamamlandı

🟢 Kulüp dashboard MVP tamamlandı

🟡 Admin paneli sıradaki öncelik

---

# Ürün Hedefi

UniEvents, sosyal medya esintili bir üniversite etkinlik keşif platformudur.

Proje geleneksel bir etkinlik yönetim sistemi değildir.

Amaç, üniversite etkinliklerini keşfetmeyi Instagram veya TikTok gezmek kadar keyifli hale getirmektir.

Öğrenciler kampüs yaşamını zengin medya içerikleri üzerinden keşfetmelidir.

---

# Geliştirme Stratejisi

Geliştirme sprintler halinde ilerler.

Her sprint çalışır bir ürün çıktısı üretmelidir.

Mevcut faz tamamlanmadan yeni faz başlatılmamalıdır.

---

# Faz 1 — Çekirdek Platform

Durum:

🟢 Büyük ölçüde tamamlandı

Hedef:

Çalışan tam bir etkinlik platformu oluşturmak.

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
- [x] Medya carousel
- [x] Kayıt butonu
- [x] Kayıt iptali
- [x] Kayıtlarım

### Kulüp

- [x] Dashboard
- [x] Etkinlik oluşturma
- [x] Etkinlik düzenleme
- [x] Etkinlik silme
- [x] Etkinliklerim
- [x] Katılımcılar
- [x] Medya URL yönetimi

### Admin

- [ ] Dashboard
- [ ] Onay bekleyen etkinlikler
- [ ] Onaylama
- [ ] Reddetme
- [ ] Etkinlik yönetimi

---

# Faz 2 — Medya Platformu

Durum:

🟡 Temel altyapı tamamlandı, upload planlandı

Hedef:

Etkinlikleri zengin medya içeriklerine dönüştürmek.

## Backend

### EventMedia

- [x] EventMedia entity
- [x] MediaType enum
- [x] EventMediaRepository
- [x] EventMedia DTO'ları
- [x] URL tabanlı medya API'leri
- [ ] Dosya upload
- [ ] Local storage
- [ ] Cloud storage, ileride

## Frontend

### Medya Deneyimi

- [x] EventMedia modelleri
- [x] Medya service metodları
- [x] Media carousel
- [x] Fotoğraf görüntüleme
- [x] Video görüntüleme
- [x] Thumbnail seçimi
- [x] Club media manager
- [ ] Dosya upload UI

---

# Faz 3 — Yönetim ve Kalite Kontrol

Durum:

🟡 Sprint 006 ile başlayacak

## Sprint 006 — Admin Dashboard ve Etkinlik Onayı

- [ ] Admin dashboard
- [ ] Pending events
- [ ] Approve
- [ ] Reject
- [ ] Event management

---

# Faz 4 — Kulüp Profilleri ve Sosyal Katman

Durum:

⚪ Planlandı

## Sprint 008 — Kulüp Profilleri

- [ ] Public club profile
- [ ] Kulüp profil düzenleme
- [ ] Kulüp etkinlikleri

## Sprint 009 — Takip ve Favoriler

- [ ] Follow clubs
- [ ] Favorite events
- [ ] Favorites page
- [ ] Followed clubs

---

# Faz 5 — Keşif ve Analitik

Durum:

⚪ Planlandı

## Sprint 010 — Keşif, Trendler ve Analitik

- [ ] Trend etkinlikler
- [ ] Popüler etkinlikler
- [ ] Yeni eklenenler
- [ ] Kulüp analitikleri
- [ ] Admin analitikleri

---

# Sprint Planı

- [x] Sprint 001 — Öğrenci Keşif Akışı
- [x] Sprint 002 — Etkinlik Deneyimi
- [x] Sprint 003 — Öğrenci Profili ve Kayıtlar
- [x] Sprint 004 — Medya Deneyimi
- [x] Sprint 005 — Kulüp Dashboard ve Etkinlik Yönetimi
- [ ] Sprint 006 — Admin Dashboard ve Etkinlik Onayı
- [ ] Sprint 007 — Medya Upload ve Depolama
- [ ] Sprint 008 — Kulüp Profilleri ve Public Kulüp Sayfaları
- [ ] Sprint 009 — Takip, Favoriler ve Sosyal Etkileşim
- [ ] Sprint 010 — Keşif, Trendler ve Analitik
