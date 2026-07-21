# Sprint 003 — Öğrenci Profili ve Kayıtlar

**Süre:** 2 gün

---

# Sprint Hedefi

Öğrencilerin kendi etkinlik kayıtlarını yönetebilmesini sağlamak.

---

# İş Hedefi

Öğrenciler şunları yapabilmelidir:

- Kayıt oldukları etkinlikleri görüntüleyebilmeli
- Etkinlik kayıtlarını iptal edebilmeli
- Çıkış yapabilmeli

---

# Backend

Mevcut API’ler kullanılacaktır.

GET /api/events/my-registrations

DELETE /api/events/{eventId}/registration

---

# Frontend Görevleri

## Kayıtlarım

Sayfa oluştur.

Gösterilecekler:

- [x] Kayıt olunan etkinlikler
- [ ] Etkinlik durumu
- [x] İptal butonu
- [x] Empty state

Not: Etkinlik durumu mevcut backend DTO’da yoktur. DTO genişleyince arayüze eklenecektir.

## Kayıt İptali

- [x] Onay diyaloğu
- [x] Başarı geri bildirimi
- [x] Hata geri bildirimi

## Profil

- [x] Avatar placeholder
- [x] Ad soyad
- [x] Rol
- [x] Çıkış

## Navbar

- [x] Kullanıcı menüsü
- [x] Çıkış butonu

## Responsive

- [x] Mobil
- [x] Tablet
- [x] Desktop

---

# Teknik Kurallar

Tekrar kullanılabilir componentler kullan.

UI tekrarı yapma.

State için Signals kullan.

Interface kullan.

`any` kullanma.

---

# Tamamlanma Tanımı

Öğrenci şu akışı tamamlayabilir:

Giriş Yap

↓

Akışı Gez

↓

Kayıt Ol

↓

Kayıtlarımı Gör

↓

Kaydı İptal Et

↓

Çıkış Yap

Her şey backend API’leri kullanılarak çalışır.

---

# Teslim Çıktısı

Tamamlanmış öğrenci deneyimi MVP’si.
