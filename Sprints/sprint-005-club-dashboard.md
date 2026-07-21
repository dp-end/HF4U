# Sprint 005 — Kulüp Dashboard ve Etkinlik Yönetimi

**Süre:** 3 gün

---

# Sprint Hedefi

Kulüp yöneticilerinin kendi etkinliklerini yönetebileceği ilk gerçek dashboard deneyimini oluşturmak.

Kulüp paneli placeholder olmaktan çıkmalı; kulüp yöneticisi kendi etkinliklerini görebilmeli, yeni etkinlik oluşturabilmeli ve etkinlik durumunu takip edebilmelidir.

---

# İş Hedefi

Kulüp yöneticisi şunları yapabilmelidir:

- Giriş yaptıktan sonra kulüp paneline yönlenebilmeli
- Kendi etkinliklerini listeleyebilmeli
- Yeni etkinlik oluşturabilmeli
- Kendi etkinliğini düzenleyebilmeli
- Kendi etkinliğini silebilmeli
- Etkinlik durumunu görebilmeli
- Katılımcı sayısı ve kalan kontenjanı görebilmeli

---

# Backend

Mevcut API’ler temel olarak yeterlidir.

Kullanılacak endpointler:

GET /api/events/my-events

POST /api/events

PUT /api/events/{id}

DELETE /api/events/{id}

GET /api/events/{eventId}/participants

## Kontrol Edilecekler

- [ ] Kulüp yöneticisi yalnızca kendi etkinliklerini görebiliyor mu?
- [ ] Kulüp yöneticisi yalnızca kendi etkinliklerini düzenleyebiliyor mu?
- [ ] Kulüp yöneticisi kendi etkinliğini silebiliyor mu?
- [ ] Admin yetkileri bozulmadan kalıyor mu?
- [ ] Event update sonrası status davranışı net mi?

Not: Şu an delete endpoint’i yalnızca admin’e açık görünüyor. Kulüp yöneticisinin kendi etkinliğini silebilmesi isteniyorsa backend yetki kuralı güncellenmelidir.

---

# Frontend Görevleri

## Club Home

Placeholder kaldırılır.

Sayfa şunları içermelidir:

- [ ] Kulüp navbar
- [ ] Dashboard özeti
- [ ] Etkinliklerim listesi
- [ ] Yeni etkinlik oluştur butonu
- [ ] Boş durum
- [ ] Loading state
- [ ] Error state

## Etkinliklerim

Her etkinlik satırı/kartı şunları göstermelidir:

- [ ] Başlık
- [ ] Tarih
- [ ] Konum
- [ ] Durum badge’i
- [ ] Kayıtlı kişi sayısı
- [ ] Kalan kontenjan
- [ ] Düzenle butonu
- [ ] Sil butonu

## Etkinlik Formu

Create ve edit için aynı form kullanılmalıdır.

Alanlar:

- [ ] Başlık
- [ ] Açıklama
- [ ] Konum
- [ ] Tarih
- [ ] Kontenjan
- [ ] Kategori
- [ ] Kapak görseli URL

## Katılımcılar

- [ ] Etkinlik katılımcılarını görüntüleme
- [ ] Katılımcı adı
- [ ] Katılımcı e-postası
- [ ] Katılımcı yoksa boş durum

---

# Ortak Component Kullanımı

Bu sprintte şu componentler yeniden kullanılmalıdır:

- app-ui-button
- app-badge
- app-event-status-badge
- app-ui-state
- app-toast

Gerekirse eklenecek yeni componentler:

- Club navbar
- Event form
- Confirm dialog
- Metric item

---

# UI Kuralları

- Kulüp paneli operasyonel ve sade görünmeli
- Landing page gibi davranmamalı
- Gereksiz büyük hero alanı kullanılmamalı
- Tablo yerine taranabilir ama kompakt liste/kart yapısı tercih edilmeli
- Renk paleti mevcut UniEvents paletiyle uyumlu kalmalı
- Tüm kullanıcı metinleri Türkçe olmalı
- Mobilde create/edit akışı taşmadan kullanılabilmeli

---

# Teknik Kurallar

- Formlar güçlü tiplerle kurulmalı
- `any` kullanılmamalı
- API response’ları `ApiResponse<T>` ile tiplenmeli
- İş mantığı servislerde tutulmalı
- Componentler küçük kalmalı
- Reusable UI componentleri kullanılmalı
- Auth guard ve role guard korunmalı

---

# Tamamlanma Tanımı

Bu sprint şu durumda tamamlanır:

- Kulüp yöneticisi kendi etkinliklerini görebilir
- Kulüp yöneticisi yeni etkinlik oluşturabilir
- Kulüp yöneticisi kendi etkinliğini düzenleyebilir
- Kulüp yöneticisi etkinlik durumunu takip edebilir
- Katılımcılar görüntülenebilir
- Mobil ve desktop görünüm stabil olur
- Testler geçer

---

# Teslim Çıktısı

Kulüp yöneticileri için çalışan ilk etkinlik yönetimi dashboard’u.
