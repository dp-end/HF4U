# UniEvents

> Sosyal medya esintili kampüs etkinlik keşif platformu

---

# Proje Vizyonu

UniEvents geleneksel bir etkinlik yönetim sistemi değildir.

Amaç yalnızca etkinlik oluşturmak ve yönetmek değildir.

Amaç; üniversite kulüplerinin zengin medya içerikleri oluşturduğu, öğrencilerin ise kampüs yaşamını keyifli bir akış deneyimiyle keşfettiği sosyal medya esintili bir platform kurmaktır.

Şunların birleşimini düşün:

- Instagram
- TikTok
- Eventbrite
- LinkedIn Events

Tek bir üniversite platformunda birleşmiş hali.

Öğrenciler uzun ve sıkıcı tablolar okumak yerine etkinlikleri doğal bir şekilde kaydırarak keşfetmelidir.

Platform, medya odaklı içeriklerle etkinlik katılımını artırmalıdır.

---

# Problem Tanımı

Mevcut üniversite etkinlik sistemleri eski ve sıkıcıdır.

Tipik akış:

Kulüp

↓

Etkinlik oluşturur

↓

Öğrenciler uzun listeler görür

↓

Kimse okumaz

↓

Katılım düşük kalır

---

Bizim çözümümüz:

Kulüp güzel bir etkinlik içeriği oluşturur.

Öğrenci etkinlikleri kaydırarak keşfeder.

Öğrenci etkinliklerle sosyal medya kullanır gibi etkileşime girer.

---

# Temel Felsefe

Etkinlikler içeriktir.

Kulüpler içerik üreticisidir.

Öğrenciler keşfeden ve tüketen kullanıcıdır.

Medya önce gelir.

Metin sonra gelir.

Keşif, yönetimden daha önemlidir.

---

# Ana Roller

## Öğrenci

Öğrenci şunları yapabilir:

- Kayıt olabilir
- Giriş yapabilir
- Etkinlikleri keşfedebilir
- Medya görüntüleyebilir
- Etkinliğe kayıt olabilir
- Kaydını iptal edebilir
- Kayıtlarını görüntüleyebilir
- Kulüpleri takip edebilir, ileride
- Bildirim alabilir, ileride

Öğrenci şunları yapamaz:

- Etkinlik oluşturamaz
- Etkinlik düzenleyemez
- Etkinlik onaylayamaz

## Kulüp Yöneticisi

Her kulübün kendi hesabı vardır.

Kulüp yöneticisi şunları yapabilir:

- Etkinlik oluşturabilir
- Fotoğraf yükleyebilir
- Video yükleyebilir
- Kendi etkinliklerini düzenleyebilir
- Kendi etkinliklerini silebilir
- Katılımcıları görüntüleyebilir
- İstatistikleri görüntüleyebilir

Kulüp yöneticisi şunları yapamaz:

- Başka kulüplerin etkinliklerini düzenleyemez
- Etkinlik onaylayamaz

Her yeni etkinlik şu durumda başlar:

PENDING

## Yönetici

Yönetici platformu yönetir.

Yönetici şunları yapabilir:

- Etkinlikleri onaylayabilir
- Etkinlikleri reddedebilir
- Herhangi bir etkinliği silebilir
- Kullanıcıları yönetebilir
- Analitikleri görüntüleyebilir

---

# Ürün Yönü

Bu proje şu hissi vermelidir:

Kampüs Instagramı

Şu hissi vermemelidir:

Üniversite ERP sistemi

Öğrenciler etkinlik keşfetmekten keyif almalıdır.

---

# Teknoloji Yığını

Frontend

- Angular 21
- Standalone Components
- Angular Signals
- SCSS
- RxJS
- JWT Authentication

Backend

- Spring Boot
- Spring Security
- JWT
- Spring Data JPA
- MySQL

---

# Backend Mimarisi

Controller

↓

Service

↓

Repository

↓

Database

Controller içinden repository’ye doğrudan erişilmez.

İş kuralları her zaman Service katmanında bulunur.

---

# Mevcut Backend

Tamamlananlar:

✓ JWT Authentication

✓ Login

✓ Kayıt

✓ Role System

✓ Event CRUD

✓ Event Registration

✓ Event Approval

✓ Role Authorization
