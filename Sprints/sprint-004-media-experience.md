# Sprint 004 — Medya Deneyimi

**Süre:** 2 gün

---

# Sprint Hedefi

Etkinlikleri yalnızca metin ve tek kapak görselinden çıkarıp medya açısından daha zengin hale getirmek.

Öğrenci etkinlik detayına girdiğinde etkinliği daha iyi hissedebilmeli; kart ve detay deneyimi görsel odaklı ama sade kalmalıdır.

---

# İş Hedefi

Öğrenciler şunları yapabilmelidir:

- Etkinlik kapak görselini net görebilmeli
- Etkinlik detayında medya galerisini gezebilmeli
- Görseller arasında rahatça geçiş yapabilmeli
- Medya yoksa temiz bir placeholder görmeli
- Mobilde medya deneyimini sorunsuz kullanabilmeli

Kulüp yöneticileri ileride etkinliklerine birden fazla medya ekleyebilmelidir.

---

# Backend

Bu sprintte medya modelinin temeli hazırlanır.

## Yeni Entity

EventMedia

Alanlar:

- id
- event
- mediaUrl
- mediaType
- orderIndex
- createdAt

MediaType değerleri:

- IMAGE
- VIDEO

## Repository

- EventMediaRepository

Gerekli sorgular:

- Etkinliğe göre medyaları getir
- Etkinliğe göre sıralı medyaları getir
- Etkinliğe ait medya var mı kontrol et

## DTO

- EventMediaResponseDTO
- EventMediaRequestDTO

## API

Başlangıç için URL tabanlı medya kullanılabilir.

Dosya upload sonraki iterasyona bırakılabilir.

Endpointler:

POST /api/events/{eventId}/media

GET /api/events/{eventId}/media

DELETE /api/events/{eventId}/media/{mediaId}

PUT /api/events/{eventId}/media/{mediaId}

## Yetki Kuralları

- Kulüp yöneticisi yalnızca kendi etkinliğine medya ekleyebilir
- Admin tüm etkinliklerin medyasını yönetebilir
- Öğrenci yalnızca medya görüntüleyebilir

---

# Frontend Görevleri

## Modeller

- [x] EventMedia interface
- [x] MediaType type
- [x] EventMediaRequest interface
- [x] Event response içine media alanı ekleme, gerekirse opsiyonel

## Service

- [x] Medya listeleme metodu
- [x] Medya ekleme metodu
- [x] Medya silme metodu
- [x] Medya güncelleme metodu

## Ortak Componentler

- [x] Media carousel
- [ ] Media viewer
- [x] Media placeholder
- [x] Thumbnail strip

## Event Card

- [x] Kapak görseli varsa kullan
- [x] Kapak görseli yoksa ilk medya görselini kullan
- [x] Medya yoksa mevcut placeholder yapısını koru
- [x] Kart tasarımını mobilde stabil tut

## Event Detail

- [x] Hero görsel alanını medya galerisine hazırla
- [x] Görseller arası ileri/geri kontrolü
- [x] Thumbnail seçimi
- [x] Video için poster/placeholder alanı
- [x] Medya yoksa sade boş durum

---

# UI Kuralları

- Renk paletinin dışına çıkma
- Medya deneyimini ağır ve karmaşık hale getirme
- Mobilde görseller taşmamalı
- Butonlar ortak `app-ui-button` kullanmalı
- Durum etiketleri ortak badge componentleriyle kalmalı
- Kullanıcıya görünen tüm metinler Türkçe olmalı

---

# Teknik Kurallar

- Backend katmanları Controller → Service → Repository şeklinde kalmalı
- Controller içinde repository kullanılmamalı
- DTO kullanılmalı
- Frontend’de `any` kullanılmamalı
- Signals kullanılmalı
- Reusable component kullanılmalı
- Mevcut öğrenci deneyimi bozulmamalı

---

# Tamamlanma Tanımı

Bu sprint şu durumda tamamlanır:

- EventMedia backend modeli oluşturulmuş olur
- Medya API’leri çalışır
- Event detail medya galerisi gösterebilir
- Event card medya desteğine hazır olur
- Mobil ve desktop görünüm stabil olur
- Testler geçer

---

# Teslim Çıktısı

Medya destekli etkinlik deneyiminin ilk çalışan sürümü.
