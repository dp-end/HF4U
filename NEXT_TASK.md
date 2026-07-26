# SONRAKİ GÖREV

> Mevcut sprint: Sprint 006 — Admin Dashboard ve Etkinlik Onayı

---

# Mevcut Hedef

Admin panelini gerçek bir kalite kontrol ve etkinlik onay merkezine dönüştürmek.

Öğrenci deneyimi, medya altyapısı ve kulüp dashboard'u ilk MVP seviyesinde çalışır durumdadır. Sıradaki kritik eksik, admin'in kulüpler tarafından oluşturulan etkinlikleri inceleyip onaylaması veya reddetmesidir.

---

# Mevcut Durum

## Backend

✅ Kimlik doğrulama

✅ JWT

✅ Kayıt

✅ Giriş

✅ Rol yetkilendirme

✅ Etkinlik CRUD

✅ Etkinlik onayı

✅ Etkinlik kaydı

✅ Kayıt iptali

✅ Kayıtlarım

✅ EventMedia modeli

✅ Medya API'leri

✅ Kulüp etkinlik yönetimi için owner kontrolleri

---

## Frontend

✅ Angular 21 projesi

✅ Kimlik doğrulama

✅ JWT saklama

✅ Auth interceptor

✅ Auth guard

✅ Role guard

✅ Login

✅ Register

✅ Öğrenci akışı

✅ Etkinlik detayı

✅ Medya carousel

✅ Kayıt olma

✅ Kayıtlarım

✅ Kayıt iptali

✅ Kulüp dashboard

✅ Kulüp etkinlik create/edit/delete

✅ Kulüp medya yönetimi

✅ Katılımcı görüntüleme

✅ Admin dashboard ilk MVP

✅ Onay bekleyen etkinlik listesi

✅ Admin onay/red/silme aksiyonları

---

# Mevcut Sprint

Sprint 006

Hedef:

Admin'in onay bekleyen etkinlikleri yönetebilmesi.

Admin panel MVP tamamlandı. Admin artık özet metrikleri, onay bekleyenleri, tüm etkinlikleri ve kullanıcıları aynı panelde yönetebilir.

---

# Sprint 006 Görevleri

## 1. Admin Panel Temeli

Öncelik: En yüksek

- [x] Admin placeholder ekranını kaldır
- [x] Admin navbar oluştur
- [x] Dashboard metriklerini göster
- [x] Loading state
- [x] Error state
- [x] Empty state

---

## 2. Onay Bekleyen Etkinlikler

Öncelik: En yüksek

Backend endpoint:

GET /api/events/pending

Gösterilecekler:

- [x] Kapak/medya önizleme
- [x] Başlık
- [x] Açıklama
- [x] Kulüp adı
- [x] Tarih
- [x] Konum
- [x] Kontenjan
- [x] Kategori
- [x] Durum badge'i

---

## 3. Onay / Red Aksiyonları

Öncelik: En yüksek

Backend endpointleri:

PUT /api/events/{id}/approve

PUT /api/events/{id}/reject

Gereksinimler:

- [x] Onayla butonu
- [x] Reddet butonu
- [x] Success feedback
- [x] Error feedback
- [x] Aksiyon sonrası listeyi güncelle

---

## 4. Etkinlik Yönetimi

Öncelik: Orta

- [x] Tüm etkinlikleri status bazlı görme
- [x] Onaylanan etkinlikler
- [x] Reddedilen etkinlikler
- [x] Silme işlemi
- [x] Filtreler

---

## 6. Kullanıcı Yönetimi

Öncelik: Orta

- [x] Tüm kullanıcıları listeleme
- [x] Rol bazlı filtreleme
- [x] Kullanıcı özet bilgileri

---

## 5. Ortak Component Kullanımı

Kullanılacaklar:

- [x] app-ui-button
- [x] app-badge
- [x] app-event-status-badge
- [x] app-ui-state
- [x] app-toast
- [ ] app-media-carousel

Gerekirse eklenecekler:

- [x] Admin navbar
- [ ] Confirm dialog
- [ ] Review panel

---

# Kodlama Kuralları

Her zaman:

✅ Signals kullan

✅ Interface kullan

✅ ApiResponse<T> kullan

✅ Reusable component kullan

✅ Componentleri küçük tut

Asla:

❌ `any` kullanma

❌ İş mantığını component içinde büyütme

❌ Controller içinde repository kullanma

❌ UI tekrarına izin verme

---

# UI Kuralları

Admin paneli operasyonel olmalıdır.

Gereksiz büyük hero alanı kullanılmamalıdır.

Onay/red kararları hızlı taranabilir olmalıdır.

Kullanıcıya görünen tüm metinler Türkçe olmalıdır.

---

# Tamamlanma Tanımı

Bu sprint şu durumda tamamlanır:

- Admin giriş sonrası admin panele gelir
- Admin pending etkinlikleri görür
- Admin etkinlik onaylar
- Admin etkinlik reddeder
- Onaylanan event öğrenci akışında görünür olur
- Reddedilen event öğrenci akışında görünmez
- Feedback ve loading state çalışır
- Frontend ve backend derleme kontrolleri geçer

---

# Sonraki Sprint Önizlemesi

Sprint 007

Hedef:

URL tabanlı medya yönetimini gerçek dosya upload ve local storage desteğiyle güçlendirmek.
