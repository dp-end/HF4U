# Sprint 006 — Admin Dashboard ve Etkinlik Onayı

**Süre:** 3 gün

---

# Sprint Hedefi

Admin panelini placeholder olmaktan çıkarıp platformun kalite kontrol merkezi haline getirmek.

Admin onay bekleyen etkinlikleri görebilmeli, etkinlik detayını inceleyebilmeli, onaylayabilmeli veya reddedebilmelidir.

---

# İş Hedefi

Admin şunları yapabilmelidir:

- Giriş yaptıktan sonra admin paneline yönlenebilmeli
- Platform özetini görebilmeli
- Bütün kullanıcıları görebilmeli
- Bütün etkinlikleri görebilmeli
- Onay bekleyen etkinlikleri listeleyebilmeli
- Etkinlik detayını inceleyebilmeli
- Etkinliği onaylayabilmeli
- Etkinliği reddedebilmeli
- Tüm etkinlik durumlarını takip edebilmeli

---

# Backend

Mevcut API'ler temel olarak yeterlidir.

Kullanılacak endpointler:

GET /api/admin/dashboard

GET /api/events/pending

PUT /api/events/{id}/approve

PUT /api/events/{id}/reject

GET /api/events/{id}

DELETE /api/events/{id}

GET /api/admin/events

GET /api/admin/users

## Kontrol Edilecekler

- [x] Admin dashboard endpoint'i doğru sayıları dönüyor mu?
- [x] Admin yalnızca `ADMIN` rolüyle erişebiliyor mu?
- [x] Pending listesi yalnızca onay bekleyenleri gösteriyor mu?
- [ ] Approve sonrası etkinlik öğrenci akışında görünür oluyor mu?
- [ ] Reject sonrası etkinlik öğrenci akışından gizli kalıyor mu?

---

# Frontend Görevleri

## Admin Home

- [x] Placeholder kaldır
- [x] Admin navbar oluştur
- [x] Dashboard metrikleri göster
- [x] Pending events listesi oluştur
- [x] Loading state
- [x] Error state
- [x] Empty state

## Event Review

Her pending event için:

- [x] Kapak/medya önizleme
- [x] Başlık
- [x] Açıklama
- [x] Kulüp adı
- [x] Tarih
- [x] Konum
- [x] Kontenjan
- [x] Kategori
- [x] Onayla butonu
- [x] Reddet butonu

## Etkinlik Yönetimi

- [x] Tüm etkinlikleri status bazlı görebilme
- [x] Onaylanan etkinlikler
- [x] Reddedilen etkinlikler
- [x] Silme işlemi
- [x] Filtreler

## Kullanıcı Yönetimi

- [x] Tüm kullanıcıları listeleme
- [x] Rol bazlı filtreleme
- [x] Kullanıcı adı
- [x] E-posta
- [x] Rol badge'i
- [x] Kayıt tarihi

---

# Ortak Component Kullanımı

Bu sprintte tekrar kullanılacak componentler:

- app-ui-button
- app-badge
- app-event-status-badge
- app-ui-state
- app-toast
- app-media-carousel

Gerekirse eklenecek componentler:

- Admin navbar
- Review panel
- Confirm dialog
- Metric item

---

# UI Kuralları

- Admin paneli operasyonel ve yoğun bilgi odaklı olmalıdır
- Gereksiz hero alanı kullanılmamalıdır
- Onay ve red aksiyonları görsel olarak net ayrılmalıdır
- Reddedilecek etkinliklerde riskli aksiyon hissi korunmalıdır
- Tüm kullanıcı metinleri Türkçe olmalıdır
- Mobilde aksiyonlar taşmamalıdır

---

# Teknik Kurallar

- Admin işlemleri role guard ile korunmalıdır
- API response'ları `ApiResponse<T>` ile tiplenmelidir
- `any` kullanılmamalıdır
- State için Signals kullanılmalıdır
- Controller içinde repository kullanılmamalıdır
- Mevcut student ve club deneyimi bozulmamalıdır

---

# Tamamlanma Tanımı

Bu sprint şu durumda tamamlanır:

- Admin pending etkinlikleri görebilir
- Admin etkinlik onaylayabilir
- Admin etkinlik reddedebilir
- Admin dashboard metriklerini görebilir
- Onaylanan etkinlik öğrenci akışına düşer
- Reddedilen etkinlik öğrenci akışında görünmez
- Mobil ve desktop görünüm stabil olur
- Derleme kontrolleri geçer

---

# Teslim Çıktısı

Admin için çalışan ilk etkinlik onay ve yönetim paneli.
