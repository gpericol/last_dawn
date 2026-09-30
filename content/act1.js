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
          "text": "Ho fatto una cosa. E sì, prima che tu lo dica, c'entra Marta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B01-M02",
          "sender": "nico",
          "text": "Sono su un pulmino con lei, diretto in montagna. Tutti sembrano sapere dove stiamo andando.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B01-M03",
          "sender": "nico",
          "text": "Io no.",
          "delayMs": 1200,
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
          "text": "Ti ricordi quel ritiro di cui mi aveva parlato? Comunità dell'Aurora.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M02",
          "sender": "nico",
          "text": "Già dal nome sospetto una sveglia alle cinque per guardare il sole.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M03",
          "sender": "nico",
          "text": "Comunque, lei mi dice che ci sarebbe tornata per qualche giorno. E io, invece di fare una domanda normale, me ne esco con: \"Sì, conosco bene quel genere di percorso.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M04",
          "sender": "nico",
          "text": "Non so neanche cosa intendano per percorso.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M05",
          "sender": "nico",
          "text": "Poi le ho chiesto se potevano venire anche persone nuove. Mi ha detto di sì, e io: \"Potrei venire anch'io.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M06",
          "sender": "nico",
          "text": "Ha fatto una faccia che ho deciso di prendere per entusiasmo.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B02-M07",
          "sender": "nico",
          "text": "Ed eccomi qui. Ventinove anni e ancora bisogno che qualcuno mi tolga le parole di bocca prima che facciano danni.",
          "delayMs": 1200,
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
          "text": "Sto cercando di recuperare. Ho cercato \"millenarismo\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B03-M02",
          "sender": "nico",
          "text": "Il primo risultato contiene \"fine del mondo\".",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B03-M03",
          "sender": "nico",
          "text": "Aspetta, non carica più. Una tacca, poi niente.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B03-M04",
          "sender": "nico",
          "text": "Mi sembrava un argomento da approfondire prima di arrivare, ma va bene.",
          "delayMs": 1200,
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
          "text": "Marta è due file davanti. Si è girata due volte.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B04-M02",
          "sender": "nico",
          "text": "La prima perché a uno è caduta una bottiglia. Quella non conta.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B04-M03",
          "sender": "nico",
          "text": "La seconda non era caduto niente.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B04-M04",
          "sender": "nico",
          "text": "Te lo dico solo per completezza.",
          "delayMs": 1200,
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
          "text": "Va bene, ci parlo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M02",
          "sender": "nico",
          "text": "Eccomi. Le ho chiesto se andava tutto bene.",
          "delayMs": 3500,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M03",
          "sender": "nico",
          "text": "Lei: \"Sì. Tu?\" Io: \"Sì.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M04",
          "sender": "nico",
          "text": "Poi ho esaurito tutto quello che so della lingua italiana.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-A-R-M05",
          "sender": "nico",
          "text": "Però ha sorriso.",
          "delayMs": 1200,
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
          "text": "Sì, meglio. Aspetto un momento che sembri naturale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-B-R-M02",
          "sender": "nico",
          "text": "Si è girata di nuovo.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-B-R-M03",
          "sender": "nico",
          "text": "Non è caduto niente neanche stavolta.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-B-R-M04",
          "sender": "nico",
          "text": "Non dire niente.",
          "delayMs": 1200,
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
          "text": "Hai ragione. Posso ancora ridurre i danni.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-C-R-M02",
          "sender": "nico",
          "text": "Quando si è girata le ho detto: \"Comunque non sono esattamente un esperto di queste cose.\"",
          "delayMs": 2500,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-C-R-M03",
          "sender": "nico",
          "text": "\"Non devi esserlo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-C01-C-R-M04",
          "sender": "nico",
          "text": "L'ha detto tranquilla. Io intanto spero che non ci sia un test d'ingresso.",
          "delayMs": 1200,
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
          "text": "Sta piovendo più forte. Il tizio che guida dice che da qui in poi il telefono prende male.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M02",
          "sender": "nico",
          "text": "\"Con questa pioggia andiamo piano. È l'unica strada che sale alla proprietà.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M03",
          "sender": "nico",
          "text": "Spero di aver sentito male la parte su \"unica\".",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M04",
          "sender": "nico",
          "text": "Anche il navigatore ha rinunciato: ci mette in una zona verde senza nome.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S01-B05-M05",
          "sender": "nico",
          "text": "Guardando fuori non posso dargli torto.",
          "delayMs": 1200,
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
          "text": "Non vedo una casa da un bel po'. Solo bosco, qualche campo e altro bosco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M02",
          "sender": "nico",
          "text": "Abbiamo appena attraversato un ponte che sembra più vecchio del concetto di manutenzione.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B01-M03",
          "sender": "nico",
          "text": "Cerco di non pensare che dobbiamo ripassarci.",
          "delayMs": 1200,
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
          "text": "Credo che i messaggi ti arrivino tutti insieme.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B02-M02",
          "sender": "nico",
          "text": "Qui prende per un secondo, poi sparisce. Quando torna mando quello che è rimasto in coda.",
          "delayMs": 1200,
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
          "text": "Quasi tutti sul pulmino si conoscono. Due si sono abbracciati come se non si vedessero da mesi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M02",
          "sender": "nico",
          "text": "Uno ha chiesto a un'altra se Tommaso ha sistemato il tetto del dormitorio.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M03",
          "sender": "nico",
          "text": "Quindi vengono qui spesso. Non siamo un gruppo di sconosciuti raccolti su internet.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B03-M04",
          "sender": "nico",
          "text": "Ognuno ha i suoi hobby. Io di solito scelgo quelli con la copertura dati.",
          "delayMs": 1200,
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
          "text": "Quello davanti ha appena detto: \"Pensavo che quest'anno non sarei riuscito a tornare prima del Giorno Bianco.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M02",
          "sender": "nico",
          "text": "Gli ho chiesto cos'è.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M03",
          "sender": "nico",
          "text": "Si è girato, ha sorriso: \"Lo capirai.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B04-M04",
          "sender": "nico",
          "text": "Se chiedo dov'è il bagno mi rispondono così? Perché lì avrei bisogno di indicazioni un po' più precise.",
          "delayMs": 1200,
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
          "text": "Sarà una festa. O una cerimonia, una di quelle in cui si sta zitti sei ore e poi si dice che è stato intenso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B05-M02",
          "sender": "nico",
          "text": "Comunque qui sembrano tutti contenti di tornare.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S02-B05-M03",
          "sender": "nico",
          "text": "Per ora direi gente strana, ma felice. Posso reggere qualche giorno.",
          "delayMs": 1200,
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
          "text": "Devo rivedere parecchi pregiudizi. Ci sono edifici di pietra, orti, un capannone. Animali, gente che porta cassette.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M03",
          "sender": "nico",
          "text": "Nessun gong. Nessuno mi ha chiesto il segno zodiacale.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B01-M04",
          "sender": "nico",
          "text": "Per ora.",
          "delayMs": 1200,
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
          "text": "Ci sono adulti di tutte le età, coppie, gente che lavora. Uno sta litigando con una carriola.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B02-M02",
          "sender": "nico",
          "text": "Sembra un agriturismo preso molto sul serio.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B02-M03",
          "sender": "nico",
          "text": "Ero venuto preparato a giudicare. Mi stanno rendendo difficile il lavoro.",
          "delayMs": 1200,
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
          "text": "Ci ha accolti Tommaso. Avrà quarant'anni, sembra quello a cui chiedi dove sono gli estintori.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B03-M02",
          "sender": "nico",
          "text": "Sta sistemando tutti senza fare una piega.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B03-M03",
          "sender": "nico",
          "text": "\"Se vi serve una coperta in più chiedete pure. Di notte qui viene un freddo assurdo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B03-M04",
          "sender": "nico",
          "text": "Almeno sul freddo qualcuno è stato chiaro.",
          "delayMs": 1200,
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
          "text": "Marta invece non ha bisogno di farsi spiegare niente.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M02",
          "sender": "nico",
          "text": "Una l'ha chiamata per nome da metà cortile. Un altro le ha detto: \"Sei tornata.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M03",
          "sender": "nico",
          "text": "Lei li saluta, sorride. Sembra proprio contenta.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M04",
          "sender": "nico",
          "text": "Sapevo che conosceva il posto. Non pensavo avesse una specie di tessera fedeltà.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M05",
          "sender": "nico",
          "text": "No, non sono geloso. Vorrei solo sapere chi sono tutte queste persone che la conoscono meglio di me.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B04-M06",
          "sender": "nico",
          "text": "Rileggendo, capisco l'equivoco.",
          "delayMs": 1800,
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
          "text": "Tommaso ci sta portando dentro. Dice che prima sistemiamo \"le cose del mondo esterno\".",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S03-B05-M02",
          "sender": "nico",
          "text": "Immagino i bagagli. Ti scrivo dopo.",
          "delayMs": 1200,
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
          "text": "Non intendeva i bagagli.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M02",
          "sender": "nico",
          "text": "Ha messo una cassetta sul tavolo e sta raccogliendo telefoni, smartwatch e tablet.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M03",
          "sender": "nico",
          "text": "Anche documenti e chiavi della macchina.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B01-M04",
          "sender": "nico",
          "text": "Le chiavi e i documenti. Quelli che notoriamente ti distraggono mentre mediti.",
          "delayMs": 1200,
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
          "text": "Dice che così non abbiamo distrazioni e non rischiamo di perdere oggetti importanti durante i lavori.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B02-M02",
          "sender": "nico",
          "text": "Chiudono tutto in un armadio dell'ufficio.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B02-M03",
          "sender": "nico",
          "text": "Gli altri stanno consegnando le cose senza discutere. Marta compresa.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B02-M04",
          "sender": "nico",
          "text": "Mi sento l'unico che ha saltato una spiegazione.",
          "delayMs": 1200,
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
          "text": "Però io ho due telefoni.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B03-M02",
          "sender": "nico",
          "text": "Quello principale l'ho messo nella cassetta. Ti sto scrivendo dal vecchio rottame col vetro rotto, quello che tengo nello zaino per le emergenze.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B03-M03",
          "sender": "nico",
          "text": "Di solito mi dimentico perfino di averlo.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B03-M04",
          "sender": "nico",
          "text": "Questo è ancora nella tasca interna dello zaino. Non l'ha visto nessuno.",
          "delayMs": 1200,
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
          "text": "Sì, lo tengo. Basta non tirarlo fuori davanti a tutti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M02",
          "sender": "nico",
          "text": "Mi serve per scriverti. E magari Marta mi manda qualcosa.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M03",
          "sender": "nico",
          "text": "Ha appena consegnato il telefono, vero?",
          "delayMs": 2200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-A-R-M04",
          "sender": "nico",
          "text": "Va bene. Mi serve per scriverti.",
          "delayMs": 1200,
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
          "text": "Ho chiesto dei documenti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M02",
          "sender": "nico",
          "text": "Tommaso dice che durante il lavoro la gente lascia vestiti e zaini ovunque. Preferiscono tenere documenti e oggetti di valore tutti insieme.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M03",
          "sender": "nico",
          "text": "Poi: \"Quando vi serviranno, sapete dove sono.\"",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M04",
          "sender": "nico",
          "text": "Detta così faccio quasi fatica a insistere.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-B-R-M05",
          "sender": "nico",
          "text": "Il vecchio telefono comunque me lo tengo. Nessuno l'ha visto.",
          "delayMs": 1200,
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
          "text": "Capisco cosa dici, ma questo no. Il principale gliel'ho già dato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M02",
          "sender": "nico",
          "text": "Se lascio anche questo non posso più scriverti. E se Marta mi manda qualcosa?",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M03",
          "sender": "nico",
          "text": "Sì, lo so. Il suo è nella cassetta.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-C02-C-R-M04",
          "sender": "nico",
          "text": "Non era il mio argomento migliore, ma il telefono resta qui.",
          "delayMs": 1200,
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
          "text": "Fatto. Telefono principale, documento e chiavi sono nell'armadio.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B04-M02",
          "sender": "nico",
          "text": "Il vecchio è con me. Mi sento come se avessi rubato qualcosa, ed è mio.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B04-M03",
          "sender": "nico",
          "text": "Tommaso non ha notato niente.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S04-B04-M04",
          "sender": "nico",
          "text": "Credo.",
          "delayMs": 1200,
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
          "text": "Siamo rimasti un po' indietro, io e Marta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B01-M02",
          "sender": "nico",
          "text": "Da soli. Sto cercando di non sembrare uno che se n'è accorto.",
          "delayMs": 1200,
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
          "text": "Mi ha guardato: \"Quindi sei venuto davvero.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M02",
          "sender": "nico",
          "text": "\"Te l'avevo detto.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M03",
          "sender": "nico",
          "text": "\"Tu dici molte cose.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B02-M04",
          "sender": "nico",
          "text": "Rideva un po'. Purtroppo non posso neanche darle torto.",
          "delayMs": 1200,
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
          "text": "\"Almeno hai già ammesso di non essere un esperto.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-CBACK01-TRUE-M02",
          "sender": "nico",
          "text": "Le ho ricordato che avevo detto \"non esattamente un esperto\".",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S05-CBACK01-TRUE-M03",
          "sender": "nico",
          "text": "Mi resta quella piccola tutela legale.",
          "delayMs": 1200,
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
          "text": "Sa dove sono gli alloggi, dove si mangia, perfino dove lasciare gli stivali bagnati. Ha salutato altre due persone per nome.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M02",
          "sender": "nico",
          "text": "Le ho chiesto da quanto viene qui.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M03",
          "sender": "nico",
          "text": "\"Da un po'.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B03-M04",
          "sender": "nico",
          "text": "Poi ha continuato a camminare.",
          "delayMs": 1200,
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
          "text": "Ho provato a chiederle quanto sarebbe \"un po'\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-A-R-M02",
          "sender": "nico",
          "text": "Mi ha guardato. \"Abbastanza da sapere dove sono le docce. Vieni, sono di là.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-A-R-M03",
          "sender": "nico",
          "text": "Messaggio ricevuto.",
          "delayMs": 1200,
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
          "text": "Sì, lascio stare. Non siamo soli da abbastanza tempo da cominciare un interrogatorio.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-B-R-M02",
          "sender": "nico",
          "text": "Abbiamo continuato a camminare. Lei sembrava a suo agio così.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto se ha una tessera punti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-C-R-M02",
          "sender": "nico",
          "text": "\"Sì. Al decimo ritiro ti danno una capra.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-C-R-M03",
          "sender": "nico",
          "text": "Non ha esitato un secondo.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S05-C03-C-R-M04",
          "sender": "nico",
          "text": "Mi piace quando collabora.",
          "delayMs": 1200,
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
          "text": "Prima di raggiungere gli altri si è girata verso di me.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B04-M02",
          "sender": "nico",
          "text": "\"Comunque sono contenta che tu sia qui.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B04-M03",
          "sender": "nico",
          "text": "Questo l'ha detto lei. Testuale.",
          "delayMs": 2200,
          "delivery": "live"
        },
        {
          "id": "A1-S05-B04-M04",
          "sender": "nico",
          "text": "Lasciami godere la cosa prima di trovare un'altra interpretazione.",
          "delayMs": 1200,
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
          "text": "Ho visto Elia. Jeans, maglione, scarpe infangate.",
          "delayMs": 6500,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B01-M02",
          "sender": "nico",
          "text": "Niente tunica, niente collana enorme. Sembra appena tornato dall'orto.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B01-M03",
          "sender": "nico",
          "text": "Mi ero preparato una persona molto più facile da prendere in giro.",
          "delayMs": 1200,
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
          "text": "Ci ha fatto sedere e ha iniziato così: \"Se qualcuno vi dice di avere tutte le risposte, probabilmente vuole qualcosa da voi.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M02",
          "sender": "nico",
          "text": "Non era l'inizio che mi aspettavo.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M03",
          "sender": "nico",
          "text": "Dice che non siamo qui per imparare una dottrina a memoria. Dovremmo osservare quello che ci portiamo dietro: paure, abitudini, cose di cui siamo convinti di non poter fare a meno.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B02-M04",
          "sender": "nico",
          "text": "Ammetto che fin qui lo seguo.",
          "delayMs": 1800,
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
          "text": "La chiama \"Vecchia Epoca\". Intende il modo in cui viviamo, non un periodo storico.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B03-M02",
          "sender": "nico",
          "text": "Dice che cerchiamo di tenere ferme cose che cambiano comunque: il lavoro, le persone, l'immagine che abbiamo di noi.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B03-M03",
          "sender": "nico",
          "text": "È il genere di discorso che ascolterei in un podcast. Magari mentre faccio altro, ma lo ascolterei.",
          "delayMs": 1800,
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
          "text": "Poi ha nominato il Giorno Bianco. Lo chiama un passaggio, qualcosa a cui arrivare \"più leggeri\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B04-M02",
          "sender": "nico",
          "text": "\"Non dovete capire tutto adesso. Cominciate da quello che fate fatica a lasciare.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B04-M03",
          "sender": "nico",
          "text": "Non ho ancora capito cosa succeda, in pratica. Nessuno gliel'ha chiesto.",
          "delayMs": 1200,
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
          "text": "Ha detto anche: \"Nessuno qui deve credere a qualcosa perché glielo dico io.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B05-M02",
          "sender": "nico",
          "text": "Continuo ad aspettare la frase da setta e lui mi dice queste cose.",
          "delayMs": 1200,
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
          "text": "Marta lo sta ascoltando senza staccargli gli occhi di dosso.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B06-M02",
          "sender": "nico",
          "text": "Io ogni tanto guardo lei. Lei non si gira.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B06-M03",
          "sender": "nico",
          "text": "Non avevo previsto di sentirmi in competizione con un uomo di cinquant'anni con le scarpe piene di fango.",
          "delayMs": 1200,
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
          "text": "È finita. Elia mi è sembrato molto meno ridicolo del previsto.",
          "delayMs": 6500,
          "delivery": "live"
        },
        {
          "id": "A1-S06-B07-M02",
          "sender": "nico",
          "text": "Mi tocca ammetterlo. Non insistere.",
          "delayMs": 1200,
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
          "text": "Dormitorio uomini. Marta è nell'altro edificio.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B01-M02",
          "sender": "nico",
          "text": "La mia organizzazione del viaggio aveva trascurato qualche aspetto.",
          "delayMs": 1200,
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
          "text": "Ci hanno dato il programma: sveglia presto, pasti insieme, lavori assegnati e altre attività. Poi silenzio la sera.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M02",
          "sender": "nico",
          "text": "Niente alcol. Niente sesso.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M03",
          "sender": "nico",
          "text": "Quest'ultima mi sembra accanimento.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B02-M04",
          "sender": "nico",
          "text": "Sì, prima mi hanno preso telefono, documenti e chiavi. Ci arrivo. Una delusione alla volta.",
          "delayMs": 1200,
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
          "text": "Uffici, depositi e alcuni spazi di lavoro sono vietati ai nuovi arrivati.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B03-M02",
          "sender": "nico",
          "text": "Tommaso dice che è per sicurezza.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B03-M03",
          "sender": "nico",
          "text": "Finché non mi affidano un trattore posso anche crederci.",
          "delayMs": 1200,
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
          "text": "Qui in camera c'è Davide. Avrà venticinque anni, è nuovo anche lui.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M02",
          "sender": "nico",
          "text": "Ha già chiesto a che ora ci svegliano, se le attività sono obbligatorie, quando restituiscono i telefoni e se domani possiamo uscire dalla proprietà.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M03",
          "sender": "nico",
          "text": "Tommaso gli risponde con una calma da reception.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B04-M04",
          "sender": "nico",
          "text": "Davide annuisce, poi gli viene un'altra domanda. Almeno non sono l'unico a non sapere come funziona.",
          "delayMs": 1200,
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
          "text": "Mi ha chiesto se ero già stato qui. Gli ho detto di no.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M02",
          "sender": "nico",
          "text": "\"Però conosci il percorso?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M03",
          "sender": "nico",
          "text": "\"Diciamo che sono qui con spirito di apertura.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M04",
          "sender": "nico",
          "text": "Ha detto solo: \"Ah.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S07-B05-M05",
          "sender": "nico",
          "text": "Credo stesse cercando qualcuno che lo rassicurasse. Ha scelto il letto sbagliato.",
          "delayMs": 1200,
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
          "text": "Siamo a cena. Devo ammetterlo: si sta bene.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M02",
          "sender": "nico",
          "text": "Cibo semplice, tavoloni, gente che chiacchiera. Uno ha tirato fuori una chitarra.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B01-M03",
          "sender": "nico",
          "text": "Nessuno ha cantato Imagine. Ho apprezzato molto la moderazione.",
          "delayMs": 1200,
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
          "text": "Ci sono coppie, fratelli, adulti di tutte le età. Si prendono in giro e discutono dei lavori di domani.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M02",
          "sender": "nico",
          "text": "Uno si lamentava perché gli attrezzi non tornano mai al loro posto.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M03",
          "sender": "nico",
          "text": "Insomma, sembrano persone che vivono insieme davvero. Forse io mi aspettavo solo hippie che si abbracciano.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B02-M04",
          "sender": "nico",
          "text": "Questi devono anche ritrovare le vanghe.",
          "delayMs": 1800,
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
          "text": "Avevo individuato il posto accanto a Marta. Stavo per sedermi, è arrivato un tizio e l'ha preso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M02",
          "sender": "nico",
          "text": "Così adesso sono due posti più in là.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B03-M03",
          "sender": "nico",
          "text": "Ho passato metà cena ad aspettare che si alzasse, fingendo interesse per una conversazione sugli attrezzi.",
          "delayMs": 1200,
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
          "text": "Davanti a me c'era Lea. È qui da anni, credo. Mi ha spiegato dove prendono il pane senza farne una metafora.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M02",
          "sender": "nico",
          "text": "Poi siamo finiti a parlare di famiglia. Quando è venuta qui, lei aveva quasi smesso di parlare con la sua.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M03",
          "sender": "nico",
          "text": "Ha detto: \"All'inizio pensavo mi mancassero. Poi ho capito che mi mancava solo l'abitudine.\"",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M04",
          "sender": "nico",
          "text": "Mi sono fermato con la forchetta in mano.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B04-M05",
          "sender": "nico",
          "text": "Lei però era tranquilla. Uno ha annuito e la conversazione è andata avanti.",
          "delayMs": 1200,
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
          "text": "Forse per loro staccarsi significa proprio questo. Dal telefono, dal lavoro, anche dalla famiglia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B05-M02",
          "sender": "nico",
          "text": "Io pensavo più a disattivare le notifiche per un fine settimana.",
          "delayMs": 1200,
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
          "text": "Ah, poi quello accanto a Marta si è alzato.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B06-M02",
          "sender": "nico",
          "text": "Io non mi sono mosso. Avevo ormai investito parecchio nel sembrare disinteressato.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B06-M03",
          "sender": "nico",
          "text": "Lei ha guardato il posto vuoto. Poi me.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S08-B06-M04",
          "sender": "nico",
          "text": "Questo è tutto. Ti lascio valutare.",
          "delayMs": 1200,
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
          "text": "Davide ha fermato Tommaso mentre finivamo di mangiare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M02",
          "sender": "nico",
          "text": "\"Domani posso riprendere il telefono un attimo?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M03",
          "sender": "nico",
          "text": "Tommaso gli ha chiesto perché. \"Per chiamare mia madre. Dirle che sono arrivato.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M04",
          "sender": "nico",
          "text": "\"Lo sa che sei qui?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M05",
          "sender": "nico",
          "text": "Davide ha detto di sì.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B01-M06",
          "sender": "nico",
          "text": "Tommaso ha sorriso: \"Allora lo sa già.\"",
          "delayMs": 2200,
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
          "text": "Davide è rimasto lì un secondo, come se aspettasse il resto della risposta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B02-M02",
          "sender": "nico",
          "text": "Tommaso aveva già finito.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B02-M03",
          "sender": "nico",
          "text": "Si può essere molto educati e molto stronzi nello stesso momento.",
          "delayMs": 1200,
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
          "text": "Marta ha visto tutto. Non è intervenuta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B03-M02",
          "sender": "nico",
          "text": "Guardava Tommaso, però. Non Davide.",
          "delayMs": 1200,
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
          "text": "Sono andato da Davide a chiedergli se stava bene.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M02",
          "sender": "nico",
          "text": "Mi ha detto di sì. Poi: \"Le avevo promesso che la chiamavo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M03",
          "sender": "nico",
          "text": "Gli ho chiesto se sua madre fosse preoccupata.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M04",
          "sender": "nico",
          "text": "Ha fatto spallucce. \"È mia madre.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-A-R-M05",
          "sender": "nico",
          "text": "Gli ho detto che magari domani glielo fanno fare. Non sembrava convinto. Neanch'io molto, a dirla tutta.",
          "delayMs": 1200,
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
          "text": "Ho chiesto a Marta se fosse normale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M02",
          "sender": "nico",
          "text": "Ha guardato verso Tommaso. \"Qui sì.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M03",
          "sender": "nico",
          "text": "\"E a te va bene?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M04",
          "sender": "nico",
          "text": "\"Non ho detto che mi va bene.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-B-R-M05",
          "sender": "nico",
          "text": "Poi ha cambiato argomento. Non sono riuscito a farle dire altro.",
          "delayMs": 1200,
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
          "text": "Sì, magari domani glielo ridanno. È il primo giorno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-C-R-M02",
          "sender": "nico",
          "text": "Possono anche essere solo esagerati col detox digitale.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-C04-C-R-M03",
          "sender": "nico",
          "text": "Mi sto impegnando a non trasformare questa vacanza in un documentario criminale dopo sei ore.",
          "delayMs": 1200,
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
          "text": "Ci stanno mandando nei dormitori. Domani sveglia prestissimo.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M02",
          "sender": "nico",
          "text": "Quindi: il posto è strano, la cena era buona, alcune regole mi stanno già sul cazzo.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M03",
          "sender": "nico",
          "text": "Marta però è contenta che io sia qui.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S09-B04-M04",
          "sender": "nico",
          "text": "Lo so quale parte del bilancio sto sopravvalutando. Buonanotte.",
          "delayMs": 1200,
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
          "text": "Giorno due. Sono sveglio da un'ora che di solito conosco solo dall'altra parte.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B01-M02",
          "sender": "nico",
          "text": "Abbiamo già fatto colazione e adesso spostiamo cassette.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B01-M03",
          "sender": "nico",
          "text": "Non sapevo che la ricerca spirituale coinvolgesse così tanto la schiena.",
          "delayMs": 1200,
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
          "text": "C'è un edificio piccolo, separato dagli altri. Ieri non l'avevo notato.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B02-M02",
          "sender": "nico",
          "text": "Finestre strette, porta chiusa. È tenuto bene, ma non invita esattamente a entrare.",
          "delayMs": 1200,
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
          "text": "Ho chiesto a Tommaso cos'è. \"La Casa del Silenzio.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B03-M02",
          "sender": "nico",
          "text": "Dice che ci si passa del tempo da soli, senza conversazioni o distrazioni. Ha usato le parole \"interferenze esterne\".",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B03-M03",
          "sender": "nico",
          "text": "\"A volte uno ha bisogno di ascoltarsi. Lì può farlo.\"",
          "delayMs": 1800,
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
          "text": "Mi è scappato: \"Isolamento spirituale premium.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B04-M02",
          "sender": "nico",
          "text": "Tommaso non ha riso. \"Se vuoi chiamarlo così.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B04-M03",
          "sender": "nico",
          "text": "Non era neanche infastidito. Mi sono sentito scemo da solo.",
          "delayMs": 1200,
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
          "text": "Aspetta. C'è qualcuno alla finestra.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M02",
          "sender": "nico",
          "text": "O c'era. Ho visto una faccia, solo un pezzo, non so chi fosse.",
          "delayMs": 2200,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M03",
          "sender": "nico",
          "text": "Tommaso mi ha chiamato per dirmi dove mettere le cassette. Quando ho riguardato non c'era più nessuno.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M04",
          "sender": "nico",
          "text": "Se la gente ci va per stare da sola, qualcuno dentro dovrà pur esserci.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S10-B05-M05",
          "sender": "nico",
          "text": "Non so perché continuo a guardare.",
          "delayMs": 1200,
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
          "text": "Mi hanno messo a lavorare con Marta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B01-M02",
          "sender": "nico",
          "text": "Dividiamo le patate buone da quelle marce. Non era lo scenario che avevo in mente, ma accetto.",
          "delayMs": 1200,
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
          "text": "Mi sta prendendo in giro. \"Allora, da esperto, come valuti il percorso finora?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B02-M02",
          "sender": "nico",
          "text": "Ho guardato il mucchio davanti a noi. \"Molto patata.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B02-M03",
          "sender": "nico",
          "text": "Ha riso. Proprio riso.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B02-M04",
          "sender": "nico",
          "text": "Sì, lo so che era brutta. Dillo a lei.",
          "delayMs": 1200,
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
          "text": "\"Almeno avevi ammesso di non saperne molto.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-CBACK02-TRUE-M02",
          "sender": "nico",
          "text": "\"Non saperne molto non significa non saperne niente.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-CBACK02-TRUE-M03",
          "sender": "nico",
          "text": "\"Tu sei molto vicino alla seconda.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-CBACK02-TRUE-M04",
          "sender": "nico",
          "text": "Non mi sta concedendo niente.",
          "delayMs": 1200,
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
          "text": "Poi mi ha guardato meglio. \"Tu non sai niente di queste cose, vero?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-CBACK02-FALSE-M02",
          "sender": "nico",
          "text": "Mi sono concentrato sulle patate. Il silenzio qui dovrebbe essere apprezzato.",
          "delayMs": 1200,
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
          "text": "Mi ha chiesto perché sono venuto davvero.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B03-M02",
          "sender": "nico",
          "text": "Mi è venuto in mente solo \"perché mi piaci\".",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B03-M03",
          "sender": "nico",
          "text": "Non l'ho detto. Ma dovrei rispondere qualcosa prima di finire tutte le patate.",
          "delayMs": 1200,
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
          "text": "Le ho detto che mi incuriosiva il posto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-A-R-M02",
          "sender": "nico",
          "text": "\"Nico, hai cercato millenarismo sul pulmino.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-A-R-M03",
          "sender": "nico",
          "text": "Ha sorriso. Deve aver visto lo schermo.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-A-R-M04",
          "sender": "nico",
          "text": "O l'ignoranza mi si legge in faccia, che è anche possibile.",
          "delayMs": 1200,
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
          "text": "\"Perché me ne avevi parlato tu.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M02",
          "sender": "nico",
          "text": "Per un momento non ha risposto.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M03",
          "sender": "nico",
          "text": "Poi: \"Non è una risposta molto spirituale.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M04",
          "sender": "nico",
          "text": "\"Sto crescendo. Dammi tempo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-B-R-M05",
          "sender": "nico",
          "text": "Ha scosso la testa, ma sorrideva.",
          "delayMs": 1200,
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
          "text": "\"Per le patate, chiaramente. Ho un talento.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-C-R-M02",
          "sender": "nico",
          "text": "Marta ne ha presa una dal mucchio delle buone e me l'ha messa davanti.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-C-R-M03",
          "sender": "nico",
          "text": "\"Questa l'hai scelta tu.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C05-C-R-M04",
          "sender": "nico",
          "text": "Era praticamente marcia. Ho dovuto ridimensionare anche quella competenza.",
          "delayMs": 1200,
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
          "text": "Dopo abbiamo parlato un po'. Di lavoro, della città, di posti dove si mangia male.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M02",
          "sender": "nico",
          "text": "È venuta fuori una serie che abbiamo mollato entrambi alla seconda stagione.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M03",
          "sender": "nico",
          "text": "Lei: \"Non succedeva più niente.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M04",
          "sender": "nico",
          "text": "\"Io aspettavo migliorasse.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M05",
          "sender": "nico",
          "text": "\"E hai guardato un'altra stagione?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M06",
          "sender": "nico",
          "text": "\"Mi affeziono alle decisioni sbagliate.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M07",
          "sender": "nico",
          "text": "Mi ha guardato un secondo di troppo. Poi siamo tornati alle patate.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B04-M08",
          "sender": "nico",
          "text": "Per cinque minuti niente Aurora, niente Giorno Bianco. Mi sarei fermato lì volentieri.",
          "delayMs": 1200,
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
          "text": "Quando siamo andati a portare via una cassetta, si è fermata davanti alle foto vicino alla porta.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M02",
          "sender": "nico",
          "text": "Sono vecchie foto della Comunità: raccolti, cene, gruppi di persone.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M03",
          "sender": "nico",
          "text": "Marta ne guardava una senza muoversi. Tenevamo ancora la cassetta.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B05-M04",
          "sender": "nico",
          "text": "Non capivo chi stesse cercando tra tutte quelle facce.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto se andasse tutto bene.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-A-R-M02",
          "sender": "nico",
          "text": "\"Sì.\" Ha riguardato la foto. \"Mi ricordava una persona.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-A-R-M03",
          "sender": "nico",
          "text": "Ho aspettato che aggiungesse qualcosa. Niente.",
          "delayMs": 2200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-A-R-M04",
          "sender": "nico",
          "text": "Non me la sono sentita di chiedere altro.",
          "delayMs": 1200,
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
          "text": "Dopo qualche secondo ha ripreso a camminare e abbiamo portato via la cassetta.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-B-R-M03",
          "sender": "nico",
          "text": "Sembrava distante. Poi mi ha chiesto una cosa sul lavoro, come se non ci fossimo mai fermati.",
          "delayMs": 1200,
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
          "text": "Ho aspettato. È stata lei a parlare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M02",
          "sender": "nico",
          "text": "\"Mi ricordava una persona.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M03",
          "sender": "nico",
          "text": "Le ho chiesto se fosse qualcuno di qui.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M04",
          "sender": "nico",
          "text": "\"Lascia stare.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-C06-C-R-M05",
          "sender": "nico",
          "text": "L'ho lasciata stare.",
          "delayMs": 1200,
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
          "text": "Siamo tornati alle patate. Dopo un po' ha ricominciato a prendermi in giro.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B06-M02",
          "sender": "nico",
          "text": "Però continuo a ripensare a come guardava quella foto.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S11-B06-M03",
          "sender": "nico",
          "text": "Ci sono cose di questo posto che non mi ha raccontato.",
          "delayMs": 1200,
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
          "text": "Altra sessione con Elia. Stavolta parla del Giorno Bianco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B01-M02",
          "sender": "nico",
          "text": "Vediamo se alla fine so cos'è.",
          "delayMs": 1200,
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
          "text": "Ha detto: \"Essere pronti significa essere pronti a lasciare ciò che pensiamo di possedere.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B02-M02",
          "sender": "nico",
          "text": "Per spiegarsi ha parlato del lavoro, del ruolo che abbiamo, del bisogno che gli altri ci riconoscano.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B02-M03",
          "sender": "nico",
          "text": "Fin qui mi sembra un discorso sul cambiare vita.",
          "delayMs": 1800,
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
          "text": "Poi però: \"Quando arriva il momento di attraversare, non possiamo portare nulla con noi.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B03-M02",
          "sender": "nico",
          "text": "Subito dopo è tornato ai ricordi e agli attaccamenti.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B03-M03",
          "sender": "nico",
          "text": "Immagino sia ancora una metafora. Però \"attraversare\" mi è rimasto in testa.",
          "delayMs": 1200,
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
          "text": "Ha detto anche di non avere paura di \"perdere la forma che abbiamo adesso\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B04-M02",
          "sender": "nico",
          "text": "Capisco: lasciarti alle spalle la vecchia versione di te, crescere, quelle cose.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B04-M03",
          "sender": "nico",
          "text": "Solo che ogni tanto sembra di ascoltare un testamento.",
          "delayMs": 1200,
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
          "text": "Marta è tre persone più avanti, seduta accanto a uno che non ho ancora visto.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B05-M02",
          "sender": "nico",
          "text": "Ha dei capelli ingiustificabili. Lui, dico.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B05-M03",
          "sender": "nico",
          "text": "Non so cosa dovremmo lasciare nel Giorno Bianco. Io inizierei da quello seduto vicino a Marta.",
          "delayMs": 1200,
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
          "text": "Elia ha chiuso dicendo che non dobbiamo capire tutto subito, ma osservare cosa ci fa paura lasciare.",
          "delayMs": 6500,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B06-M02",
          "sender": "nico",
          "text": "Io direi la connessione dati.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S12-B06-M03",
          "sender": "nico",
          "text": "E Marta, a quanto pare. Non mi piace quando questi discorsi trovano qualcosa anche su di me.",
          "delayMs": 1200,
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
          "text": "Piove ancora. Forte abbastanza da far spostare dentro un paio di lavori che dovevamo fare fuori.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B01-M02",
          "sender": "nico",
          "text": "Neanche qui riescono a convincere tutti a bagnarsi per crescere interiormente.",
          "delayMs": 1200,
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
          "text": "Tommaso dice che se continua così la strada può diventare \"fastidiosa\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M02",
          "sender": "nico",
          "text": "Gli ho chiesto se capita spesso. \"Qui in questo periodo sì.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M03",
          "sender": "nico",
          "text": "Uno vicino a lui ha detto che il vecchio ponte è sopravvissuto a cose peggiori.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M04",
          "sender": "nico",
          "text": "Tommaso: \"Non incoraggiarlo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B02-M05",
          "sender": "nico",
          "text": "Hanno riso. Pare sia una battuta abituale, qui. Preferirei avere un ponte di cui non vale la pena parlare.",
          "delayMs": 1200,
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
          "text": "Intanto questo telefono è passato dal 42 al 19 per cento.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B03-M02",
          "sender": "nico",
          "text": "Non gradualmente. L'ho guardato e aveva deciso così.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B03-M03",
          "sender": "nico",
          "text": "Mia madre toglie gli anni con più discrezione.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S13-B03-M04",
          "sender": "nico",
          "text": "Devo usarlo meno. È l'unico che mi è rimasto.",
          "delayMs": 1200,
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
          "text": "È arrivato un furgone. Saranno le due.",
          "delayMs": 1200,
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
          "text": "Mi ha svegliato il motore. Guardo dalla finestra, senza accendere la luce.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M02",
          "sender": "nico",
          "text": "Ci sono quattro o cinque persone, vedo Tommaso. Forse anche Elia, ma è troppo buio per esserne sicuro.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M03",
          "sender": "nico",
          "text": "Stanno scaricando casse. Credo anche taniche.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B02-M04",
          "sender": "nico",
          "text": "Magari la consegna era in ritardo. Però alle due di notte, sotto questa pioggia...",
          "delayMs": 1200,
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
          "text": "Sì, resto qui. Almeno non devo spiegare perché giro in pigiama per il cortile.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-A-R-M02",
          "sender": "nico",
          "text": "Vedo tre o quattro taniche scure, delle casse e altra roba che da qui è solo rettangolare.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-A-R-M03",
          "sender": "nico",
          "text": "Portano quasi tutto al deposito. Quello dove i nuovi non possono entrare.",
          "delayMs": 1200,
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
          "text": "È una pessima idea.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-B-R-M02",
          "sender": "nico",
          "text": "Vado. Aspetta che metto via il telefono.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-B-R-M03",
          "sender": "nico",
          "text": "Se finisce male, cancella la cronologia. Non voglio che l'ultima cosa che resta di me siano le ricerche su Marta.",
          "delayMs": 1200,
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
          "text": "Hai ragione. Non esco per scoprire che hanno consegnato detersivo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S14-C07-C-R-M02",
          "sender": "nico",
          "text": "Ho visto arrivare il furgone e scaricare la roba. Domani provo a capire qualcosa di più.",
          "delayMs": 1200,
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
          "text": "Spengo lo schermo. La batteria sta già facendo quello che vuole.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S14-B03-M02",
          "sender": "nico",
          "text": "Ti scrivo se succede altro.",
          "delayMs": 1200,
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
          "text": "Ne stanno portando altre. Taniche, casse e un paio di scatole chiare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-A-M02",
          "sender": "nico",
          "text": "Non riesco a leggere le scritte. Potrebbe essere materiale medico o attrezzatura da lavoro, da questa distanza non lo distinguo.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-A-M03",
          "sender": "nico",
          "text": "Finisce tutto nel deposito.",
          "delayMs": 1800,
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
          "text": "Sono fuori. Da qui vedo meglio, ma non abbastanza da capire cosa sia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M02",
          "sender": "nico",
          "text": "Taniche senza etichette visibili, casse chiuse. Alcune scatole sembrano roba sanitaria, oppure da officina.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M03",
          "sender": "nico",
          "text": "Merda. Tommaso.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M04",
          "sender": "nico",
          "text": "Mi ha visto. Metto via.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M05",
          "sender": "nico",
          "text": "Sono rientrato. Mi ha chiesto se non riuscivo a dormire.",
          "delayMs": 4500,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M06",
          "sender": "nico",
          "text": "Gli ho detto che avevo bisogno d'aria. Ero in pigiama sotto la pioggia.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M07",
          "sender": "nico",
          "text": "Ha guardato il cortile, poi me. \"Domattina si comincia presto.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M08",
          "sender": "nico",
          "text": "Mi ha indicato il dormitorio. Nessun'altra domanda.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-B-M09",
          "sender": "nico",
          "text": "Continuo a chiedermi se abbia creduto alla storia dell'aria.",
          "delayMs": 1200,
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
          "text": "Buongiorno. Quello che è arrivato stanotte l'hanno messo nel deposito.",
          "delayMs": 12000,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-C-M02",
          "sender": "nico",
          "text": "La porta era aperta un momento: ci sono molte più casse di ieri. Ho visto portare dentro anche due taniche, senza etichette visibili.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S15-S15-C-M03",
          "sender": "nico",
          "text": "Non so cosa contenessero. Ma almeno il furgone non me lo sono sognato.",
          "delayMs": 1800,
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
          "text": "Potrebbero essere scorte. Carburante, prodotti per gli orti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S15-B04-M02",
          "sender": "nico",
          "text": "Magari fanno biodiesel.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S15-B04-M03",
          "sender": "nico",
          "text": "Mi tengo questa spiegazione finché non ne arriva una migliore.",
          "delayMs": 1200,
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
          "text": "Colazione. Pane, caffè discutibile, gente che parla dei lavori di oggi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B01-M02",
          "sender": "nico",
          "text": "Nessuno ha nominato il furgone o le taniche.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B01-M03",
          "sender": "nico",
          "text": "Sembra una mattina come tutte le altre.",
          "delayMs": 1200,
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
          "text": "Stanotte mi trova in pigiama davanti al deposito. Stamattina: \"Altro pane?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S16-CALLBACK-TOMMASO-TRUE-M03",
          "sender": "nico",
          "text": "Ho detto di sì. Cos'altro dovevo dirgli.",
          "delayMs": 1200,
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
          "text": "Ho chiesto a uno se stanotte fosse arrivata una consegna.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B02-M02",
          "sender": "nico",
          "text": "\"Scorte.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B02-M03",
          "sender": "nico",
          "text": "\"Di cosa?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B02-M04",
          "sender": "nico",
          "text": "\"Le solite cose.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B02-M05",
          "sender": "nico",
          "text": "Poi ha continuato a mangiare.",
          "delayMs": 1200,
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
          "text": "Aspetta. Davide non c'è.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B03-M02",
          "sender": "nico",
          "text": "Ieri era a cena. Stamattina il suo posto è vuoto.",
          "delayMs": 1200,
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
          "text": "Continuo a pensare a quello che mi ha detto ieri. Aveva promesso a sua madre di chiamarla.",
          "delayMs": 0,
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
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B04-M03",
          "sender": "nico",
          "text": "Ho guardato fuori, verso la Casa del Silenzio.",
          "delayMs": 2500,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B04-M04",
          "sender": "nico",
          "text": "Non ho chiesto altro.",
          "delayMs": 1200,
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
          "text": "Marta sta parlando con Elia. Non riesco a sentire.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M02",
          "sender": "nico",
          "text": "Lei è tesa, ha le spalle rigide e parla piano. Lui la ascolta, tranquillo come ieri.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M03",
          "sender": "nico",
          "text": "Elia mi ha visto guardare. Mi ha fatto un piccolo cenno.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B05-M04",
          "sender": "nico",
          "text": "Ho abbassato gli occhi sul piatto.",
          "delayMs": 1200,
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
          "text": "Marta è tornata. Le ho chiesto se fosse tutto a posto.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B06-M02",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B06-M03",
          "sender": "nico",
          "text": "Non avevo quasi finito la domanda.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B06-M04",
          "sender": "nico",
          "text": "Poi mi ha sorriso e se n'è andata.",
          "delayMs": 1200,
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
          "text": "Forse questo posto è un po' più strano di quanto pensassi.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A1-S16-B07-M02",
          "sender": "nico",
          "text": "Comunque Marta mi ha sorriso.",
          "delayMs": 3000,
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
