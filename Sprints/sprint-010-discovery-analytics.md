# Sprint 010 — Keşif, Trendler ve Analitik

**Süre:** 4 gün

---

# Sprint Hedefi

Öğrenci akışını yalnızca kronolojik liste olmaktan çıkarıp keşif ve trend sinyalleriyle güçlendirmek.

Kulüp yöneticisi ve admin için temel analitik görünür hale getirilmelidir.

---

# İş Hedefi

Öğrenci şunları yapabilmelidir:

- Trend etkinlikleri görebilmeli
- Popüler etkinlikleri görebilmeli
- Yeni eklenenleri görebilmeli
- Kategori bazlı keşif yapabilmeli

Kulüp yöneticisi şunları görebilmelidir:

- Etkinlik performansı
- Kayıt dönüşümü
- Medya zenginliği
- En çok ilgi gören etkinlikleri

Admin şunları görebilmelidir:

- Platform genel metrikleri
- En aktif kulüpler
- En popüler kategoriler
- Onay/red oranları

---

# Backend

Yeni analitik ve discovery endpointleri:

GET /api/discovery/trending

GET /api/discovery/popular

GET /api/discovery/new

GET /api/discovery/categories/{category}

GET /api/clubs/me/analytics

GET /api/admin/analytics

## Hesaplanacak Sinyaller

- registeredCount
- availableSpots
- eventDate proximity
- media count
- favorite count, Sprint 009 sonrası
- follower count, Sprint 009 sonrası

---

# Frontend Görevleri

## Student Discovery

- [ ] Trend etkinlikler bölümü
- [ ] Popüler etkinlikler bölümü
- [ ] Yeni eklenenler bölümü
- [ ] Kategori akışı
- [ ] Feed filtreleri

## Club Analytics

- [ ] Event performance panel
- [ ] Registration progress
- [ ] Category distribution
- [ ] Media completeness

## Admin Analytics

- [ ] Platform overview
- [ ] Active clubs
- [ ] Popular categories
- [ ] Approval metrics

---

# UI Kuralları

- Öğrenci keşif ekranı sosyal medya hissini korumalıdır
- Analitik ekranları sade ve taranabilir olmalıdır
- Grafikler ağır olmamalı; başlangıçta bar/progress/metric kullanılmalıdır
- Gereksiz tablo kullanımından kaçınılmalıdır

---

# Teknik Kurallar

- Analitik hesapları controller içinde yapılmamalıdır
- Gerekiyorsa özel DTO kullanılmalıdır
- Ağır sorgular repository seviyesinde kontrollü yazılmalıdır
- Frontend tarafında grafikler basit ve responsive olmalıdır
- `any` kullanılmamalıdır

---

# Tamamlanma Tanımı

- Öğrenci trend/popüler/yeni etkinlikleri görebilir
- Kulüp yöneticisi temel performans metriklerini görebilir
- Admin platform analitiklerini görebilir
- Keşif endpointleri tipli response döner
- Derleme kontrolleri geçer

---

# Teslim Çıktısı

Keşif ve analitik destekli UniEvents MVP sonrası büyüme katmanı.
