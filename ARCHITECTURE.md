# UniEvents Mimari Dokümanı

> UniEvents için ürün, backend, frontend ve veri mimarisi notları

---

# Mimari Vizyon

UniEvents, üniversite etkinliklerini sosyal medya akışı gibi keşfedilebilir hale getiren bir kampüs platformudur.

Bu proje klasik bir yönetim paneli mantığıyla değil, içerik ve keşif odaklı bir ürün mantığıyla geliştirilmelidir.

Temel fikir:

- Etkinlikler içeriktir
- Kulüpler içerik üreticisidir
- Öğrenciler keşfeden kullanıcıdır
- Yönetici kalite ve güvenlik kontrolünü sağlar

---

# Ana Katmanlar

Proje iki ana uygulamadan oluşur:

- `eventB`: Spring Boot backend
- `eventF`: Angular frontend

Backend API sağlar.

Frontend bu API’leri kullanarak rol bazlı deneyimler sunar.

---

# Backend Mimarisi

Backend katmanları şu sırayla ilerlemelidir:

Controller

↓

Service

↓

Repository

↓

Database

Controller yalnızca HTTP isteklerini karşılar.

İş kuralları Service katmanında bulunur.

Repository yalnızca veri erişimi için kullanılır.

Entity sınıfları veritabanı modelini temsil eder.

DTO sınıfları API giriş ve çıkışlarını temsil eder.

---

# Backend Kuralları

- Controller içinde repository kullanılmaz.
- İş mantığı component veya controller içine taşınmaz.
- API response yapısı tutarlı olmalıdır.
- Hatalar `GlobalExceptionHandler` üzerinden yönetilmelidir.
- Rol kontrolü Spring Security ile yapılmalıdır.
- JWT doğrulaması filter katmanında yapılmalıdır.
- Kullanıcı şifreleri BCrypt ile saklanmalıdır.

---

# Backend Paketleri

## Controller

HTTP endpointlerini barındırır.

Mevcut controllerlar:

- AuthController
- EventController
- DashboardController

## Service

İş kurallarını barındırır.

Mevcut servisler:

- AuthService
- EventService
- EventRegistrationService
- DashboardService
- JwtService

## Repository

Veritabanı erişimini sağlar.

Mevcut repositoryler:

- UserRepository
- EventRepository
- EventRegistrationRepository

## Entity

Veritabanı tablolarını temsil eder.

Mevcut entityler:

- User
- Event
- EventRegistration
- Role
- EventStatus

## DTO

API request ve response modellerini temsil eder.

Mevcut DTO grupları:

- Login DTO
- User DTO
- Event DTO
- Dashboard DTO
- ApiResponseDTO
- MyRegistration DTO
- Participant DTO

---

# Rol Mimarisi

## Öğrenci

Öğrenci şunları yapabilir:

- Giriş yapabilir
- Kayıt olabilir
- Onaylanmış etkinlikleri görebilir
- Etkinlik detayını açabilir
- Etkinliğe kayıt olabilir
- Kaydını iptal edebilir
- Kayıtlarını görebilir

Öğrenci şunları yapamaz:

- Etkinlik oluşturamaz
- Etkinlik düzenleyemez
- Etkinlik onaylayamaz

## Kulüp Yöneticisi

Kulüp yöneticisi şunları yapabilir:

- Etkinlik oluşturabilir
- Kendi etkinliklerini görebilir
- Kendi etkinliklerini düzenleyebilir
- Katılımcıları görebilir

Kulüp yöneticisi şunları yapamaz:

- Başka kulüplerin etkinliklerini yönetemez
- Etkinlik onaylayamaz

## Admin

Admin şunları yapabilir:

- Onay bekleyen etkinlikleri görebilir
- Etkinlikleri onaylayabilir
- Etkinlikleri reddedebilir
- Etkinlik silebilir
- Dashboard verilerini görebilir

---

# Etkinlik Yaşam Döngüsü

Yeni etkinlik kulüp yöneticisi tarafından oluşturulur.

