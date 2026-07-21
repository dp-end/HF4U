# Sprint 002 — Etkinlik Deneyimi

**Süre:** 2 gün

---

# Sprint Hedefi

Öğrencilerin etkinliklerle etkileşime girebilmesini sağlamak.

Öğrenciler yalnızca etkinlik kartlarını görmekle kalmamalı; etkinlik detayını açabilmeli ve kayıt olabilmelidir.

---

# İş Hedefi

Öğrenciler şunları yapabilmelidir:

- Etkinlik detayını açabilmeli
- Açıklamaları okuyabilmeli
- Etkinlik bilgilerini görebilmeli
- Kayıt olabilmeli
- Geri bildirim alabilmeli

---

# Backend

Mevcut API’ler kullanılacaktır.

GET /api/events/{id}

POST /api/events/{eventId}/register

---

# Frontend Görevleri

## Etkinlik Detayı

Özel bir detay sayfası oluştur.

Gösterilecekler:

- [x] Kapak görseli veya placeholder
- [x] Başlık
- [x] Açıklama
- [x] Tarih
- [x] Konum
- [x] Kontenjan
- [x] Organizatör
- [x] Durum badge’i

## Kayıt

- [x] Kayıt butonu
- [x] Kayıt sonrası butonu pasifleştirme
- [x] Başarı geri bildirimi
- [x] Hata geri bildirimi
- [x] Loading göstergesi

## Navigasyon

- [x] Akıştan detaya geçiş
- [x] Detaydan akışa dönüş

## Ortak Componentler

- [ ] Badge
- [ ] Toast
- [ ] Dialog

---

# Teknik Kurallar

İş mantığını component içinde büyütme.

Servisleri kullan.

Her yerde güçlü tip kullan.

State için Signals kullan.

---

# Tamamlanma Tanımı

Öğrenci şu akışı sayfa yenilemeden tamamlayabilir:

Akış

↓

Detayı Aç

↓

Kayıt Ol

↓

Onay Mesajı Al

---

# Teslim Çıktısı

Backend’e bağlı çalışan etkinlik detay deneyimi.
