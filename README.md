# L'Ultima Alba, Beta Web 005

**Gioco completo.**

Copertura:

```text
A1-S01 → A4-S24
75 scene
```

## Novità

- Atto IV completo;
- finale completo;
- scelta rapida `C40` con timer persistente e fallback;
- coda locale durante `SIGNAL_STATE = NONE`;
- flush ordinato nella finestra `INTERMITTENT`;
- ultimo messaggio canonico;
- migrazione automatica dai save Beta 004;
- `STORY = 1,8×`.

## Save Beta 004

I save della Beta 004 vengono migrati automaticamente. Se avevi completato l'Atto III, riparti da `A4-S01`.

## Finale

La coda finale viene consegnata in questo ordine:

```text
Marta dorme.
1%.
Fantastico.
Ha resistito più di noi.
Abbiamo trovato un posto dove sederci.
Fa freddo.
Non credo che arriverà nessuno.
Mi dispiace.
```

Poi Nico invia:

> Comunque penso che le piacessi.

Dopo non viene consegnato altro.

## Avvio

Aprire `index.html`, oppure:

```bash
python3 -m http.server 8080
```

## Validazione

- 40 opzioni dell'Atto IV testate individualmente;
- timer `C40` testato con fallback;
- coda finale e ordine verificati;
- tutti i rami testati raggiungono `GAME_COMPLETE = true`;
- sintassi JavaScript valida.