Yeni etkinlik varsayılan olarak `PENDING` durumundadır.

Admin etkinliği inceler.

Admin etkinliği `APPROVED` veya `REJECTED` durumuna alır.

Öğrenciler yalnızca onaylanmış etkinlikleri keşfetmelidir.

Kayıt işlemi yalnızca onaylı ve kontenjanı dolmamış etkinlikler için yapılmalıdır.

---

# Kayıt Mimarisi

Bir öğrenci aynı etkinliğe yalnızca bir kez kayıt olabilir.

Kontenjan doluysa kayıt engellenmelidir.

Etkinlik onaylı değilse kayıt engellenmelidir.

Öğrenci kendi kaydını iptal edebilir.

Kayıt sayısı ve kalan kontenjan backend tarafından hesaplanmalıdır.

---

# API Response Standardı

Tüm API cevapları ortak formatı izlemelidir:

```json
{
  "success": true,
  "message": "İşlem başarılı",
  "data": {}
}
```

Hata durumunda:

```json
{
  "success": false,
  "message": "Hata mesajı",
  "data": null
}
```

Frontend her zaman `ApiResponse<T>` tipini kullanmalıdır.

---

# Frontend Mimarisi

Frontend Angular 21 ve standalone component yapısıyla geliştirilir.

State yönetiminde Angular Signals tercih edilir.

Servisler API iletişiminden sorumludur.

Componentler UI ve kullanıcı etkileşiminden sorumludur.

Componentler içinde iş mantığı büyütülmemelidir.

---

# Frontend Klasör Yapısı

Önerilen yapı:

```text
src/app
├── core
│   ├── guards
│   ├── interceptors
│   ├── models
│   └── services
├── features
│   ├── auth
│   ├── student
│   ├── club
│   └── admin
└── shared
    └── components
```

---

# Frontend Kuralları

- Standalone component kullanılmalıdır.
- Signals kullanılmalıdır.
- Servis response’ları güçlü tiplenmelidir.
- `any` kullanılmamalıdır.
- Ortak UI parçaları `shared/components` altında toplanmalıdır.
- Tekrarlayan state, style ve template yapıları componentleştirilmelidir.
- Kullanıcıya görünen tüm metinler Türkçe olmalıdır.

---

# Öğrenci Modülü

Öğrenci modülü MVP’nin ana odağıdır.

Mevcut sayfalar:

- Öğrenci akışı
- Etkinlik detayı
- Kayıtlarım

Öğrenci akışı sosyal medya hissi vermelidir.

Öğrenci etkinlikleri arayabilmeli, kategoriye göre filtreleyebilmeli ve kartları kaydırarak keşfedebilmelidir.

Etkinlik detayında öğrencinin etkinlik hakkında karar vermesi için gereken bilgiler açıkça gösterilmelidir.

Kayıtlarım sayfası öğrencinin kayıt olduğu etkinlikleri yönetmesini sağlar.

---

# Auth Modülü

Auth modülü giriş ve kayıt akışlarını içerir.

Login sonrası token, rol, kullanıcı adı ve kullanıcı id bilgileri localStorage içinde saklanır.

Auth guard token kontrolü yapar.

Role guard kullanıcının doğru rol ile doğru sayfaya erişmesini sağlar.

Logout işlemi localStorage içindeki oturum bilgilerini temizler.

---

# Club Modülü

Kulüp modülü henüz temel seviyededir.

Gelecek görevler:

- Kulüp dashboard
- Etkinlik oluşturma
- Etkinlik düzenleme
- Etkinlik silme
- Etkinliklerim
- Katılımcılar

---

# Admin Modülü

Admin modülü henüz temel seviyededir.

Gelecek görevler:

- Admin dashboard
- Onay bekleyen etkinlikler
- Etkinlik onaylama
- Etkinlik reddetme
- Kullanıcı yönetimi
- Platform istatistikleri

---

# Güvenlik Mimarisi

JWT tabanlı kimlik doğrulama kullanılır.

Frontend her istek için token’ı Authorization header ile gönderir.

