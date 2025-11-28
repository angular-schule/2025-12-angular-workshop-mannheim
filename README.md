<img src="https://assets.angular.schule/header-intensivworkshop2.png">

#### **mit Johannes Hoppe**

<hr>

**Herzlich Willkommen – und schön, dass du dabei bist!**  
In diesem Repository findest du alle Infos zur Vorbereitung und während des Workshops den Quelltext unserer Beispielanwendung.

<!--
# 🎮 NEU: RxJS Playground

Du kannst dir entweder  
* den Code als ZIP-Datei herunterladen: [rxjs-playground.zip](XXX)<br>**oder**<br>
* dieses Repository per Git herunterladen und in den Ordner `rxjs-playground` wechseln.

```bash
cd rxjs-playground
npm install
ng serve
```

Öffne den Browser unter der URL [http://localhost:**4300**](http://localhost:4300) (!), um die Anwendung zu sehen.
Die Übungen befinden sich im Ordner `rxjs-playground/src/app/exercises/`.
-->


# ✅ Vorbereitung

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen.
Die gesamte Installation wird rund 20 Minuten dauern.

> [!IMPORTANT]
> **Bitte erledige die Vorbereitung rechtzeitig vor dem Kurs. Bitte melde dich bei uns, wenn etwas nicht klappt.**

## 1.) Benötigte Software

1. **Node.js 20, 22 oder 24** (jeweils die aktuelle Nebenversionsnummer): [https://nodejs.org](https://nodejs.org)
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
3. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)<br>
   _oder_ eine andere geeignete IDE wie **IntelliJ/WebStorm**
   + Wir empfehlen dir eine Auswahl an Extensions für Visual Studio Code.
     Dazu haben wir ein Extension Pack vorbereitet, das alles Nötige einrichtet:
     [Angular-Schule: Extension Pack (nur für Visual Studio Code)](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack)


## 2.) Proxy?

Falls in deinem Unternehmensnetz der Internetzugang durch einen Proxy erfolgt, sind ggf. gesonderte Einstellungen nötig.
Wir haben dir hierfür folgende Anleitung erstellt:
https://workshop.angular.schule/proxy
Sollte es Probleme mit dem Proxy geben, melde Dich bitte bei uns, dann finden wir eine Lösung.


## 3.) Repository herunterladen


> [!CAUTION]
> # Wichtiger Hinweis zur aktuellen Sicherheitslage
> 
> Derzeit ist das npm-Ökosystem von einer Sicherheitslücke betroffen ("Shai-Hulud"-Wurm). 
> Aus diesem Grund haben wir das Übungsprojekt bereits für dich vorbereitet und auf Sicherheit geprüft.
> 
> **Bitte erstelle das Projekt aktuell nicht selbst mit `ng new`!**
> Du findest im Repository bereits ein fertiges und sicheres Projekt mit einer geprüften `package-lock.json`.
> So kannst du ohne Risiko mit dem Workshop starten.

Lade das Repository herunter:

**Entweder per Git:**  

```bash
git clone https://github.com/angular-schule/2025-12-angular-workshop-mannheim.git
cd 2025-12-angular-workshop-mannheim
```

**Oder als ZIP-Datei:**  
Lade das Repository [hier als ZIP herunter](https://github.com/angular-schule/2025-12-angular-workshop-mannheim/archive/refs/heads/main.zip) und entpacke es in deinem Arbeitsverzeichnis.

> ⚠️ Bitte speichere das Projekt nicht auf einem Netzlaufwerk, sondern direkt auf der lokalen Festplatte!

## 4.) Abhängigkeiten installieren

Wechsle in das Projektverzeichnis und installiere die Abhängigkeiten.
Dank der gesperrten `package-lock.json` werden nur geprüfte und sichere Paketversionen installiert.


```bash
cd book-rating
npm install
```

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte mit Geduld ab!


## 5.) Projekt starten

Starte den Entwicklungsserver:

```bash
npm start
```

> Auf http://localhost:4200 sollte nun eine Website mit dem Text *"Hello, book-rating"* erscheinen!

![Screenshot CLI](https://assets.angular.schule/chrome_cli_welcome_ng17.png)

Beende danach den laufenden Webserver mit Strg + C.


## 6.) Projekt erforschen

Öffne den Projektordner `book-rating` in deinem Editor.
Nimm dir nun ein paar Minuten Zeit, um die Struktur des Projekts zu untersuchen.
So hast du die wichtigsten Dateien schon einmal gesehen, bevor wir den Aufbau in der Schulung ausführlich besprechen!


## Wir freuen uns schon! 🙂

Wenn bei allen Teilnehmenden das Grundgerüst steht, können wir ohne Zeitverlust loslegen.
Sollte es zu einer Fehlermeldung kommen, dann sende uns den Fehlertext einfach per Mail an [team@angular.schule](mailto:team@angular.schule) oder bringe deine Fragen zum Technikcheck mit.

<hr>

<img src="https://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; https://angular.schule | Stand: 28.11.2025