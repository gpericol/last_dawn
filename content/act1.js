window.LUA_CONTENT = window.LUA_CONTENT || {};
window.LUA_CONTENT.act1 = {
  "schemaVersion": 1,
  "contentVersion": "beta-005-complete-001",
  "id": "act1-complete",
  "title": "Atto I, Che posto di merda",
  "startNode": "A1-S01-START",
  "scenes": {
    "A1-S01": {
      "id": "A1-S01",
      "title": "Il pulmino",
      "act": 1,
      "day": 1,
      "timeOfDay": "pomeriggio",
      "location": "pulmino diretto alla Comunità dell'Aurora",
      "entryNode": "A1-S01-START",
      "canonicalExit": "A1-S02"
    },
    "A1-S02": {
      "id": "A1-S02",
      "title": "La valle",
      "act": 1,
      "day": 1,
      "timeOfDay": "pomeriggio",
      "location": "pulmino, strada della valle",
      "entryNode": "A1-S02-START",
      "canonicalExit": "A1-S03"
    },
    "A1-S03": {
      "id": "A1-S03",
      "title": "Benvenuti all'Aurora",
      "act": 1,
      "day": 1,
      "timeOfDay": "tardo pomeriggio",
      "location": "ingresso e cortile della Comunità dell'Aurora",
      "entryNode": "A1-S03-START",
      "canonicalExit": "A1-S04"
    },
    "A1-S04": {
      "id": "A1-S04",
      "title": "Telefoni e documenti",
      "act": 1,
      "day": "1",
      "timeOfDay": "tardo pomeriggio",
      "location": "edificio principale, area accoglienza",
      "entryNode": "A1-S04-START",
      "canonicalExit": "A1-S05"
    },
    "A1-S05": {
      "id": "A1-S05",
      "title": "Marta",
      "act": 1,
      "day": "1",
      "timeOfDay": "tardo pomeriggio",
      "location": "percorso tra edificio principale e alloggi",
      "entryNode": "A1-S05-START",
      "canonicalExit": "A1-S06"
    },
    "A1-S06": {
      "id": "A1-S06",
      "title": "Elia",
      "act": 1,
      "day": "1",
      "timeOfDay": "sera",
      "location": "sala comune",
      "entryNode": "A1-S06-START",
      "canonicalExit": "A1-S07"
    },
    "A1-S07": {
      "id": "A1-S07",
      "title": "Il dormitorio",
      "act": 1,
      "day": "1",
      "timeOfDay": "sera",
      "location": "dormitorio uomini",
      "entryNode": "A1-S07-START",
      "canonicalExit": "A1-S08"
    },
    "A1-S08": {
      "id": "A1-S08",
      "title": "La prima cena",
      "act": 1,
      "day": "1",
      "timeOfDay": "sera",
      "location": "sala comune / refettorio",
      "entryNode": "A1-S08-START",
      "canonicalExit": "A1-S09"
    },
    "A1-S09": {
      "id": "A1-S09",
      "title": "“Posso chiamare mia madre?”",
      "act": 1,
      "day": "1",
      "timeOfDay": "sera, fine cena",
      "location": "sala comune / area adiacente",
      "entryNode": "A1-S09-START",
      "canonicalExit": "A1-S10"
    },
    "A1-S10": {
      "id": "A1-S10",
      "title": "La Casa del Silenzio",
      "act": 1,
      "day": "2",
      "timeOfDay": "mattina",
      "location": "area di lavoro tra edificio principale, orti e strutture secondarie",
      "entryNode": "A1-S10-START",
      "canonicalExit": "A1-S11"
    },
    "A1-S11": {
      "id": "A1-S11",
      "title": "Patate e romanticismo",
      "act": 1,
      "day": "2",
      "timeOfDay": "tarda mattina",
      "location": "area di lavoro coperta vicino alla cucina / magazzino agricolo",
      "entryNode": "A1-S11-START",
      "canonicalExit": "A1-S12"
    },
    "A1-S12": {
      "id": "A1-S12",
      "title": "Il Giorno Bianco",
      "act": 1,
      "day": "2",
      "timeOfDay": "pomeriggio",
      "location": "sala comune",
      "entryNode": "A1-S12-START",
      "canonicalExit": "A1-S13"
    },
    "A1-S13": {
      "id": "A1-S13",
      "title": "Piove ancora",
      "act": 1,
      "day": "2",
      "timeOfDay": "tardo pomeriggio",
      "location": "proprietà dell'Aurora, tra aree comuni e spazi di lavoro",
      "entryNode": "A1-S13-START",
      "canonicalExit": "A1-S14"
    },
    "A1-S14": {
      "id": "A1-S14",
      "title": "Il furgone",
      "act": 1,
      "day": "2",
      "timeOfDay": "notte",
      "location": "dormitorio uomini / cortile",
      "entryNode": "A1-S14-START",
      "canonicalExit": "A1-S15"
    },
    "A1-S15": {
      "id": "A1-S15",
      "title": "Le taniche",
      "act": 1,
      "day": "2 / notte, con possibile coda al mattino",
      "timeOfDay": "notte / primissima mattina",
      "location": "cortile, zona deposito, dormitorio",
      "entryNode": "A1-S15-START",
      "canonicalExit": "A1-S16"
    },
    "A1-S16": {
      "id": "A1-S16",
      "title": "“Comunque Marta mi ha sorriso”",
      "act": 1,
      "day": "3",
      "timeOfDay": "mattina, colazione",
      "location": "sala comune / refettorio",
      "entryNode": "A1-S16-START",
      "canonicalExit": "A2-S01"
    }
  },
  "initialState": {
    "KNOWS_WHITE_DAY_NAME": false,
    "KNOWS_MARTA_HAS_HISTORY": false,
    "KNOWS_SINGLE_ROAD": false,
    "NICO_ROMANCE": 50,
    "MARTA_TRUST": 0,
    "TOMMASO_SUSPICION": 0,
    "BATTERY_STATE": "GOOD",
    "SIGNAL_STATE": "AVAILABLE",
    "A1S01_MARTA_APPROACH": false,
    "A1S01_MARTA_WAIT": false,
    "A1S01_SPIRITUALITY_PARTIAL_ADMISSION": false,
    "MET_TOMMASO": false,
    "VERTICAL_SLICE_COMPLETE": false,
    "NICO_PLAYER_TRUST": 0,
    "PLAYER_SARCASM": 0,
    "DAVIDE_TRUST": 0,
    "TANKS_KNOWLEDGE": "NONE",
    "KNOWS_NIGHT_MATERIAL": false,
    "KNOWS_WHITE_DAY_LANGUAGE_DEEPER": false,
    "A1S11_ANSWER_CURIOSITY": false,
    "DEVICES_SURRENDERED": false,
    "SAW_NIGHT_VAN": false,
    "ELIA_NOTICED_NICO": false,
    "DAVIDE_WANTS_TO_CALL_MOTHER": false,
    "A1S05_JOKED_ABOUT_HISTORY": false,
    "A1S05_RESPECTED_BOUNDARY": false,
    "ACT1_COMPLETE": false,
    "KNOWS_MARTA_HAS_PAST_TRIGGER": false,
    "TOMMASO_SAW_NICO_AT_NIGHT": false,
    "KNOWS_SILENCE_HOUSE": false,
    "KEYS_SURRENDERED": false,
    "OLD_PHONE_HIDDEN": false,
    "A1S11_ASKED_ABOUT_PHOTO": false,
    "SAW_PERSON_IN_SILENCE_HOUSE": false,
    "A1S14_WATCHED_FROM_WINDOW": false,
    "A1S11_ANSWER_MARTA": false,
    "A1S09_ASKED_MARTA": false,
    "A1S04_PLAYER_BACKED_PHONE": false,
    "A1S04_ASKED_ABOUT_DOCUMENTS": false,
    "A1S14_RETURNED_TO_SLEEP": false,
    "A1S11_ANSWER_JOKE": false,
    "A1S11_WAITED_ON_PHOTO": false,
    "KNOWS_MARTA_IS_HIDING_SOMETHING": false,
    "A1S09_IGNORED_DAVIDE_CALL": false,
    "A1S05_PRESSED_MARTA_HISTORY": false,
    "A1S04_PLAYER_TOLD_SURRENDER": false,
    "MET_LEA": false,
    "MET_DAVIDE": false,
    "A1S14_WENT_OUTSIDE": false,
    "MARTA_TENSE_WITH_ELIA": false,
    "SUSPECTS_DAVIDE_IN_SILENCE_HOUSE": false,
    "KNOWS_OLD_ERA_TERM": false,
    "MET_ELIA": false,
    "A1S09_SPOKE_TO_DAVIDE": false,
    "A1S11_DID_NOT_PRESS_PHOTO": false,
    "KNOWS_MARTA_REMEMBERS_SOMEONE": false,
    "DOCS_SURRENDERED": false
  },
  "nodes": {
    "A1-S01-START": {
      "id": "A1-S01-START",
      "sceneId": "A1-S01",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "GOOD"
        },
        {
          "op": "set",
          "key": "SIGNAL_STATE",
          "value": "AVAILABLE"
        }
      ],
      "next": "A1-S01-B01"
    },
    "A1-S01-B01": {
      "id": "A1-S01-B01",
      "sceneId": "A1-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S01-B01-M01",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B01-M02",
          "sender": "nico",
          "text": "Ho fatto una cosa.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B01-M03",
          "sender": "nico",
          "text": "Prima che tu lo dica:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B01-M04",
          "sender": "nico",
          "text": "sì, riguarda Marta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B01-M05",
          "sender": "nico",
          "text": "Sono su un pulmino.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B01-M06",
          "sender": "nico",
          "text": "In montagna.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B01-M07",
          "sender": "nico",
          "text": "Con Marta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B01-M08",
          "sender": "nico",
          "text": "E con un po' di gente che sembra sapere perfettamente dove stiamo andando.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B01-M09",
          "sender": "nico",
          "text": "Io no.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B01-M10",
          "sender": "nico",
          "text": "Dettaglio minore.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S01-B02"
    },
    "A1-S01-B02": {
      "id": "A1-S01-B02",
      "sceneId": "A1-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S01-B02-M01",
          "sender": "nico",
          "text": "Ti ricordi quando ti ho detto che lei mi aveva parlato di quel ritiro?",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M02",
          "sender": "nico",
          "text": "Comunità dell'Aurora.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M03",
          "sender": "nico",
          "text": "Nome molto tranquillo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M04",
          "sender": "nico",
          "text": "Per niente da posto dove ti fanno alzare alle cinque per guardare il sole.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M05",
          "sender": "nico",
          "text": "Comunque.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M06",
          "sender": "nico",
          "text": "Lei mi fa che ci sarebbe tornata per qualche giorno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M07",
          "sender": "nico",
          "text": "Io, persona adulta e con un ottimo controllo degli impulsi, ho risposto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M08",
          "sender": "nico",
          "text": "\"Sì, conosco bene quel genere di percorso.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M09",
          "sender": "nico",
          "text": "Non conosco bene quel genere di percorso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M10",
          "sender": "nico",
          "text": "Non so neanche cosa significhi \"percorso\" quando la gente lo dice con quella faccia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M11",
          "sender": "nico",
          "text": "A un certo punto le ho chiesto se potevano venire anche persone nuove.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M12",
          "sender": "nico",
          "text": "Lei ha detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M13",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M14",
          "sender": "nico",
          "text": "Io ho detto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M15",
          "sender": "nico",
          "text": "\"Potrei venire anch'io.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M16",
          "sender": "nico",
          "text": "Lei ha fatto una faccia.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M17",
          "sender": "nico",
          "text": "Che in quel momento ho deciso di interpretare come entusiasmo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M18",
          "sender": "nico",
          "text": "E io sono venuto.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M19",
          "sender": "nico",
          "text": "Quindi tecnicamente questa è una spedizione scientifica.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M20",
          "sender": "nico",
          "text": "Sto studiando quanto può essere stupido un uomo di ventinove anni.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S01-B03"
    },
    "A1-S01-B03": {
      "id": "A1-S01-B03",
      "sceneId": "A1-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S01-B03-M01",
          "sender": "nico",
          "text": "Sto cercando di recuperare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B03-M02",
          "sender": "nico",
          "text": "Ho cercato \"millenarismo\".",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B03-M03",
          "sender": "nico",
          "text": "Il primo risultato contiene le parole \"fine del mondo\".",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B03-M04",
          "sender": "nico",
          "text": "Molto sobrio.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B03-M05",
          "sender": "nico",
          "text": "Aspetta.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B03-M06",
          "sender": "nico",
          "text": "Non carica più.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B03-M07",
          "sender": "nico",
          "text": "Una tacca.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B03-M08",
          "sender": "nico",
          "text": "Poi zero.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B03-M09",
          "sender": "nico",
          "text": "Ottimo posto per diventare improvvisamente esperto di religioni alternative.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S01-B04"
    },
    "A1-S01-B04": {
      "id": "A1-S01-B04",
      "sceneId": "A1-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S01-B04-M01",
          "sender": "nico",
          "text": "Lei è due file davanti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B04-M02",
          "sender": "nico",
          "text": "Si è girata due volte.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B04-M03",
          "sender": "nico",
          "text": "La prima perché a uno è caduta una bottiglia.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B04-M04",
          "sender": "nico",
          "text": "Quella non la conto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B04-M05",
          "sender": "nico",
          "text": "La seconda non aveva una causa evidente.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B04-M06",
          "sender": "nico",
          "text": "Non voglio sovrainterpretare.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B04-M07",
          "sender": "nico",
          "text": "Però statisticamente è interessante.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S01-C01"
    },
    "A1-S01-C01": {
      "id": "A1-S01-C01",
      "sceneId": "A1-S01",
      "type": "choice",
      "prompt": "Cosa gli dici?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A1-S01-C01-A",
          "text": "Vai a parlarle adesso.",
          "effects": [
            {
              "op": "set",
              "key": "A1S01_MARTA_APPROACH",
              "value": true
            },
            {
              "op": "add",
              "key": "NICO_ROMANCE",
              "value": 1
            }
          ],
          "next": "A1-S01-C01-A-R"
        },
        {
          "id": "A1-S01-C01-B",
          "text": "Aspetta. Non fare il disperato.",
          "effects": [
            {
              "op": "set",
              "key": "A1S01_MARTA_WAIT",
              "value": true
            }
          ],
          "next": "A1-S01-C01-B-R"
        },
        {
          "id": "A1-S01-C01-C",
          "text": "Ridimensiona almeno la bugia. Dille che non sei un esperto.",
          "effects": [
            {
              "op": "set",
              "key": "A1S01_SPIRITUALITY_PARTIAL_ADMISSION",
              "value": true
            },
            {
              "op": "add",
              "key": "NICO_ROMANCE",
              "value": -1
            }
          ],
          "next": "A1-S01-C01-C-R"
        }
      ]
    },
    "A1-S01-C01-A-R": {
      "id": "A1-S01-C01-A-R",
      "sceneId": "A1-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S01-C01-A-R-M01",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M02",
          "sender": "nico",
          "text": "Facile.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M03",
          "sender": "nico",
          "text": "Aggiornamento.",
          "delayMs": 5000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M04",
          "sender": "nico",
          "text": "Sono arrivato a:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M05",
          "sender": "nico",
          "text": "\"Tutto bene?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M06",
          "sender": "nico",
          "text": "Lei ha detto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M07",
          "sender": "nico",
          "text": "\"Sì. Tu?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M08",
          "sender": "nico",
          "text": "Io ho detto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M09",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M10",
          "sender": "nico",
          "text": "Conversazione storica.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M11",
          "sender": "nico",
          "text": "Tra qualche anno ne parleranno i libri.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M12",
          "sender": "nico",
          "text": "Però ha sorriso.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M13",
          "sender": "nico",
          "text": "Questo lo registro.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S01-B05"
    },
    "A1-S01-C01-B-R": {
      "id": "A1-S01-C01-B-R",
      "sceneId": "A1-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S01-C01-B-R-M01",
          "sender": "nico",
          "text": "Finalmente qualcuno ragionevole.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-B-R-M02",
          "sender": "nico",
          "text": "Lo odio.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-B-R-M03",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-B-R-M04",
          "sender": "nico",
          "text": "Si è girata di nuovo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-B-R-M05",
          "sender": "nico",
          "text": "Questa volta non è caduto niente.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-B-R-M06",
          "sender": "nico",
          "text": "Quindi tecnicamente l'iniziativa è sua.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-B-R-M07",
          "sender": "nico",
          "text": "Non dire niente.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S01-B05"
    },
    "A1-S01-C01-C-R": {
      "id": "A1-S01-C01-C-R",
      "sceneId": "A1-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S01-C01-C-R-M01",
          "sender": "nico",
          "text": "Questa è la risposta adulta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-C-R-M02",
          "sender": "nico",
          "text": "Mi oppongo per principio.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-C-R-M03",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-C-R-M04",
          "sender": "nico",
          "text": "Quando si è girata le ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-C-R-M05",
          "sender": "nico",
          "text": "\"Comunque non sono esattamente un esperto di queste cose.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-C-R-M06",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-C-R-M07",
          "sender": "nico",
          "text": "\"Non devi esserlo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-C-R-M08",
          "sender": "nico",
          "text": "Che è una risposta molto rassicurante.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-C-R-M09",
          "sender": "nico",
          "text": "E completamente priva di informazioni.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S01-B05"
    },
    "A1-S01-B05": {
      "id": "A1-S01-B05",
      "sceneId": "A1-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S01-B05-M01",
          "sender": "nico",
          "text": "Sta iniziando a piovere più forte.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M02",
          "sender": "nico",
          "text": "Il tizio che guida ha appena detto che da qui in poi il telefono prende male.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M03",
          "sender": "nico",
          "text": "Poi ha aggiunto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M04",
          "sender": "nico",
          "text": "\"Con questa pioggia andiamo piano. È l'unica strada che sale alla proprietà.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M05",
          "sender": "nico",
          "text": "Mi piace che abbia messo queste due informazioni nella stessa frase.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M06",
          "sender": "nico",
          "text": "Molto rassicurante.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M07",
          "sender": "nico",
          "text": "Il navigatore ha appena perso la strada.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M08",
          "sender": "nico",
          "text": "Cioè il telefono sostiene che siamo in mezzo a una zona verde senza nome.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M09",
          "sender": "nico",
          "text": "Che, guardando fuori, è difficile contestare.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S01-ENDSTATE"
    },
    "A1-S01-ENDSTATE": {
      "id": "A1-S01-ENDSTATE",
      "sceneId": "A1-S01",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_SINGLE_ROAD",
          "value": true
        },
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "GOOD"
        },
        {
          "op": "set",
          "key": "SIGNAL_STATE",
          "value": "WEAK"
        }
      ],
      "next": "A1-S01-CHECK"
    },
    "A1-S01-CHECK": {
      "id": "A1-S01-CHECK",
      "sceneId": "A1-S01",
      "type": "condition",
      "cases": [
        {
          "when": {
            "op": "eq",
            "key": "KNOWS_SINGLE_ROAD",
            "value": true
          },
          "next": "A1-S02-START"
        }
      ],
      "else": "A1-S02-START"
    },
    "A1-S02-START": {
      "id": "A1-S02-START",
      "sceneId": "A1-S02",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "SIGNAL_STATE",
          "value": "INTERMITTENT"
        }
      ],
      "next": "A1-S02-B01"
    },
    "A1-S02-B01": {
      "id": "A1-S02-B01",
      "sceneId": "A1-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S02-B01-M01",
          "sender": "nico",
          "text": "Update geografico.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M02",
          "sender": "nico",
          "text": "Adesso ci sono solo alberi.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M03",
          "sender": "nico",
          "text": "Cioè:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M04",
          "sender": "nico",
          "text": "bosco",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M05",
          "sender": "nico",
          "text": "campo",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M06",
          "sender": "nico",
          "text": "bosco",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M07",
          "sender": "nico",
          "text": "altro bosco",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M08",
          "sender": "nico",
          "text": "Nessuna casa da un po'.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M09",
          "sender": "nico",
          "text": "Abbiamo appena attraversato un ponte che sembra più vecchio del concetto di manutenzione.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M10",
          "sender": "nico",
          "text": "Molto carino.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M11",
          "sender": "nico",
          "text": "Molto rassicurante anche lui.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S02-B02"
    },
    "A1-S02-B02": {
      "id": "A1-S02-B02",
      "sceneId": "A1-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S02-B02-M01",
          "sender": "nico",
          "text": "Credo che i messaggi ti stiano arrivando a gruppi.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B02-M02",
          "sender": "nico",
          "text": "Qui fa:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B02-M03",
          "sender": "nico",
          "text": "una tacca",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B02-M04",
          "sender": "nico",
          "text": "zero",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B02-M05",
          "sender": "nico",
          "text": "una tacca",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B02-M06",
          "sender": "nico",
          "text": "zero",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B02-M07",
          "sender": "nico",
          "text": "È un sistema semplice.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S02-B03"
    },
    "A1-S02-B03": {
      "id": "A1-S02-B03",
      "sceneId": "A1-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S02-B03-M01",
          "sender": "nico",
          "text": "Altra cosa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M02",
          "sender": "nico",
          "text": "Quasi tutti qui sembrano conoscersi.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M03",
          "sender": "nico",
          "text": "Non tutti tutti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M04",
          "sender": "nico",
          "text": "Ma abbastanza.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M05",
          "sender": "nico",
          "text": "Due si sono salutati come se non si vedessero da mesi.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M06",
          "sender": "nico",
          "text": "Uno ha chiesto a un'altra se \"Tommaso ha sistemato il tetto del dormitorio\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M07",
          "sender": "nico",
          "text": "Quindi non è esattamente una gita di gente presa a caso su internet.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M08",
          "sender": "nico",
          "text": "Probabilmente vengono qui spesso.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M09",
          "sender": "nico",
          "text": "Normale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M10",
          "sender": "nico",
          "text": "La gente ha hobby.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M11",
          "sender": "nico",
          "text": "Alcuni fanno trekking.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M12",
          "sender": "nico",
          "text": "Alcuni tornano volontariamente in posti senza campo.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S02-B04"
    },
    "A1-S02-B04": {
      "id": "A1-S02-B04",
      "sceneId": "A1-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S02-B04-M01",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M02",
          "sender": "nico",
          "text": "Quello davanti ha appena detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M03",
          "sender": "nico",
          "text": "\"Pensavo che quest'anno non sarei riuscito a tornare prima del Giorno Bianco.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M04",
          "sender": "nico",
          "text": "Io, con la delicatezza che mi contraddistingue, ho chiesto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M05",
          "sender": "nico",
          "text": "\"Cos'è il Giorno Bianco?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M06",
          "sender": "nico",
          "text": "Mi ha guardato.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M07",
          "sender": "nico",
          "text": "Ha sorriso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M08",
          "sender": "nico",
          "text": "E ha detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M09",
          "sender": "nico",
          "text": "\"Lo capirai.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M10",
          "sender": "nico",
          "text": "Odio quando la gente spirituale risponde così.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M11",
          "sender": "nico",
          "text": "Se chiedo dov'è il bagno voglio una direzione.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M12",
          "sender": "nico",
          "text": "Non un percorso interiore.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S02-B05"
    },
    "A1-S02-B05": {
      "id": "A1-S02-B05",
      "sceneId": "A1-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S02-B05-M01",
          "sender": "nico",
          "text": "Comunque sarà una festa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B05-M02",
          "sender": "nico",
          "text": "O una cerimonia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B05-M03",
          "sender": "nico",
          "text": "O una di quelle cose dove tutti stanno zitti per sei ore e poi dicono che è stato intenso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B05-M04",
          "sender": "nico",
          "text": "Non sembra che nessuno qui sia particolarmente preoccupato.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B05-M05",
          "sender": "nico",
          "text": "Anzi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B05-M06",
          "sender": "nico",
          "text": "Sembrano contenti di tornare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B05-M07",
          "sender": "nico",
          "text": "Questo, per ora, lo metto nella cartella:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B05-M08",
          "sender": "nico",
          "text": "\"gente strana ma apparentemente felice\".",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S02-ENDSTATE"
    },
    "A1-S02-ENDSTATE": {
      "id": "A1-S02-ENDSTATE",
      "sceneId": "A1-S02",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_WHITE_DAY_NAME",
          "value": true
        },
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "GOOD"
        },
        {
          "op": "set",
          "key": "SIGNAL_STATE",
          "value": "INTERMITTENT"
        }
      ],
      "next": "A1-S03-START"
    },
    "A1-S03-START": {
      "id": "A1-S03-START",
      "sceneId": "A1-S03",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "SIGNAL_STATE",
          "value": "WEAK"
        }
      ],
      "next": "A1-S03-B01"
    },
    "A1-S03-B01": {
      "id": "A1-S03-B01",
      "sceneId": "A1-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S03-B01-M01",
          "sender": "nico",
          "text": "Siamo arrivati.",
          "delayMs": 6000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M02",
          "sender": "nico",
          "text": "Pessime notizie.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M03",
          "sender": "nico",
          "text": "È normale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M04",
          "sender": "nico",
          "text": "Cioè molto più normale di quanto sperassi.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M05",
          "sender": "nico",
          "text": "Edifici di pietra.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M06",
          "sender": "nico",
          "text": "Orti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M07",
          "sender": "nico",
          "text": "Un capannone.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M08",
          "sender": "nico",
          "text": "Animali.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M09",
          "sender": "nico",
          "text": "Gente che porta cassette.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M10",
          "sender": "nico",
          "text": "Nessun gong.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M11",
          "sender": "nico",
          "text": "Nessuno mi ha chiesto il segno zodiacale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M12",
          "sender": "nico",
          "text": "Per ora.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S03-B02"
    },
    "A1-S03-B02": {
      "id": "A1-S03-B02",
      "sceneId": "A1-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S03-B02-M01",
          "sender": "nico",
          "text": "Ci sono persone di tutte le età.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B02-M02",
          "sender": "nico",
          "text": "Adulte.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B02-M03",
          "sender": "nico",
          "text": "Coppie.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B02-M04",
          "sender": "nico",
          "text": "Gente che lavora.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B02-M05",
          "sender": "nico",
          "text": "Uno sta litigando con una carriola.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B02-M06",
          "sender": "nico",
          "text": "Sembra più un agriturismo organizzato molto seriamente che quello che mi ero immaginato.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B02-M07",
          "sender": "nico",
          "text": "Questo complica la mia posizione.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B02-M08",
          "sender": "nico",
          "text": "Ero preparato a giudicare.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S03-B03"
    },
    "A1-S03-B03": {
      "id": "A1-S03-B03",
      "sceneId": "A1-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S03-B03-M01",
          "sender": "nico",
          "text": "È arrivato uno che si chiama Tommaso.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B03-M02",
          "sender": "nico",
          "text": "Quaranta circa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B03-M03",
          "sender": "nico",
          "text": "Sembra quello che in qualunque altro posto ti spiega dove sono gli estintori.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B03-M04",
          "sender": "nico",
          "text": "Molto gentile.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B03-M05",
          "sender": "nico",
          "text": "Molto pratico.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B03-M06",
          "sender": "nico",
          "text": "Ha appena detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B03-M07",
          "sender": "nico",
          "text": "\"Se vi serve una coperta in più chiedete pure. Di notte qui viene un freddo assurdo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B03-M08",
          "sender": "nico",
          "text": "È difficile avere paura di uno che si preoccupa delle coperte.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S03-B04"
    },
    "A1-S03-B04": {
      "id": "A1-S03-B04",
      "sceneId": "A1-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S03-B04-M01",
          "sender": "nico",
          "text": "Aspetta.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M02",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M03",
          "sender": "nico",
          "text": "Marta conosce questa gente.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M04",
          "sender": "nico",
          "text": "Non nel senso:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M05",
          "sender": "nico",
          "text": "\"ciao, piacere\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M06",
          "sender": "nico",
          "text": "Nel senso che una l'ha chiamata per nome da metà cortile.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M07",
          "sender": "nico",
          "text": "Un altro le ha detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M08",
          "sender": "nico",
          "text": "\"Sei tornata.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M09",
          "sender": "nico",
          "text": "Lei sta sorridendo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M10",
          "sender": "nico",
          "text": "Sembra davvero contenta di essere qui.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M11",
          "sender": "nico",
          "text": "Questa parte non me l'aveva detta.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M12",
          "sender": "nico",
          "text": "Cioè mi aveva detto che conosceva il posto.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M13",
          "sender": "nico",
          "text": "Non che avesse una specie di tessera fedeltà.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M14",
          "sender": "nico",
          "text": "Non sto facendo il geloso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M15",
          "sender": "nico",
          "text": "Sto facendo analisi contestuale.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S03-B05"
    },
    "A1-S03-B05": {
      "id": "A1-S03-B05",
      "sceneId": "A1-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S03-B05-M01",
          "sender": "nico",
          "text": "Tommaso ci sta portando dentro.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B05-M02",
          "sender": "nico",
          "text": "Ha detto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B05-M03",
          "sender": "nico",
          "text": "\"Prima sistemiamo le cose del mondo esterno.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B05-M04",
          "sender": "nico",
          "text": "Immagino intenda i bagagli.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B05-M05",
          "sender": "nico",
          "text": "Ti aggiorno.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S03-ENDSTATE"
    },
    "A1-S03-ENDSTATE": {
      "id": "A1-S03-ENDSTATE",
      "sceneId": "A1-S03",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_MARTA_HAS_HISTORY",
          "value": true
        },
        {
          "op": "set",
          "key": "MET_TOMMASO",
          "value": true
        },
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "GOOD"
        },
        {
          "op": "set",
          "key": "SIGNAL_STATE",
          "value": "WEAK"
        },
        {
          "op": "set",
          "key": "VERTICAL_SLICE_COMPLETE",
          "value": true
        }
      ],
      "next": "A1-S03-END"
    },
    "A1-S03-END": {
      "id": "A1-S03-END",
      "sceneId": "A1-S03",
      "type": "state",
      "effects": [],
      "next": "A1-S04-START"
    },
    "A1-S04-START": {
      "id": "A1-S04-START",
      "sceneId": "A1-S04",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "SIGNAL_STATE",
          "value": "INTERMITTENT"
        }
      ],
      "next": "A1-S04-B01"
    },
    "A1-S04-B01": {
      "id": "A1-S04-B01",
      "sceneId": "A1-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S04-B01-M01",
          "sender": "nico",
          "text": "Aggiornamento.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M02",
          "sender": "nico",
          "text": "Non intendeva i bagagli.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M03",
          "sender": "nico",
          "text": "Hanno messo una cassetta sul tavolo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M04",
          "sender": "nico",
          "text": "Tommaso sta chiedendo a tutti di lasciare:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M05",
          "sender": "nico",
          "text": "telefono",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M06",
          "sender": "nico",
          "text": "smartwatch",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M07",
          "sender": "nico",
          "text": "tablet",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M08",
          "sender": "nico",
          "text": "documenti",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M09",
          "sender": "nico",
          "text": "chiavi della macchina",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M10",
          "sender": "nico",
          "text": "Le chiavi.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M11",
          "sender": "nico",
          "text": "E i documenti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M12",
          "sender": "nico",
          "text": "Per una vacanza spirituale.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S04-B02"
    },
    "A1-S04-B02": {
      "id": "A1-S04-B02",
      "sceneId": "A1-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S04-B02-M01",
          "sender": "nico",
          "text": "La spiegazione è:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B02-M02",
          "sender": "nico",
          "text": "niente distrazioni",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B02-M03",
          "sender": "nico",
          "text": "niente oggetti importanti da perdere mentre lavoriamo",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B02-M04",
          "sender": "nico",
          "text": "e tutto resta chiuso in un armadio dell'ufficio.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B02-M05",
          "sender": "nico",
          "text": "Detto così sembra quasi sensato.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B02-M06",
          "sender": "nico",
          "text": "Quasi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B02-M07",
          "sender": "nico",
          "text": "Comunque tutti stanno consegnando tutto senza fare storie.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B02-M08",
          "sender": "nico",
          "text": "Marta compresa.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S04-B03"
    },
    "A1-S04-B03": {
      "id": "A1-S04-B03",
      "sceneId": "A1-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S04-B03-M01",
          "sender": "nico",
          "text": "C'è un dettaglio.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B03-M02",
          "sender": "nico",
          "text": "Io ho due telefoni.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B03-M03",
          "sender": "nico",
          "text": "Quello normale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B03-M04",
          "sender": "nico",
          "text": "E questo rottame da cui ti sto scrivendo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B03-M05",
          "sender": "nico",
          "text": "Quello d'emergenza.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B03-M06",
          "sender": "nico",
          "text": "Quello con il vetro rotto che tengo nello zaino e dimentico di avere per mesi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B03-M07",
          "sender": "nico",
          "text": "Il principale l'ho messo nella cassetta.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B03-M08",
          "sender": "nico",
          "text": "Questo no.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B03-M09",
          "sender": "nico",
          "text": "Questo è ancora nella tasca interna dello zaino.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S04-C02"
    },
    "A1-S04-C02": {
      "id": "A1-S04-C02",
      "sceneId": "A1-S04",
      "type": "choice",
      "prompt": "Cosa dici a Nico?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A1-S04-C02-A",
          "text": "Tienilo, ma non farti vedere.",
          "effects": [
            {
              "op": "set",
              "key": "A1S04_PLAYER_BACKED_PHONE",
              "value": true
            },
            {
              "op": "add",
              "key": "NICO_PLAYER_TRUST",
              "value": 1
            }
          ],
          "next": "A1-S04-C02-A-R"
        },
        {
          "id": "A1-S04-C02-B",
          "text": "Chiedi almeno perché vogliono anche i documenti.",
          "effects": [
            {
              "op": "set",
              "key": "A1S04_ASKED_ABOUT_DOCUMENTS",
              "value": true
            }
          ],
          "next": "A1-S04-C02-B-R"
        },
        {
          "id": "A1-S04-C02-C",
          "text": "È una pessima idea. Dagli anche quello.",
          "effects": [
            {
              "op": "set",
              "key": "A1S04_PLAYER_TOLD_SURRENDER",
              "value": true
            }
          ],
          "next": "A1-S04-C02-C-R"
        }
      ]
    },
    "A1-S04-C02-A-R": {
      "id": "A1-S04-C02-A-R",
      "sceneId": "A1-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S04-C02-A-R-M01",
          "sender": "nico",
          "text": "Esatto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M02",
          "sender": "nico",
          "text": "Finalmente una decisione equilibrata e responsabile.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M03",
          "sender": "nico",
          "text": "Nascondere un telefono a una comunità religiosa isolata.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M04",
          "sender": "nico",
          "text": "Comportamento da adulto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M05",
          "sender": "nico",
          "text": "Ma mi serve per scriverti.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M06",
          "sender": "nico",
          "text": "E nel caso Marta mi mandi qualcosa.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M07",
          "sender": "nico",
          "text": "...",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M08",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M09",
          "sender": "nico",
          "text": "Ha appena consegnato il telefono.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M10",
          "sender": "nico",
          "text": "Questo è effettivamente un punto debole del piano.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S04-B04"
    },
    "A1-S04-C02-B-R": {
      "id": "A1-S04-C02-B-R",
      "sceneId": "A1-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S04-C02-B-R-M01",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M02",
          "sender": "nico",
          "text": "Questa domanda è legittima.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M03",
          "sender": "nico",
          "text": "Ho chiesto.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M04",
          "sender": "nico",
          "text": "Tommaso ha detto che preferiscono tenere insieme documenti e oggetti di valore perché durante il lavoro la gente lascia vestiti e zaini un po' ovunque.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M05",
          "sender": "nico",
          "text": "Poi ha aggiunto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M06",
          "sender": "nico",
          "text": "\"Quando vi serviranno, sapete dove sono.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M07",
          "sender": "nico",
          "text": "Risposta ragionevole.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M08",
          "sender": "nico",
          "text": "Fastidiosamente ragionevole.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M09",
          "sender": "nico",
          "text": "Il vecchio telefono resta qui.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M10",
          "sender": "nico",
          "text": "Non l'ha visto nessuno.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S04-B04"
    },
    "A1-S04-C02-C-R": {
      "id": "A1-S04-C02-C-R",
      "sceneId": "A1-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S04-C02-C-R-M01",
          "sender": "nico",
          "text": "No.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M02",
          "sender": "nico",
          "text": "Cioè.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M03",
          "sender": "nico",
          "text": "Capisco il concetto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M04",
          "sender": "nico",
          "text": "Ma no.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M05",
          "sender": "nico",
          "text": "Mi serve per scriverti.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M06",
          "sender": "nico",
          "text": "E nel caso Marta mi mandi qualcosa.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M07",
          "sender": "nico",
          "text": "...",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M08",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M09",
          "sender": "nico",
          "text": "Lo so che ha appena consegnato il suo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M10",
          "sender": "nico",
          "text": "Non è il momento di attaccarsi ai dettagli.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S04-B04"
    },
    "A1-S04-B04": {
      "id": "A1-S04-B04",
      "sceneId": "A1-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S04-B04-M01",
          "sender": "nico",
          "text": "Fatto.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B04-M02",
          "sender": "nico",
          "text": "Telefono principale, documento e chiavi sono nell'armadio.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B04-M03",
          "sender": "nico",
          "text": "Questo è con me.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B04-M04",
          "sender": "nico",
          "text": "Non so perché mi sembra di aver appena commesso un reato molto piccolo.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B04-M05",
          "sender": "nico",
          "text": "Tommaso non ha notato niente.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B04-M06",
          "sender": "nico",
          "text": "Credo.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S04-ENDSTATE"
    },
    "A1-S04-ENDSTATE": {
      "id": "A1-S04-ENDSTATE",
      "sceneId": "A1-S04",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "DEVICES_SURRENDERED",
          "value": true
        },
        {
          "op": "set",
          "key": "DOCS_SURRENDERED",
          "value": true
        },
        {
          "op": "set",
          "key": "KEYS_SURRENDERED",
          "value": true
        },
        {
          "op": "set",
          "key": "OLD_PHONE_HIDDEN",
          "value": true
        },
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "GOOD"
        }
      ],
      "next": "A1-S05-START"
    },
    "A1-S05-START": {
      "id": "A1-S05-START",
      "sceneId": "A1-S05",
      "type": "state",
      "effects": [],
      "next": "A1-S05-B01"
    },
    "A1-S05-B01": {
      "id": "A1-S05-B01",
      "sceneId": "A1-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S05-B01-M01",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B01-M02",
          "sender": "nico",
          "text": "Siamo rimasti indietro un attimo.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B01-M03",
          "sender": "nico",
          "text": "Io e Marta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B01-M04",
          "sender": "nico",
          "text": "Da soli.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B01-M05",
          "sender": "nico",
          "text": "Calma.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B01-M06",
          "sender": "nico",
          "text": "Sto gestendo la situazione con grande maturità.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S05-B02"
    },
    "A1-S05-B02": {
      "id": "A1-S05-B02",
      "sceneId": "A1-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S05-B02-M01",
          "sender": "nico",
          "text": "Ha detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M02",
          "sender": "nico",
          "text": "\"Quindi sei venuto davvero.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M03",
          "sender": "nico",
          "text": "Non so esattamente che tono fosse.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M04",
          "sender": "nico",
          "text": "Un po' sorpresa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M05",
          "sender": "nico",
          "text": "Un po' divertita.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M06",
          "sender": "nico",
          "text": "Io ho risposto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M07",
          "sender": "nico",
          "text": "\"Te l'avevo detto.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M08",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M09",
          "sender": "nico",
          "text": "\"Tu dici molte cose.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M10",
          "sender": "nico",
          "text": "Colpo basso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M11",
          "sender": "nico",
          "text": "Corretto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M12",
          "sender": "nico",
          "text": "Ma basso.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S05-CBACK01"
    },
    "A1-S05-CBACK01-TRUE": {
      "id": "A1-S05-CBACK01-TRUE",
      "sceneId": "A1-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S05-CBACK01-TRUE-M01",
          "sender": "nico",
          "text": "Poi ha aggiunto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-CBACK01-TRUE-M02",
          "sender": "nico",
          "text": "\"Almeno hai già ammesso di non essere un esperto.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-CBACK01-TRUE-M03",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-CBACK01-TRUE-M04",
          "sender": "nico",
          "text": "\"Ho detto non esattamente un esperto.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-CBACK01-TRUE-M05",
          "sender": "nico",
          "text": "C'è una differenza legale.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S05-B03"
    },
    "A1-S05-CBACK01": {
      "id": "A1-S05-CBACK01",
      "sceneId": "A1-S05",
      "type": "condition",
      "cases": [
        {
          "when": {
            "op": "eq",
            "key": "A1S01_SPIRITUALITY_PARTIAL_ADMISSION",
            "value": true
          },
          "next": "A1-S05-CBACK01-TRUE"
        }
      ],
      "else": "A1-S05-B03"
    },
    "A1-S05-B03": {
      "id": "A1-S05-B03",
      "sceneId": "A1-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S05-B03-M01",
          "sender": "nico",
          "text": "Comunque lei sa tutto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M02",
          "sender": "nico",
          "text": "Dove sono gli alloggi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M03",
          "sender": "nico",
          "text": "Dove si mangia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M04",
          "sender": "nico",
          "text": "Dove lasciano gli stivali bagnati.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M05",
          "sender": "nico",
          "text": "Ha salutato altre due persone per nome.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M06",
          "sender": "nico",
          "text": "Quindi ho chiesto da quanto viene qui.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M07",
          "sender": "nico",
          "text": "Risposta:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M08",
          "sender": "nico",
          "text": "\"Da un po'.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M09",
          "sender": "nico",
          "text": "Fine.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M10",
          "sender": "nico",
          "text": "Molto esaustiva.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S05-C03"
    },
    "A1-S05-C03": {
      "id": "A1-S05-C03",
      "sceneId": "A1-S05",
      "type": "choice",
      "prompt": "Marta ha chiaramente chiuso l'argomento. Come consigli a Nico di reagire?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A1-S05-C03-A",
          "text": "Insisti. \"Quanto sarebbe un po'?\"",
          "effects": [
            {
              "op": "set",
              "key": "A1S05_PRESSED_MARTA_HISTORY",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": -1
            }
          ],
          "next": "A1-S05-C03-A-R"
        },
        {
          "id": "A1-S05-C03-B",
          "text": "Lasciala stare.",
          "effects": [
            {
              "op": "set",
              "key": "A1S05_RESPECTED_BOUNDARY",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 1
            }
          ],
          "next": "A1-S05-C03-B-R"
        },
        {
          "id": "A1-S05-C03-C",
          "text": "Sdrammatizza. \"Hai una tessera punti?\"",
          "effects": [
            {
              "op": "set",
              "key": "A1S05_JOKED_ABOUT_HISTORY",
              "value": true
            },
            {
              "op": "add",
              "key": "PLAYER_SARCASM",
              "value": 1
            }
          ],
          "next": "A1-S05-C03-C-R"
        }
      ]
    },
    "A1-S05-C03-A-R": {
      "id": "A1-S05-C03-A-R",
      "sceneId": "A1-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S05-C03-A-R-M01",
          "sender": "nico",
          "text": "Ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-A-R-M02",
          "sender": "nico",
          "text": "\"Quanto sarebbe un po'?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-A-R-M03",
          "sender": "nico",
          "text": "Lei mi ha guardato.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-A-R-M04",
          "sender": "nico",
          "text": "\"Abbastanza da sapere dove sono le docce.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-A-R-M05",
          "sender": "nico",
          "text": "Poi ha indicato il vialetto.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-A-R-M06",
          "sender": "nico",
          "text": "Cambio argomento certificato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-A-R-M07",
          "sender": "nico",
          "text": "Ricevuto.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S05-B04"
    },
    "A1-S05-C03-B-R": {
      "id": "A1-S05-C03-B-R",
      "sceneId": "A1-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S05-C03-B-R-M01",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-B-R-M02",
          "sender": "nico",
          "text": "Ho lasciato perdere.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-B-R-M03",
          "sender": "nico",
          "text": "Per una volta posso anche non interrogare una persona dopo trenta secondi da soli.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-B-R-M04",
          "sender": "nico",
          "text": "Lei ha continuato a camminare.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-B-R-M05",
          "sender": "nico",
          "text": "Non sembrava dispiaciuta.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S05-B04"
    },
    "A1-S05-C03-C-R": {
      "id": "A1-S05-C03-C-R",
      "sceneId": "A1-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S05-C03-C-R-M01",
          "sender": "nico",
          "text": "Ho chiesto se ha una tessera punti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-C-R-M02",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-C-R-M03",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-C-R-M04",
          "sender": "nico",
          "text": "\"Al decimo ritiro ti danno una capra.\"",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-C-R-M05",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-C-R-M06",
          "sender": "nico",
          "text": "Mi piace quando collabora.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S05-B04"
    },
    "A1-S05-B04": {
      "id": "A1-S05-B04",
      "sceneId": "A1-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S05-B04-M01",
          "sender": "nico",
          "text": "Poi, prima di raggiungere gli altri, ha detto:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B04-M02",
          "sender": "nico",
          "text": "\"Comunque sono contenta che tu sia qui.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B04-M03",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B04-M04",
          "sender": "nico",
          "text": "Non diciamo niente.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B04-M05",
          "sender": "nico",
          "text": "Però l'ha detto lei.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B04-M06",
          "sender": "nico",
          "text": "Testuale.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B04-M07",
          "sender": "nico",
          "text": "Non sto interpretando.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B04-M08",
          "sender": "nico",
          "text": "Sto riportando un fatto.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S05-ENDSTATE"
    },
    "A1-S05-ENDSTATE": {
      "id": "A1-S05-ENDSTATE",
      "sceneId": "A1-S05",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_MARTA_HAS_HISTORY",
          "value": true
        }
      ],
      "next": "A1-S06-START"
    },
    "A1-S06-START": {
      "id": "A1-S06-START",
      "sceneId": "A1-S06",
      "type": "state",
      "effects": [],
      "next": "A1-S06-B01"
    },
    "A1-S06-B01": {
      "id": "A1-S06-B01",
      "sceneId": "A1-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S06-B01-M01",
          "sender": "nico",
          "text": "Ho visto Elia.",
          "delayMs": 6500,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B01-M02",
          "sender": "nico",
          "text": "Problema.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B01-M03",
          "sender": "nico",
          "text": "È normale anche lui.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B01-M04",
          "sender": "nico",
          "text": "Jeans.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B01-M05",
          "sender": "nico",
          "text": "Maglione.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B01-M06",
          "sender": "nico",
          "text": "Scarpe con del fango.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B01-M07",
          "sender": "nico",
          "text": "Niente tunica.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B01-M08",
          "sender": "nico",
          "text": "Niente collana di legno enorme.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B01-M09",
          "sender": "nico",
          "text": "Niente sguardo da \"ho visto l'universo mentre mangiavo una radice\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B01-M10",
          "sender": "nico",
          "text": "Mi stanno togliendo tutti i punti di riferimento.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S06-B02"
    },
    "A1-S06-B02": {
      "id": "A1-S06-B02",
      "sceneId": "A1-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S06-B02-M01",
          "sender": "nico",
          "text": "Ci ha fatto sedere.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M02",
          "sender": "nico",
          "text": "Non ha iniziato con una preghiera.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M03",
          "sender": "nico",
          "text": "Ha detto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M04",
          "sender": "nico",
          "text": "\"Se qualcuno vi dice di avere tutte le risposte, probabilmente vuole qualcosa da voi.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M05",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M06",
          "sender": "nico",
          "text": "Questa era sorprendentemente sensata.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M07",
          "sender": "nico",
          "text": "Poi ha detto che non siamo qui per imparare una dottrina a memoria.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M08",
          "sender": "nico",
          "text": "Che ognuno dovrebbe osservare cosa si porta dietro.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M09",
          "sender": "nico",
          "text": "Paure.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M10",
          "sender": "nico",
          "text": "Abitudini.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M11",
          "sender": "nico",
          "text": "Cose che considera indispensabili solo perché non ha mai provato a farne a meno.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S06-B03"
    },
    "A1-S06-B03": {
      "id": "A1-S06-B03",
      "sceneId": "A1-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S06-B03-M01",
          "sender": "nico",
          "text": "Lui la chiama \"Vecchia Epoca\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B03-M02",
          "sender": "nico",
          "text": "Non il periodo storico.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B03-M03",
          "sender": "nico",
          "text": "Più tipo il modo in cui viviamo adesso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B03-M04",
          "sender": "nico",
          "text": "Dice che passiamo metà del tempo a cercare di controllare cose che comunque cambiano.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B03-M05",
          "sender": "nico",
          "text": "Persone.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B03-M06",
          "sender": "nico",
          "text": "Lavoro.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B03-M07",
          "sender": "nico",
          "text": "Immagine che abbiamo di noi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B03-M08",
          "sender": "nico",
          "text": "Fin qui è il genere di cosa che potresti sentire anche in un podcast molto lungo.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S06-B04"
    },
    "A1-S06-B04": {
      "id": "A1-S06-B04",
      "sceneId": "A1-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S06-B04-M01",
          "sender": "nico",
          "text": "Poi è tornato fuori il Giorno Bianco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B04-M02",
          "sender": "nico",
          "text": "Lo ha chiamato un passaggio.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B04-M03",
          "sender": "nico",
          "text": "Un momento per arrivare \"più leggeri\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B04-M04",
          "sender": "nico",
          "text": "Ha detto che essere pronti non significa capire tutto adesso.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B04-M05",
          "sender": "nico",
          "text": "Significa cominciare a vedere cosa non riusciamo a lasciare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B04-M06",
          "sender": "nico",
          "text": "Molto spirituale.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B04-M07",
          "sender": "nico",
          "text": "Ancora nessuna spiegazione concreta.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S06-B05"
    },
    "A1-S06-B05": {
      "id": "A1-S06-B05",
      "sceneId": "A1-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S06-B05-M01",
          "sender": "nico",
          "text": "Ah.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B05-M02",
          "sender": "nico",
          "text": "Altra cosa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B05-M03",
          "sender": "nico",
          "text": "\"Nessuno qui deve credere a qualcosa perché glielo dico io.\"",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B05-M04",
          "sender": "nico",
          "text": "Questa gente è pessima nel sembrare una setta.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B05-M05",
          "sender": "nico",
          "text": "Dovrebbero impegnarsi di più.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S06-B06"
    },
    "A1-S06-B06": {
      "id": "A1-S06-B06",
      "sceneId": "A1-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S06-B06-M01",
          "sender": "nico",
          "text": "Marta però lo sta ascoltando parecchio.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B06-M02",
          "sender": "nico",
          "text": "Cioè proprio concentrata.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B06-M03",
          "sender": "nico",
          "text": "Non sono geloso di un uomo di cinquant'anni con le scarpe infangate.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B06-M04",
          "sender": "nico",
          "text": "Sto solo rilevando una dinamica.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B06-M05",
          "sender": "nico",
          "text": "Una dinamica che non mi piace moltissimo.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S06-B07"
    },
    "A1-S06-B07": {
      "id": "A1-S06-B07",
      "sceneId": "A1-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S06-B07-M01",
          "sender": "nico",
          "text": "Finito.",
          "delayMs": 6500,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B07-M02",
          "sender": "nico",
          "text": "Verdetto provvisorio su Elia:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B07-M03",
          "sender": "nico",
          "text": "molto meno ridicolo del previsto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B07-M04",
          "sender": "nico",
          "text": "Che in qualche modo mi dà più fastidio.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S06-ENDSTATE"
    },
    "A1-S06-ENDSTATE": {
      "id": "A1-S06-ENDSTATE",
      "sceneId": "A1-S06",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "MET_ELIA",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_OLD_ERA_TERM",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_WHITE_DAY_NAME",
          "value": true
        },
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "GOOD"
        },
        {
          "op": "set",
          "key": "SIGNAL_STATE",
          "value": "INTERMITTENT"
        }
      ],
      "next": "A1-S07-START"
    },
    "A1-S07-START": {
      "id": "A1-S07-START",
      "sceneId": "A1-S07",
      "type": "state",
      "effects": [],
      "next": "A1-S07-B01"
    },
    "A1-S07-B01": {
      "id": "A1-S07-B01",
      "sceneId": "A1-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S07-B01-M01",
          "sender": "nico",
          "text": "Dormitorio uomini.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B01-M02",
          "sender": "nico",
          "text": "Quindi questa parte del piano sta andando molto bene.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B01-M03",
          "sender": "nico",
          "text": "Marta è nell'altro edificio.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B01-M04",
          "sender": "nico",
          "text": "Ovviamente.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S07-B02"
    },
    "A1-S07-B02": {
      "id": "A1-S07-B02",
      "sceneId": "A1-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S07-B02-M01",
          "sender": "nico",
          "text": "Ci hanno dato il programma.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M02",
          "sender": "nico",
          "text": "Sveglia presto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M03",
          "sender": "nico",
          "text": "Colazione tutti insieme.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M04",
          "sender": "nico",
          "text": "Lavori assegnati.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M05",
          "sender": "nico",
          "text": "Pranzo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M06",
          "sender": "nico",
          "text": "Altre attività.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M07",
          "sender": "nico",
          "text": "Cena.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M08",
          "sender": "nico",
          "text": "Silenzio a una certa ora.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M09",
          "sender": "nico",
          "text": "Niente alcol.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M10",
          "sender": "nico",
          "text": "Niente sesso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M11",
          "sender": "nico",
          "text": "Questa ultima regola mi sembra particolarmente ostile.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M12",
          "sender": "nico",
          "text": "Sì, lo so.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M13",
          "sender": "nico",
          "text": "Mi hanno appena preso telefono, documenti e chiavi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M14",
          "sender": "nico",
          "text": "Ma una cosa alla volta.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S07-B03"
    },
    "A1-S07-B03": {
      "id": "A1-S07-B03",
      "sceneId": "A1-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S07-B03-M01",
          "sender": "nico",
          "text": "Ah.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B03-M02",
          "sender": "nico",
          "text": "Alcune zone non sono per i nuovi arrivati.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B03-M03",
          "sender": "nico",
          "text": "Uffici.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B03-M04",
          "sender": "nico",
          "text": "Depositi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B03-M05",
          "sender": "nico",
          "text": "Alcuni spazi di lavoro.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B03-M06",
          "sender": "nico",
          "text": "Tommaso l'ha presentata come una questione di sicurezza.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B03-M07",
          "sender": "nico",
          "text": "Che, finché non mi chiedono di firmare col sangue, continuo a considerare plausibile.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S07-B04"
    },
    "A1-S07-B04": {
      "id": "A1-S07-B04",
      "sceneId": "A1-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S07-B04-M01",
          "sender": "nico",
          "text": "C'è uno qui che si chiama Davide.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M02",
          "sender": "nico",
          "text": "Più giovane di me.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M03",
          "sender": "nico",
          "text": "Venticinque, forse.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M04",
          "sender": "nico",
          "text": "È nuovo anche lui.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M05",
          "sender": "nico",
          "text": "E mi sta facendo sentire sorprendentemente rilassato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M06",
          "sender": "nico",
          "text": "Ha già chiesto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M07",
          "sender": "nico",
          "text": "a che ora ci svegliano",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M08",
          "sender": "nico",
          "text": "se le attività sono obbligatorie",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M09",
          "sender": "nico",
          "text": "quando ridanno i telefoni",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M10",
          "sender": "nico",
          "text": "e se domani possiamo uscire dalla proprietà.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M11",
          "sender": "nico",
          "text": "Tommaso ha risposto a tutto con una calma da reception.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M12",
          "sender": "nico",
          "text": "Davide continua ad annuire come se ogni risposta ne generasse altre tre.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S07-B05"
    },
    "A1-S07-B05": {
      "id": "A1-S07-B05",
      "sceneId": "A1-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S07-B05-M01",
          "sender": "nico",
          "text": "Mi ha chiesto se ero già stato qui.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M02",
          "sender": "nico",
          "text": "Ho detto no.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M03",
          "sender": "nico",
          "text": "Poi mi ha chiesto se conoscevo bene \"il percorso\".",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M04",
          "sender": "nico",
          "text": "Ho detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M05",
          "sender": "nico",
          "text": "\"Diciamo che sono qui con spirito di apertura.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M06",
          "sender": "nico",
          "text": "Questa bugia sta diventando più sofisticata.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M07",
          "sender": "nico",
          "text": "Lui ha detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M08",
          "sender": "nico",
          "text": "\"Ah.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M09",
          "sender": "nico",
          "text": "Non credo di averlo rassicurato.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S07-ENDSTATE"
    },
    "A1-S07-ENDSTATE": {
      "id": "A1-S07-ENDSTATE",
      "sceneId": "A1-S07",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "MET_DAVIDE",
          "value": true
        }
      ],
      "next": "A1-S08-START"
    },
    "A1-S08-START": {
      "id": "A1-S08-START",
      "sceneId": "A1-S08",
      "type": "state",
      "effects": [],
      "next": "A1-S08-B01"
    },
    "A1-S08-B01": {
      "id": "A1-S08-B01",
      "sceneId": "A1-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S08-B01-M01",
          "sender": "nico",
          "text": "Cena.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M02",
          "sender": "nico",
          "text": "E devo ammettere una cosa.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M03",
          "sender": "nico",
          "text": "È piacevole.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M04",
          "sender": "nico",
          "text": "Cibo semplice.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M05",
          "sender": "nico",
          "text": "Tavoloni.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M06",
          "sender": "nico",
          "text": "Gente che parla.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M07",
          "sender": "nico",
          "text": "Uno ha tirato fuori una chitarra.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M08",
          "sender": "nico",
          "text": "Lo so.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M09",
          "sender": "nico",
          "text": "La chitarra è un punto a sfavore.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M10",
          "sender": "nico",
          "text": "Però nessuno ha ancora cantato Imagine.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M11",
          "sender": "nico",
          "text": "Quindi siamo salvi.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S08-B02"
    },
    "A1-S08-B02": {
      "id": "A1-S08-B02",
      "sceneId": "A1-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S08-B02-M01",
          "sender": "nico",
          "text": "Ci sono coppie.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M02",
          "sender": "nico",
          "text": "Fratelli.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M03",
          "sender": "nico",
          "text": "Persone più giovani e più vecchie.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M04",
          "sender": "nico",
          "text": "Tutti adulti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M05",
          "sender": "nico",
          "text": "Si prendono in giro.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M06",
          "sender": "nico",
          "text": "Parlano di lavori da finire domani.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M07",
          "sender": "nico",
          "text": "Uno si lamenta che qualcuno lascia sempre gli attrezzi nel posto sbagliato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M08",
          "sender": "nico",
          "text": "Cioè.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M09",
          "sender": "nico",
          "text": "Non sembra gente che recita \"comunità\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M10",
          "sender": "nico",
          "text": "Sembra proprio una comunità.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M11",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M12",
          "sender": "nico",
          "text": "Forse sono solo hippie molto organizzati.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S08-B03"
    },
    "A1-S08-B03": {
      "id": "A1-S08-B03",
      "sceneId": "A1-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S08-B03-M01",
          "sender": "nico",
          "text": "Problema logistico.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M02",
          "sender": "nico",
          "text": "Avevo individuato il posto accanto a Marta.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M03",
          "sender": "nico",
          "text": "Perfetto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M04",
          "sender": "nico",
          "text": "Naturale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M05",
          "sender": "nico",
          "text": "Non sospetto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M06",
          "sender": "nico",
          "text": "Un tizio si è seduto lì.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M07",
          "sender": "nico",
          "text": "Senza nessun rispetto per la pianificazione.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M08",
          "sender": "nico",
          "text": "Adesso sono due posti più in là.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M09",
          "sender": "nico",
          "text": "Sto valutando un trasferimento tattico quando si alza qualcuno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M10",
          "sender": "nico",
          "text": "Non è ossessione.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M11",
          "sender": "nico",
          "text": "È geometria.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S08-B04"
    },
    "A1-S08-B04": {
      "id": "A1-S08-B04",
      "sceneId": "A1-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S08-B04-M01",
          "sender": "nico",
          "text": "Quella davanti a me si chiama Lea.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M02",
          "sender": "nico",
          "text": "È qui da anni, credo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M03",
          "sender": "nico",
          "text": "Normalissima.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M04",
          "sender": "nico",
          "text": "Mi ha spiegato dove prendono il pane senza trasformarlo in una metafora.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M05",
          "sender": "nico",
          "text": "Le sono grato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M06",
          "sender": "nico",
          "text": "Stavano parlando di famiglia.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M07",
          "sender": "nico",
          "text": "Non so come ci siano arrivati.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M08",
          "sender": "nico",
          "text": "Lei ha detto che quando è venuta qui aveva smesso quasi del tutto di parlare con la sua.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M09",
          "sender": "nico",
          "text": "Poi:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M10",
          "sender": "nico",
          "text": "\"All'inizio pensavo mi mancassero. Poi ho capito che mi mancava solo l'abitudine.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M11",
          "sender": "nico",
          "text": "Detta così è un po' forte.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M12",
          "sender": "nico",
          "text": "Ma lei non l'ha detta in modo triste.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M13",
          "sender": "nico",
          "text": "E gli altri non hanno fatto quella faccia che fai quando qualcuno dice una cosa preoccupante.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M14",
          "sender": "nico",
          "text": "Uno ha annuito.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M15",
          "sender": "nico",
          "text": "Poi hanno continuato a mangiare.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S08-B05"
    },
    "A1-S08-B05": {
      "id": "A1-S08-B05",
      "sceneId": "A1-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S08-B05-M01",
          "sender": "nico",
          "text": "Non so.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B05-M02",
          "sender": "nico",
          "text": "Forse per loro il punto è proprio staccarsi da tutto.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B05-M03",
          "sender": "nico",
          "text": "Telefono.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B05-M04",
          "sender": "nico",
          "text": "Lavoro.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B05-M05",
          "sender": "nico",
          "text": "Famiglia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B05-M06",
          "sender": "nico",
          "text": "Molto coerenti.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B05-M07",
          "sender": "nico",
          "text": "Personalmente inizierei da qualcosa di più semplice.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B05-M08",
          "sender": "nico",
          "text": "Tipo le notifiche delle app.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S08-B06"
    },
    "A1-S08-B06": {
      "id": "A1-S08-B06",
      "sceneId": "A1-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S08-B06-M01",
          "sender": "nico",
          "text": "Aggiornamento importante.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B06-M02",
          "sender": "nico",
          "text": "Il tizio accanto a Marta si è alzato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B06-M03",
          "sender": "nico",
          "text": "Non mi sono mosso.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B06-M04",
          "sender": "nico",
          "text": "Perché ho dignità.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B06-M05",
          "sender": "nico",
          "text": "Marta ha guardato il posto vuoto.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B06-M06",
          "sender": "nico",
          "text": "Poi me.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B06-M07",
          "sender": "nico",
          "text": "Non sto dicendo niente.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B06-M08",
          "sender": "nico",
          "text": "Sto solo registrando gli eventi.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S08-ENDSTATE"
    },
    "A1-S08-ENDSTATE": {
      "id": "A1-S08-ENDSTATE",
      "sceneId": "A1-S08",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "MET_LEA",
          "value": true
        }
      ],
      "next": "A1-S09-START"
    },
    "A1-S09-START": {
      "id": "A1-S09-START",
      "sceneId": "A1-S09",
      "type": "state",
      "effects": [],
      "next": "A1-S09-B01"
    },
    "A1-S09-B01": {
      "id": "A1-S09-B01",
      "sceneId": "A1-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S09-B01-M01",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M02",
          "sender": "nico",
          "text": "Piccola cosa strana.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M03",
          "sender": "nico",
          "text": "Davide ha fermato Tommaso mentre stavamo finendo di mangiare.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M04",
          "sender": "nico",
          "text": "Ha chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M05",
          "sender": "nico",
          "text": "\"Domani posso riprendere il telefono un attimo?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M06",
          "sender": "nico",
          "text": "Tommaso:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M07",
          "sender": "nico",
          "text": "\"Perché?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M08",
          "sender": "nico",
          "text": "Davide:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M09",
          "sender": "nico",
          "text": "\"Per chiamare mia madre. Dirle che sono arrivato.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M10",
          "sender": "nico",
          "text": "Tommaso:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M11",
          "sender": "nico",
          "text": "\"Lo sa che sei qui?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M12",
          "sender": "nico",
          "text": "Davide:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M13",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M14",
          "sender": "nico",
          "text": "Tommaso ha sorriso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M15",
          "sender": "nico",
          "text": "\"Allora lo sa già.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M16",
          "sender": "nico",
          "text": "E basta.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A1-S09-B02"
    },
    "A1-S09-B02": {
      "id": "A1-S09-B02",
      "sceneId": "A1-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S09-B02-M01",
          "sender": "nico",
          "text": "Ora.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B02-M02",
          "sender": "nico",
          "text": "Tecnicamente non gli ha detto di no.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B02-M03",
          "sender": "nico",
          "text": "Ma diciamo che non gli ha neanche detto di sì.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B02-M04",
          "sender": "nico",
          "text": "È stata una risposta un po' da stronzo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B02-M05",
          "sender": "nico",
          "text": "Molto educata.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B02-M06",
          "sender": "nico",
          "text": "Ma da stronzo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B02-M07",
          "sender": "nico",
          "text": "Davide non sembrava soddisfatto.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S09-B03"
    },
    "A1-S09-B03": {
      "id": "A1-S09-B03",
      "sceneId": "A1-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S09-B03-M01",
          "sender": "nico",
          "text": "Marta ha visto tutto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B03-M02",
          "sender": "nico",
          "text": "Non ha detto niente.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B03-M03",
          "sender": "nico",
          "text": "Però stava guardando Tommaso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B03-M04",
          "sender": "nico",
          "text": "Non Davide.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B03-M05",
          "sender": "nico",
          "text": "Non so se significa qualcosa.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S09-C04"
    },
    "A1-S09-C04": {
      "id": "A1-S09-C04",
      "sceneId": "A1-S09",
      "type": "choice",
      "prompt": "Cosa consigli a Nico di fare dopo la scena?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A1-S09-C04-A",
          "text": "Vai a parlare con Davide.",
          "effects": [
            {
              "op": "set",
              "key": "A1S09_SPOKE_TO_DAVIDE",
              "value": true
            },
            {
              "op": "add",
              "key": "DAVIDE_TRUST",
              "value": 1
            }
          ],
          "next": "A1-S09-C04-A-R"
        },
        {
          "id": "A1-S09-C04-B",
          "text": "Chiedi a Marta cosa ne pensa.",
          "effects": [
            {
              "op": "set",
              "key": "A1S09_ASKED_MARTA",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 1
            }
          ],
          "next": "A1-S09-C04-B-R"
        },
        {
          "id": "A1-S09-C04-C",
          "text": "Lascia perdere. È il primo giorno.",
          "effects": [
            {
              "op": "set",
              "key": "A1S09_IGNORED_DAVIDE_CALL",
              "value": true
            }
          ],
          "next": "A1-S09-C04-C-R"
        }
      ]
    },
    "A1-S09-C04-A-R": {
      "id": "A1-S09-C04-A-R",
      "sceneId": "A1-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S09-C04-A-R-M01",
          "sender": "nico",
          "text": "Sono andato da Davide.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M02",
          "sender": "nico",
          "text": "Gli ho chiesto se era tutto ok.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M03",
          "sender": "nico",
          "text": "Ha detto sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M04",
          "sender": "nico",
          "text": "Poi ha detto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M05",
          "sender": "nico",
          "text": "\"Le avevo promesso che la chiamavo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M06",
          "sender": "nico",
          "text": "Gli ho chiesto se sua madre fosse preoccupata.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M07",
          "sender": "nico",
          "text": "Ha fatto spallucce.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M08",
          "sender": "nico",
          "text": "\"È mia madre.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M09",
          "sender": "nico",
          "text": "Traduzione universale.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M10",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M11",
          "sender": "nico",
          "text": "Gli ho detto che magari domani glielo fanno fare.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M12",
          "sender": "nico",
          "text": "Non sembrava convinto.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S09-B04"
    },
    "A1-S09-C04-B-R": {
      "id": "A1-S09-C04-B-R",
      "sceneId": "A1-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S09-C04-B-R-M01",
          "sender": "nico",
          "text": "Ho chiesto a Marta:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M02",
          "sender": "nico",
          "text": "\"È normale?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M03",
          "sender": "nico",
          "text": "Lei ha guardato verso Tommaso.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M04",
          "sender": "nico",
          "text": "Poi:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M05",
          "sender": "nico",
          "text": "\"Qui sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M06",
          "sender": "nico",
          "text": "Ho chiesto se per lei fosse una risposta.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M07",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M08",
          "sender": "nico",
          "text": "\"È quella che ho.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M09",
          "sender": "nico",
          "text": "E poi ha cambiato argomento.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M10",
          "sender": "nico",
          "text": "Di nuovo.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S09-B04"
    },
    "A1-S09-C04-C-R": {
      "id": "A1-S09-C04-C-R",
      "sceneId": "A1-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S09-C04-C-R-M01",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-C-R-M02",
          "sender": "nico",
          "text": "Primo giorno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-C-R-M03",
          "sender": "nico",
          "text": "Magari domani glielo ridanno.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-C-R-M04",
          "sender": "nico",
          "text": "Magari qui hanno semplicemente un rapporto molto aggressivo con il concetto di detox digitale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-C-R-M05",
          "sender": "nico",
          "text": "Non trasformiamo tutto in un documentario criminale dopo sei ore.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S09-B04"
    },
    "A1-S09-B04": {
      "id": "A1-S09-B04",
      "sceneId": "A1-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S09-B04-M01",
          "sender": "nico",
          "text": "Comunque ci stanno mandando nei dormitori.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M02",
          "sender": "nico",
          "text": "Domani sveglia presto.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M03",
          "sender": "nico",
          "text": "Prestissimo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M04",
          "sender": "nico",
          "text": "Se sopravvivo all'assenza di caffè decente ti aggiorno.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M05",
          "sender": "nico",
          "text": "Per ora:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M06",
          "sender": "nico",
          "text": "posto strano.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M07",
          "sender": "nico",
          "text": "Gente sorprendentemente normale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M08",
          "sender": "nico",
          "text": "Regole discutibili.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M09",
          "sender": "nico",
          "text": "Marta contenta che io sia qui.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M10",
          "sender": "nico",
          "text": "Direi bilancio positivo.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S09-ENDSTATE"
    },
    "A1-S09-ENDSTATE": {
      "id": "A1-S09-ENDSTATE",
      "sceneId": "A1-S09",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "DAVIDE_WANTS_TO_CALL_MOTHER",
          "value": true
        }
      ],
      "next": "A1-S10-START"
    },
    "A1-S10-START": {
      "id": "A1-S10-START",
      "sceneId": "A1-S10",
      "type": "state",
      "effects": [],
      "next": "A1-S10-B01"
    },
    "A1-S10-B01": {
      "id": "A1-S10-B01",
      "sceneId": "A1-S10",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S10-B01-M01",
          "sender": "nico",
          "text": "Giorno due.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B01-M02",
          "sender": "nico",
          "text": "Sono sveglio da un'ora che normalmente considero illegale.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B01-M03",
          "sender": "nico",
          "text": "Abbiamo già fatto colazione.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B01-M04",
          "sender": "nico",
          "text": "E adesso lavoriamo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B01-M05",
          "sender": "nico",
          "text": "Non chiedermi perché una ricerca spirituale richieda di spostare cassette.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B01-M06",
          "sender": "nico",
          "text": "Immagino che l'illuminazione sia pesante.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S10-B02"
    },
    "A1-S10-B02": {
      "id": "A1-S10-B02",
      "sceneId": "A1-S10",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S10-B02-M01",
          "sender": "nico",
          "text": "C'è un edificio che ieri non avevo notato.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B02-M02",
          "sender": "nico",
          "text": "Piccolo.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B02-M03",
          "sender": "nico",
          "text": "Separato dagli altri.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B02-M04",
          "sender": "nico",
          "text": "Finestre strette.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B02-M05",
          "sender": "nico",
          "text": "Porta chiusa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B02-M06",
          "sender": "nico",
          "text": "Non sembra abbandonato.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B02-M07",
          "sender": "nico",
          "text": "Sembra solo...",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B02-M08",
          "sender": "nico",
          "text": "molto poco invitante.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S10-B03"
    },
    "A1-S10-B03": {
      "id": "A1-S10-B03",
      "sceneId": "A1-S10",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S10-B03-M01",
          "sender": "nico",
          "text": "Ho chiesto a Tommaso cos'è.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B03-M02",
          "sender": "nico",
          "text": "\"La Casa del Silenzio.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B03-M03",
          "sender": "nico",
          "text": "Certo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B03-M04",
          "sender": "nico",
          "text": "Come poteva chiamarsi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B03-M05",
          "sender": "nico",
          "text": "Mi ha spiegato che alcune persone ci passano del tempo da sole.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B03-M06",
          "sender": "nico",
          "text": "Per stare senza distrazioni.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B03-M07",
          "sender": "nico",
          "text": "Senza conversazioni.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B03-M08",
          "sender": "nico",
          "text": "Senza \"interferenze esterne\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B03-M09",
          "sender": "nico",
          "text": "Ha detto che serve quando uno sente di aver bisogno di ascoltarsi meglio.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S10-B04"
    },
    "A1-S10-B04": {
      "id": "A1-S10-B04",
      "sceneId": "A1-S10",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S10-B04-M01",
          "sender": "nico",
          "text": "Quindi praticamente isolamento spirituale premium.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B04-M02",
          "sender": "nico",
          "text": "Tommaso non ha riso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B04-M03",
          "sender": "nico",
          "text": "Non sembrava neanche infastidito.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B04-M04",
          "sender": "nico",
          "text": "Ha solo detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B04-M05",
          "sender": "nico",
          "text": "\"Se vuoi chiamarlo così.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B04-M06",
          "sender": "nico",
          "text": "Punto per lui.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S10-B05"
    },
    "A1-S10-B05": {
      "id": "A1-S10-B05",
      "sceneId": "A1-S10",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S10-B05-M01",
          "sender": "nico",
          "text": "Aspetta.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M02",
          "sender": "nico",
          "text": "C'era qualcuno a una finestra.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M03",
          "sender": "nico",
          "text": "Dentro.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M04",
          "sender": "nico",
          "text": "Solo per un secondo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M05",
          "sender": "nico",
          "text": "Non ho visto chi.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M06",
          "sender": "nico",
          "text": "Una faccia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M07",
          "sender": "nico",
          "text": "O metà faccia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M08",
          "sender": "nico",
          "text": "Mi sono girato perché Tommaso mi stava dicendo dove portare le cassette.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M09",
          "sender": "nico",
          "text": "Quando ho guardato di nuovo non c'era più nessuno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M10",
          "sender": "nico",
          "text": "Non è necessariamente strano.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M11",
          "sender": "nico",
          "text": "È una casa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M12",
          "sender": "nico",
          "text": "Le persone stanno dentro le case.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M13",
          "sender": "nico",
          "text": "Questa difesa mi sembra meno forte mentre la scrivo.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S10-ENDSTATE"
    },
    "A1-S10-ENDSTATE": {
      "id": "A1-S10-ENDSTATE",
      "sceneId": "A1-S10",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_SILENCE_HOUSE",
          "value": true
        },
        {
          "op": "set",
          "key": "SAW_PERSON_IN_SILENCE_HOUSE",
          "value": true
        }
      ],
      "next": "A1-S11-START"
    },
    "A1-S11-START": {
      "id": "A1-S11-START",
      "sceneId": "A1-S11",
      "type": "state",
      "effects": [],
      "next": "A1-S11-B01"
    },
    "A1-S11-B01": {
      "id": "A1-S11-B01",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-B01-M01",
          "sender": "nico",
          "text": "Mi hanno assegnato un lavoro con Marta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B01-M02",
          "sender": "nico",
          "text": "Ripeto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B01-M03",
          "sender": "nico",
          "text": "con Marta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B01-M04",
          "sender": "nico",
          "text": "Stiamo dividendo patate.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B01-M05",
          "sender": "nico",
          "text": "Quelle buone da quelle marce.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B01-M06",
          "sender": "nico",
          "text": "Non era esattamente lo scenario che avevo immaginato.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B01-M07",
          "sender": "nico",
          "text": "Ma lavoro con quello che ho.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-B02"
    },
    "A1-S11-B02": {
      "id": "A1-S11-B02",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-B02-M01",
          "sender": "nico",
          "text": "Mi sta prendendo in giro.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B02-M02",
          "sender": "nico",
          "text": "Ha appena detto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B02-M03",
          "sender": "nico",
          "text": "\"Quindi, da esperto, come valuti il percorso finora?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B02-M04",
          "sender": "nico",
          "text": "Ho detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B02-M05",
          "sender": "nico",
          "text": "\"Molto patata.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B02-M06",
          "sender": "nico",
          "text": "Ha riso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B02-M07",
          "sender": "nico",
          "text": "Non sorriso.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B02-M08",
          "sender": "nico",
          "text": "Riso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B02-M09",
          "sender": "nico",
          "text": "Informazione importante.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-CBACK02"
    },
    "A1-S11-CBACK02-TRUE": {
      "id": "A1-S11-CBACK02-TRUE",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-CBACK02-TRUE-M01",
          "sender": "nico",
          "text": "Poi:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-CBACK02-TRUE-M02",
          "sender": "nico",
          "text": "\"Almeno avevi ammesso di non saperne molto.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-CBACK02-TRUE-M03",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-CBACK02-TRUE-M04",
          "sender": "nico",
          "text": "\"Non saperne molto è diverso da non saperne niente.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-CBACK02-TRUE-M05",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-CBACK02-TRUE-M06",
          "sender": "nico",
          "text": "\"Tu sei molto vicino alla seconda.\"",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-B03"
    },
    "A1-S11-CBACK02-FALSE": {
      "id": "A1-S11-CBACK02-FALSE",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-CBACK02-FALSE-M01",
          "sender": "nico",
          "text": "Poi mi ha guardato e ha detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-CBACK02-FALSE-M02",
          "sender": "nico",
          "text": "\"Tu non sai niente di queste cose, vero?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-CBACK02-FALSE-M03",
          "sender": "nico",
          "text": "Ho scelto di non rispondere perché il silenzio qui sembra culturalmente appropriato.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-B03"
    },
    "A1-S11-CBACK02": {
      "id": "A1-S11-CBACK02",
      "sceneId": "A1-S11",
      "type": "condition",
      "cases": [
        {
          "when": {
            "op": "eq",
            "key": "A1S01_SPIRITUALITY_PARTIAL_ADMISSION",
            "value": true
          },
          "next": "A1-S11-CBACK02-TRUE"
        }
      ],
      "else": "A1-S11-CBACK02-FALSE"
    },
    "A1-S11-B03": {
      "id": "A1-S11-B03",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-B03-M01",
          "sender": "nico",
          "text": "Poi mi ha chiesto:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B03-M02",
          "sender": "nico",
          "text": "\"Ma tu perché sei venuto davvero?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B03-M03",
          "sender": "nico",
          "text": "Domanda semplice.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B03-M04",
          "sender": "nico",
          "text": "Situazione non ideale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B03-M05",
          "sender": "nico",
          "text": "Il cervello ha proposto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B03-M06",
          "sender": "nico",
          "text": "\"Perché mi piaci.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B03-M07",
          "sender": "nico",
          "text": "La bocca fortunatamente non collabora ancora in automatico.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-C05"
    },
    "A1-S11-C05": {
      "id": "A1-S11-C05",
      "sceneId": "A1-S11",
      "type": "choice",
      "prompt": "Nico non vuole confessare il vero motivo. Quanto si avvicina alla verità?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A1-S11-C05-A",
          "text": "\"Mi incuriosiva il posto.\"",
          "effects": [
            {
              "op": "set",
              "key": "A1S11_ANSWER_CURIOSITY",
              "value": true
            }
          ],
          "next": "A1-S11-C05-A-R"
        },
        {
          "id": "A1-S11-C05-B",
          "text": "\"Perché me ne avevi parlato tu.\"",
          "effects": [
            {
              "op": "set",
              "key": "A1S11_ANSWER_MARTA",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 1
            },
            {
              "op": "add",
              "key": "NICO_ROMANCE",
              "value": 1
            }
          ],
          "next": "A1-S11-C05-B-R"
        },
        {
          "id": "A1-S11-C05-C",
          "text": "Sdrammatizza: \"Per le patate, chiaramente.\"",
          "effects": [
            {
              "op": "set",
              "key": "A1S11_ANSWER_JOKE",
              "value": true
            },
            {
              "op": "add",
              "key": "PLAYER_SARCASM",
              "value": 1
            }
          ],
          "next": "A1-S11-C05-C-R"
        }
      ]
    },
    "A1-S11-C05-A-R": {
      "id": "A1-S11-C05-A-R",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-C05-A-R-M01",
          "sender": "nico",
          "text": "Ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-A-R-M02",
          "sender": "nico",
          "text": "\"Mi incuriosiva il posto.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-A-R-M03",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-A-R-M04",
          "sender": "nico",
          "text": "\"Tu hai cercato millenarismo sul pulmino.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-A-R-M05",
          "sender": "nico",
          "text": "Non so come lo sappia.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-A-R-M06",
          "sender": "nico",
          "text": "Forse ha visto lo schermo.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-A-R-M07",
          "sender": "nico",
          "text": "Forse emano incompetenza.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-A-R-M08",
          "sender": "nico",
          "text": "Comunque ha sorriso.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-B04"
    },
    "A1-S11-C05-B-R": {
      "id": "A1-S11-C05-B-R",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-C05-B-R-M01",
          "sender": "nico",
          "text": "Ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M02",
          "sender": "nico",
          "text": "\"Perché me ne avevi parlato tu.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M03",
          "sender": "nico",
          "text": "Silenzio.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M04",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M05",
          "sender": "nico",
          "text": "\"Questa non è una risposta molto spirituale.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M06",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M07",
          "sender": "nico",
          "text": "\"Sto crescendo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M08",
          "sender": "nico",
          "text": "Ha scosso la testa.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M09",
          "sender": "nico",
          "text": "Ma sorrideva.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-B04"
    },
    "A1-S11-C05-C-R": {
      "id": "A1-S11-C05-C-R",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-C05-C-R-M01",
          "sender": "nico",
          "text": "Ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-C-R-M02",
          "sender": "nico",
          "text": "\"Per le patate, chiaramente.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-C-R-M03",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-C-R-M04",
          "sender": "nico",
          "text": "\"Si vede.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-C-R-M05",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-C-R-M06",
          "sender": "nico",
          "text": "\"Ho un talento naturale.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-C-R-M07",
          "sender": "nico",
          "text": "Lei ha sollevato quella che probabilmente era la patata peggiore del tavolo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-C-R-M08",
          "sender": "nico",
          "text": "\"Questa l'hai messa tra le buone.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-C-R-M09",
          "sender": "nico",
          "text": "Non tutto il talento viene capito subito.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-B04"
    },
    "A1-S11-B04": {
      "id": "A1-S11-B04",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-B04-M01",
          "sender": "nico",
          "text": "Comunque.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M02",
          "sender": "nico",
          "text": "Per cinque minuti è stata una conversazione normale.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M03",
          "sender": "nico",
          "text": "Lavoro.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M04",
          "sender": "nico",
          "text": "Città.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M05",
          "sender": "nico",
          "text": "Posti dove si mangia male.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M06",
          "sender": "nico",
          "text": "Una serie che abbiamo mollato entrambi alla seconda stagione.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M07",
          "sender": "nico",
          "text": "Niente Aurora.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M08",
          "sender": "nico",
          "text": "Niente Giorno Bianco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M09",
          "sender": "nico",
          "text": "È stato bello.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M10",
          "sender": "nico",
          "text": "Non fare quella faccia.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-B05"
    },
    "A1-S11-B05": {
      "id": "A1-S11-B05",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-B05-M01",
          "sender": "nico",
          "text": "Poi è successa una cosa.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M02",
          "sender": "nico",
          "text": "Siamo andati a portare via una cassetta.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M03",
          "sender": "nico",
          "text": "Sul muro vicino alla porta ci sono vecchie foto della Comunità.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M04",
          "sender": "nico",
          "text": "Raccolti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M05",
          "sender": "nico",
          "text": "Cene.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M06",
          "sender": "nico",
          "text": "Gruppi di gente.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M07",
          "sender": "nico",
          "text": "Marta si è fermata davanti a una.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M08",
          "sender": "nico",
          "text": "Proprio fermata.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M09",
          "sender": "nico",
          "text": "Come se avesse dimenticato quello che stava facendo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M10",
          "sender": "nico",
          "text": "Io non ho capito cosa stesse guardando.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M11",
          "sender": "nico",
          "text": "C'erano parecchie persone nella foto.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-C06"
    },
    "A1-S11-C06": {
      "id": "A1-S11-C06",
      "sceneId": "A1-S11",
      "type": "choice",
      "prompt": "Marta sembra colpita dalla fotografia.",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A1-S11-C06-A",
          "text": "Chiedile se va tutto bene.",
          "effects": [
            {
              "op": "set",
              "key": "A1S11_ASKED_ABOUT_PHOTO",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 1
            },
            {
              "op": "set",
              "key": "KNOWS_MARTA_REMEMBERS_SOMEONE",
              "value": true
            }
          ],
          "next": "A1-S11-C06-A-R"
        },
        {
          "id": "A1-S11-C06-B",
          "text": "Non insistere.",
          "effects": [
            {
              "op": "set",
              "key": "A1S11_DID_NOT_PRESS_PHOTO",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 1
            },
            {
              "op": "set",
              "key": "KNOWS_MARTA_HAS_PAST_TRIGGER",
              "value": true
            }
          ],
          "next": "A1-S11-C06-B-R"
        },
        {
          "id": "A1-S11-C06-C",
          "text": "Aspetta e vedi se dice qualcosa da sola.",
          "effects": [
            {
              "op": "set",
              "key": "A1S11_WAITED_ON_PHOTO",
              "value": true
            },
            {
              "op": "set",
              "key": "KNOWS_MARTA_REMEMBERS_SOMEONE",
              "value": true
            }
          ],
          "next": "A1-S11-C06-C-R"
        }
      ]
    },
    "A1-S11-C06-A-R": {
      "id": "A1-S11-C06-A-R",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-C06-A-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-A-R-M02",
          "sender": "nico",
          "text": "\"Tutto bene?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-A-R-M03",
          "sender": "nico",
          "text": "Ha detto:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-A-R-M04",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-A-R-M05",
          "sender": "nico",
          "text": "Poi ha guardato di nuovo la foto.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-A-R-M06",
          "sender": "nico",
          "text": "\"Mi ricordava una persona.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-A-R-M07",
          "sender": "nico",
          "text": "Ho aspettato.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-A-R-M08",
          "sender": "nico",
          "text": "Non ha aggiunto niente.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-A-R-M09",
          "sender": "nico",
          "text": "Quindi non ho chiesto altro.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-B06"
    },
    "A1-S11-C06-B-R": {
      "id": "A1-S11-C06-B-R",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-C06-B-R-M01",
          "sender": "nico",
          "text": "Non ho detto niente.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-B-R-M02",
          "sender": "nico",
          "text": "Dopo qualche secondo ha preso la cassetta e siamo tornati al tavolo.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-B-R-M03",
          "sender": "nico",
          "text": "Non sembrava più rilassata come prima.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-B-R-M04",
          "sender": "nico",
          "text": "Solo per un attimo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-B-R-M05",
          "sender": "nico",
          "text": "Poi di nuovo normale.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-B06"
    },
    "A1-S11-C06-C-R": {
      "id": "A1-S11-C06-C-R",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-C06-C-R-M01",
          "sender": "nico",
          "text": "Ho aspettato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M02",
          "sender": "nico",
          "text": "Alla fine ha detto da sola:",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M03",
          "sender": "nico",
          "text": "\"Mi ricordava una persona.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M04",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M05",
          "sender": "nico",
          "text": "\"Una persona di qui?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M06",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M07",
          "sender": "nico",
          "text": "\"Lascia stare.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M08",
          "sender": "nico",
          "text": "Quindi sì.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M09",
          "sender": "nico",
          "text": "Argomento chiuso.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-B06"
    },
    "A1-S11-B06": {
      "id": "A1-S11-B06",
      "sceneId": "A1-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S11-B06-M01",
          "sender": "nico",
          "text": "Siamo tornati alle patate.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B06-M02",
          "sender": "nico",
          "text": "Lei ha ricominciato a prendermi in giro quasi subito.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B06-M03",
          "sender": "nico",
          "text": "Però quella cosa della foto...",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B06-M04",
          "sender": "nico",
          "text": "non so.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B06-M05",
          "sender": "nico",
          "text": "C'è qualcosa che non mi ha raccontato.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S11-ENDSTATE"
    },
    "A1-S11-ENDSTATE": {
      "id": "A1-S11-ENDSTATE",
      "sceneId": "A1-S11",
      "type": "state",
      "effects": [],
      "next": "A1-S12-START"
    },
    "A1-S12-START": {
      "id": "A1-S12-START",
      "sceneId": "A1-S12",
      "type": "state",
      "effects": [],
      "next": "A1-S12-B01"
    },
    "A1-S12-B01": {
      "id": "A1-S12-B01",
      "sceneId": "A1-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S12-B01-M01",
          "sender": "nico",
          "text": "Altra sessione con Elia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B01-M02",
          "sender": "nico",
          "text": "Oggi tema:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B01-M03",
          "sender": "nico",
          "text": "Giorno Bianco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B01-M04",
          "sender": "nico",
          "text": "Forse finalmente scopro cos'è.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B01-M05",
          "sender": "nico",
          "text": "No.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A1-S12-B02"
    },
    "A1-S12-B02": {
      "id": "A1-S12-B02",
      "sceneId": "A1-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S12-B02-M01",
          "sender": "nico",
          "text": "Ha detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B02-M02",
          "sender": "nico",
          "text": "\"Essere pronti significa essere pronti a lasciare ciò che pensiamo di possedere.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B02-M03",
          "sender": "nico",
          "text": "Poi ha fatto esempi normali.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B02-M04",
          "sender": "nico",
          "text": "Ruolo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B02-M05",
          "sender": "nico",
          "text": "Lavoro.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B02-M06",
          "sender": "nico",
          "text": "Idea che abbiamo di noi stessi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B02-M07",
          "sender": "nico",
          "text": "Bisogno di essere riconosciuti dagli altri.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B02-M08",
          "sender": "nico",
          "text": "Quindi per ora siamo ancora nel territorio:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B02-M09",
          "sender": "nico",
          "text": "metafora spirituale costosa.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S12-B03"
    },
    "A1-S12-B03": {
      "id": "A1-S12-B03",
      "sceneId": "A1-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S12-B03-M01",
          "sender": "nico",
          "text": "Poi:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B03-M02",
          "sender": "nico",
          "text": "\"Quando arriva il momento di attraversare, non possiamo portare nulla con noi.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B03-M03",
          "sender": "nico",
          "text": "Questa frase mi piace meno.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B03-M04",
          "sender": "nico",
          "text": "Subito dopo ha parlato di ricordi e attaccamenti.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B03-M05",
          "sender": "nico",
          "text": "Quindi immagino sempre metafora.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B03-M06",
          "sender": "nico",
          "text": "Spero.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S12-B04"
    },
    "A1-S12-B04": {
      "id": "A1-S12-B04",
      "sceneId": "A1-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S12-B04-M01",
          "sender": "nico",
          "text": "E altra frase:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B04-M02",
          "sender": "nico",
          "text": "\"Non avere paura di perdere la forma che abbiamo adesso.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B04-M03",
          "sender": "nico",
          "text": "Ora.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B04-M04",
          "sender": "nico",
          "text": "Capisco il concetto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B04-M05",
          "sender": "nico",
          "text": "Vecchia versione di te.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B04-M06",
          "sender": "nico",
          "text": "Nuova versione di te.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B04-M07",
          "sender": "nico",
          "text": "Crescita.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B04-M08",
          "sender": "nico",
          "text": "Trasformazione.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B04-M09",
          "sender": "nico",
          "text": "Ma potrebbero anche scegliere parole leggermente meno da testamento.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S12-B05"
    },
    "A1-S12-B05": {
      "id": "A1-S12-B05",
      "sceneId": "A1-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S12-B05-M01",
          "sender": "nico",
          "text": "Comunque c'è un problema più immediato.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B05-M02",
          "sender": "nico",
          "text": "Marta è tre persone più avanti.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B05-M03",
          "sender": "nico",
          "text": "Accanto a uno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B05-M04",
          "sender": "nico",
          "text": "Uno nuovo per me.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B05-M05",
          "sender": "nico",
          "text": "Capelli troppo belli.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B05-M06",
          "sender": "nico",
          "text": "Non so cosa dobbiamo lasciare nel Giorno Bianco.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B05-M07",
          "sender": "nico",
          "text": "Io inizierei da quello seduto vicino a Marta.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S12-B06"
    },
    "A1-S12-B06": {
      "id": "A1-S12-B06",
      "sceneId": "A1-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S12-B06-M01",
          "sender": "nico",
          "text": "Elia ha chiuso dicendo che nessuno deve capire tutto subito.",
          "delayMs": 6500,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B06-M02",
          "sender": "nico",
          "text": "Che il punto è osservare cosa ci fa paura lasciare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B06-M03",
          "sender": "nico",
          "text": "Io ho già una risposta.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B06-M04",
          "sender": "nico",
          "text": "La connessione dati.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B06-M05",
          "sender": "nico",
          "text": "E apparentemente Marta.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S12-ENDSTATE"
    },
    "A1-S12-ENDSTATE": {
      "id": "A1-S12-ENDSTATE",
      "sceneId": "A1-S12",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_WHITE_DAY_LANGUAGE_DEEPER",
          "value": true
        }
      ],
      "next": "A1-S13-START"
    },
    "A1-S13-START": {
      "id": "A1-S13-START",
      "sceneId": "A1-S13",
      "type": "state",
      "effects": [],
      "next": "A1-S13-B01"
    },
    "A1-S13-B01": {
      "id": "A1-S13-B01",
      "sceneId": "A1-S13",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S13-B01-M01",
          "sender": "nico",
          "text": "Piove ancora.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B01-M02",
          "sender": "nico",
          "text": "Non \"piove un po'\".",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B01-M03",
          "sender": "nico",
          "text": "Piove da montagna.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B01-M04",
          "sender": "nico",
          "text": "Hanno spostato dentro un paio di lavori che dovevamo fare fuori.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B01-M05",
          "sender": "nico",
          "text": "A quanto pare anche l'illuminazione spirituale ha dei limiti meteorologici.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S13-B02"
    },
    "A1-S13-B02": {
      "id": "A1-S13-B02",
      "sceneId": "A1-S13",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S13-B02-M01",
          "sender": "nico",
          "text": "Tommaso ha detto che se continua così la strada può diventare fastidiosa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M02",
          "sender": "nico",
          "text": "Non bloccata.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M03",
          "sender": "nico",
          "text": "Fastidiosa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M04",
          "sender": "nico",
          "text": "Ho chiesto se capita spesso.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M05",
          "sender": "nico",
          "text": "\"Qui in questo periodo sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M06",
          "sender": "nico",
          "text": "Uno vicino a lui ha detto che il vecchio ponte è sopravvissuto a cose peggiori.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M07",
          "sender": "nico",
          "text": "Tommaso ha risposto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M08",
          "sender": "nico",
          "text": "\"Non incoraggiarlo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M09",
          "sender": "nico",
          "text": "Quindi apparentemente il ponte è anche una battuta ricorrente locale.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S13-B03"
    },
    "A1-S13-B03": {
      "id": "A1-S13-B03",
      "sceneId": "A1-S13",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S13-B03-M01",
          "sender": "nico",
          "text": "Ah.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B03-M02",
          "sender": "nico",
          "text": "Problema vero.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B03-M03",
          "sender": "nico",
          "text": "Questo telefono ha deciso di morire.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B03-M04",
          "sender": "nico",
          "text": "Era al 42.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B03-M05",
          "sender": "nico",
          "text": "Adesso è al 19.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B03-M06",
          "sender": "nico",
          "text": "Fantastico.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B03-M07",
          "sender": "nico",
          "text": "Questo coso passa dal 42 al 19 come mia madre quando racconta quanti anni ha.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B03-M08",
          "sender": "nico",
          "text": "Dovrò usarlo meno.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B03-M09",
          "sender": "nico",
          "text": "Che è ottimo, visto che è l'unico telefono che ho.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S13-ENDSTATE"
    },
    "A1-S13-ENDSTATE": {
      "id": "A1-S13-ENDSTATE",
      "sceneId": "A1-S13",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "LOW"
        },
        {
          "op": "set",
          "key": "SIGNAL_STATE",
          "value": "INTERMITTENT"
        },
        {
          "op": "set",
          "key": "OLD_PHONE_HIDDEN",
          "value": true
        }
      ],
      "next": "A1-S14-START"
    },
    "A1-S14-START": {
      "id": "A1-S14-START",
      "sceneId": "A1-S14",
      "type": "state",
      "effects": [],
      "next": "A1-S14-B01"
    },
    "A1-S14-B01": {
      "id": "A1-S14-B01",
      "sceneId": "A1-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S14-B01-M01",
          "sender": "nico",
          "text": "Sei sveglio?",
          "delayMs": 15000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B01-M02",
          "sender": "nico",
          "text": "C'è un furgone.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B01-M03",
          "sender": "nico",
          "text": "Sono tipo le due.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B01-M04",
          "sender": "nico",
          "text": "O comunque un'ora in cui nessuno dovrebbe consegnare niente a un ritiro spirituale.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S14-B02"
    },
    "A1-S14-B02": {
      "id": "A1-S14-B02",
      "sceneId": "A1-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S14-B02-M01",
          "sender": "nico",
          "text": "Mi ha svegliato il motore.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M02",
          "sender": "nico",
          "text": "Sto guardando dalla finestra.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M03",
          "sender": "nico",
          "text": "Luci basse.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M04",
          "sender": "nico",
          "text": "Quattro o cinque persone fuori.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M05",
          "sender": "nico",
          "text": "Tommaso c'è.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M06",
          "sender": "nico",
          "text": "Forse anche Elia.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M07",
          "sender": "nico",
          "text": "Non vedo bene.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M08",
          "sender": "nico",
          "text": "Stanno scaricando roba.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M09",
          "sender": "nico",
          "text": "Casse.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M10",
          "sender": "nico",
          "text": "E credo taniche.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M11",
          "sender": "nico",
          "text": "Non è impossibile che sia normale.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M12",
          "sender": "nico",
          "text": "È solo molto impegnativo farlo sembrare normale alle due di notte.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S14-C07",
      "effects": [
        {
          "op": "set",
          "key": "SAW_NIGHT_VAN",
          "value": true
        }
      ]
    },
    "A1-S14-C07": {
      "id": "A1-S14-C07",
      "sceneId": "A1-S14",
      "type": "choice",
      "prompt": "Cosa consigli a Nico?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A1-S14-C07-A",
          "text": "Resta alla finestra e guarda.",
          "effects": [
            {
              "op": "set",
              "key": "A1S14_WATCHED_FROM_WINDOW",
              "value": true
            },
            {
              "op": "set",
              "key": "TANKS_KNOWLEDGE",
              "value": "GLIMPSE"
            }
          ],
          "next": "A1-S14-C07-A-R"
        },
        {
          "id": "A1-S14-C07-B",
          "text": "Esci e prova a vedere meglio.",
          "effects": [
            {
              "op": "set",
              "key": "A1S14_WENT_OUTSIDE",
              "value": true
            },
            {
              "op": "set",
              "key": "TANKS_KNOWLEDGE",
              "value": "PARTIAL"
            },
            {
              "op": "add",
              "key": "TOMMASO_SUSPICION",
              "value": 10
            }
          ],
          "next": "A1-S14-C07-B-R"
        },
        {
          "id": "A1-S14-C07-C",
          "text": "Torna a dormire. Non vale il rischio.",
          "effects": [
            {
              "op": "set",
              "key": "A1S14_RETURNED_TO_SLEEP",
              "value": true
            },
            {
              "op": "set",
              "key": "TANKS_KNOWLEDGE",
              "value": "NONE"
            }
          ],
          "next": "A1-S14-C07-C-R"
        }
      ]
    },
    "A1-S14-C07-A-R": {
      "id": "A1-S14-C07-A-R",
      "sceneId": "A1-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S14-C07-A-R-M01",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-A-R-M02",
          "sender": "nico",
          "text": "Da qui almeno non devo inventare perché sono in cortile in piena notte.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-A-R-M03",
          "sender": "nico",
          "text": "Vedo casse.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-A-R-M04",
          "sender": "nico",
          "text": "Tre o quattro taniche scure.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-A-R-M05",
          "sender": "nico",
          "text": "Altro materiale che da qui è solo \"roba rettangolare\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-A-R-M06",
          "sender": "nico",
          "text": "Stanno portando quasi tutto verso il deposito.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-A-R-M07",
          "sender": "nico",
          "text": "Quello che ieri ci hanno detto di non usare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-A-R-M08",
          "sender": "nico",
          "text": "Ottimo.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S14-B03"
    },
    "A1-S14-C07-B-R": {
      "id": "A1-S14-C07-B-R",
      "sceneId": "A1-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S14-C07-B-R-M01",
          "sender": "nico",
          "text": "Questa è una pessima idea.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-B-R-M02",
          "sender": "nico",
          "text": "Vado.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-B-R-M03",
          "sender": "nico",
          "text": "Solo per chiarezza:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-B-R-M04",
          "sender": "nico",
          "text": "se mi ammazzano in una setta perché sono uscito in pigiama a guardare delle taniche,",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-B-R-M05",
          "sender": "nico",
          "text": "cancella la cronologia del telefono.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-B-R-M06",
          "sender": "nico",
          "text": "Soprattutto le ricerche su Marta.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S14-B03"
    },
    "A1-S14-C07-C-R": {
      "id": "A1-S14-C07-C-R",
      "sceneId": "A1-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S14-C07-C-R-M01",
          "sender": "nico",
          "text": "Scelta adulta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-C-R-M02",
          "sender": "nico",
          "text": "Inaspettata da parte nostra.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-C-R-M03",
          "sender": "nico",
          "text": "Ho comunque visto abbastanza da sapere che è arrivato un furgone pieno di roba.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-C-R-M04",
          "sender": "nico",
          "text": "Domani sarà ancora lì.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-C-R-M05",
          "sender": "nico",
          "text": "O almeno spero che il concetto di causalità funzioni anche qui.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S14-B03"
    },
    "A1-S14-B03": {
      "id": "A1-S14-B03",
      "sceneId": "A1-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S14-B03-M01",
          "sender": "nico",
          "text": "Spengo lo schermo.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B03-M02",
          "sender": "nico",
          "text": "La batteria sta già facendo cose creative.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B03-M03",
          "sender": "nico",
          "text": "Ti scrivo se succede altro.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S14-ENDSTATE"
    },
    "A1-S14-ENDSTATE": {
      "id": "A1-S14-ENDSTATE",
      "sceneId": "A1-S14",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "LOW"
        }
      ],
      "next": "A1-S15-START"
    },
    "A1-S15-START": {
      "id": "A1-S15-START",
      "sceneId": "A1-S15",
      "type": "condition",
      "cases": [
        {
          "when": {
            "op": "eq",
            "key": "A1S14_WATCHED_FROM_WINDOW",
            "value": true
          },
          "next": "A1-S15-S15-A"
        },
        {
          "when": {
            "op": "eq",
            "key": "A1S14_WENT_OUTSIDE",
            "value": true
          },
          "next": "A1-S15-S15-B"
        },
        {
          "when": {
            "op": "eq",
            "key": "A1S14_RETURNED_TO_SLEEP",
            "value": true
          },
          "next": "A1-S15-S15-C"
        }
      ],
      "else": "A1-S15-S15-C"
    },
    "A1-S15-S15-A": {
      "id": "A1-S15-S15-A",
      "sceneId": "A1-S15",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S15-S15-A-M01",
          "sender": "nico",
          "text": "Ne stanno portando altre.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-A-M02",
          "sender": "nico",
          "text": "Taniche senza scritte che riesca a leggere.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-A-M03",
          "sender": "nico",
          "text": "Casse.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-A-M04",
          "sender": "nico",
          "text": "Un paio di scatole chiare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-A-M05",
          "sender": "nico",
          "text": "Non capisco se sia roba medica, attrezzatura da lavoro o tutt'altro.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-A-M06",
          "sender": "nico",
          "text": "Da qui non si vede abbastanza.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-A-M07",
          "sender": "nico",
          "text": "Tutto nel deposito.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S15-B04",
      "effects": [
        {
          "op": "set",
          "key": "TANKS_KNOWLEDGE",
          "value": "GLIMPSE"
        },
        {
          "op": "set",
          "key": "KNOWS_NIGHT_MATERIAL",
          "value": true
        }
      ]
    },
    "A1-S15-S15-B": {
      "id": "A1-S15-S15-B",
      "sceneId": "A1-S15",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S15-S15-B-M01",
          "sender": "nico",
          "text": "Sono fuori.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M02",
          "sender": "nico",
          "text": "Vedo meglio.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M03",
          "sender": "nico",
          "text": "Taniche anonime.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M04",
          "sender": "nico",
          "text": "Casse chiuse.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M05",
          "sender": "nico",
          "text": "Scatole che potrebbero essere materiale sanitario o roba da officina.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M06",
          "sender": "nico",
          "text": "Non c'è niente che dica chiaramente a cosa serve.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M07",
          "sender": "nico",
          "text": "Che è quasi peggio.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M08",
          "sender": "nico",
          "text": "Merda.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M09",
          "sender": "nico",
          "text": "Tommaso.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M10",
          "sender": "nico",
          "text": "Mi ha visto.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M11",
          "sender": "nico",
          "text": "Ha detto solo:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M12",
          "sender": "nico",
          "text": "\"Non riesci a dormire?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M13",
          "sender": "nico",
          "text": "Io ho detto che avevo bisogno d'aria.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M14",
          "sender": "nico",
          "text": "Con la pioggia.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M15",
          "sender": "nico",
          "text": "Ottima risposta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M16",
          "sender": "nico",
          "text": "Lui ha guardato il cortile.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M17",
          "sender": "nico",
          "text": "Poi me.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M18",
          "sender": "nico",
          "text": "\"Domattina si comincia presto.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M19",
          "sender": "nico",
          "text": "E mi ha indicato il dormitorio.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M20",
          "sender": "nico",
          "text": "Niente minaccia.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M21",
          "sender": "nico",
          "text": "Quasi preferivo una minaccia.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S15-B04",
      "effects": [
        {
          "op": "set",
          "key": "TOMMASO_SAW_NICO_AT_NIGHT",
          "value": true
        },
        {
          "op": "set",
          "key": "TANKS_KNOWLEDGE",
          "value": "PARTIAL"
        },
        {
          "op": "set",
          "key": "KNOWS_NIGHT_MATERIAL",
          "value": true
        }
      ]
    },
    "A1-S15-S15-C": {
      "id": "A1-S15-S15-C",
      "sceneId": "A1-S15",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S15-S15-C-M01",
          "sender": "nico",
          "text": "Mattina.",
          "delayMs": 12000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-C-M02",
          "sender": "nico",
          "text": "Conferma che ieri notte non me lo sono inventato.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-C-M03",
          "sender": "nico",
          "text": "Il deposito era aperto per un momento.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-C-M04",
          "sender": "nico",
          "text": "Dentro ci sono molte più casse di ieri.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-C-M05",
          "sender": "nico",
          "text": "E hanno appena portato dentro due taniche.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-C-M06",
          "sender": "nico",
          "text": "Nessuna etichetta visibile.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-C-M07",
          "sender": "nico",
          "text": "Quindi ho perso i dettagli.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-C-M08",
          "sender": "nico",
          "text": "Non l'esistenza della cosa.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S15-B04",
      "effects": [
        {
          "op": "set",
          "key": "TANKS_KNOWLEDGE",
          "value": "AFTERMATH"
        },
        {
          "op": "set",
          "key": "KNOWS_NIGHT_MATERIAL",
          "value": true
        }
      ]
    },
    "A1-S15-B04": {
      "id": "A1-S15-B04",
      "sceneId": "A1-S15",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S15-B04-M01",
          "sender": "nico",
          "text": "Possibilità razionale:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-B04-M02",
          "sender": "nico",
          "text": "scorte.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-B04-M03",
          "sender": "nico",
          "text": "Carburante.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-B04-M04",
          "sender": "nico",
          "text": "Prodotti per gli orti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-B04-M05",
          "sender": "nico",
          "text": "Forse fanno davvero biodiesel.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-B04-M06",
          "sender": "nico",
          "text": "Questa spiegazione mi piace.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-B04-M07",
          "sender": "nico",
          "text": "Quindi per ora è quella ufficiale.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S15-ENDSTATE"
    },
    "A1-S15-ENDSTATE": {
      "id": "A1-S15-ENDSTATE",
      "sceneId": "A1-S15",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_NIGHT_MATERIAL",
          "value": true
        },
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "LOW"
        }
      ],
      "next": "A1-S16-START"
    },
    "A1-S16-START": {
      "id": "A1-S16-START",
      "sceneId": "A1-S16",
      "type": "state",
      "effects": [],
      "next": "A1-S16-B01"
    },
    "A1-S16-B01": {
      "id": "A1-S16-B01",
      "sceneId": "A1-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S16-B01-M01",
          "sender": "nico",
          "text": "Colazione.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B01-M02",
          "sender": "nico",
          "text": "Tutto normalissimo.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B01-M03",
          "sender": "nico",
          "text": "Pane.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B01-M04",
          "sender": "nico",
          "text": "Caffè discutibile.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B01-M05",
          "sender": "nico",
          "text": "Gente che parla dei lavori di oggi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B01-M06",
          "sender": "nico",
          "text": "Nessuno ha nominato il furgone.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B01-M07",
          "sender": "nico",
          "text": "Nessuno ha nominato le taniche.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S16-CALLBACK-TOMMASO"
    },
    "A1-S16-CALLBACK-TOMMASO-TRUE": {
      "id": "A1-S16-CALLBACK-TOMMASO-TRUE",
      "sceneId": "A1-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S16-CALLBACK-TOMMASO-TRUE-M01",
          "sender": "nico",
          "text": "Tommaso mi ha chiesto se volevo altro pane.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-CALLBACK-TOMMASO-TRUE-M02",
          "sender": "nico",
          "text": "Ieri notte mi ha trovato fuori in pigiama davanti a un deposito pieno di taniche.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-CALLBACK-TOMMASO-TRUE-M03",
          "sender": "nico",
          "text": "Stamattina:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-CALLBACK-TOMMASO-TRUE-M04",
          "sender": "nico",
          "text": "\"Altro pane?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-CALLBACK-TOMMASO-TRUE-M05",
          "sender": "nico",
          "text": "Non so se questa cosa mi tranquillizzi.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S16-B02"
    },
    "A1-S16-CALLBACK-TOMMASO": {
      "id": "A1-S16-CALLBACK-TOMMASO",
      "sceneId": "A1-S16",
      "type": "condition",
      "cases": [
        {
          "when": {
            "op": "eq",
            "key": "TOMMASO_SAW_NICO_AT_NIGHT",
            "value": true
          },
          "next": "A1-S16-CALLBACK-TOMMASO-TRUE"
        }
      ],
      "else": "A1-S16-B02"
    },
    "A1-S16-B02": {
      "id": "A1-S16-B02",
      "sceneId": "A1-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S16-B02-M01",
          "sender": "nico",
          "text": "Ho chiesto a uno se ieri fosse arrivata una consegna.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B02-M02",
          "sender": "nico",
          "text": "Ha detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B02-M03",
          "sender": "nico",
          "text": "\"Scorte.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B02-M04",
          "sender": "nico",
          "text": "Ho chiesto per cosa.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B02-M05",
          "sender": "nico",
          "text": "\"Le solite cose.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B02-M06",
          "sender": "nico",
          "text": "Chiarissimo.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A1-S16-B03"
    },
    "A1-S16-B03": {
      "id": "A1-S16-B03",
      "sceneId": "A1-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S16-B03-M01",
          "sender": "nico",
          "text": "Aspetta.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B03-M02",
          "sender": "nico",
          "text": "Davide non c'è.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B03-M03",
          "sender": "nico",
          "text": "Ieri era a cena.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B03-M04",
          "sender": "nico",
          "text": "Stamattina posto vuoto.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S16-CALLBACK-DAVIDE"
    },
    "A1-S16-CALLBACK-DAVIDE-TRUE": {
      "id": "A1-S16-CALLBACK-DAVIDE-TRUE",
      "sceneId": "A1-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S16-CALLBACK-DAVIDE-TRUE-M01",
          "sender": "nico",
          "text": "Quello che ieri mi ha detto che aveva promesso a sua madre di chiamarla.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-CALLBACK-DAVIDE-TRUE-M02",
          "sender": "nico",
          "text": "Non è qui.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A1-S16-B04"
    },
    "A1-S16-CALLBACK-DAVIDE": {
      "id": "A1-S16-CALLBACK-DAVIDE",
      "sceneId": "A1-S16",
      "type": "condition",
      "cases": [
        {
          "when": {
            "op": "eq",
            "key": "A1S09_SPOKE_TO_DAVIDE",
            "value": true
          },
          "next": "A1-S16-CALLBACK-DAVIDE-TRUE"
        }
      ],
      "else": "A1-S16-B04"
    },
    "A1-S16-B04": {
      "id": "A1-S16-B04",
      "sceneId": "A1-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S16-B04-M01",
          "sender": "nico",
          "text": "Ho chiesto a Tommaso dov'è.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B04-M02",
          "sender": "nico",
          "text": "\"Ha bisogno di un po' di silenzio.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B04-M03",
          "sender": "nico",
          "text": "Ho guardato fuori.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B04-M04",
          "sender": "nico",
          "text": "Verso la Casa del Silenzio.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B04-M05",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B04-M06",
          "sender": "nico",
          "text": "Questa mi piace poco.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S16-B05",
      "effects": [
        {
          "op": "set",
          "key": "SUSPECTS_DAVIDE_IN_SILENCE_HOUSE",
          "value": true
        }
      ]
    },
    "A1-S16-B05": {
      "id": "A1-S16-B05",
      "sceneId": "A1-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S16-B05-M01",
          "sender": "nico",
          "text": "Altra cosa.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M02",
          "sender": "nico",
          "text": "Marta sta parlando con Elia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M03",
          "sender": "nico",
          "text": "Non sembra la conversazione di ieri.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M04",
          "sender": "nico",
          "text": "Lei è tesa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M05",
          "sender": "nico",
          "text": "Spalle rigide.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M06",
          "sender": "nico",
          "text": "Parla piano.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M07",
          "sender": "nico",
          "text": "Elia no.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M08",
          "sender": "nico",
          "text": "Sempre uguale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M09",
          "sender": "nico",
          "text": "Mi ha visto guardare.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M10",
          "sender": "nico",
          "text": "Ha fatto solo un piccolo cenno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M11",
          "sender": "nico",
          "text": "Quindi sì.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M12",
          "sender": "nico",
          "text": "Mi ha notato.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S16-B06",
      "effects": [
        {
          "op": "set",
          "key": "ELIA_NOTICED_NICO",
          "value": true
        }
      ]
    },
    "A1-S16-B06": {
      "id": "A1-S16-B06",
      "sceneId": "A1-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S16-B06-M01",
          "sender": "nico",
          "text": "È tornata.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B06-M02",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B06-M03",
          "sender": "nico",
          "text": "\"Tutto bene?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B06-M04",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B06-M05",
          "sender": "nico",
          "text": "Troppo veloce.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B06-M06",
          "sender": "nico",
          "text": "Poi mi ha sorriso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B06-M07",
          "sender": "nico",
          "text": "E se n'è andata.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A1-S16-B07",
      "effects": [
        {
          "op": "set",
          "key": "MARTA_TENSE_WITH_ELIA",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_MARTA_IS_HIDING_SOMETHING",
          "value": true
        }
      ]
    },
    "A1-S16-B07": {
      "id": "A1-S16-B07",
      "sceneId": "A1-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A1-S16-B07-M01",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B07-M02",
          "sender": "nico",
          "text": "Forse questo posto è un po' più strano di quanto pensassi.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B07-M03",
          "sender": "nico",
          "text": "Comunque Marta mi ha sorriso.",
          "delayMs": 7000,
          "delivery": "live"
        }
      ],
      "next": "A1-S16-ENDSTATE"
    },
    "A1-S16-ENDSTATE": {
      "id": "A1-S16-ENDSTATE",
      "sceneId": "A1-S16",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "ACT1_COMPLETE",
          "value": true
        },
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "LOW"
        },
        {
          "op": "set",
          "key": "SIGNAL_STATE",
          "value": "INTERMITTENT"
        }
      ],
      "next": "A1-S16-END"
    },
    "A1-S16-END": {
      "id": "A1-S16-END",
      "sceneId": "A1-S16",
      "type": "state",
      "effects": [],
      "next": "A2-S01-START"
    }
  }
};
