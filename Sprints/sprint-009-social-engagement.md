# Sprint 009 — Takip, Favoriler ve Sosyal Etkileşim

**Süre:** 4 gün

---

# Sprint Hedefi

Öğrenci deneyimini yalnızca kayıt olma akışından çıkarıp kişiselleştirilebilir sosyal etkileşimlere taşımak.

Öğrenci ilgilendiği kulüpleri takip edebilmeli ve etkinlikleri favorilerine ekleyebilmelidir.

---

# İş Hedefi

Öğrenci şunları yapabilmelidir:

- Kulübü takip edebilmeli
- Kulüp takibini bırakabilmeli
- Etkinliği favorilere ekleyebilmeli
- Favorilerinden çıkarabilmeli
- Favori etkinliklerini görebilmeli
- Takip ettiği kulüplerin etkinliklerini öncelikli görebilmeli

Kulüp yöneticisi şunları görebilmelidir:

- Takipçi sayısı
- Favorilere eklenme sayısı

---

# Backend

Yeni modeller:

ClubFollow

FavoriteEvent

## ClubFollow Alanları

- id
- student
- club
- followedAt

## FavoriteEvent Alanları

- id
- student
- event
- createdAt

## API

POST /api/clubs/{clubId}/follow

DELETE /api/clubs/{clubId}/follow

GET /api/clubs/following

POST /api/events/{eventId}/favorite

DELETE /api/events/{eventId}/favorite

GET /api/events/favorites

---

# Frontend Görevleri

## Student Feed

- [ ] Favori butonu
- [ ] Takip edilen kulüp göstergesi
- [ ] Takip edilen kulüp etkinliklerini öne çıkarma

## Event Detail

- [ ] Favori ekle/çıkar
- [ ] Kulüp takip et/bırak

## Student Profile

- [ ] Favorilerim sayfası
- [ ] Takip ettiğim kulüpler

## Club Dashboard

- [ ] Takipçi sayısı
- [ ] Favori sayısı

---

# UI Kuralları

- Etkileşimler sosyal medya hissi vermeli ama arayüzü kalabalıklaştırmamalıdır
- Favori ve takip aksiyonları hızlı olmalıdır
- Başarılı aksiyonlar sayfa yenilemeden görünmelidir

---

# Teknik Kurallar

- Duplicate follow engellenmelidir
- Duplicate favorite engellenmelidir
- Student yalnızca kendi favorilerini ve takiplerini yönetebilmelidir
- API response'ları tipli olmalıdır
- Signals kullanılmalıdır

---

# Tamamlanma Tanımı

- Öğrenci kulüp takip edebilir
- Öğrenci etkinlik favorileyebilir
- Favoriler ve takipler listelenebilir
- Club dashboard etkileşim sayılarını gösterebilir
- Derleme kontrolleri geçer

---

# Teslim Çıktısı

UniEvents için ilk sosyal etkileşim katmanı.
