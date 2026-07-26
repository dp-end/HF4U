# Sprint 008 — Kulüp Profilleri ve Public Kulüp Sayfaları

**Süre:** 3 gün

---

# Sprint Hedefi

Kulüpleri yalnızca event oluşturan hesaplar olmaktan çıkarıp içerik üreticisi profillerine dönüştürmek.

Öğrenci bir etkinliğin hangi kulübe ait olduğunu anlayabilmeli ve kulübün diğer etkinliklerini görebilmelidir.

---

# İş Hedefi

Öğrenci şunları yapabilmelidir:

- Etkinlik detayından kulüp profilini açabilmeli
- Kulübün aktif etkinliklerini görebilmeli
- Kulüp hakkında temel bilgi görebilmeli

Kulüp yöneticisi şunları yapabilmelidir:

- Kulüp profil bilgilerini düzenleyebilmeli
- Kulüp açıklaması ekleyebilmeli
- Kulüp logosu/kapak görseli ekleyebilmeli

---

# Backend

Yeni model ihtiyacı:

ClubProfile

Alanlar:

- id
- user
- clubName
- description
- logoUrl
- coverUrl
- socialLink
- createdAt
- updatedAt

## API

GET /api/clubs/{clubId}

GET /api/clubs/{clubId}/events

GET /api/clubs/me

PUT /api/clubs/me

---

# Frontend Görevleri

## Public Club Page

- [ ] Kulüp kapak alanı
- [ ] Kulüp logosu
- [ ] Kulüp adı
- [ ] Açıklama
- [ ] Aktif etkinlikler
- [ ] Empty state

## Club Manager Profile Settings

- [ ] Profil düzenleme formu
- [ ] Logo URL veya upload desteği
- [ ] Kapak URL veya upload desteği
- [ ] Success feedback
- [ ] Error feedback

## Navigation

- [ ] Event card/detail içinden kulüp adına tıklama
- [ ] Kulüp sayfasından event detayına gitme

---

# UI Kuralları

- Public kulüp sayfası sosyal profil hissi vermelidir
- Club manager ayar ekranı operasyonel kalmalıdır
- Öğrenci tarafında görsel ağırlık korunmalıdır
- Yönetim ve public görünüm birbirine karıştırılmamalıdır

---

# Teknik Kurallar

- User entity doğrudan public profile olarak kullanılmamalıdır
- Public DTO ve management DTO ayrılmalıdır
- Kulüp yöneticisi sadece kendi profilini güncelleyebilir
- `any` kullanılmamalıdır

---

# Tamamlanma Tanımı

- Öğrenci kulüp profilini açabilir
- Öğrenci kulübün etkinliklerini görebilir
- Kulüp yöneticisi profilini düzenleyebilir
- Yetki kuralları korunur
- Derleme kontrolleri geçer

---

# Teslim Çıktısı

Etkinliklerin arkasındaki kulüpleri görünür hale getiren ilk public profil deneyimi.
