# To- Do List

### Formular zum erstellen von Wettbewerben

```typescript
export interface competitionStruct  {
  comp_id:number,
  name: string,
  description: string,
  lastRegistrationDate: Date,
  lowestGrade: number,
  prefBranch: string, 
  link: string,
  user_id: number,
}
```

Diese Informationen müssen gefragt werden, außer die id.

Die user_id sollte eine auswahlt von den lehrern sein( sollte vielleicht ausgelassen werden) bis ich dazu komme. 

prefBranch sollte ein Array, list oder so sein von den Abteilungen die da teilnehmen können

### Seiten zum editieren von Wettbewerben

Siehe Infos oben

### Drop Down Liste wo Benutzer hergezeigt werden können

- Für Lehrer: Kürzel und/oder e-mail werden in der Box gezeigt

## Drop down Liste von Wettbewerben

Wettbewerbe sollten aufgelistet werden und man sollte mehrere auswählen können

### Kalender

Termine sollten sichtbar sein
