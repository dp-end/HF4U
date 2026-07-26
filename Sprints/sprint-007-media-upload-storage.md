# Sprint 007 — Medya Upload ve Depolama

**Süre:** 3 gün

---

# Sprint Hedefi

Medya deneyimini URL girme aşamasından çıkarıp gerçek dosya yükleme akışına taşımak.

Kulüp yöneticisi etkinlik için fotoğraf veya video dosyası yükleyebilmeli; sistem güvenli ve tutarlı medya URL'i üretmelidir.

---

# İş Hedefi

Kulüp yöneticisi şunları yapabilmelidir:

- Fotoğraf dosyası yükleyebilmeli
- Video dosyası yükleyebilmeli
- Yüklenen medyayı etkinliğe bağlayabilmeli
- Medya listesini düzenleyebilmeli
- Medya silebilmeli

Öğrenci şunları yapabilmelidir:

- Yüklenen medyayı detay sayfasında görebilmeli
- Görseller ve videolar arasında gezebilmeli

---

# Backend

Başlangıç depolama yaklaşımı:

Local storage.

Gelecek alternatifler:

- Cloudinary
- AWS S3

## Yeni Gereksinimler

- [ ] Upload endpoint'i
- [ ] Dosya tipi validasyonu
- [ ] Dosya boyutu validasyonu
- [ ] Local storage path yönetimi
- [ ] Public static media serving
- [ ] Upload sonrası EventMedia kaydı oluşturma

## API

POST /api/events/{eventId}/media/upload

GET /uploads/events/{fileName}

DELETE /api/events/{eventId}/media/{mediaId}

## Validasyon

İzin verilen görsel tipleri:

- image/jpeg
- image/png
- image/webp

İzin verilen video tipleri:

- video/mp4
- video/webm

---

# Frontend Görevleri

## Club Media Manager

- [ ] URL girişi korunur
- [ ] Dosya seçme alanı eklenir
- [ ] Fotoğraf/video tipi otomatik algılanır
- [ ] Upload progress gösterilir
- [ ] Upload success feedback
- [ ] Upload error feedback
- [ ] Dosya boyutu uyarısı

## Student Detail

- [ ] Upload edilmiş medya carousel içinde çalışır
- [ ] Video player stabil kalır
- [ ] Bozuk medya URL'i için fallback gösterilir

---

# UI Kuralları

- Upload alanı sade olmalıdır
- Drag/drop opsiyonel tutulmalıdır
- Kullanıcıya teknik path gösterilmemelidir
- Medya önizlemesi dosya seçildikten sonra görünmelidir

---

# Teknik Kurallar

- Storage logic service katmanında olmalıdır
- Controller dosyayı alır, business logic service'e devreder
- Upload path hardcoded dağınık olmamalıdır
- Büyük dosya limitleri config üzerinden yönetilmelidir
- Frontend'de `any` kullanılmamalıdır

---

# Tamamlanma Tanımı

- Kulüp yöneticisi dosya yükleyebilir
- Yüklenen medya event'e bağlanır
- Öğrenci detay sayfasında medya görüntülenir
- Medya silindiğinde dosya ve DB kaydı tutarlı kalır
- Derleme kontrolleri geçer

---

# Teslim Çıktısı

URL tabanlı medya yanında gerçek dosya upload destekli medya yönetimi.
