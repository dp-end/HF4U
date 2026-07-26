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

## Kontrol Edilecekler

- [ ] Admin dashboard endpoint'i doğru sayıları dönüyor mu?
- [ ] Admin yalnızca `ADMIN` rolüyle erişebiliyor mu?
- [ ] Pending listesi yalnızca onay bekleyenleri gösteriyor mu?
- [ ] Approve sonrası etkinlik öğrenci akışında görünür oluyor mu?
- [ ] Reject sonrası etkinlik öğrenci akışından gizli kalıyor mu?

---

# Frontend Görevleri

## Admin Home

- [ ] Placeholder kaldır
- [ ] Admin navbar oluştur
- [ ] Dashboard metrikleri göster
- [ ] Pending events listesi oluştur
- [ ] Loading state
- [ ] Error state
- [ ] Empty state

## Event Review

Her pending event için:

- [ ] Kapak/medya önizleme
- [ ] Başlık
- [ ] Açıklama
- [ ] Kulüp adı
- [ ] Tarih
- [ ] Konum
- [ ] Kontenjan
- [ ] Kategori
- [ ] Onayla butonu
- [ ] Reddet butonu

## Etkinlik Yönetimi

- [ ] Tüm etkinlikleri status bazlı görebilme
- [ ] Onaylanan etkinlikler
- [ ] Reddedilen etkinlikler
- [ ] Silme işlemi
- [ ] Filtreler

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