Backend token’ı doğrular ve kullanıcı rolünü security context içine yerleştirir.

Endpoint yetkileri `@PreAuthorize` ile korunur.

---

# Veri Modeli

## User

Kullanıcı hesabını temsil eder.

Temel alanlar:

- id
- fullName
- email
- password
- role

## Event

Etkinliği temsil eder.

Temel alanlar:

- id
- title
- description
- location
- eventDate
- capacity
- status
- category
- coverImageUrl
- createdBy
- createdAt

## EventRegistration

Öğrencinin etkinliğe kaydını temsil eder.

Temel alanlar:

- id
- student
- event
- registeredAt

---

# UI İlkeleri

Arayüz bir üniversite bilgi sistemi gibi görünmemelidir.

Etkinlikler tablo gibi değil, içerik kartları gibi sunulmalıdır.

Öğrenci ilk ekranda ürünün enerjisini hissetmelidir.

Metinler kısa, açık ve Türkçe olmalıdır.

Butonlar eylemi net anlatmalıdır.

Boş durumlar kullanıcıyı bir sonraki adıma yönlendirmelidir.

---

# Feed Mimarisi

Öğrenci akışı etkinlik keşfinin merkezidir.

Feed şunları desteklemelidir:

- Arama
- Kategori filtreleme
- Büyük etkinlik kartları
- Responsive tasarım
- Kaydırma odaklı deneyim
- Etkinlik detayına geçiş
- Hızlı kayıt

Gelecekte feed medya açısından daha zengin hale getirilecektir.

---

# Medya Mimarisi

Medya fazı ileride eklenecektir.

Planlanan yapı:

- EventMedia entity
- Görsel yükleme
- Video yükleme
- Galeri
- Carousel
- Medya sıralama
- Harici depolama desteği

Başlangıçta local storage düşünülebilir.

Gelecekte Cloudinary veya AWS S3 kullanılabilir.

---

# Performans İlkeleri

- Gereksiz API çağrısı yapılmamalıdır.
- Büyük listeler ileride pagination veya infinite scroll ile yönetilmelidir.
- Görseller optimize edilmelidir.
- Lazy loading tercih edilmelidir.
- Componentler küçük tutulmalıdır.
- State yalnızca gerektiği yerde tutulmalıdır.

---

# Test Yaklaşımı

Frontend için component oluşturma testleri korunmalıdır.

Backend için context load ve service davranış testleri genişletilmelidir.

Kritik akışlar:

- Login
- Kayıt
- Event list
- Event detail
- Etkinliğe kayıt
- Kayıt iptali
- Role guard
- Auth interceptor

---

# Mevcut Teknik Borçlar

- Ortak `Navbar`, `Button`, `Badge`, `Toast`, `Dialog`, `EmptyState` ve `Loading` componentleri tamamlanmalı.
- Kulüp ve admin ekranları henüz gerçek deneyim seviyesinde değildir.
- MyRegistration DTO içinde etkinlik durumu yoktur.
- `getMyEvents()` frontend servisindeki endpoint kontrol edilmelidir.
- Angular build komutu yerel ortamda `134` koduyla sessiz düşmektedir.

---

# Geliştirme Sırası

1. Öğrenci deneyimi MVP’sini tamamla.
2. Ortak componentleri toparla.
3. Kulüp dashboard ve etkinlik yönetimini ekle.
4. Admin onay akışını gerçek UI ile bağla.
5. Medya altyapısını ekle.
6. Sosyal özellikleri ekle.
7. Keşif ve öneri sistemlerini geliştir.

---

# Başarı Ölçütleri

Proje şu durumda doğru yönde ilerliyor kabul edilir:

- Öğrenci etkinlikleri keyifle keşfedebiliyorsa
- Kayıt ve iptal akışları sorunsuz çalışıyorsa
- Backend temiz katmanlı mimariyi koruyorsa
- Frontend componentleri tekrar kullanılabilir kalıyorsa
- Kullanıcıya görünen tüm metinler Türkçe ise
- UI modern ve sosyal medya esintili hissettiriyorsa
