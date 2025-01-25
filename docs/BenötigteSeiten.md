# Benötigte Seiten

Es gibt noch weitere Funktionen die eine Seite bracuhen die ich aber noch nicht geschrieben habe.

Um zu sehen wie man sie verwendet schauts unter /app/test/page.tsx

Die Seite habe ich zum Testen verwendet.



Um die Funktionen zu benützen



```typescript
import { addStudent, addTeacher,removeUser,getUser } from "@/src/db/handleUsers";

```

den Funktionsnamen in der geschwungenen Klammer ganz oben in der Seite hinzufügen.



## "Sign Up page"

Formular wo Informationen eingegeben werden um einen neuen User anzulegen.

Wenn ein Schüler angelegt wird müssen diese Informationen in einem Dictionary der Funktion addStudent() in diesem Format übergeben werden:

```typescript
export interface studentStructure{
    user_id:number,
    email: string;
    password: string;
    branch: number;
    class:string;
}
```



Wen eine Lehrkraft hinzugefügt wird muss der Funktion addTeacher() ein Dictionary in diesem Format übergeben werden:

```typescript
export interface teacherStructure{
    user_id:number,
    email: string;
    password: string;
    shortName: string;
}
```

Die Namen der einzelnen Elemente(keys) müssen gleich sein (glaube ich).

Bei beiden dieser Funktionen kann die user_id irgendeinen Wert haben da dieser nicht berücksichtigt wird.



## "Log-In Seite"

Bei dieser Seite kann sich ein Benutzer einloggen. Im Formaular wird eine email Adresse und ein Passwort gefragt. Diese werden der Funktion loginUser übergeben.

```typescript
loginUser(email:string,password:string)
```



## Log-in merken

Nachdem jemand sich anmeldet soll sich die WEbseite merken dass dieser User sich angemeldet hat.

Mögliche Lösung:

- globales Dictionary mit allen Nutzer Information auf das alle Seiten zugriff haben



## Option für das Löschen vom eigenen User

Die Funktion :

```typescript
removeUser(user_id:number)
```

entfernt den User mit der übergebenen ID.


