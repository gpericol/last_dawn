window.LUA_CONTENT = window.LUA_CONTENT || {};
window.LUA_CONTENT.act2 = {
  "schemaVersion": 1,
  "contentVersion": "beta-005-complete-001",
  "id": "act2-complete",
  "title": "Atto II, Forse sono un po' strani",
  "startNode": "A2-S01-START",
  "scenes": {
    "A2-S01": {
      "id": "A2-S01",
      "title": "Davide è tornato",
      "act": 2,
      "day": "3",
      "timeOfDay": "tarda mattina",
      "location": "area cucina / preparazione del pranzo",
      "entryNode": "A2-S01-START",
      "canonicalExit": "A2-S02"
    },
    "A2-S02": {
      "id": "A2-S02",
      "title": "Dodici giorni",
      "act": 2,
      "day": "3",
      "timeOfDay": "pomeriggio",
      "location": "sala comune",
      "entryNode": "A2-S02-START",
      "canonicalExit": "A2-S03"
    },
    "A2-S03": {
      "id": "A2-S03",
      "title": "Il cancello",
      "act": 2,
      "day": "3",
      "timeOfDay": "tardo pomeriggio",
      "location": "ingresso della proprietà / cancello",
      "entryNode": "A2-S03-START",
      "canonicalExit": "A2-S04"
    },
    "A2-S04": {
      "id": "A2-S04",
      "title": "I documenti",
      "act": 2,
      "day": "3",
      "timeOfDay": "tardo pomeriggio",
      "location": "edificio principale / area ufficio",
      "entryNode": "A2-S04-START",
      "canonicalExit": "A2-S05"
    },
    "A2-S05": {
      "id": "A2-S05",
      "title": "Marta gli dice di smetterla",
      "act": 2,
      "day": "3",
      "timeOfDay": "sera",
      "location": "passaggio laterale tra edificio principale e area di lavoro",
      "entryNode": "A2-S05-START",
      "canonicalExit": "A2-S06"
    },
    "A2-S06": {
      "id": "A2-S06",
      "title": "Il deposito",
      "act": 2,
      "day": "3",
      "timeOfDay": "sera / prima della riunione serale",
      "location": "area di lavoro vicino al deposito",
      "entryNode": "A2-S06-START",
      "canonicalExit": "A2-S07"
    },
    "A2-S07": {
      "id": "A2-S07",
      "title": "Lea",
      "act": 2,
      "day": "3",
      "timeOfDay": "sera",
      "location": "area di lavoro coperta / preparazione materiali",
      "entryNode": "A2-S07-START",
      "canonicalExit": "A2-S08"
    },
    "A2-S08": {
      "id": "A2-S08",
      "title": "Marta non dorme",
      "act": 2,
      "day": "3",
      "timeOfDay": "notte",
      "location": "passaggio coperto / area esterna tra dormitori ed edificio principale",
      "entryNode": "A2-S08-START",
      "canonicalExit": "A2-S09"
    },
    "A2-S09": {
      "id": "A2-S09",
      "title": "Le lettere",
      "act": 2,
      "day": "4",
      "timeOfDay": "mattina",
      "location": "piccola stanza amministrativa / archivio secondario",
      "entryNode": "A2-S09-START",
      "canonicalExit": "A2-S10"
    },
    "A2-S10": {
      "id": "A2-S10",
      "title": "Una spiegazione possibile",
      "act": 2,
      "day": "4",
      "timeOfDay": "mattina",
      "location": "esterno della stanza amministrativa / corridoio secondario",
      "entryNode": "A2-S10-START",
      "canonicalExit": "A2-S11"
    },
    "A2-S11": {
      "id": "A2-S11",
      "title": "Marta lo trova",
      "act": 2,
      "day": "4",
      "timeOfDay": "tarda mattina",
      "location": "stanza amministrativa / archivio secondario",
      "entryNode": "A2-S11-START",
      "canonicalExit": "A2-S12"
    },
    "A2-S12": {
      "id": "A2-S12",
      "title": "Anna",
      "act": 2,
      "day": "4",
      "timeOfDay": "tarda mattina / mezzogiorno",
      "location": "stanza amministrativa / archivio secondario",
      "entryNode": "A2-S12-START",
      "canonicalExit": "A2-S13"
    },
    "A2-S13": {
      "id": "A2-S13",
      "title": "Perché non me l'hai detto?",
      "act": 2,
      "day": "4",
      "timeOfDay": "mezzogiorno",
      "location": "stanza amministrativa / archivio secondario",
      "entryNode": "A2-S13-START",
      "canonicalExit": "A2-S14"
    },
    "A2-S14": {
      "id": "A2-S14",
      "title": "La lettera di Anna",
      "act": 2,
      "day": "4",
      "timeOfDay": "primo pomeriggio",
      "location": "stanza amministrativa / archivio secondario",
      "entryNode": "A2-S14-START",
      "canonicalExit": "A2-S15"
    },
    "A2-S15": {
      "id": "A2-S15",
      "title": "Non possiamo andare dalla polizia?",
      "act": 2,
      "day": "4",
      "timeOfDay": "pomeriggio",
      "location": "zona appartata della proprietà",
      "entryNode": "A2-S15-START",
      "canonicalExit": "A2-S16"
    },
    "A2-S16": {
      "id": "A2-S16",
      "title": "“Un giorno”",
      "act": 2,
      "day": "4",
      "timeOfDay": "sera",
      "location": "zona appartata / passaggio esterno",
      "entryNode": "A2-S16-START",
      "canonicalExit": "A3-S01"
    }
  },
  "initialState": {
    "DAVIDE_RETURNED_FROM_SILENCE": false,
    "PREPARATION_ACTIVE": false,
    "KNOWS_WHITE_DAY_SCHEDULED_IN_12_DAYS": false,
    "KNOWS_PREPARATION_RULES": false,
    "GATE_CHAINED": false,
    "DOCUMENTS_RETURN_REFUSED": false,
    "MARTA_SHARED_SUSPICION": false,
    "KNOWS_DEPOT_CONTENTS": false,
    "LEA_TRUST": 0,
    "NICO_MARTA_ALLIANCE_STARTED": false,
    "KNOWS_FAREWELL_LETTERS": false,
    "LETTER_EVIDENCE_LEVEL": "NONE",
    "NICO_DENIAL": "LOW",
    "KNOWS_ANNA_NAME": false,
    "KNOWS_ANNA_IS_SISTER": false,
    "KNOWS_ANNA_DEATH": false,
    "KNOWS_ANNA_OFFICIAL_SUICIDE": false,
    "KNOWS_ELIA_CALLED_ANNA_CROSSING": false,
    "KNOWS_MARTA_INVESTIGATING": false,
    "KNOWS_MARTA_NOT_BELIEVER": false,
    "MARTA_USED_NICO_AS_OUTSIDER": false,
    "NICO_MARTA_CONFLICT_ACTIVE": false,
    "KNOWS_FIRST_CROSSING_TERM": false,
    "KNOWS_ANNA_WAS_PART_OF_SOMETHING": false,
    "FIRST_CROSSING_HYPOTHESIS": "NONE",
    "EXTERNAL_HELP_ATTEMPTED": false,
    "PRIVATE_ARCHIVE_OBJECTIVE": false,
    "NICO_STAYS_ONE_MORE_DAY": false,
    "ACT2_COMPLETE": false,
    "A2S01_CHALLENGED_DAVIDE": false,
    "A2S01_ASKED_IF_OK": false,
    "A2S01_DID_NOT_PRESS_DAVIDE": false,
    "A2S03_PRESSED_TOMMASO": false,
    "A2S03_DID_NOT_PRESS_GATE": false,
    "A2S03_PLAYED_OFF_GATE": false,
    "A2S04_DIRECT_REQUEST": false,
    "A2S04_USED_EXCUSE": false,
    "A2S04_REQUESTED_PHONE_TOO": false,
    "A2S05_DEMANDED_ANSWERS": false,
    "A2S05_ASKED_SHARED_SUSPICION": false,
    "A2S05_ASKED_WHY_STOP": false,
    "A2S07_ASKED_ABOUT_OLD_LIFE": false,
    "A2S07_ASKED_ABOUT_FREEDOM": false,
    "A2S07_LISTENED_TO_LEA": false,
    "A2S08_TOLD_MARTA_ALL_DEPOT": false,
    "A2S08_ASKED_MARTA_MOTIVE": false,
    "A2S08_PARTIAL_DEPOT_DISCLOSURE": false,
    "A2S09_READ_MORE_LETTERS": false,
    "A2S09_STOPPED_READING": false,
    "A2S09_CHECKED_METADATA": false,
    "A2S10_PREFERS_SYMBOLIC_EXPLANATION": false,
    "A2S10_ACCEPTS_FAREWELL_HYPOTHESIS": false,
    "A2S10_WANTS_MARTA_INPUT": false,
    "A2S11_PRESSED_MARTA": false,
    "A2S11_HELPED_MARTA_SEARCH": false,
    "A2S11_LINKED_PHOTO": false,
    "A2S12_OFFERED_CONDOLENCE": false,
    "A2S12_ASKED_MARTA_REASON": false,
    "A2S12_IMMEDIATE_CONFLICT": false,
    "A2S13_ACCUSATION_DANGER": false,
    "A2S13_ASKED_IF_USED": false,
    "A2S13_ASKED_WHY_NICO": false,
    "A2S14_SUSPECTS_TEST": false,
    "A2S14_SUSPECTS_SYMBOLIC_FIRST_CROSSING": false,
    "A2S14_ASKED_MARTA_FIRST_CROSSING": false,
    "A2S15_TRIED_EMERGENCY_CALL": false,
    "A2S15_SEARCHED_SIGNAL": false,
    "A2S15_TRIED_OUTGOING_MESSAGE": false,
    "A2S16_PLAYER_SAID_LEAVE": false,
    "A2S16_PLAYER_SAID_HELP": false,
    "A2S16_PLAYER_SAID_CONVINCE": false,
    "A2S16_PLAYER_CALLED_IDIOT": false
  },
  "nodes": {
    "A2-S01-START": {
      "id": "A2-S01-START",
      "sceneId": "A2-S01",
      "type": "state",
      "effects": [],
      "next": "A2-S01-B01"
    },
    "A2-S01-B01": {
      "id": "A2-S01-B01",
      "sceneId": "A2-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S01-B01-M01",
          "sender": "nico",
          "text": "Davide è tornato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B01-M02",
          "sender": "nico",
          "text": "Adesso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B01-M03",
          "sender": "nico",
          "text": "Tarda mattina.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B01-M04",
          "sender": "nico",
          "text": "Stanno preparando il pranzo e lui sta tagliando verdure come se stamattina non fosse sparito nel nulla.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B01-M05",
          "sender": "nico",
          "text": "Fisicamente sta bene.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B01-M06",
          "sender": "nico",
          "text": "Niente faccia da ostaggio.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B01-M07",
          "sender": "nico",
          "text": "Niente tunica nuova.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B01-M08",
          "sender": "nico",
          "text": "È lui.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B01-M09",
          "sender": "nico",
          "text": "Solo...",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B01-M10",
          "sender": "nico",
          "text": "più quieto.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S01-B02"
    },
    "A2-S01-B02": {
      "id": "A2-S01-B02",
      "sceneId": "A2-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S01-B02-M01",
          "sender": "nico",
          "text": "Gli ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M02",
          "sender": "nico",
          "text": "\"Dove cazzo eri?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M03",
          "sender": "nico",
          "text": "Lui:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M04",
          "sender": "nico",
          "text": "\"Avevo bisogno di stare un po' da solo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M05",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M06",
          "sender": "nico",
          "text": "\"Dentro quella casa?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M07",
          "sender": "nico",
          "text": "Ha continuato a tagliare.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M08",
          "sender": "nico",
          "text": "\"Mi ha fatto bene.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M09",
          "sender": "nico",
          "text": "Non l'ha detto come uno slogan.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M10",
          "sender": "nico",
          "text": "È questo che mi disturba.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M11",
          "sender": "nico",
          "text": "Sembra che ci creda.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A2-S01-B03"
    },
    "A2-S01-B03": {
      "id": "A2-S01-B03",
      "sceneId": "A2-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S01-B03-M01",
          "sender": "nico",
          "text": "Gli ho chiesto della madre.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S01-CALLBACK"
    },
    "A2-S01-CALLBACK-TRUE": {
      "id": "A2-S01-CALLBACK-TRUE",
      "sceneId": "A2-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S01-CALLBACK-TRUE-M01",
          "sender": "nico",
          "text": "Gli ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-CALLBACK-TRUE-M02",
          "sender": "nico",
          "text": "\"Ieri mi avevi detto che le avevi promesso di chiamarla.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-CALLBACK-TRUE-M03",
          "sender": "nico",
          "text": "Lui ha annuito.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-CALLBACK-TRUE-M04",
          "sender": "nico",
          "text": "\"Lo so.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-CALLBACK-TRUE-M05",
          "sender": "nico",
          "text": "Poi:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-CALLBACK-TRUE-M06",
          "sender": "nico",
          "text": "\"Non era importante.\"",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S01-B04"
    },
    "A2-S01-CALLBACK-FALSE": {
      "id": "A2-S01-CALLBACK-FALSE",
      "sceneId": "A2-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S01-CALLBACK-FALSE-M01",
          "sender": "nico",
          "text": "Gli ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-CALLBACK-FALSE-M02",
          "sender": "nico",
          "text": "\"Ieri volevi chiamarla.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-CALLBACK-FALSE-M03",
          "sender": "nico",
          "text": "Lui:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-CALLBACK-FALSE-M04",
          "sender": "nico",
          "text": "\"Non era importante.\"",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S01-B04"
    },
    "A2-S01-CALLBACK": {
      "id": "A2-S01-CALLBACK",
      "sceneId": "A2-S01",
      "type": "condition",
      "cases": [
        {
          "when": {
            "op": "eq",
            "key": "A1S09_SPOKE_TO_DAVIDE",
            "value": true
          },
          "next": "A2-S01-CALLBACK-TRUE"
        }
      ],
      "else": "A2-S01-CALLBACK-FALSE"
    },
    "A2-S01-B04": {
      "id": "A2-S01-B04",
      "sceneId": "A2-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S01-B04-M01",
          "sender": "nico",
          "text": "Due giorni fa era praticamente l'unica cosa di cui gli importava.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M02",
          "sender": "nico",
          "text": "Adesso dice che non era importante.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M03",
          "sender": "nico",
          "text": "Gli ho chiesto se fosse successo qualcosa.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M04",
          "sender": "nico",
          "text": "Ha detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M05",
          "sender": "nico",
          "text": "\"No.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M06",
          "sender": "nico",
          "text": "Poi ci ha pensato.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M07",
          "sender": "nico",
          "text": "\"Cioè sì. Ho avuto tempo di pensarci.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M08",
          "sender": "nico",
          "text": "\"Mi agitavo per niente.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M09",
          "sender": "nico",
          "text": "È una frase normalissima.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M10",
          "sender": "nico",
          "text": "Non mi piace per niente.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S01-C08"
    },
    "A2-S01-C08-A-R": {
      "id": "A2-S01-C08-A-R",
      "sceneId": "A2-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S01-C08-A-R-M01",
          "sender": "nico",
          "text": "Gli ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-A-R-M02",
          "sender": "nico",
          "text": "\"Non puoi sparire una notte e tornare dicendo che chiamare tua madre non contava.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-A-R-M03",
          "sender": "nico",
          "text": "Si è fermato.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-A-R-M04",
          "sender": "nico",
          "text": "Non arrabbiato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-A-R-M05",
          "sender": "nico",
          "text": "Più stanco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-A-R-M06",
          "sender": "nico",
          "text": "\"Non ho detto che non conta lei.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-A-R-M07",
          "sender": "nico",
          "text": "\"Ho detto che non era importante chiamare.\"",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-A-R-M08",
          "sender": "nico",
          "text": "Poi ha ripreso a lavorare.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-A-R-M09",
          "sender": "nico",
          "text": "Questa distinzione per lui è chiarissima.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S01-B05"
    },
    "A2-S01-C08-B-R": {
      "id": "A2-S01-C08-B-R",
      "sceneId": "A2-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S01-C08-B-R-M01",
          "sender": "nico",
          "text": "Gli ho chiesto solo:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-B-R-M02",
          "sender": "nico",
          "text": "\"Stai bene?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-B-R-M03",
          "sender": "nico",
          "text": "Mi ha guardato.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-B-R-M04",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-B-R-M05",
          "sender": "nico",
          "text": "Poi ha aggiunto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-B-R-M06",
          "sender": "nico",
          "text": "\"Davvero.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-B-R-M07",
          "sender": "nico",
          "text": "Sembrava quasi volesse rassicurare me.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S01-B05"
    },
    "A2-S01-C08-C-R": {
      "id": "A2-S01-C08-C-R",
      "sceneId": "A2-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S01-C08-C-R-M01",
          "sender": "nico",
          "text": "Non ho insistito.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-C-R-M02",
          "sender": "nico",
          "text": "Abbiamo lavorato un minuto senza parlare.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-C-R-M03",
          "sender": "nico",
          "text": "La cosa strana è che sembra meno nervoso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-C-R-M04",
          "sender": "nico",
          "text": "Ieri chiedeva tutto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-C-R-M05",
          "sender": "nico",
          "text": "Adesso sa già cosa fare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-C-R-M06",
          "sender": "nico",
          "text": "Non so se sia un miglioramento.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S01-B05"
    },
    "A2-S01-C08": {
      "id": "A2-S01-C08",
      "sceneId": "A2-S01",
      "type": "choice",
      "prompt": "Come consigli a Nico di reagire?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S01-C08-A",
          "text": "Digli che non sembra affatto una cosa normale.",
          "effects": [
            {
              "op": "set",
              "key": "A2S01_CHALLENGED_DAVIDE",
              "value": true
            },
            {
              "op": "add",
              "key": "DAVIDE_TRUST",
              "value": -1
            }
          ],
          "next": "A2-S01-C08-A-R"
        },
        {
          "id": "A2-S01-C08-B",
          "text": "Chiedigli soltanto se sta bene.",
          "effects": [
            {
              "op": "set",
              "key": "A2S01_ASKED_IF_OK",
              "value": true
            },
            {
              "op": "add",
              "key": "DAVIDE_TRUST",
              "value": 1
            }
          ],
          "next": "A2-S01-C08-B-R"
        },
        {
          "id": "A2-S01-C08-C",
          "text": "Non spingerlo. Osserva.",
          "effects": [
            {
              "op": "set",
              "key": "A2S01_DID_NOT_PRESS_DAVIDE",
              "value": true
            }
          ],
          "next": "A2-S01-C08-C-R"
        }
      ]
    },
    "A2-S01-B05": {
      "id": "A2-S01-B05",
      "sceneId": "A2-S01",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S01-B05-M01",
          "sender": "nico",
          "text": "Prima di andare gli ho chiesto se sarebbe venuto a pranzo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B05-M02",
          "sender": "nico",
          "text": "Ha detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B05-M03",
          "sender": "nico",
          "text": "\"Certo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B05-M04",
          "sender": "nico",
          "text": "Come se fosse la domanda strana della conversazione.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B05-M05",
          "sender": "nico",
          "text": "Quindi sì.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B05-M06",
          "sender": "nico",
          "text": "Davide è tornato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B05-M07",
          "sender": "nico",
          "text": "Non so ancora se questa sia una buona notizia.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A2-S01-ENDSTATE"
    },
    "A2-S01-ENDSTATE": {
      "id": "A2-S01-ENDSTATE",
      "sceneId": "A2-S01",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "DAVIDE_RETURNED_FROM_SILENCE",
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
        },
        {
          "op": "set",
          "key": "OLD_PHONE_HIDDEN",
          "value": true
        }
      ],
      "next": "A2-S02-START"
    },
    "A2-S02-START": {
      "id": "A2-S02-START",
      "sceneId": "A2-S02",
      "type": "state",
      "effects": [],
      "next": "A2-S02-B01"
    },
    "A2-S02-B01": {
      "id": "A2-S02-B01",
      "sceneId": "A2-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S02-B01-M01",
          "sender": "nico",
          "text": "Riunione.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B01-M02",
          "sender": "nico",
          "text": "Non quella serale.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B01-M03",
          "sender": "nico",
          "text": "Una adesso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B01-M04",
          "sender": "nico",
          "text": "Ci sono praticamente tutti.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B01-M05",
          "sender": "nico",
          "text": "Marta è qui.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B01-M06",
          "sender": "nico",
          "text": "Davide anche.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B01-M07",
          "sender": "nico",
          "text": "Elia davanti.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S02-B02"
    },
    "A2-S02-B02": {
      "id": "A2-S02-B02",
      "sceneId": "A2-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S02-B02-M01",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B02-M02",
          "sender": "nico",
          "text": "Ha appena detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B02-M03",
          "sender": "nico",
          "text": "\"Il Giorno Bianco arriverà tra dodici giorni.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B02-M04",
          "sender": "nico",
          "text": "Dodici.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B02-M05",
          "sender": "nico",
          "text": "Giorni.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B02-M06",
          "sender": "nico",
          "text": "Quindi apparentemente non è una festa annuale con una data che tutti conoscono.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S02-B03"
    },
    "A2-S02-B03": {
      "id": "A2-S02-B03",
      "sceneId": "A2-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S02-B03-M01",
          "sender": "nico",
          "text": "La cosa strana è la reazione.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B03-M02",
          "sender": "nico",
          "text": "Una donna sta piangendo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B03-M03",
          "sender": "nico",
          "text": "Ma sorride.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B03-M04",
          "sender": "nico",
          "text": "Due si sono abbracciati.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B03-M05",
          "sender": "nico",
          "text": "Uno ha chiuso gli occhi come se gli avessero dato una notizia che aspettava da anni.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B03-M06",
          "sender": "nico",
          "text": "Nessuno ha chiesto:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B03-M07",
          "sender": "nico",
          "text": "\"Scusa, cosa succede tra dodici giorni?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B03-M08",
          "sender": "nico",
          "text": "Solo io, mentalmente.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S02-B04"
    },
    "A2-S02-B04": {
      "id": "A2-S02-B04",
      "sceneId": "A2-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S02-B04-M01",
          "sender": "nico",
          "text": "Elia la chiama Preparazione.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B04-M02",
          "sender": "nico",
          "text": "Da oggi cambiano alcune cose.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B04-M03",
          "sender": "nico",
          "text": "Le attività normali si riducono.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B04-M04",
          "sender": "nico",
          "text": "Riunioni tutte le sere.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B04-M05",
          "sender": "nico",
          "text": "Niente contatti con l'esterno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B04-M06",
          "sender": "nico",
          "text": "E fino al Giorno Bianco si resta nella proprietà.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B04-M07",
          "sender": "nico",
          "text": "Quella l'ho sentita bene.",
          "delayMs": 4000,
          "delivery": "live"
        }
      ],
      "next": "A2-S02-B05"
    },
    "A2-S02-B05": {
      "id": "A2-S02-B05",
      "sceneId": "A2-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S02-B05-M01",
          "sender": "nico",
          "text": "Non ha detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B05-M02",
          "sender": "nico",
          "text": "\"Non potete andarvene.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B05-M03",
          "sender": "nico",
          "text": "Ha detto che non bisogna interrompere la Preparazione.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B05-M04",
          "sender": "nico",
          "text": "Che è una frase completamente diversa.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B05-M05",
          "sender": "nico",
          "text": "A parte la parte in cui produce praticamente lo stesso risultato.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A2-S02-B06"
    },
    "A2-S02-B06": {
      "id": "A2-S02-B06",
      "sceneId": "A2-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S02-B06-M01",
          "sender": "nico",
          "text": "Ai nuovi ha detto di non preoccuparsi se alcune regole sembreranno più rigide.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B06-M02",
          "sender": "nico",
          "text": "\"Non dovete capire tutto oggi.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B06-M03",
          "sender": "nico",
          "text": "\"Per adesso potete fidarvi del processo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B06-M04",
          "sender": "nico",
          "text": "Io ieri ero disposto a concedere parecchio al concetto di ritiro spirituale.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B06-M05",
          "sender": "nico",
          "text": "Oggi la parola \"processo\" sta facendo molto lavoro.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S02-B07"
    },
    "A2-S02-B07": {
      "id": "A2-S02-B07",
      "sceneId": "A2-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S02-B07-M01",
          "sender": "nico",
          "text": "Marta non sembra sorpresa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B07-M02",
          "sender": "nico",
          "text": "Questo non mi piace.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B07-M03",
          "sender": "nico",
          "text": "Davide invece è seduto tranquillo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B07-M04",
          "sender": "nico",
          "text": "Due giorni fa avrebbe già chiesto se poteva telefonare a qualcuno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B07-M05",
          "sender": "nico",
          "text": "Adesso niente.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S02-B08"
    },
    "A2-S02-B08": {
      "id": "A2-S02-B08",
      "sceneId": "A2-S02",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S02-B08-M01",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B08-M02",
          "sender": "nico",
          "text": "Quindi:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B08-M03",
          "sender": "nico",
          "text": "tra dodici giorni Giorno Bianco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B08-M04",
          "sender": "nico",
          "text": "Da oggi Preparazione.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B08-M05",
          "sender": "nico",
          "text": "Niente contatti fuori.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B08-M06",
          "sender": "nico",
          "text": "Niente uscite.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B08-M07",
          "sender": "nico",
          "text": "Questa è ufficialmente la prima volta in cui \"sono un po' strani\" mi sembra una definizione generosa.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S02-ENDSTATE"
    },
    "A2-S02-ENDSTATE": {
      "id": "A2-S02-ENDSTATE",
      "sceneId": "A2-S02",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "PREPARATION_ACTIVE",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_WHITE_DAY_SCHEDULED_IN_12_DAYS",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_PREPARATION_RULES",
          "value": true
        }
      ],
      "next": "A2-S03-START"
    },
    "A2-S03-START": {
      "id": "A2-S03-START",
      "sceneId": "A2-S03",
      "type": "state",
      "effects": [],
      "next": "A2-S03-B01"
    },
    "A2-S03-B01": {
      "id": "A2-S03-B01",
      "sceneId": "A2-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S03-B01-M01",
          "sender": "nico",
          "text": "Ho fatto un giro.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B01-M02",
          "sender": "nico",
          "text": "Il cancello è chiuso.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B01-M03",
          "sender": "nico",
          "text": "Non \"accostato\".",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B01-M04",
          "sender": "nico",
          "text": "Chiuso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B01-M05",
          "sender": "nico",
          "text": "C'è una catena.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B01-M06",
          "sender": "nico",
          "text": "Una normalissima catena da ferramenta.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B01-M07",
          "sender": "nico",
          "text": "Quasi deludente.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B01-M08",
          "sender": "nico",
          "text": "Pensavo che il momento \"forse non possiamo uscire\" avrebbe avuto più scenografia.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S03-B02",
      "effects": [
        {
          "op": "set",
          "key": "GATE_CHAINED",
          "value": true
        }
      ]
    },
    "A2-S03-B02": {
      "id": "A2-S03-B02",
      "sceneId": "A2-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S03-B02-M01",
          "sender": "nico",
          "text": "È arrivato Tommaso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B02-M02",
          "sender": "nico",
          "text": "Gli ho chiesto perché fosse chiuso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B02-M03",
          "sender": "nico",
          "text": "Dice che durante la Preparazione evitano che entri gente da fuori.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B02-M04",
          "sender": "nico",
          "text": "\"Curiosi. Consegne non previste. Persone che interrompono.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B02-M05",
          "sender": "nico",
          "text": "Detto così:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B02-M06",
          "sender": "nico",
          "text": "ancora una volta,",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B02-M07",
          "sender": "nico",
          "text": "quasi sensato.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S03-B03"
    },
    "A2-S03-B03": {
      "id": "A2-S03-B03",
      "sceneId": "A2-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S03-B03-M01",
          "sender": "nico",
          "text": "Gli ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M02",
          "sender": "nico",
          "text": "\"Ma noi possiamo uscire?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M03",
          "sender": "nico",
          "text": "Lui:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M04",
          "sender": "nico",
          "text": "\"Perché dovresti uscire?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M05",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M06",
          "sender": "nico",
          "text": "\"Non devo. Chiedevo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M07",
          "sender": "nico",
          "text": "Ha sorriso.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M08",
          "sender": "nico",
          "text": "\"Allora non c'è problema.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M09",
          "sender": "nico",
          "text": "Non ha risposto.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M10",
          "sender": "nico",
          "text": "Proprio per niente.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A2-S03-C09"
    },
    "A2-S03-C09-A-R": {
      "id": "A2-S03-C09-A-R",
      "sceneId": "A2-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S03-C09-A-R-M01",
          "sender": "nico",
          "text": "Gli ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M02",
          "sender": "nico",
          "text": "\"Non hai risposto.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M03",
          "sender": "nico",
          "text": "Mi ha guardato per un secondo.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M04",
          "sender": "nico",
          "text": "Poi:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M05",
          "sender": "nico",
          "text": "\"È iniziata la Preparazione.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M06",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M07",
          "sender": "nico",
          "text": "\"Questa non è una risposta neanche quella.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M08",
          "sender": "nico",
          "text": "\"C'è qualcosa che ti serve fuori?\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M09",
          "sender": "nico",
          "text": "Eccoci di nuovo.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M10",
          "sender": "nico",
          "text": "Ogni domanda torna sempre a me.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M11",
          "sender": "nico",
          "text": "Ho detto di no.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A2-S03-B04"
    },
    "A2-S03-C09-B-R": {
      "id": "A2-S03-C09-B-R",
      "sceneId": "A2-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S03-C09-B-R-M01",
          "sender": "nico",
          "text": "Ho lasciato perdere.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-B-R-M02",
          "sender": "nico",
          "text": "Per ora.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-B-R-M03",
          "sender": "nico",
          "text": "Continuare a chiedergli la stessa cosa e ricevere una domanda diversa non mi sembra un grande investimento.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A2-S03-B04"
    },
    "A2-S03-C09-C-R": {
      "id": "A2-S03-C09-C-R",
      "sceneId": "A2-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S03-C09-C-R-M01",
          "sender": "nico",
          "text": "Ho detto che volevo solo capire come funzionava.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-C-R-M02",
          "sender": "nico",
          "text": "Lui:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-C-R-M03",
          "sender": "nico",
          "text": "\"Certo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-C-R-M04",
          "sender": "nico",
          "text": "\"Cerchiamo solo di non avere interruzioni.\"",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-C-R-M05",
          "sender": "nico",
          "text": "Gentilissimo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-C-R-M06",
          "sender": "nico",
          "text": "Il cancello resta comunque chiuso.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S03-B04"
    },
    "A2-S03-C09": {
      "id": "A2-S03-C09",
      "sceneId": "A2-S03",
      "type": "choice",
      "prompt": "Tommaso ha evitato la domanda. Come reagisce Nico?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S03-C09-A",
          "text": "Insisti: \"Non hai risposto.\"",
          "effects": [
            {
              "op": "set",
              "key": "A2S03_PRESSED_TOMMASO",
              "value": true
            },
            {
              "op": "add",
              "key": "TOMMASO_SUSPICION",
              "value": 5
            }
          ],
          "next": "A2-S03-C09-A-R"
        },
        {
          "id": "A2-S03-C09-B",
          "text": "Lascia perdere per ora.",
          "effects": [
            {
              "op": "set",
              "key": "A2S03_DID_NOT_PRESS_GATE",
              "value": true
            }
          ],
          "next": "A2-S03-C09-B-R"
        },
        {
          "id": "A2-S03-C09-C",
          "text": "Sdrammatizza e fai finta che fosse curiosità.",
          "effects": [
            {
              "op": "set",
              "key": "A2S03_PLAYED_OFF_GATE",
              "value": true
            }
          ],
          "next": "A2-S03-C09-C-R"
        }
      ]
    },
    "A2-S03-B04": {
      "id": "A2-S03-B04",
      "sceneId": "A2-S03",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S03-B04-M01",
          "sender": "nico",
          "text": "Da qui vedo la strada.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B04-M02",
          "sender": "nico",
          "text": "La stessa che scende verso il ponte.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B04-M03",
          "sender": "nico",
          "text": "La stessa che ieri era solo una strada di merda in mezzo al bosco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B04-M04",
          "sender": "nico",
          "text": "Adesso c'è una catena tra me e quella strada.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B04-M05",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B04-M06",
          "sender": "nico",
          "text": "Questa cosa comincia a essere meno teorica.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S03-ENDSTATE"
    },
    "A2-S03-ENDSTATE": {
      "id": "A2-S03-ENDSTATE",
      "sceneId": "A2-S03",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "GATE_CHAINED",
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
        },
        {
          "op": "set",
          "key": "OLD_PHONE_HIDDEN",
          "value": true
        }
      ],
      "next": "A2-S04-START"
    },
    "A2-S04-START": {
      "id": "A2-S04-START",
      "sceneId": "A2-S04",
      "type": "state",
      "effects": [],
      "next": "A2-S04-B01"
    },
    "A2-S04-B01": {
      "id": "A2-S04-B01",
      "sceneId": "A2-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S04-B01-M01",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B01-M02",
          "sender": "nico",
          "text": "Ho deciso che voglio fare una prova.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B01-M03",
          "sender": "nico",
          "text": "Il cancello può avere una spiegazione.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B01-M04",
          "sender": "nico",
          "text": "La Preparazione può avere una spiegazione.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B01-M05",
          "sender": "nico",
          "text": "Perfino Davide, volendo, può aver avuto una conversazione molto intensa e basta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B01-M06",
          "sender": "nico",
          "text": "I documenti però sono miei.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B01-M07",
          "sender": "nico",
          "text": "Quindi chiedo quelli.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S04-C10"
    },
    "A2-S04-C10-A-R": {
      "id": "A2-S04-C10-A-R",
      "sceneId": "A2-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S04-C10-A-R-M01",
          "sender": "nico",
          "text": "Sono andato diretto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-A-R-M02",
          "sender": "nico",
          "text": "\"Mi ridai i documenti?\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-A-R-M03",
          "sender": "nico",
          "text": "Tommaso:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-A-R-M04",
          "sender": "nico",
          "text": "\"Ti servono?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-A-R-M05",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-A-R-M06",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-A-R-M07",
          "sender": "nico",
          "text": "Tecnicamente non avevo preparato la seconda parte.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A2-S04-B02"
    },
    "A2-S04-C10-B-R": {
      "id": "A2-S04-C10-B-R",
      "sceneId": "A2-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S04-C10-B-R-M01",
          "sender": "nico",
          "text": "Gli ho detto che volevo controllare una cosa sulla carta d'identità.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-B-R-M02",
          "sender": "nico",
          "text": "Non ho specificato quale.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-B-R-M03",
          "sender": "nico",
          "text": "Speravo che l'autorità morale della burocrazia facesse il resto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-B-R-M04",
          "sender": "nico",
          "text": "Tommaso ha chiesto:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-B-R-M05",
          "sender": "nico",
          "text": "\"È urgente?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-B-R-M06",
          "sender": "nico",
          "text": "Ho detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-B-R-M07",
          "sender": "nico",
          "text": "\"Non particolarmente.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-B-R-M08",
          "sender": "nico",
          "text": "Errore tattico.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A2-S04-B02"
    },
    "A2-S04-C10-C-R": {
      "id": "A2-S04-C10-C-R",
      "sceneId": "A2-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S04-C10-C-R-M01",
          "sender": "nico",
          "text": "Ho chiesto anche il telefono principale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-C-R-M02",
          "sender": "nico",
          "text": "Tommaso ha fatto quella pausa minuscola che fanno le persone quando aggiornano la categoria mentale in cui ti hanno messo.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-C-R-M03",
          "sender": "nico",
          "text": "Poi:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-C-R-M04",
          "sender": "nico",
          "text": "\"Per cosa ti serve?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-C-R-M05",
          "sender": "nico",
          "text": "Ho detto che volevo controllare una cosa.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-C-R-M06",
          "sender": "nico",
          "text": "Risposta molto dettagliata.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S04-B02"
    },
    "A2-S04-C10": {
      "id": "A2-S04-C10",
      "sceneId": "A2-S04",
      "type": "choice",
      "prompt": "Come suggerisci a Nico di chiederli?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S04-C10-A",
          "text": "Diretto: \"Mi ridai i documenti?\"",
          "effects": [
            {
              "op": "set",
              "key": "A2S04_DIRECT_REQUEST",
              "value": true
            },
            {
              "op": "add",
              "key": "TOMMASO_SUSPICION",
              "value": 2
            }
          ],
          "next": "A2-S04-C10-A-R"
        },
        {
          "id": "A2-S04-C10-B",
          "text": "Usa una scusa innocua.",
          "effects": [
            {
              "op": "set",
              "key": "A2S04_USED_EXCUSE",
              "value": true
            }
          ],
          "next": "A2-S04-C10-B-R"
        },
        {
          "id": "A2-S04-C10-C",
          "text": "Chiedi documenti e telefono principale insieme.",
          "effects": [
            {
              "op": "set",
              "key": "A2S04_REQUESTED_PHONE_TOO",
              "value": true
            },
            {
              "op": "add",
              "key": "TOMMASO_SUSPICION",
              "value": 4
            }
          ],
          "next": "A2-S04-C10-C-R"
        }
      ]
    },
    "A2-S04-B02": {
      "id": "A2-S04-B02",
      "sceneId": "A2-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S04-B02-M01",
          "sender": "nico",
          "text": "Comunque la risposta è stata:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M02",
          "sender": "nico",
          "text": "\"Te li ridiamo quando riparti.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M03",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M04",
          "sender": "nico",
          "text": "\"Vorrei averli adesso.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M05",
          "sender": "nico",
          "text": "\"Sono al sicuro.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M06",
          "sender": "nico",
          "text": "\"Lo so.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M07",
          "sender": "nico",
          "text": "\"Ma sono miei.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M08",
          "sender": "nico",
          "text": "\"Certo.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M09",
          "sender": "nico",
          "text": "\"E infatti te li restituiremo.\"",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S04-B03"
    },
    "A2-S04-B03": {
      "id": "A2-S04-B03",
      "sceneId": "A2-S04",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S04-B03-M01",
          "sender": "nico",
          "text": "Poi ha iniziato a sistemare delle carte.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B03-M02",
          "sender": "nico",
          "text": "Conversazione finita.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B03-M03",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B03-M04",
          "sender": "nico",
          "text": "Questa mi è piaciuta poco.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S04-ENDSTATE"
    },
    "A2-S04-ENDSTATE": {
      "id": "A2-S04-ENDSTATE",
      "sceneId": "A2-S04",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "DOCS_SURRENDERED",
          "value": true
        },
        {
          "op": "set",
          "key": "DEVICES_SURRENDERED",
          "value": true
        },
        {
          "op": "set",
          "key": "OLD_PHONE_HIDDEN",
          "value": true
        },
        {
          "op": "set",
          "key": "DOCUMENTS_RETURN_REFUSED",
          "value": true
        }
      ],
      "next": "A2-S05-START"
    },
    "A2-S05-START": {
      "id": "A2-S05-START",
      "sceneId": "A2-S05",
      "type": "state",
      "effects": [],
      "next": "A2-S05-B01"
    },
    "A2-S05-B01": {
      "id": "A2-S05-B01",
      "sceneId": "A2-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S05-B01-M01",
          "sender": "nico",
          "text": "Marta mi ha appena fermato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B01-M02",
          "sender": "nico",
          "text": "Non in senso romantico.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B01-M03",
          "sender": "nico",
          "text": "Specifico perché ormai dobbiamo essere precisi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B01-M04",
          "sender": "nico",
          "text": "Mi ha portato di lato e ha detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B01-M05",
          "sender": "nico",
          "text": "\"Devi smetterla.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B01-M06",
          "sender": "nico",
          "text": "Ottimo inizio.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S05-B02"
    },
    "A2-S05-B02": {
      "id": "A2-S05-B02",
      "sceneId": "A2-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S05-B02-M01",
          "sender": "nico",
          "text": "Le ho chiesto di cosa parlasse.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B02-M02",
          "sender": "nico",
          "text": "\"Troppe domande.\"",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B02-M03",
          "sender": "nico",
          "text": "Ho detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B02-M04",
          "sender": "nico",
          "text": "\"Scusa se mi incuriosisce il fatto che abbiano preso i miei documenti e non vogliano ridarmeli.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B02-M05",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B02-M06",
          "sender": "nico",
          "text": "\"Nico.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B02-M07",
          "sender": "nico",
          "text": "Quel tono.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B02-M08",
          "sender": "nico",
          "text": "Quello dove il mio nome significa già una frase intera.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S05-B03"
    },
    "A2-S05-B03": {
      "id": "A2-S05-B03",
      "sceneId": "A2-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S05-B03-M01",
          "sender": "nico",
          "text": "Mi sono incazzato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M02",
          "sender": "nico",
          "text": "Le ho detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M03",
          "sender": "nico",
          "text": "\"Il cancello è chiuso.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M04",
          "sender": "nico",
          "text": "\"Davide sparisce e torna diverso.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M05",
          "sender": "nico",
          "text": "\"Di notte arrivano taniche e casse.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M06",
          "sender": "nico",
          "text": "\"Adesso i documenti me li ridanno quando decidono loro.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M07",
          "sender": "nico",
          "text": "Lei mi ha interrotto.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M08",
          "sender": "nico",
          "text": "\"Lo so.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M09",
          "sender": "nico",
          "text": "...",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M10",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S05-C11"
    },
    "A2-S05-C11-A-R": {
      "id": "A2-S05-C11-A-R",
      "sceneId": "A2-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S05-C11-A-R-M01",
          "sender": "nico",
          "text": "Le ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-A-R-M02",
          "sender": "nico",
          "text": "\"Allora dimmi cosa sai.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-A-R-M03",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-A-R-M04",
          "sender": "nico",
          "text": "\"Non qui.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-A-R-M05",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-A-R-M06",
          "sender": "nico",
          "text": "\"Questa risposta non aiuta.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-A-R-M07",
          "sender": "nico",
          "text": "\"Lo so.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-A-R-M08",
          "sender": "nico",
          "text": "Adesso lo fa apposta.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S05-B04"
    },
    "A2-S05-C11-B-R": {
      "id": "A2-S05-C11-B-R",
      "sceneId": "A2-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S05-C11-B-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-B-R-M02",
          "sender": "nico",
          "text": "\"Quindi anche tu pensi che ci sia qualcosa che non va?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-B-R-M03",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-B-R-M04",
          "sender": "nico",
          "text": "\"Non ho detto questo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-B-R-M05",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-B-R-M06",
          "sender": "nico",
          "text": "Certo.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S05-B04"
    },
    "A2-S05-C11-C-R": {
      "id": "A2-S05-C11-C-R",
      "sceneId": "A2-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S05-C11-C-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-C-R-M02",
          "sender": "nico",
          "text": "\"Perché vuoi che smetta?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-C-R-M03",
          "sender": "nico",
          "text": "Ha guardato verso l'edificio principale.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-C-R-M04",
          "sender": "nico",
          "text": "\"Perché ti si nota.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-C-R-M05",
          "sender": "nico",
          "text": "Quella non era la risposta che speravo.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S05-B04"
    },
    "A2-S05-C11": {
      "id": "A2-S05-C11",
      "sceneId": "A2-S05",
      "type": "choice",
      "prompt": "Marta ha appena ammesso di sapere che c'è qualcosa di anomalo. Come reagisce Nico?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S05-C11-A",
          "text": "\"Allora dimmi cosa sai.\"",
          "effects": [
            {
              "op": "set",
              "key": "A2S05_DEMANDED_ANSWERS",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": -1
            }
          ],
          "next": "A2-S05-C11-A-R"
        },
        {
          "id": "A2-S05-C11-B",
          "text": "\"Quindi anche tu pensi che ci sia qualcosa che non va?\"",
          "effects": [
            {
              "op": "set",
              "key": "A2S05_ASKED_SHARED_SUSPICION",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 1
            }
          ],
          "next": "A2-S05-C11-B-R"
        },
        {
          "id": "A2-S05-C11-C",
          "text": "Non accusarla. Chiedile perché vuole che smetta.",
          "effects": [
            {
              "op": "set",
              "key": "A2S05_ASKED_WHY_STOP",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 1
            }
          ],
          "next": "A2-S05-C11-C-R"
        }
      ]
    },
    "A2-S05-B04": {
      "id": "A2-S05-B04",
      "sceneId": "A2-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S05-B04-M01",
          "sender": "nico",
          "text": "\"Se vuoi continuare a fare domande, almeno smetti di farle alle persone sbagliate.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B04-M02",
          "sender": "nico",
          "text": "Ho chiesto:",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B04-M03",
          "sender": "nico",
          "text": "\"Quali sarebbero quelle giuste?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B04-M04",
          "sender": "nico",
          "text": "Lei mi ha guardato.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B04-M05",
          "sender": "nico",
          "text": "Poi se n'è andata.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S05-B05"
    },
    "A2-S05-B05": {
      "id": "A2-S05-B05",
      "sceneId": "A2-S05",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S05-B05-M01",
          "sender": "nico",
          "text": "Ha assolutamente detto che c'è qualcosa che non va.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B05-M02",
          "sender": "nico",
          "text": "Non con quelle parole.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B05-M03",
          "sender": "nico",
          "text": "Ma questa volta non sto inventando.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B05-M04",
          "sender": "nico",
          "text": "Credo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B05-M05",
          "sender": "nico",
          "text": "No.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B05-M06",
          "sender": "nico",
          "text": "Questa volta ho ragione.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S05-ENDSTATE"
    },
    "A2-S05-ENDSTATE": {
      "id": "A2-S05-ENDSTATE",
      "sceneId": "A2-S05",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "MARTA_SHARED_SUSPICION",
          "value": true
        }
      ],
      "next": "A2-S06-START"
    },
    "A2-S06-START": {
      "id": "A2-S06-START",
      "sceneId": "A2-S06",
      "type": "state",
      "effects": [],
      "next": "A2-S06-B01"
    },
    "A2-S06-B01": {
      "id": "A2-S06-B01",
      "sceneId": "A2-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S06-B01-M01",
          "sender": "nico",
          "text": "Mi hanno messo a spostare roba vicino al deposito.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B01-M02",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B01-M03",
          "sender": "nico",
          "text": "Quel deposito.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B01-M04",
          "sender": "nico",
          "text": "La porta è aperta.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B01-M05",
          "sender": "nico",
          "text": "Non spalancata.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B01-M06",
          "sender": "nico",
          "text": "Abbastanza.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S06-B02"
    },
    "A2-S06-B02": {
      "id": "A2-S06-B02",
      "sceneId": "A2-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S06-B02-M01",
          "sender": "nico",
          "text": "Ho visto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M02",
          "sender": "nico",
          "text": "scatole di medicinali",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M03",
          "sender": "nico",
          "text": "garze",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M04",
          "sender": "nico",
          "text": "flaconi",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M05",
          "sender": "nico",
          "text": "guanti",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M06",
          "sender": "nico",
          "text": "taniche",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M07",
          "sender": "nico",
          "text": "confezioni d'acqua",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M08",
          "sender": "nico",
          "text": "Tanta acqua.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M09",
          "sender": "nico",
          "text": "E altra roba sanitaria che non so identificare.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M10",
          "sender": "nico",
          "text": "Non c'è niente che da solo significhi qualcosa.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M11",
          "sender": "nico",
          "text": "È l'insieme che comincia a essere interessante.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A2-S06-B03"
    },
    "A2-S06-B03": {
      "id": "A2-S06-B03",
      "sceneId": "A2-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S06-B03-M01",
          "sender": "nico",
          "text": "Non posso stare qui a fissare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B03-M02",
          "sender": "nico",
          "text": "C'è gente che entra e esce.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B03-M03",
          "sender": "nico",
          "text": "Quindi non so quantità precise.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B03-M04",
          "sender": "nico",
          "text": "Non so cosa ci sia nelle taniche.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B03-M05",
          "sender": "nico",
          "text": "Non so per cosa servano i medicinali.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B03-M06",
          "sender": "nico",
          "text": "So solo che non è la scorta di cerotti di un agriturismo.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S06-B04",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_DEPOT_CONTENTS",
          "value": true
        }
      ]
    },
    "A2-S06-B04": {
      "id": "A2-S06-B04",
      "sceneId": "A2-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S06-B04-M01",
          "sender": "nico",
          "text": "Possibilità uno:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B04-M02",
          "sender": "nico",
          "text": "sono persone molto organizzate.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B04-M03",
          "sender": "nico",
          "text": "Possibilità due:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B04-M04",
          "sender": "nico",
          "text": "si preparano a qualche emergenza.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B04-M05",
          "sender": "nico",
          "text": "Possibilità tre:",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B04-M06",
          "sender": "nico",
          "text": "non mi piace la possibilità tre perché non so ancora quale sia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B04-M07",
          "sender": "nico",
          "text": "Potrebbero semplicemente essere prepper.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B04-M08",
          "sender": "nico",
          "text": "Che non sarebbe esattamente rassicurante.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S06-B05"
    },
    "A2-S06-B05": {
      "id": "A2-S06-B05",
      "sceneId": "A2-S06",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S06-B05-M01",
          "sender": "nico",
          "text": "E adesso c'è anche il piccolo dettaglio che Marta mi ha praticamente detto di smettere di chiedere in giro.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B05-M02",
          "sender": "nico",
          "text": "Quindi non posso neanche fare:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B05-M03",
          "sender": "nico",
          "text": "\"Scusate, per curiosità, a cosa servono trenta scatole di materiale medico?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B05-M04",
          "sender": "nico",
          "text": "Sto imparando la discrezione.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B05-M05",
          "sender": "nico",
          "text": "Molto tardi.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S06-ENDSTATE"
    },
    "A2-S06-ENDSTATE": {
      "id": "A2-S06-ENDSTATE",
      "sceneId": "A2-S06",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_DEPOT_CONTENTS",
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
        },
        {
          "op": "set",
          "key": "OLD_PHONE_HIDDEN",
          "value": true
        }
      ],
      "next": "A2-S07-START"
    },
    "A2-S07-START": {
      "id": "A2-S07-START",
      "sceneId": "A2-S07",
      "type": "state",
      "effects": [],
      "next": "A2-S07-B01"
    },
    "A2-S07-B01": {
      "id": "A2-S07-B01",
      "sceneId": "A2-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S07-B01-M01",
          "sender": "nico",
          "text": "Sono con Lea.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B01-M02",
          "sender": "nico",
          "text": "Stiamo preparando roba per domani.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B01-M03",
          "sender": "nico",
          "text": "Tovaglie.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B01-M04",
          "sender": "nico",
          "text": "Ceste.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B01-M05",
          "sender": "nico",
          "text": "Non so.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B01-M06",
          "sender": "nico",
          "text": "Cose da comunità che funzionano senza Excel.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B01-M07",
          "sender": "nico",
          "text": "Lei è ancora una delle persone più normali qui.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B01-M08",
          "sender": "nico",
          "text": "Il che ormai è una categoria sospetta.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A2-S07-B02"
    },
    "A2-S07-B02": {
      "id": "A2-S07-B02",
      "sceneId": "A2-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S07-B02-M01",
          "sender": "nico",
          "text": "Le ho chiesto cosa facesse prima di venire qui.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B02-M02",
          "sender": "nico",
          "text": "Aveva un lavoro.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B02-M03",
          "sender": "nico",
          "text": "Un compagno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B02-M04",
          "sender": "nico",
          "text": "Casa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B02-M05",
          "sender": "nico",
          "text": "Famiglia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B02-M06",
          "sender": "nico",
          "text": "Una vita.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B02-M07",
          "sender": "nico",
          "text": "Normale normale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B02-M08",
          "sender": "nico",
          "text": "Quindi ho chiesto perché avesse lasciato tutto.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S07-B03"
    },
    "A2-S07-B03": {
      "id": "A2-S07-B03",
      "sceneId": "A2-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S07-B03-M01",
          "sender": "nico",
          "text": "\"Perché non ero felice.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M02",
          "sender": "nico",
          "text": "Fine.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M03",
          "sender": "nico",
          "text": "Nessun discorso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M04",
          "sender": "nico",
          "text": "Nessuna luce mistica negli occhi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M05",
          "sender": "nico",
          "text": "Ho chiesto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M06",
          "sender": "nico",
          "text": "\"E adesso?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M07",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M08",
          "sender": "nico",
          "text": "\"Adesso almeno so perché mi sveglio la mattina.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M09",
          "sender": "nico",
          "text": "Ecco.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M10",
          "sender": "nico",
          "text": "Questa è più difficile da prendere per il culo.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S07-B04"
    },
    "A2-S07-B04": {
      "id": "A2-S07-B04",
      "sceneId": "A2-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S07-B04-M01",
          "sender": "nico",
          "text": "Ha detto anche una cosa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B04-M02",
          "sender": "nico",
          "text": "\"Fuori ero libera di fare qualsiasi cosa.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B04-M03",
          "sender": "nico",
          "text": "\"Non sapevo cosa farne.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B04-M04",
          "sender": "nico",
          "text": "Capisco cosa intende.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B04-M05",
          "sender": "nico",
          "text": "Che mi dà fastidio.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S07-C12"
    },
    "A2-S07-C12-A-R": {
      "id": "A2-S07-C12-A-R",
      "sceneId": "A2-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S07-C12-A-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto se non le manca mai.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-A-R-M02",
          "sender": "nico",
          "text": "Ha pensato un po'.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-A-R-M03",
          "sender": "nico",
          "text": "\"Alcune persone.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-A-R-M04",
          "sender": "nico",
          "text": "\"Non la vita.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-A-R-M05",
          "sender": "nico",
          "text": "Non sembrava una risposta preparata.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S07-B05"
    },
    "A2-S07-C12-B-R": {
      "id": "A2-S07-C12-B-R",
      "sceneId": "A2-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S07-C12-B-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-B-R-M02",
          "sender": "nico",
          "text": "\"Qui ti senti libera?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-B-R-M03",
          "sender": "nico",
          "text": "Ha sorriso.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-B-R-M04",
          "sender": "nico",
          "text": "\"Più di prima.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-B-R-M05",
          "sender": "nico",
          "text": "Ho guardato verso il cancello.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-B-R-M06",
          "sender": "nico",
          "text": "Lei ha seguito lo sguardo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-B-R-M07",
          "sender": "nico",
          "text": "Non ha aggiunto niente.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S07-B05"
    },
    "A2-S07-C12-C-R": {
      "id": "A2-S07-C12-C-R",
      "sceneId": "A2-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S07-C12-C-R-M01",
          "sender": "nico",
          "text": "Non le ho fatto altre domande.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-C-R-M02",
          "sender": "nico",
          "text": "Ha continuato da sola.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-C-R-M03",
          "sender": "nico",
          "text": "Ha detto che fuori passava il tempo a scegliere tra cose che non le interessavano davvero.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-C-R-M04",
          "sender": "nico",
          "text": "Qui almeno sente di servire a qualcosa.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-C-R-M05",
          "sender": "nico",
          "text": "Detta da lei non suona triste.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-C-R-M06",
          "sender": "nico",
          "text": "È questo il problema.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S07-B05"
    },
    "A2-S07-C12": {
      "id": "A2-S07-C12",
      "sceneId": "A2-S07",
      "type": "choice",
      "prompt": "Come consigli a Nico di continuare?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S07-C12-A",
          "text": "Chiedile se non le manca mai la vita di prima.",
          "effects": [
            {
              "op": "set",
              "key": "A2S07_ASKED_ABOUT_OLD_LIFE",
              "value": true
            },
            {
              "op": "add",
              "key": "LEA_TRUST",
              "value": 1
            }
          ],
          "next": "A2-S07-C12-A-R"
        },
        {
          "id": "A2-S07-C12-B",
          "text": "Chiedile se qui si sente davvero libera.",
          "effects": [
            {
              "op": "set",
              "key": "A2S07_ASKED_ABOUT_FREEDOM",
              "value": true
            }
          ],
          "next": "A2-S07-C12-B-R"
        },
        {
          "id": "A2-S07-C12-C",
          "text": "Non trasformarla in un interrogatorio. Ascolta.",
          "effects": [
            {
              "op": "set",
              "key": "A2S07_LISTENED_TO_LEA",
              "value": true
            },
            {
              "op": "add",
              "key": "LEA_TRUST",
              "value": 1
            }
          ],
          "next": "A2-S07-C12-C-R"
        }
      ]
    },
    "A2-S07-B05": {
      "id": "A2-S07-B05",
      "sceneId": "A2-S07",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S07-B05-M01",
          "sender": "nico",
          "text": "Continuo a voler trovare il momento in cui tutta questa gente diventa palesemente stupida.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B05-M02",
          "sender": "nico",
          "text": "Sarebbe più comodo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B05-M03",
          "sender": "nico",
          "text": "Lea non lo è.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B05-M04",
          "sender": "nico",
          "text": "Tommaso non lo è.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B05-M05",
          "sender": "nico",
          "text": "Elia sicuramente non lo è.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B05-M06",
          "sender": "nico",
          "text": "Quindi magari il problema non è che non capiscono.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B05-M07",
          "sender": "nico",
          "text": "Magari capiscono qualcosa che io ancora non capisco.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B05-M08",
          "sender": "nico",
          "text": "Questa frase non mi piace.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S07-ENDSTATE"
    },
    "A2-S07-ENDSTATE": {
      "id": "A2-S07-ENDSTATE",
      "sceneId": "A2-S07",
      "type": "state",
      "effects": [],
      "next": "A2-S08-START"
    },
    "A2-S08-START": {
      "id": "A2-S08-START",
      "sceneId": "A2-S08",
      "type": "state",
      "effects": [],
      "next": "A2-S08-B01"
    },
    "A2-S08-B01": {
      "id": "A2-S08-B01",
      "sceneId": "A2-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S08-B01-M01",
          "sender": "nico",
          "text": "Marta è sveglia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B01-M02",
          "sender": "nico",
          "text": "È fuori.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B01-M03",
          "sender": "nico",
          "text": "Sotto la tettoia tra i dormitori.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B01-M04",
          "sender": "nico",
          "text": "Piove ancora.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B01-M05",
          "sender": "nico",
          "text": "Piano adesso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B01-M06",
          "sender": "nico",
          "text": "Le ho chiesto se va tutto bene.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B01-M07",
          "sender": "nico",
          "text": "Ha detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B01-M08",
          "sender": "nico",
          "text": "\"Non dormo.\"",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S08-B02"
    },
    "A2-S08-B02": {
      "id": "A2-S08-B02",
      "sceneId": "A2-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S08-B02-M01",
          "sender": "nico",
          "text": "Siamo qui da qualche minuto.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M02",
          "sender": "nico",
          "text": "Non sto dicendo niente di particolarmente brillante.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M03",
          "sender": "nico",
          "text": "Lei se n'è accorta.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M04",
          "sender": "nico",
          "text": "\"Non fai battute?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M05",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M06",
          "sender": "nico",
          "text": "\"Ne avevo una.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M07",
          "sender": "nico",
          "text": "\"Era brutta.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M08",
          "sender": "nico",
          "text": "\"Quindi come tutte le altre.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M09",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M10",
          "sender": "nico",
          "text": "Questa era meritata.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S08-B03"
    },
    "A2-S08-B03": {
      "id": "A2-S08-B03",
      "sceneId": "A2-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S08-B03-M01",
          "sender": "nico",
          "text": "Poi mi ha chiesto:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B03-M02",
          "sender": "nico",
          "text": "\"Cosa hai visto nel deposito?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B03-M03",
          "sender": "nico",
          "text": "Non:",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B03-M04",
          "sender": "nico",
          "text": "\"Sei entrato nel deposito?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B03-M05",
          "sender": "nico",
          "text": "Non:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B03-M06",
          "sender": "nico",
          "text": "\"Perché eri lì?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B03-M07",
          "sender": "nico",
          "text": "\"Cosa hai visto.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B03-M08",
          "sender": "nico",
          "text": "Quindi sa che stavo guardando.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S08-C13"
    },
    "A2-S08-C13-A-R": {
      "id": "A2-S08-C13-A-R",
      "sceneId": "A2-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S08-C13-A-R-M01",
          "sender": "nico",
          "text": "Le ho detto tutto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M02",
          "sender": "nico",
          "text": "Medicinali.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M03",
          "sender": "nico",
          "text": "Garze.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M04",
          "sender": "nico",
          "text": "Guanti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M05",
          "sender": "nico",
          "text": "Taniche.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M06",
          "sender": "nico",
          "text": "Acqua.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M07",
          "sender": "nico",
          "text": "Non mi ha interrotto.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M08",
          "sender": "nico",
          "text": "Alla fine ha chiesto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M09",
          "sender": "nico",
          "text": "\"Quanto materiale?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M10",
          "sender": "nico",
          "text": "Le ho detto che non lo so.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M11",
          "sender": "nico",
          "text": "Ma troppo per sembrare casuale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M12",
          "sender": "nico",
          "text": "Ha annuito.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M13",
          "sender": "nico",
          "text": "Come se fosse una conferma.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S08-B04"
    },
    "A2-S08-C13-B-R": {
      "id": "A2-S08-C13-B-R",
      "sceneId": "A2-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S08-C13-B-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M02",
          "sender": "nico",
          "text": "\"Perché ti interessa?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M03",
          "sender": "nico",
          "text": "Silenzio.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M04",
          "sender": "nico",
          "text": "Poi:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M05",
          "sender": "nico",
          "text": "\"Perché voglio sapere cosa stanno preparando.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M06",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M07",
          "sender": "nico",
          "text": "\"Questa non risponde alla domanda.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M08",
          "sender": "nico",
          "text": "\"È quella che ti do.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M09",
          "sender": "nico",
          "text": "Molto Marta.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S08-B04"
    },
    "A2-S08-C13-C-R": {
      "id": "A2-S08-C13-C-R",
      "sceneId": "A2-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S08-C13-C-R-M01",
          "sender": "nico",
          "text": "Le ho detto solo della roba medica.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-C-R-M02",
          "sender": "nico",
          "text": "Non ha fatto una faccia sorpresa.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-C-R-M03",
          "sender": "nico",
          "text": "Ha chiesto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-C-R-M04",
          "sender": "nico",
          "text": "\"Solo quello?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-C-R-M05",
          "sender": "nico",
          "text": "Quindi adesso sono abbastanza sicuro che sapesse già che c'era altro.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S08-B04"
    },
    "A2-S08-C13": {
      "id": "A2-S08-C13",
      "sceneId": "A2-S08",
      "type": "choice",
      "prompt": "Quanto racconta Nico a Marta?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S08-C13-A",
          "text": "Tutto quello che ha visto.",
          "effects": [
            {
              "op": "set",
              "key": "A2S08_TOLD_MARTA_ALL_DEPOT",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 2
            }
          ],
          "next": "A2-S08-C13-A-R"
        },
        {
          "id": "A2-S08-C13-B",
          "text": "Prima chiedile perché le interessa.",
          "effects": [
            {
              "op": "set",
              "key": "A2S08_ASKED_MARTA_MOTIVE",
              "value": true
            }
          ],
          "next": "A2-S08-C13-B-R"
        },
        {
          "id": "A2-S08-C13-C",
          "text": "Dille solo del materiale medico e guarda come reagisce.",
          "effects": [
            {
              "op": "set",
              "key": "A2S08_PARTIAL_DEPOT_DISCLOSURE",
              "value": true
            }
          ],
          "next": "A2-S08-C13-C-R"
        }
      ]
    },
    "A2-S08-B04": {
      "id": "A2-S08-B04",
      "sceneId": "A2-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S08-B04-M01",
          "sender": "nico",
          "text": "Le ho chiesto se sa cos'è il Giorno Bianco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B04-M02",
          "sender": "nico",
          "text": "Ha detto:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B04-M03",
          "sender": "nico",
          "text": "\"Non abbastanza.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B04-M04",
          "sender": "nico",
          "text": "È la prima risposta che mi dà da giorni che sembra completamente sincera.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S08-B05"
    },
    "A2-S08-B05": {
      "id": "A2-S08-B05",
      "sceneId": "A2-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S08-B05-M01",
          "sender": "nico",
          "text": "Le ho detto che dopo oggi non credo più che il cancello, i documenti e il deposito siano cose separate.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B05-M02",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B05-M03",
          "sender": "nico",
          "text": "\"Nemmeno io.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B05-M04",
          "sender": "nico",
          "text": "Questa è nuova.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B05-M05",
          "sender": "nico",
          "text": "Non siamo arrivati a:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B05-M06",
          "sender": "nico",
          "text": "\"ciao, stiamo investigando insieme.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B05-M07",
          "sender": "nico",
          "text": "Ma ci siamo molto vicini.",
          "delayMs": 1000,
          "delivery": "live"
        }
      ],
      "next": "A2-S08-B06",
      "effects": [
        {
          "op": "set",
          "key": "NICO_MARTA_ALLIANCE_STARTED",
          "value": true
        }
      ]
    },
    "A2-S08-B06": {
      "id": "A2-S08-B06",
      "sceneId": "A2-S08",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S08-B06-M01",
          "sender": "nico",
          "text": "Siamo rimasti un po' qui.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B06-M02",
          "sender": "nico",
          "text": "Senza parlare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B06-M03",
          "sender": "nico",
          "text": "E per una volta non sto cercando di capire se questa situazione sia romantica.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B06-M04",
          "sender": "nico",
          "text": "...",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B06-M05",
          "sender": "nico",
          "text": "Lo è un po'.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B06-M06",
          "sender": "nico",
          "text": "Ma non è il punto.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B06-M07",
          "sender": "nico",
          "text": "Vedi?",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B06-M08",
          "sender": "nico",
          "text": "Crescita personale.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S08-ENDSTATE"
    },
    "A2-S08-ENDSTATE": {
      "id": "A2-S08-ENDSTATE",
      "sceneId": "A2-S08",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "NICO_MARTA_ALLIANCE_STARTED",
          "value": true
        }
      ],
      "next": "A2-S09-START"
    },
    "A2-S09-START": {
      "id": "A2-S09-START",
      "sceneId": "A2-S09",
      "type": "state",
      "effects": [],
      "next": "A2-S09-B01"
    },
    "A2-S09-B01": {
      "id": "A2-S09-B01",
      "sceneId": "A2-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S09-B01-M01",
          "sender": "nico",
          "text": "Giorno quattro.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B01-M02",
          "sender": "nico",
          "text": "Missione del mattino:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B01-M03",
          "sender": "nico",
          "text": "non farmi morire il telefono.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B01-M04",
          "sender": "nico",
          "text": "Ho trovato una presa in una stanzetta vicino all'ufficio.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B01-M05",
          "sender": "nico",
          "text": "Sembra archivio amministrativo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B01-M06",
          "sender": "nico",
          "text": "Scatole.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B01-M07",
          "sender": "nico",
          "text": "Faldoni.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B01-M08",
          "sender": "nico",
          "text": "Moduli.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B01-M09",
          "sender": "nico",
          "text": "Il posto più spirituale dell'Aurora.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S09-B02"
    },
    "A2-S09-B02": {
      "id": "A2-S09-B02",
      "sceneId": "A2-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S09-B02-M01",
          "sender": "nico",
          "text": "Devo lasciarlo attaccato qualche minuto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B02-M02",
          "sender": "nico",
          "text": "Quindi sto facendo una cosa rivoluzionaria.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B02-M03",
          "sender": "nico",
          "text": "Aspetto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B02-M04",
          "sender": "nico",
          "text": "...",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B02-M05",
          "sender": "nico",
          "text": "Ci sono scatole con nomi.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S09-B03"
    },
    "A2-S09-B03": {
      "id": "A2-S09-B03",
      "sceneId": "A2-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S09-B03-M01",
          "sender": "nico",
          "text": "Ne ho aperta una.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B03-M02",
          "sender": "nico",
          "text": "Ci sono lettere.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B03-M03",
          "sender": "nico",
          "text": "Tante.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B03-M04",
          "sender": "nico",
          "text": "Decine almeno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B03-M05",
          "sender": "nico",
          "text": "Ogni busta ha un nome.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B03-M06",
          "sender": "nico",
          "text": "Un destinatario.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B03-M07",
          "sender": "nico",
          "text": "Un indirizzo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B03-M08",
          "sender": "nico",
          "text": "Nessun francobollo.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S09-B04"
    },
    "A2-S09-B04": {
      "id": "A2-S09-B04",
      "sceneId": "A2-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S09-B04-M01",
          "sender": "nico",
          "text": "Non sto leggendo tutto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B04-M02",
          "sender": "nico",
          "text": "Solo quello che vedo aprendo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B04-M03",
          "sender": "nico",
          "text": "\"Quando riceverai questa lettera...\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B04-M04",
          "sender": "nico",
          "text": "\"Non essere triste...\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B04-M05",
          "sender": "nico",
          "text": "\"Non avrei potuto chiedere una famiglia migliore...\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B04-M06",
          "sender": "nico",
          "text": "\"Finalmente non ho più paura...\"",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B04-M07",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 5000,
          "delivery": "live"
        }
      ],
      "next": "A2-S09-C14"
    },
    "A2-S09-C14-A-R": {
      "id": "A2-S09-C14-A-R",
      "sceneId": "A2-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S09-C14-A-R-M01",
          "sender": "nico",
          "text": "Ne ho aperta un'altra.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-A-R-M02",
          "sender": "nico",
          "text": "No.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-A-R-M03",
          "sender": "nico",
          "text": "Basta.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-A-R-M04",
          "sender": "nico",
          "text": "Sono tutte scritte come se chi scrive non dovesse esserci quando arrivano.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-A-R-M05",
          "sender": "nico",
          "text": "Non voglio leggerne altre.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S09-B05"
    },
    "A2-S09-C14-B-R": {
      "id": "A2-S09-C14-B-R",
      "sceneId": "A2-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S09-C14-B-R-M01",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-B-R-M02",
          "sender": "nico",
          "text": "Le ho rimesse giù.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-B-R-M03",
          "sender": "nico",
          "text": "Non ho bisogno di leggere la vita privata di altra gente per capire che è strano.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S09-B05"
    },
    "A2-S09-C14-C-R": {
      "id": "A2-S09-C14-C-R",
      "sceneId": "A2-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S09-C14-C-R-M01",
          "sender": "nico",
          "text": "Sto guardando solo fuori.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-C-R-M02",
          "sender": "nico",
          "text": "Nomi diversi.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-C-R-M03",
          "sender": "nico",
          "text": "Familiari.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-C-R-M04",
          "sender": "nico",
          "text": "Indirizzi diversi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-C-R-M05",
          "sender": "nico",
          "text": "Sembrano recenti.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-C-R-M06",
          "sender": "nico",
          "text": "Non sono un vecchio archivio dimenticato.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S09-B05"
    },
    "A2-S09-C14": {
      "id": "A2-S09-C14",
      "sceneId": "A2-S09",
      "type": "choice",
      "prompt": "Cosa consigli a Nico?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S09-C14-A",
          "text": "Leggine ancora qualcuna.",
          "effects": [
            {
              "op": "set",
              "key": "A2S09_READ_MORE_LETTERS",
              "value": true
            },
            {
              "op": "set",
              "key": "LETTER_EVIDENCE_LEVEL",
              "value": "HIGH"
            },
            {
              "op": "add",
              "key": "TOMMASO_SUSPICION",
              "value": 2
            }
          ],
          "next": "A2-S09-C14-A-R"
        },
        {
          "id": "A2-S09-C14-B",
          "text": "Fermati. Hai già capito abbastanza.",
          "effects": [
            {
              "op": "set",
              "key": "A2S09_STOPPED_READING",
              "value": true
            },
            {
              "op": "set",
              "key": "LETTER_EVIDENCE_LEVEL",
              "value": "MEDIUM"
            }
          ],
          "next": "A2-S09-C14-B-R"
        },
        {
          "id": "A2-S09-C14-C",
          "text": "Controlla soltanto nomi e date, non il contenuto.",
          "effects": [
            {
              "op": "set",
              "key": "A2S09_CHECKED_METADATA",
              "value": true
            },
            {
              "op": "set",
              "key": "LETTER_EVIDENCE_LEVEL",
              "value": "MEDIUM"
            }
          ],
          "next": "A2-S09-C14-C-R"
        }
      ]
    },
    "A2-S09-B05": {
      "id": "A2-S09-B05",
      "sceneId": "A2-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S09-B05-M01",
          "sender": "nico",
          "text": "Non faccio battute su questa.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B05-M02",
          "sender": "nico",
          "text": "Queste sembrano lettere d'addio.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B05-M03",
          "sender": "nico",
          "text": "Non sto dicendo che lo sono.",
          "delayMs": 5000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B05-M04",
          "sender": "nico",
          "text": "Sto dicendo che sembrano esattamente quello.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S09-B06",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_FAREWELL_LETTERS",
          "value": true
        }
      ]
    },
    "A2-S09-B06": {
      "id": "A2-S09-B06",
      "sceneId": "A2-S09",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S09-B06-M01",
          "sender": "nico",
          "text": "Il telefono ha caricato un po'.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B06-M02",
          "sender": "nico",
          "text": "Lo stacco.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B06-M03",
          "sender": "nico",
          "text": "Me ne vado da qui prima che entri qualcuno.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S09-ENDSTATE",
      "effects": [
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "GOOD"
        }
      ]
    },
    "A2-S09-ENDSTATE": {
      "id": "A2-S09-ENDSTATE",
      "sceneId": "A2-S09",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_FAREWELL_LETTERS",
          "value": true
        },
        {
          "op": "set",
          "key": "BATTERY_STATE",
          "value": "GOOD"
        }
      ],
      "next": "A2-S10-START"
    },
    "A2-S10-START": {
      "id": "A2-S10-START",
      "sceneId": "A2-S10",
      "type": "state",
      "effects": [],
      "next": "A2-S10-B01"
    },
    "A2-S10-B01": {
      "id": "A2-S10-B01",
      "sceneId": "A2-S10",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S10-B01-M01",
          "sender": "nico",
          "text": "Sono uscito.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B01-M02",
          "sender": "nico",
          "text": "Ho il telefono.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B01-M03",
          "sender": "nico",
          "text": "Ho la batteria.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B01-M04",
          "sender": "nico",
          "text": "E ho una quantità molto poco utile di pensieri.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B01-M05",
          "sender": "nico",
          "text": "Ricapitoliamo.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B01-M06",
          "sender": "nico",
          "text": "Decine di lettere.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B01-M07",
          "sender": "nico",
          "text": "Familiari.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B01-M08",
          "sender": "nico",
          "text": "Frasi da ultimo saluto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B01-M09",
          "sender": "nico",
          "text": "Nessun francobollo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B01-M10",
          "sender": "nico",
          "text": "Non significa necessariamente quello che sembra.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S10-C15"
    },
    "A2-S10-C15-A-R": {
      "id": "A2-S10-C15-A-R",
      "sceneId": "A2-S10",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S10-C15-A-R-M01",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-A-R-M02",
          "sender": "nico",
          "text": "Esatto.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-A-R-M03",
          "sender": "nico",
          "text": "Tipo scrivere una lettera come se stessi per morire.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-A-R-M04",
          "sender": "nico",
          "text": "Meditazione sulla morte.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-A-R-M05",
          "sender": "nico",
          "text": "Distacco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-A-R-M06",
          "sender": "nico",
          "text": "Vecchia identità.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-A-R-M07",
          "sender": "nico",
          "text": "È una cosa che fanno, no?",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-A-R-M08",
          "sender": "nico",
          "text": "Dimmi che è una cosa che fanno.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S10-B02"
    },
    "A2-S10-C15-B-R": {
      "id": "A2-S10-C15-B-R",
      "sceneId": "A2-S10",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S10-C15-B-R-M01",
          "sender": "nico",
          "text": "Lo so.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-B-R-M02",
          "sender": "nico",
          "text": "È esattamente quello che sembrano.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-B-R-M03",
          "sender": "nico",
          "text": "Ma se accetto questa spiegazione poi devo accettare anche tutte le domande successive.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-B-R-M04",
          "sender": "nico",
          "text": "A cosa stanno dicendo addio?",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-B-R-M05",
          "sender": "nico",
          "text": "Quando?",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-B-R-M06",
          "sender": "nico",
          "text": "Perché?",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-B-R-M07",
          "sender": "nico",
          "text": "E non mi piacciono per niente.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S10-B02"
    },
    "A2-S10-C15-C-R": {
      "id": "A2-S10-C15-C-R",
      "sceneId": "A2-S10",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S10-C15-C-R-M01",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-C-R-M02",
          "sender": "nico",
          "text": "Marta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-C-R-M03",
          "sender": "nico",
          "text": "Lei ormai sa che sto guardando.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-C-R-M04",
          "sender": "nico",
          "text": "E soprattutto sa più cose di me.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-C-R-M05",
          "sender": "nico",
          "text": "Che non è difficile.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-C-R-M06",
          "sender": "nico",
          "text": "La trovo appena posso.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S10-B02"
    },
    "A2-S10-C15": {
      "id": "A2-S10-C15",
      "sceneId": "A2-S10",
      "type": "choice",
      "prompt": "Quale spiegazione suggerisci a Nico?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S10-C15-A",
          "text": "Potrebbe essere un esercizio simbolico sulla morte.",
          "effects": [
            {
              "op": "set",
              "key": "A2S10_PREFERS_SYMBOLIC_EXPLANATION",
              "value": true
            },
            {
              "op": "set",
              "key": "NICO_DENIAL",
              "value": "HIGH"
            }
          ],
          "next": "A2-S10-C15-A-R"
        },
        {
          "id": "A2-S10-C15-B",
          "text": "Potrebbero essere vere lettere d'addio.",
          "effects": [
            {
              "op": "set",
              "key": "A2S10_ACCEPTS_FAREWELL_HYPOTHESIS",
              "value": true
            },
            {
              "op": "set",
              "key": "NICO_DENIAL",
              "value": "MEDIUM"
            }
          ],
          "next": "A2-S10-C15-B-R"
        },
        {
          "id": "A2-S10-C15-C",
          "text": "Non decidere ancora. Mostrale a Marta.",
          "effects": [
            {
              "op": "set",
              "key": "A2S10_WANTS_MARTA_INPUT",
              "value": true
            },
            {
              "op": "set",
              "key": "NICO_DENIAL",
              "value": "MEDIUM"
            }
          ],
          "next": "A2-S10-C15-C-R"
        }
      ]
    },
    "A2-S10-B02": {
      "id": "A2-S10-B02",
      "sceneId": "A2-S10",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S10-B02-M01",
          "sender": "nico",
          "text": "Comunque una spiegazione innocua esiste.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B02-M02",
          "sender": "nico",
          "text": "Deve esistere.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B02-M03",
          "sender": "nico",
          "text": "Scrivono lettere simboliche.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B02-M04",
          "sender": "nico",
          "text": "Le conservano.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B02-M05",
          "sender": "nico",
          "text": "Alla fine del percorso magari le bruciano.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B02-M06",
          "sender": "nico",
          "text": "O le rileggono.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B02-M07",
          "sender": "nico",
          "text": "Qualcosa di spirituale.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B02-M08",
          "sender": "nico",
          "text": "È molto più credibile di:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B02-M09",
          "sender": "nico",
          "text": "\"tutta questa gente sta preparando qualcosa di terribile e nessuno sembra particolarmente agitato.\"",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S10-B03"
    },
    "A2-S10-B03": {
      "id": "A2-S10-B03",
      "sceneId": "A2-S10",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S10-B03-M01",
          "sender": "nico",
          "text": "Il problema è che ieri questa spiegazione mi sarebbe bastata.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B03-M02",
          "sender": "nico",
          "text": "Oggi no.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B03-M03",
          "sender": "nico",
          "text": "Non completamente.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S10-ENDSTATE"
    },
    "A2-S10-ENDSTATE": {
      "id": "A2-S10-ENDSTATE",
      "sceneId": "A2-S10",
      "type": "state",
      "effects": [],
      "next": "A2-S11-START"
    },
    "A2-S11-START": {
      "id": "A2-S11-START",
      "sceneId": "A2-S11",
      "type": "state",
      "effects": [],
      "next": "A2-S11-B01"
    },
    "A2-S11-B01": {
      "id": "A2-S11-B01",
      "sceneId": "A2-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S11-B01-M01",
          "sender": "nico",
          "text": "Sono tornato dentro.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B01-M02",
          "sender": "nico",
          "text": "Volevo rimettere esattamente a posto la scatola.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B01-M03",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B01-M04",
          "sender": "nico",
          "text": "Adesso sono il tipo di persona che pensa all'allineamento delle scatole durante un'indagine clandestina.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B01-M05",
          "sender": "nico",
          "text": "Marta è entrata.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S11-B02"
    },
    "A2-S11-B02": {
      "id": "A2-S11-B02",
      "sceneId": "A2-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S11-B02-M01",
          "sender": "nico",
          "text": "Mi ha visto con le lettere.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B02-M02",
          "sender": "nico",
          "text": "Non sembrava sorpresa.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B02-M03",
          "sender": "nico",
          "text": "Sembrava spaventata.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B02-M04",
          "sender": "nico",
          "text": "Ha chiuso la porta.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S11-B03"
    },
    "A2-S11-B03": {
      "id": "A2-S11-B03",
      "sceneId": "A2-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S11-B03-M01",
          "sender": "nico",
          "text": "\"Hai letto i nomi?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B03-M02",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B03-M03",
          "sender": "nico",
          "text": "\"Quali nomi?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B03-M04",
          "sender": "nico",
          "text": "Non mi ha risposto.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B03-M05",
          "sender": "nico",
          "text": "Ha iniziato ad aprire scatole.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B03-M06",
          "sender": "nico",
          "text": "Velocemente.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B03-M07",
          "sender": "nico",
          "text": "Ma non a caso.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S11-C16"
    },
    "A2-S11-C16-A-R": {
      "id": "A2-S11-C16-A-R",
      "sceneId": "A2-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S11-C16-A-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-A-R-M02",
          "sender": "nico",
          "text": "\"Marta, che cazzo stai cercando?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-A-R-M03",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-A-R-M04",
          "sender": "nico",
          "text": "\"Una scatola vecchia.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-A-R-M05",
          "sender": "nico",
          "text": "\"Di cosa?\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-A-R-M06",
          "sender": "nico",
          "text": "\"Lasciami cercare.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-A-R-M07",
          "sender": "nico",
          "text": "Non era il momento di continuare.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S11-B04"
    },
    "A2-S11-C16-B-R": {
      "id": "A2-S11-C16-B-R",
      "sceneId": "A2-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S11-C16-B-R-M01",
          "sender": "nico",
          "text": "Ho smesso di fare domande.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-B-R-M02",
          "sender": "nico",
          "text": "Le ho chiesto solo:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-B-R-M03",
          "sender": "nico",
          "text": "\"Quanto vecchia?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-B-R-M04",
          "sender": "nico",
          "text": "\"Due anni.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-B-R-M05",
          "sender": "nico",
          "text": "Quindi stiamo cercando materiale di due anni fa.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-B-R-M06",
          "sender": "nico",
          "text": "Questo restringe.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-B-R-M07",
          "sender": "nico",
          "text": "E peggiora parecchio.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S11-B04"
    },
    "A2-S11-C16-C-R": {
      "id": "A2-S11-C16-C-R",
      "sceneId": "A2-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S11-C16-C-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-C-R-M02",
          "sender": "nico",
          "text": "\"C'entra la persona della foto?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-C-R-M03",
          "sender": "nico",
          "text": "Si è fermata.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-C-R-M04",
          "sender": "nico",
          "text": "Solo un secondo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-C-R-M05",
          "sender": "nico",
          "text": "Poi:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-C-R-M06",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-C-R-M07",
          "sender": "nico",
          "text": "Prima risposta vera.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S11-B04"
    },
    "A2-S11-C16": {
      "id": "A2-S11-C16",
      "sceneId": "A2-S11",
      "type": "choice",
      "prompt": "Marta sta cercando qualcosa e non spiega. Come reagisce Nico?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S11-C16-A",
          "text": "Insisti: \"Marta, che cazzo stai cercando?\"",
          "effects": [
            {
              "op": "set",
              "key": "A2S11_PRESSED_MARTA",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": -1
            }
          ],
          "next": "A2-S11-C16-A-R"
        },
        {
          "id": "A2-S11-C16-B",
          "text": "Aiutala senza fare domande per un minuto.",
          "effects": [
            {
              "op": "set",
              "key": "A2S11_HELPED_MARTA_SEARCH",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 1
            }
          ],
          "next": "A2-S11-C16-B-R"
        },
        {
          "id": "A2-S11-C16-C",
          "text": "Chiedile se c'entra la fotografia del Giorno 2.",
          "effects": [
            {
              "op": "set",
              "key": "A2S11_LINKED_PHOTO",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 1
            }
          ],
          "next": "A2-S11-C16-C-R"
        }
      ]
    },
    "A2-S11-B04": {
      "id": "A2-S11-B04",
      "sceneId": "A2-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S11-B04-M01",
          "sender": "nico",
          "text": "L'ha trovata.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B04-M02",
          "sender": "nico",
          "text": "Scatola più vecchia delle altre.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B04-M03",
          "sender": "nico",
          "text": "Polvere sui bordi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B04-M04",
          "sender": "nico",
          "text": "Date di due anni fa.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B04-M05",
          "sender": "nico",
          "text": "Sta cercando un nome.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B04-M06",
          "sender": "nico",
          "text": "Si è fermata.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B04-M07",
          "sender": "nico",
          "text": "Anna.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B04-M08",
          "sender": "nico",
          "text": "Il nome è Anna.",
          "delayMs": 4000,
          "delivery": "live"
        }
      ],
      "next": "A2-S11-B05",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_ANNA_NAME",
          "value": true
        }
      ]
    },
    "A2-S11-B05": {
      "id": "A2-S11-B05",
      "sceneId": "A2-S11",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S11-B05-M01",
          "sender": "nico",
          "text": "Le ho chiesto chi è.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B05-M02",
          "sender": "nico",
          "text": "Marta non ha risposto subito.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B05-M03",
          "sender": "nico",
          "text": "Ha preso una delle carte.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B05-M04",
          "sender": "nico",
          "text": "Poi ha detto:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B05-M05",
          "sender": "nico",
          "text": "\"Mia sorella.\"",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S11-ENDSTATE"
    },
    "A2-S11-ENDSTATE": {
      "id": "A2-S11-ENDSTATE",
      "sceneId": "A2-S11",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_ANNA_NAME",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_ANNA_IS_SISTER",
          "value": true
        }
      ],
      "next": "A2-S12-START"
    },
    "A2-S12-START": {
      "id": "A2-S12-START",
      "sceneId": "A2-S12",
      "type": "state",
      "effects": [],
      "next": "A2-S12-B01"
    },
    "A2-S12-B01": {
      "id": "A2-S12-B01",
      "sceneId": "A2-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S12-B01-M01",
          "sender": "nico",
          "text": "Anna era sua sorella maggiore.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B01-M02",
          "sender": "nico",
          "text": "Era venuta qui anni fa.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B01-M03",
          "sender": "nico",
          "text": "All'inizio ogni tanto.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B01-M04",
          "sender": "nico",
          "text": "Poi sempre di più.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B01-M05",
          "sender": "nico",
          "text": "Ha smesso di vedere amici.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B01-M06",
          "sender": "nico",
          "text": "Ha lasciato il lavoro.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B01-M07",
          "sender": "nico",
          "text": "Ha iniziato a chiamare meno a casa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B01-M08",
          "sender": "nico",
          "text": "Alla fine si è trasferita qui.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S12-B02"
    },
    "A2-S12-B02": {
      "id": "A2-S12-B02",
      "sceneId": "A2-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S12-B02-M01",
          "sender": "nico",
          "text": "Due anni fa è morta.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B02-M02",
          "sender": "nico",
          "text": "La versione ufficiale è suicidio.",
          "delayMs": 7000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B02-M03",
          "sender": "nico",
          "text": "Marta ha detto questa parola.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B02-M04",
          "sender": "nico",
          "text": "Non io.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B02-M05",
          "sender": "nico",
          "text": "Non so cosa scrivere dopo.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S12-B03"
    },
    "A2-S12-B03": {
      "id": "A2-S12-B03",
      "sceneId": "A2-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S12-B03-M01",
          "sender": "nico",
          "text": "La famiglia aveva parlato con Elia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B03-M02",
          "sender": "nico",
          "text": "Lui non aveva negato che Anna fosse morta.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B03-M03",
          "sender": "nico",
          "text": "Aveva detto che Anna aveva:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B03-M04",
          "sender": "nico",
          "text": "\"scelto di attraversare.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B03-M05",
          "sender": "nico",
          "text": "La stessa parola.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B03-M06",
          "sender": "nico",
          "text": "Giorno Bianco.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B03-M07",
          "sender": "nico",
          "text": "Attraversare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B03-M08",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S12-B04"
    },
    "A2-S12-B04": {
      "id": "A2-S12-B04",
      "sceneId": "A2-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S12-B04-M01",
          "sender": "nico",
          "text": "Marta non sa esattamente cosa sia successo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B04-M02",
          "sender": "nico",
          "text": "È questo il punto.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B04-M03",
          "sender": "nico",
          "text": "La polizia aveva trattato la morte come suicidio.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B04-M04",
          "sender": "nico",
          "text": "La famiglia non aveva abbastanza per dimostrare altro.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B04-M05",
          "sender": "nico",
          "text": "Ma le spiegazioni dell'Aurora non tornavano.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B04-M06",
          "sender": "nico",
          "text": "E Anna, prima di morire, aveva praticamente smesso di raccontare cosa succedeva qui.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S12-C17"
    },
    "A2-S12-C17-A-R": {
      "id": "A2-S12-C17-A-R",
      "sceneId": "A2-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S12-C17-A-R-M01",
          "sender": "nico",
          "text": "Le ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-A-R-M02",
          "sender": "nico",
          "text": "\"Mi dispiace.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-A-R-M03",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-A-R-M04",
          "sender": "nico",
          "text": "\"Lo so.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-A-R-M05",
          "sender": "nico",
          "text": "Questa volta non era evasiva.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S12-B05"
    },
    "A2-S12-C17-B-R": {
      "id": "A2-S12-C17-B-R",
      "sceneId": "A2-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S12-C17-B-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-B-R-M02",
          "sender": "nico",
          "text": "\"È per questo che continui a tornare qui?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-B-R-M03",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-B-R-M04",
          "sender": "nico",
          "text": "\"Voglio sapere cosa è successo.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-B-R-M05",
          "sender": "nico",
          "text": "Niente giri di parole stavolta.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S12-B05"
    },
    "A2-S12-C17-C-R": {
      "id": "A2-S12-C17-C-R",
      "sceneId": "A2-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S12-C17-C-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-C-R-M02",
          "sender": "nico",
          "text": "\"Perché non me l'hai detto?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-C-R-M03",
          "sender": "nico",
          "text": "Mi ha guardato.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-C-R-M04",
          "sender": "nico",
          "text": "\"Perché non sapevo se potevo fidarmi di te.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-C-R-M05",
          "sender": "nico",
          "text": "È una risposta ragionevole.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-C-R-M06",
          "sender": "nico",
          "text": "La odio.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S12-B05"
    },
    "A2-S12-C17": {
      "id": "A2-S12-C17",
      "sceneId": "A2-S12",
      "type": "choice",
      "prompt": "Nico ha appena scoperto perché Marta è all'Aurora. Cosa le dice?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S12-C17-A",
          "text": "\"Mi dispiace.\"",
          "effects": [
            {
              "op": "set",
              "key": "A2S12_OFFERED_CONDOLENCE",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 2
            }
          ],
          "next": "A2-S12-C17-A-R"
        },
        {
          "id": "A2-S12-C17-B",
          "text": "\"È per questo che continui a tornare qui?\"",
          "effects": [
            {
              "op": "set",
              "key": "A2S12_ASKED_MARTA_REASON",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 1
            }
          ],
          "next": "A2-S12-C17-B-R"
        },
        {
          "id": "A2-S12-C17-C",
          "text": "\"Perché non me l'hai detto?\"",
          "effects": [
            {
              "op": "set",
              "key": "A2S12_IMMEDIATE_CONFLICT",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": -1
            }
          ],
          "next": "A2-S12-C17-C-R"
        }
      ]
    },
    "A2-S12-B05": {
      "id": "A2-S12-B05",
      "sceneId": "A2-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S12-B05-M01",
          "sender": "nico",
          "text": "È tornata qui più volte.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M02",
          "sender": "nico",
          "text": "Facendo finta di essere interessata all'Aurora.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M03",
          "sender": "nico",
          "text": "Parlando con la gente.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M04",
          "sender": "nico",
          "text": "Guardando.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M05",
          "sender": "nico",
          "text": "Cercando documenti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M06",
          "sender": "nico",
          "text": "Vuole capire cosa è successo ad Anna.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M07",
          "sender": "nico",
          "text": "Quindi.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M08",
          "sender": "nico",
          "text": "Tu non sei qui perché credi a questa roba.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M09",
          "sender": "nico",
          "text": "\"No.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M10",
          "sender": "nico",
          "text": "Grazie a Dio.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M11",
          "sender": "nico",
          "text": "Scusa.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M12",
          "sender": "nico",
          "text": "Frase poco spirituale.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S12-B06"
    },
    "A2-S12-B06": {
      "id": "A2-S12-B06",
      "sceneId": "A2-S12",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S12-B06-M01",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B06-M02",
          "sender": "nico",
          "text": "Questa cambia parecchie cose.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B06-M03",
          "sender": "nico",
          "text": "Non so ancora quali.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B06-M04",
          "sender": "nico",
          "text": "Ma Marta non è qui per il Giorno Bianco.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B06-M05",
          "sender": "nico",
          "text": "Non è qui per Elia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B06-M06",
          "sender": "nico",
          "text": "È qui per sua sorella.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S12-ENDSTATE",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_ANNA_DEATH",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_ANNA_OFFICIAL_SUICIDE",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_ELIA_CALLED_ANNA_CROSSING",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_MARTA_INVESTIGATING",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_MARTA_NOT_BELIEVER",
          "value": true
        }
      ]
    },
    "A2-S12-ENDSTATE": {
      "id": "A2-S12-ENDSTATE",
      "sceneId": "A2-S12",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_ANNA_DEATH",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_ANNA_OFFICIAL_SUICIDE",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_ELIA_CALLED_ANNA_CROSSING",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_MARTA_INVESTIGATING",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_MARTA_NOT_BELIEVER",
          "value": true
        }
      ],
      "next": "A2-S13-START"
    },
    "A2-S13-START": {
      "id": "A2-S13-START",
      "sceneId": "A2-S13",
      "type": "state",
      "effects": [],
      "next": "A2-S13-B01"
    },
    "A2-S13-B01": {
      "id": "A2-S13-B01",
      "sceneId": "A2-S13",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S13-B01-M01",
          "sender": "nico",
          "text": "Ok.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B01-M02",
          "sender": "nico",
          "text": "Adesso sono arrabbiato.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B01-M03",
          "sender": "nico",
          "text": "Prima no.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B01-M04",
          "sender": "nico",
          "text": "Prima ero troppo impegnato a capire la parte in cui sua sorella è morta qui.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B01-M05",
          "sender": "nico",
          "text": "Adesso sì.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S13-B02"
    },
    "A2-S13-B02": {
      "id": "A2-S13-B02",
      "sceneId": "A2-S13",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S13-B02-M01",
          "sender": "nico",
          "text": "Le ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B02-M02",
          "sender": "nico",
          "text": "\"Avresti potuto dirmi che tua sorella era morta qui.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B02-M03",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B02-M04",
          "sender": "nico",
          "text": "\"Avresti potuto non seguire una donna quasi sconosciuta dentro una comunità religiosa in montagna.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B02-M05",
          "sender": "nico",
          "text": "Questa discussione sta prendendo una direzione molto sfavorevole per me.",
          "delayMs": 4000,
          "delivery": "live"
        }
      ],
      "next": "A2-S13-B03"
    },
    "A2-S13-B03": {
      "id": "A2-S13-B03",
      "sceneId": "A2-S13",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S13-B03-M01",
          "sender": "nico",
          "text": "Le ho detto che comunque sapeva che sarei venuto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B03-M02",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B03-M03",
          "sender": "nico",
          "text": "\"Non ti ho invitato.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B03-M04",
          "sender": "nico",
          "text": "Tecnicamente vero.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B03-M05",
          "sender": "nico",
          "text": "Fastidiosamente vero.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B03-M06",
          "sender": "nico",
          "text": "Io avevo chiesto se potevano venire persone nuove.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B03-M07",
          "sender": "nico",
          "text": "Poi avevo proposto io di venire.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B03-M08",
          "sender": "nico",
          "text": "Questa informazione, riletta adesso, non migliora la mia posizione.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S13-C18"
    },
    "A2-S13-C18-A-R": {
      "id": "A2-S13-C18-A-R",
      "sceneId": "A2-S13",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S13-C18-A-R-M01",
          "sender": "nico",
          "text": "Le ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-A-R-M02",
          "sender": "nico",
          "text": "\"Non importa chi ha invitato chi.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-A-R-M03",
          "sender": "nico",
          "text": "\"Potevi dirmi che questo posto poteva essere pericoloso.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-A-R-M04",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-A-R-M05",
          "sender": "nico",
          "text": "\"Non sapevo quanto.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-A-R-M06",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-A-R-M07",
          "sender": "nico",
          "text": "\"Sapevi abbastanza da tornare sotto falso pretesto.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-A-R-M08",
          "sender": "nico",
          "text": "Non ha risposto.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-A-R-M09",
          "sender": "nico",
          "text": "Che è una risposta.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S13-B04"
    },
    "A2-S13-C18-B-R": {
      "id": "A2-S13-C18-B-R",
      "sceneId": "A2-S13",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S13-C18-B-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-B-R-M02",
          "sender": "nico",
          "text": "\"Mi hai usato?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-B-R-M03",
          "sender": "nico",
          "text": "Lei non ha detto no.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-B-R-M04",
          "sender": "nico",
          "text": "\"Non all'inizio.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-B-R-M05",
          "sender": "nico",
          "text": "Questa è una risposta terribile.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-B-R-M06",
          "sender": "nico",
          "text": "Apprezzo quasi la sincerità.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S13-B04"
    },
    "A2-S13-C18-C-R": {
      "id": "A2-S13-C18-C-R",
      "sceneId": "A2-S13",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S13-C18-C-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-C-R-M02",
          "sender": "nico",
          "text": "\"Perché ti faceva comodo che fossi qui?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-C-R-M03",
          "sender": "nico",
          "text": "Ha esitato.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-C-R-M04",
          "sender": "nico",
          "text": "\"Perché sei esterno.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-C-R-M05",
          "sender": "nico",
          "text": "\"Non conosci nessuno.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-C-R-M06",
          "sender": "nico",
          "text": "\"Non devi niente a nessuno.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-C-R-M07",
          "sender": "nico",
          "text": "È probabilmente la cosa più lusinghiera che mi abbia detto.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-C-R-M08",
          "sender": "nico",
          "text": "Ed è orribile.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S13-B04"
    },
    "A2-S13-C18": {
      "id": "A2-S13-C18",
      "sceneId": "A2-S13",
      "type": "choice",
      "prompt": "Nico è ferito e arrabbiato. Su cosa insiste?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S13-C18-A",
          "text": "\"Potevi comunque avvertirmi che era pericoloso.\"",
          "effects": [
            {
              "op": "set",
              "key": "A2S13_ACCUSATION_DANGER",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": -1
            }
          ],
          "next": "A2-S13-C18-A-R"
        },
        {
          "id": "A2-S13-C18-B",
          "text": "\"Mi hai usato?\"",
          "effects": [
            {
              "op": "set",
              "key": "A2S13_ASKED_IF_USED",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": -1
            }
          ],
          "next": "A2-S13-C18-B-R"
        },
        {
          "id": "A2-S13-C18-C",
          "text": "Lascia perdere chi ha invitato chi. Chiedile perché aveva bisogno di lui.",
          "effects": [
            {
              "op": "set",
              "key": "A2S13_ASKED_WHY_NICO",
              "value": true
            },
            {
              "op": "add",
              "key": "MARTA_TRUST",
              "value": 1
            }
          ],
          "next": "A2-S13-C18-C-R"
        }
      ]
    },
    "A2-S13-B04": {
      "id": "A2-S13-B04",
      "sceneId": "A2-S13",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S13-B04-M01",
          "sender": "nico",
          "text": "\"Quando ho capito che saresti venuto davvero, ho pensato che avere qualcuno fuori da questa storia potesse essere utile.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B04-M02",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B04-M03",
          "sender": "nico",
          "text": "\"Quindi sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B04-M04",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B04-M05",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B04-M06",
          "sender": "nico",
          "text": "Almeno non sta cercando di farmela passare per altro.",
          "delayMs": 4000,
          "delivery": "live"
        }
      ],
      "next": "A2-S13-B05"
    },
    "A2-S13-B05": {
      "id": "A2-S13-B05",
      "sceneId": "A2-S13",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S13-B05-M01",
          "sender": "nico",
          "text": "Le ho chiesto se avrebbe fatto qualcosa di diverso sapendo quello che sappiamo adesso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B05-M02",
          "sender": "nico",
          "text": "\"Ti avrei detto di non venire.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B05-M03",
          "sender": "nico",
          "text": "\"Molto utile adesso.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B05-M04",
          "sender": "nico",
          "text": "\"Lo so.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B05-M05",
          "sender": "nico",
          "text": "Siamo entrambi arrabbiati.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B05-M06",
          "sender": "nico",
          "text": "Credo per motivi diversi.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S13-ENDSTATE"
    },
    "A2-S13-ENDSTATE": {
      "id": "A2-S13-ENDSTATE",
      "sceneId": "A2-S13",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "MARTA_USED_NICO_AS_OUTSIDER",
          "value": true
        },
        {
          "op": "set",
          "key": "NICO_MARTA_CONFLICT_ACTIVE",
          "value": true
        }
      ],
      "next": "A2-S14-START"
    },
    "A2-S14-START": {
      "id": "A2-S14-START",
      "sceneId": "A2-S14",
      "type": "state",
      "effects": [],
      "next": "A2-S14-B01"
    },
    "A2-S14-B01": {
      "id": "A2-S14-B01",
      "sceneId": "A2-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S14-B01-M01",
          "sender": "nico",
          "text": "Abbiamo trovato una lettera di Anna.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B01-M02",
          "sender": "nico",
          "text": "Non una delle lettere recenti.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B01-M03",
          "sender": "nico",
          "text": "Questa era nella scatola vecchia.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B01-M04",
          "sender": "nico",
          "text": "Marta l'ha riconosciuta dalla grafia prima ancora di vedere il nome.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S14-B02"
    },
    "A2-S14-B02": {
      "id": "A2-S14-B02",
      "sceneId": "A2-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S14-B02-M01",
          "sender": "nico",
          "text": "Non è una lettera d'addio normale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B02-M02",
          "sender": "nico",
          "text": "Non so neanche se sia d'addio.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B02-M03",
          "sender": "nico",
          "text": "Parla alla famiglia.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B02-M04",
          "sender": "nico",
          "text": "Cerca di rassicurarli.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B02-M05",
          "sender": "nico",
          "text": "Poi cambia tono.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S14-B03"
    },
    "A2-S14-B03": {
      "id": "A2-S14-B03",
      "sceneId": "A2-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S14-B03-M01",
          "sender": "nico",
          "text": "Poi parla di Elia.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B03-M02",
          "sender": "nico",
          "text": "Dice che lui le ha ricordato che avere paura non significa voler tornare indietro.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B03-M03",
          "sender": "nico",
          "text": "E poi questa frase:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B03-M04",
          "sender": "nico",
          "text": "Preparazione.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B03-M05",
          "sender": "nico",
          "text": "Due anni fa.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S14-B04"
    },
    "A2-S14-B04": {
      "id": "A2-S14-B04",
      "sceneId": "A2-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S14-B04-M01",
          "sender": "nico",
          "text": "Più sotto c'è scritto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B04-M02",
          "sender": "nico",
          "text": "\"prima attraversata.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B04-M03",
          "sender": "nico",
          "text": "Minuscolo.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B04-M04",
          "sender": "nico",
          "text": "Come se fosse una cosa che tutti quelli coinvolti sapevano già.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B04-M05",
          "sender": "nico",
          "text": "Marta ha riletto quella riga tre volte.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S14-B05",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_FIRST_CROSSING_TERM",
          "value": true
        }
      ]
    },
    "A2-S14-B05": {
      "id": "A2-S14-B05",
      "sceneId": "A2-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S14-B05-M01",
          "sender": "nico",
          "text": "No.",
          "delayMs": 5000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B05-M02",
          "sender": "nico",
          "text": "Questa frase non mi piace.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B05-M03",
          "sender": "nico",
          "text": "Per niente.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S14-C19"
    },
    "A2-S14-C19-A-R": {
      "id": "A2-S14-C19-A-R",
      "sceneId": "A2-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S14-C19-A-R-M01",
          "sender": "nico",
          "text": "Le ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-A-R-M02",
          "sender": "nico",
          "text": "\"Sembra una prova.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-A-R-M03",
          "sender": "nico",
          "text": "Marta non ha risposto subito.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-A-R-M04",
          "sender": "nico",
          "text": "Poi:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-A-R-M05",
          "sender": "nico",
          "text": "\"Lo so.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-A-R-M06",
          "sender": "nico",
          "text": "Non nel senso che sa cosa fosse.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-A-R-M07",
          "sender": "nico",
          "text": "Nel senso che ha pensato la stessa cosa.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S14-B06"
    },
    "A2-S14-C19-B-R": {
      "id": "A2-S14-C19-B-R",
      "sceneId": "A2-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S14-C19-B-R-M01",
          "sender": "nico",
          "text": "Ho provato:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-B-R-M02",
          "sender": "nico",
          "text": "\"Potrebbe essere un esercizio.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-B-R-M03",
          "sender": "nico",
          "text": "Marta:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-B-R-M04",
          "sender": "nico",
          "text": "\"Anna è morta.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-B-R-M05",
          "sender": "nico",
          "text": "Giusto.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-B-R-M06",
          "sender": "nico",
          "text": "La mia teoria ha un problema significativo.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S14-B06"
    },
    "A2-S14-C19-C-R": {
      "id": "A2-S14-C19-C-R",
      "sceneId": "A2-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S14-C19-C-R-M01",
          "sender": "nico",
          "text": "Le ho chiesto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-C-R-M02",
          "sender": "nico",
          "text": "\"Sai cos'è?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-C-R-M03",
          "sender": "nico",
          "text": "\"No.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-C-R-M04",
          "sender": "nico",
          "text": "\"Ho visto riferimenti alla preparazione.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-C-R-M05",
          "sender": "nico",
          "text": "\"Mai questo nome.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-C-R-M06",
          "sender": "nico",
          "text": "Quindi è nuovo anche per lei.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S14-B06"
    },
    "A2-S14-C19": {
      "id": "A2-S14-C19",
      "sceneId": "A2-S14",
      "type": "choice",
      "prompt": "Come interpreta Nico la frase?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S14-C19-A",
          "text": "Anna faceva parte di una prova.",
          "effects": [
            {
              "op": "set",
              "key": "A2S14_SUSPECTS_TEST",
              "value": true
            },
            {
              "op": "set",
              "key": "FIRST_CROSSING_HYPOTHESIS",
              "value": "TEST"
            }
          ],
          "next": "A2-S14-C19-A-R"
        },
        {
          "id": "A2-S14-C19-B",
          "text": "Potrebbe parlare di un esercizio spirituale.",
          "effects": [
            {
              "op": "set",
              "key": "A2S14_SUSPECTS_SYMBOLIC_FIRST_CROSSING",
              "value": true
            },
            {
              "op": "set",
              "key": "FIRST_CROSSING_HYPOTHESIS",
              "value": "SYMBOLIC"
            }
          ],
          "next": "A2-S14-C19-B-R"
        },
        {
          "id": "A2-S14-C19-C",
          "text": "Non interpretare ancora. Chiedi a Marta cosa sa della Prima Attraversata.",
          "effects": [
            {
              "op": "set",
              "key": "A2S14_ASKED_MARTA_FIRST_CROSSING",
              "value": true
            }
          ],
          "next": "A2-S14-C19-C-R"
        }
      ]
    },
    "A2-S14-B06": {
      "id": "A2-S14-B06",
      "sceneId": "A2-S14",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S14-B06-M01",
          "sender": "nico",
          "text": "Sappiamo solo questo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B06-M02",
          "sender": "nico",
          "text": "Anna aveva paura.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B06-M03",
          "sender": "nico",
          "text": "Elia era coinvolto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B06-M04",
          "sender": "nico",
          "text": "C'era una preparazione.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B06-M05",
          "sender": "nico",
          "text": "C'era qualcosa chiamato Prima Attraversata.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B06-M06",
          "sender": "nico",
          "text": "E Anna scrive:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B06-M07",
          "sender": "nico",
          "text": "\"con noi.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B06-M08",
          "sender": "nico",
          "text": "Non \"con me\".",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B06-M09",
          "sender": "nico",
          "text": "Con noi.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S14-ENDSTATE",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_FIRST_CROSSING_TERM",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_ANNA_WAS_PART_OF_SOMETHING",
          "value": true
        }
      ]
    },
    "A2-S14-ENDSTATE": {
      "id": "A2-S14-ENDSTATE",
      "sceneId": "A2-S14",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "KNOWS_FIRST_CROSSING_TERM",
          "value": true
        },
        {
          "op": "set",
          "key": "KNOWS_ANNA_WAS_PART_OF_SOMETHING",
          "value": true
        }
      ],
      "next": "A2-S15-START"
    },
    "A2-S15-START": {
      "id": "A2-S15-START",
      "sceneId": "A2-S15",
      "type": "state",
      "effects": [],
      "next": "A2-S15-B01"
    },
    "A2-S15-B01": {
      "id": "A2-S15-B01",
      "sceneId": "A2-S15",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S15-B01-M01",
          "sender": "nico",
          "text": "Ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B01-M02",
          "sender": "nico",
          "text": "\"Prendiamo questa roba e andiamo dalla polizia.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B01-M03",
          "sender": "nico",
          "text": "Marta:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B01-M04",
          "sender": "nico",
          "text": "\"Come?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B01-M05",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B01-M06",
          "sender": "nico",
          "text": "\"Usciamo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B01-M07",
          "sender": "nico",
          "text": "Ha guardato verso il cancello.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B01-M08",
          "sender": "nico",
          "text": "Giusto.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S15-B02"
    },
    "A2-S15-B02": {
      "id": "A2-S15-B02",
      "sceneId": "A2-S15",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S15-B02-M01",
          "sender": "nico",
          "text": "Allora telefono.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B02-M02",
          "sender": "nico",
          "text": "Il vecchio rottame per una volta ha batteria.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B02-M03",
          "sender": "nico",
          "text": "Il problema è il campo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B02-M04",
          "sender": "nico",
          "text": "Una tacca.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B02-M05",
          "sender": "nico",
          "text": "Zero.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B02-M06",
          "sender": "nico",
          "text": "Una.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S15-C20"
    },
    "A2-S15-C20-A-R": {
      "id": "A2-S15-C20-A-R",
      "sceneId": "A2-S15",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S15-C20-A-R-M01",
          "sender": "nico",
          "text": "Sto chiamando.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-A-R-M02",
          "sender": "nico",
          "text": "Ha iniziato.",
          "delayMs": 5000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-A-R-M03",
          "sender": "nico",
          "text": "Una voce.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-A-R-M04",
          "sender": "nico",
          "text": "Forse.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-A-R-M05",
          "sender": "nico",
          "text": "Poi niente.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-A-R-M06",
          "sender": "nico",
          "text": "Chiamata caduta.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S15-B03"
    },
    "A2-S15-C20-B-R": {
      "id": "A2-S15-C20-B-R",
      "sceneId": "A2-S15",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S15-C20-B-R-M01",
          "sender": "nico",
          "text": "Ci siamo spostati più in alto dietro l'edificio.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-B-R-M02",
          "sender": "nico",
          "text": "Due tacche per circa quattro secondi.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-B-R-M03",
          "sender": "nico",
          "text": "Ho chiamato.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-B-R-M04",
          "sender": "nico",
          "text": "È partita.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-B-R-M05",
          "sender": "nico",
          "text": "Poi è caduta prima che riuscissi a spiegare qualcosa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-B-R-M06",
          "sender": "nico",
          "text": "Quindi tecnicamente progresso.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S15-B03"
    },
    "A2-S15-C20-C-R": {
      "id": "A2-S15-C20-C-R",
      "sceneId": "A2-S15",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S15-C20-C-R-M01",
          "sender": "nico",
          "text": "Ho mandato:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-C-R-M02",
          "sender": "nico",
          "text": "\"Se smetto di rispondere chiama aiuto. Aurora, valle.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-C-R-M03",
          "sender": "nico",
          "text": "È rimasto in invio.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-C-R-M04",
          "sender": "nico",
          "text": "Poi per un secondo ha segnato inviato.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-C-R-M05",
          "sender": "nico",
          "text": "Non so se sia arrivato.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-C-R-M06",
          "sender": "nico",
          "text": "Non posso basare il piano su questo.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S15-B03"
    },
    "A2-S15-C20": {
      "id": "A2-S15-C20",
      "sceneId": "A2-S15",
      "type": "choice",
      "prompt": "Cosa prova Nico?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S15-C20-A",
          "text": "Prova a chiamare subito il numero di emergenza.",
          "effects": [
            {
              "op": "set",
              "key": "A2S15_TRIED_EMERGENCY_CALL",
              "value": true
            }
          ],
          "next": "A2-S15-C20-A-R"
        },
        {
          "id": "A2-S15-C20-B",
          "text": "Spostati cercando più campo e poi chiama.",
          "effects": [
            {
              "op": "set",
              "key": "A2S15_SEARCHED_SIGNAL",
              "value": true
            }
          ],
          "next": "A2-S15-C20-B-R"
        },
        {
          "id": "A2-S15-C20-C",
          "text": "Prova prima a inviare un messaggio breve al contatto esterno.",
          "effects": [
            {
              "op": "set",
              "key": "A2S15_TRIED_OUTGOING_MESSAGE",
              "value": true
            }
          ],
          "next": "A2-S15-C20-C-R"
        }
      ]
    },
    "A2-S15-B03": {
      "id": "A2-S15-B03",
      "sceneId": "A2-S15",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S15-B03-M01",
          "sender": "nico",
          "text": "Possiamo provare ancora.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B03-M02",
          "sender": "nico",
          "text": "Ma non abbiamo una connessione stabile.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B03-M03",
          "sender": "nico",
          "text": "E non posso stare mezz'ora in giro col telefono in mano.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B03-M04",
          "sender": "nico",
          "text": "Se ci vedono, il vantaggio di avere questo coso nascosto sparisce.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S15-B04"
    },
    "A2-S15-B04": {
      "id": "A2-S15-B04",
      "sceneId": "A2-S15",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S15-B04-M01",
          "sender": "nico",
          "text": "Le ho detto:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B04-M02",
          "sender": "nico",
          "text": "\"Ce ne andiamo.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B04-M03",
          "sender": "nico",
          "text": "\"Adesso.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B04-M04",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B04-M05",
          "sender": "nico",
          "text": "\"Voglio sapere cos'era la Prima Attraversata.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B04-M06",
          "sender": "nico",
          "text": "Io:",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B04-M07",
          "sender": "nico",
          "text": "\"Anna è morta.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B04-M08",
          "sender": "nico",
          "text": "\"Lo so.\"",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B04-M09",
          "sender": "nico",
          "text": "\"È esattamente per questo.\"",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S15-ENDSTATE"
    },
    "A2-S15-ENDSTATE": {
      "id": "A2-S15-ENDSTATE",
      "sceneId": "A2-S15",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "EXTERNAL_HELP_ATTEMPTED",
          "value": true
        }
      ],
      "next": "A2-S16-START"
    },
    "A2-S16-START": {
      "id": "A2-S16-START",
      "sceneId": "A2-S16",
      "type": "state",
      "effects": [],
      "next": "A2-S16-B01"
    },
    "A2-S16-B01": {
      "id": "A2-S16-B01",
      "sceneId": "A2-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S16-B01-M01",
          "sender": "nico",
          "text": "Marta vuole un giorno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B01-M02",
          "sender": "nico",
          "text": "Uno.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B01-M03",
          "sender": "nico",
          "text": "Dice che se esiste materiale sulla Prima Attraversata non sarà in questa stanza.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B01-M04",
          "sender": "nico",
          "text": "Sarà nell'archivio privato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B01-M05",
          "sender": "nico",
          "text": "Quello vicino all'ufficio di Elia.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B01-M06",
          "sender": "nico",
          "text": "Ovviamente.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S16-B02"
    },
    "A2-S16-B02": {
      "id": "A2-S16-B02",
      "sceneId": "A2-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S16-B02-M01",
          "sender": "nico",
          "text": "Le ho detto no.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B02-M02",
          "sender": "nico",
          "text": "No normale.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B02-M03",
          "sender": "nico",
          "text": "No completo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B02-M04",
          "sender": "nico",
          "text": "Abbiamo lettere d'addio.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B02-M05",
          "sender": "nico",
          "text": "Sua sorella morta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B02-M06",
          "sender": "nico",
          "text": "Cancello chiuso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B02-M07",
          "sender": "nico",
          "text": "Documenti trattenuti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B02-M08",
          "sender": "nico",
          "text": "Una chiamata che non regge.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B02-M09",
          "sender": "nico",
          "text": "Questa è la parte della storia dove una persona intelligente se ne va.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S16-B03"
    },
    "A2-S16-B03": {
      "id": "A2-S16-B03",
      "sceneId": "A2-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S16-B03-M01",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B03-M02",
          "sender": "nico",
          "text": "\"Tu puoi provare ad andartene.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B03-M03",
          "sender": "nico",
          "text": "\"Io resto.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B03-M04",
          "sender": "nico",
          "text": "Ecco.",
          "delayMs": 5000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B03-M05",
          "sender": "nico",
          "text": "Quella frase.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S16-B04"
    },
    "A2-S16-B04": {
      "id": "A2-S16-B04",
      "sceneId": "A2-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S16-B04-M01",
          "sender": "nico",
          "text": "Dimmi di no.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B04-M02",
          "sender": "nico",
          "text": "Sul serio.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B04-M03",
          "sender": "nico",
          "text": "Dimmi che devo lasciarla qui e provare a uscire.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S16-C21"
    },
    "A2-S16-C21-A-R": {
      "id": "A2-S16-C21-A-R",
      "sceneId": "A2-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S16-C21-A-R-M01",
          "sender": "nico",
          "text": "Sì.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-A-R-M02",
          "sender": "nico",
          "text": "È la risposta giusta.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-A-R-M03",
          "sender": "nico",
          "text": "Assolutamente.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-A-R-M04",
          "sender": "nico",
          "text": "...",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-A-R-M05",
          "sender": "nico",
          "text": "Non la lascio qui da sola.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-A-R-M06",
          "sender": "nico",
          "text": "Lo so.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-A-R-M07",
          "sender": "nico",
          "text": "Lo so.",
          "delayMs": 0,
          "delivery": "live"
        }
      ],
      "next": "A2-S16-B05"
    },
    "A2-S16-C21-B-R": {
      "id": "A2-S16-C21-B-R",
      "sceneId": "A2-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S16-C21-B-R-M01",
          "sender": "nico",
          "text": "Un giorno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-B-R-M02",
          "sender": "nico",
          "text": "Questo è esattamente il tipo di idea che tra ventiquattr'ore ci sembrerà molto stupida.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-B-R-M03",
          "sender": "nico",
          "text": "Però sì.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S16-B05"
    },
    "A2-S16-C21-C-R": {
      "id": "A2-S16-C21-C-R",
      "sceneId": "A2-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S16-C21-C-R-M01",
          "sender": "nico",
          "text": "Ci ho provato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-C-R-M02",
          "sender": "nico",
          "text": "Le ho detto che qualunque cosa trovi non vale restare qui.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-C-R-M03",
          "sender": "nico",
          "text": "Lei:",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-C-R-M04",
          "sender": "nico",
          "text": "\"Per te.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-C-R-M05",
          "sender": "nico",
          "text": "Non nel senso filosofico.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-C-R-M06",
          "sender": "nico",
          "text": "Nel senso:",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-C-R-M07",
          "sender": "nico",
          "text": "non è tua sorella.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-C-R-M08",
          "sender": "nico",
          "text": "E non so cosa rispondere.",
          "delayMs": 3000,
          "delivery": "live"
        }
      ],
      "next": "A2-S16-B05"
    },
    "A2-S16-C21-D-R": {
      "id": "A2-S16-C21-D-R",
      "sceneId": "A2-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S16-C21-D-R-M01",
          "sender": "nico",
          "text": "Grazie.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-D-R-M02",
          "sender": "nico",
          "text": "Finalmente supporto emotivo.",
          "delayMs": 1000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-D-R-M03",
          "sender": "nico",
          "text": "E sì.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-D-R-M04",
          "sender": "nico",
          "text": "Lo sono.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-D-R-M05",
          "sender": "nico",
          "text": "Il problema è che non cambia cosa sto per fare.",
          "delayMs": 2000,
          "delivery": "live"
        }
      ],
      "next": "A2-S16-B05"
    },
    "A2-S16-C21": {
      "id": "A2-S16-C21",
      "sceneId": "A2-S16",
      "type": "choice",
      "prompt": "Cosa rispondi a Nico?",
      "timed": false,
      "timeoutMs": null,
      "options": [
        {
          "id": "A2-S16-C21-A",
          "text": "Vattene. Non puoi aiutarla se resti bloccato anche tu.",
          "effects": [
            {
              "op": "set",
              "key": "A2S16_PLAYER_SAID_LEAVE",
              "value": true
            }
          ],
          "next": "A2-S16-C21-A-R"
        },
        {
          "id": "A2-S16-C21-B",
          "text": "Aiutala per un giorno. Poi uscite insieme.",
          "effects": [
            {
              "op": "set",
              "key": "A2S16_PLAYER_SAID_HELP",
              "value": true
            },
            {
              "op": "add",
              "key": "NICO_PLAYER_TRUST",
              "value": 1
            }
          ],
          "next": "A2-S16-C21-B-R"
        },
        {
          "id": "A2-S16-C21-C",
          "text": "Convincila a partire adesso.",
          "effects": [
            {
              "op": "set",
              "key": "A2S16_PLAYER_SAID_CONVINCE",
              "value": true
            }
          ],
          "next": "A2-S16-C21-C-R"
        },
        {
          "id": "A2-S16-C21-D",
          "text": "Sei un idiota se resti.",
          "effects": [
            {
              "op": "set",
              "key": "A2S16_PLAYER_CALLED_IDIOT",
              "value": true
            },
            {
              "op": "add",
              "key": "PLAYER_SARCASM",
              "value": 1
            }
          ],
          "next": "A2-S16-C21-D-R"
        }
      ]
    },
    "A2-S16-B05": {
      "id": "A2-S16-B05",
      "sceneId": "A2-S16",
      "type": "sequence",
      "messages": [
        {
          "id": "A2-S16-B05-M01",
          "sender": "nico",
          "text": "Un giorno.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B05-M02",
          "sender": "nico",
          "text": "La aiuto a trovare quello che cerca.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B05-M03",
          "sender": "nico",
          "text": "Poi ce ne andiamo.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B05-M04",
          "sender": "nico",
          "text": "Questa frase, riletta, ha un quantitativo di presagio che non mi piace per niente.",
          "delayMs": 4000,
          "delivery": "live"
        }
      ],
      "next": "A2-S16-ENDSTATE",
      "effects": [
        {
          "op": "set",
          "key": "ACT2_COMPLETE",
          "value": true
        },
        {
          "op": "set",
          "key": "NICO_STAYS_ONE_MORE_DAY",
          "value": true
        },
        {
          "op": "set",
          "key": "PRIVATE_ARCHIVE_OBJECTIVE",
          "value": true
        }
      ]
    },
    "A2-S16-ENDSTATE": {
      "id": "A2-S16-ENDSTATE",
      "sceneId": "A2-S16",
      "type": "state",
      "effects": [
        {
          "op": "set",
          "key": "PRIVATE_ARCHIVE_OBJECTIVE",
          "value": true
        },
        {
          "op": "set",
          "key": "NICO_STAYS_ONE_MORE_DAY",
          "value": true
        },
        {
          "op": "set",
          "key": "ACT2_COMPLETE",
          "value": true
        }
      ],
      "next": "A2-S16-END"
    },
    "A2-S16-END": {
      "id": "A2-S16-END",
      "sceneId": "A2-S16",
      "type": "state",
      "effects": [],
      "next": "A3-S01-START"
    }
  }
};
