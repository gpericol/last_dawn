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
          "text": "Davide è tornato. L'ho trovato in cucina, stanno preparando il pranzo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B01-M02",
          "sender": "nico",
          "text": "Taglia le verdure come se stamattina non fosse sparito nel nulla.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B01-M03",
          "sender": "nico",
          "text": "Fisicamente sembra stare bene. È solo molto più quieto.",
          "delayMs": 1200,
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
          "text": "Gli ho chiesto: \"Dove cazzo eri?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M02",
          "sender": "nico",
          "text": "\"Avevo bisogno di stare un po' da solo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M03",
          "sender": "nico",
          "text": "\"Dentro quella casa?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M04",
          "sender": "nico",
          "text": "Ha continuato a tagliare. \"Mi ha fatto bene.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B02-M05",
          "sender": "nico",
          "text": "Non sembrava che cercasse di convincermi. Lo diceva e basta.",
          "delayMs": 1200,
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
          "text": "Gli ho chiesto anche di sua madre.",
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
          "text": "\"Mi avevi detto che le avevi promesso di chiamarla.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-CALLBACK-TRUE-M02",
          "sender": "nico",
          "text": "Ha annuito. \"Lo so.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-CALLBACK-TRUE-M03",
          "sender": "nico",
          "text": "Poi: \"Non era importante.\"",
          "delayMs": 2300,
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
          "text": "\"Volevi chiamarla.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-CALLBACK-FALSE-M02",
          "sender": "nico",
          "text": "\"Non era importante.\"",
          "delayMs": 2300,
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
          "text": "Quando siamo arrivati continuava a chiedere del telefono. Adesso non gli importa più.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M02",
          "sender": "nico",
          "text": "Gli ho chiesto se fosse successo qualcosa.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M03",
          "sender": "nico",
          "text": "\"No.\" Si è fermato un attimo. \"Cioè, ho avuto tempo di pensarci. Mi agitavo per niente.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B04-M04",
          "sender": "nico",
          "text": "Non so cosa sia successo là dentro. Lui sembra contento di non agitarsi più.",
          "delayMs": 1200,
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
          "text": "Gli ho detto: \"Sparisci una notte e poi mi dici che chiamare tua madre non contava?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-A-R-M02",
          "sender": "nico",
          "text": "Ha posato il coltello. Sembrava stanco di doverlo spiegare.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-A-R-M03",
          "sender": "nico",
          "text": "\"Non ho detto che non conta lei. Ho detto che non era importante chiamare.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-A-R-M04",
          "sender": "nico",
          "text": "Poi ha ripreso a tagliare. Io ero ancora alla prima parte.",
          "delayMs": 1200,
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
          "text": "Gli ho chiesto soltanto se sta bene.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-B-R-M02",
          "sender": "nico",
          "text": "Mi ha guardato. \"Sì. Davvero.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-B-R-M03",
          "sender": "nico",
          "text": "L'ha detto piano, come se quello da tranquillizzare fossi io.",
          "delayMs": 1200,
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
          "text": "Ho lasciato perdere e l'ho aiutato un minuto, senza parlare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-C-R-M02",
          "sender": "nico",
          "text": "All'arrivo mi chiedeva tutto. Adesso lavora tranquillo, sa già dove mettere le cose.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-C08-C-R-M03",
          "sender": "nico",
          "text": "Vorrei riuscire a prenderlo come un buon segno.",
          "delayMs": 1200,
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
          "text": "Prima di andare gli ho chiesto se ci vedevamo a pranzo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B05-M02",
          "sender": "nico",
          "text": "\"Certo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B05-M03",
          "sender": "nico",
          "text": "Mi ha guardato un po' strano. Forse gli sembrava una domanda stupida.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S01-B05-M04",
          "sender": "nico",
          "text": "Io avevo bisogno di sentirmelo dire.",
          "delayMs": 1200,
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
          "text": "Ci hanno chiamati a una riunione. Adesso, non stasera.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B01-M02",
          "sender": "nico",
          "text": "Ci sono quasi tutti, anche Marta e Davide. Elia è davanti.",
          "delayMs": 1200,
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
          "text": "\"Il Giorno Bianco arriverà tra dodici giorni.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B02-M02",
          "sender": "nico",
          "text": "Ha appena detto così.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B02-M03",
          "sender": "nico",
          "text": "Pensavo fosse una festa con una data fissa. Pare che la stiamo scoprendo adesso.",
          "delayMs": 1200,
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
          "text": "Una donna piange e sorride insieme. Due si sono abbracciati.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B03-M02",
          "sender": "nico",
          "text": "Uno ha chiuso gli occhi, come quando finalmente ti dicono che è andata bene.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B03-M03",
          "sender": "nico",
          "text": "Io vorrei chiedere cosa succede tra dodici giorni. Mi guardo intorno, nessun altro sembra averne bisogno.",
          "delayMs": 1200,
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
          "text": "Da oggi comincia la Preparazione. La chiama così.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B04-M02",
          "sender": "nico",
          "text": "Meno attività normali, riunioni tutte le sere. Niente contatti con l'esterno.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B04-M03",
          "sender": "nico",
          "text": "E fino al Giorno Bianco si resta nella proprietà.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B04-M04",
          "sender": "nico",
          "text": "Questa parte l'ho sentita bene.",
          "delayMs": 1200,
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
          "text": "Lui dice che \"non bisogna interrompere la Preparazione\".",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B05-M02",
          "sender": "nico",
          "text": "Sto cercando di capire se è un consiglio o se ha appena deciso quando possiamo andarcene.",
          "delayMs": 1200,
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
          "text": "Ai nuovi ha detto di non preoccuparsi se le regole sembreranno più rigide.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B06-M02",
          "sender": "nico",
          "text": "\"Non dovete capire tutto oggi. Per adesso potete fidarvi del processo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B06-M03",
          "sender": "nico",
          "text": "Va bene non capire tutto. Quanto tempo devo rimanere qui però vorrei saperlo.",
          "delayMs": 1200,
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
          "text": "Marta non sembra sorpresa. Voglio parlarle appena finisce.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B07-M02",
          "sender": "nico",
          "text": "Davide è seduto tranquillo. All'arrivo avrebbe già chiesto se poteva telefonare a qualcuno.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B07-M03",
          "sender": "nico",
          "text": "Adesso ascolta e basta.",
          "delayMs": 1200,
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
          "text": "Quindi per dodici giorni dovremmo restare qui, senza sentire nessuno fuori, ad aspettare una cosa che non mi hanno ancora spiegato.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S02-B08-M02",
          "sender": "nico",
          "text": "Faccio fatica a continuare a chiamarle stranezze.",
          "delayMs": 1800,
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
          "text": "Sono passato dal cancello. C'è una catena.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B01-M02",
          "sender": "nico",
          "text": "Una normalissima catena da ferramenta. Ho dovuto avvicinarmi per essere sicuro che fosse proprio chiuso.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B01-M03",
          "sender": "nico",
          "text": "Lo è.",
          "delayMs": 1800,
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
          "text": "È arrivato Tommaso. Gli ho chiesto perché.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B02-M02",
          "sender": "nico",
          "text": "Dice che durante la Preparazione evitano che entri gente da fuori: curiosi, consegne non previste, persone che interrompono.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B02-M03",
          "sender": "nico",
          "text": "Finché parla di chi entra riesco anche a seguirlo.",
          "delayMs": 1800,
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
          "text": "Gli ho chiesto: \"Ma noi possiamo uscire?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M02",
          "sender": "nico",
          "text": "\"Perché dovresti uscire?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M03",
          "sender": "nico",
          "text": "\"Non devo. Chiedevo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M04",
          "sender": "nico",
          "text": "Ha sorriso. \"Allora non c'è problema.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B03-M05",
          "sender": "nico",
          "text": "Sono rimasto ad aspettare un sì o un no. Niente.",
          "delayMs": 2200,
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
          "text": "Gli ho detto che non aveva risposto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M02",
          "sender": "nico",
          "text": "\"È iniziata la Preparazione, Nico.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M03",
          "sender": "nico",
          "text": "\"Sì, l'ho sentito. Ti sto chiedendo se posso uscire.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M04",
          "sender": "nico",
          "text": "\"C'è qualcosa che ti serve fuori?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-A-R-M05",
          "sender": "nico",
          "text": "Alla fine ho detto di no. Ero io a dover giustificare la domanda.",
          "delayMs": 1200,
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
          "text": "Sì, per ora basta. Gli ho detto di lasciar perdere.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-B-R-M02",
          "sender": "nico",
          "text": "Continuava a chiedermi perché volevo saperlo. Non mi andava di dargli altri motivi per interessarsi a me.",
          "delayMs": 1200,
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
          "text": "Ho fatto finta che fosse solo curiosità, che volessi capire come funziona qui.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-C-R-M02",
          "sender": "nico",
          "text": "\"Certo. Cerchiamo solo di non avere interruzioni.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S03-C09-C-R-M03",
          "sender": "nico",
          "text": "Gli ho sorriso anch'io. La catena non l'ha toccata.",
          "delayMs": 1200,
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
          "text": "Da qui vedo la strada che scende verso il ponte.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B04-M02",
          "sender": "nico",
          "text": "Quando siamo arrivati pensavo solo a quanto facesse schifo il viaggio.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S03-B04-M03",
          "sender": "nico",
          "text": "Adesso vorrei essere dall'altra parte del cancello.",
          "delayMs": 1200,
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
          "text": "Voglio provare a chiedere i documenti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B01-M02",
          "sender": "nico",
          "text": "Sul cancello può continuare a darmi spiegazioni. E magari Davide ha davvero avuto una conversazione che gli ha fatto bene, che ne so.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B01-M03",
          "sender": "nico",
          "text": "Ma la carta d'identità è mia. Se la chiedo, dovrebbe ridarmela.",
          "delayMs": 1800,
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
          "text": "Gli ho chiesto direttamente: \"Mi ridai i documenti?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-A-R-M02",
          "sender": "nico",
          "text": "\"Ti servono?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-A-R-M03",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-A-R-M04",
          "sender": "nico",
          "text": "Non avevo preparato una motivazione. Non pensavo di doverne avere una.",
          "delayMs": 1200,
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
          "text": "Ho detto che dovevo controllare una cosa sulla carta d'identità.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-B-R-M02",
          "sender": "nico",
          "text": "Speravo bastasse nominare un documento per rendere la richiesta noiosa e incontestabile.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-B-R-M03",
          "sender": "nico",
          "text": "Tommaso mi ha chiesto se fosse urgente.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-B-R-M04",
          "sender": "nico",
          "text": "Ho detto: \"Non particolarmente.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-B-R-M05",
          "sender": "nico",
          "text": "Mi sono pentito mentre lo dicevo.",
          "delayMs": 1200,
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
          "text": "Ho chiesto i documenti e anche il telefono principale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-C-R-M02",
          "sender": "nico",
          "text": "Tommaso ha aspettato un momento prima di rispondermi.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-C-R-M03",
          "sender": "nico",
          "text": "\"Per cosa ti serve?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S04-C10-C-R-M04",
          "sender": "nico",
          "text": "Gli ho detto che volevo controllare una cosa. Non mi veniva una scusa migliore.",
          "delayMs": 1200,
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
          "text": "La risposta comunque è stata: \"Te li ridiamo quando riparti.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M02",
          "sender": "nico",
          "text": "\"Vorrei averli adesso.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M03",
          "sender": "nico",
          "text": "\"Sono al sicuro.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M04",
          "sender": "nico",
          "text": "\"Lo so, ma sono miei.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B02-M05",
          "sender": "nico",
          "text": "\"Certo. E infatti te li restituiremo.\"",
          "delayMs": 1200,
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
          "text": "Poi ha ricominciato a sistemare delle carte. Io ero ancora davanti al tavolo.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S04-B03-M02",
          "sender": "nico",
          "text": "Sono uscito senza i documenti.",
          "delayMs": 1200,
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
          "text": "Marta mi ha fermato e mi ha portato da parte.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B01-M02",
          "sender": "nico",
          "text": "Per una volta non ho avuto neanche il tempo di farmi illusioni.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B01-M03",
          "sender": "nico",
          "text": "\"Devi smetterla.\"",
          "delayMs": 1200,
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
          "text": "Le ho chiesto con cosa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B02-M02",
          "sender": "nico",
          "text": "\"Con tutte queste domande.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B02-M03",
          "sender": "nico",
          "text": "\"Mi hanno preso i documenti e non vogliono ridarmeli. Cosa dovrei chiedere, come va l'orto?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B02-M04",
          "sender": "nico",
          "text": "\"Nico.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B02-M05",
          "sender": "nico",
          "text": "Ha detto solo quello, piano. Mi sono incazzato ancora di più.",
          "delayMs": 1200,
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
          "text": "Le ho detto del cancello, di Davide, del materiale che hanno scaricato di notte.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M02",
          "sender": "nico",
          "text": "\"Adesso anche i documenti me li ridanno quando decidono loro. Non ti sembra...\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M03",
          "sender": "nico",
          "text": "Mi ha interrotto: \"Lo so.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B03-M04",
          "sender": "nico",
          "text": "Non ero preparato a quella risposta.",
          "delayMs": 2200,
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
          "text": "\"Allora dimmi cosa sai.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-A-R-M02",
          "sender": "nico",
          "text": "\"Non qui.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-A-R-M03",
          "sender": "nico",
          "text": "Le ho detto che non poteva chiedermi di smettere e lasciarmi così.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-A-R-M04",
          "sender": "nico",
          "text": "Ha guardato altrove. Non mi ha spiegato niente.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto: \"Quindi anche tu pensi che ci sia qualcosa che non va?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-B-R-M02",
          "sender": "nico",
          "text": "\"Non ho detto questo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-B-R-M03",
          "sender": "nico",
          "text": "Ho aspettato. Non ha detto neanche che andasse tutto bene.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto perché voleva che smettessi.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-C-R-M02",
          "sender": "nico",
          "text": "Ha guardato verso l'edificio principale. \"Perché ti si nota.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S05-C11-C-R-M03",
          "sender": "nico",
          "text": "Mi è passata la voglia di alzare la voce.",
          "delayMs": 1200,
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
          "text": "Prima di andare mi ha detto: \"Se proprio devi fare domande, almeno smetti di farle alle persone sbagliate.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B04-M02",
          "sender": "nico",
          "text": "\"E a chi dovrei farle?\"",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B04-M03",
          "sender": "nico",
          "text": "Mi ha guardato, ma non ha risposto. Poi se n'è andata.",
          "delayMs": 1200,
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
          "text": "Ripenso a quello che mi ha detto. Non ha provato a spiegarmi il cancello o a difendere Tommaso.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B05-M02",
          "sender": "nico",
          "text": "Voleva che smettessi di chiedere in giro.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S05-B05-M03",
          "sender": "nico",
          "text": "Stavolta non credo di vedere solo quello che mi fa comodo.",
          "delayMs": 1200,
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
          "text": "La porta è socchiusa. Da dove lavoro riesco a vedere dentro.",
          "delayMs": 1200,
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
          "text": "Ci sono scatole di medicinali, garze, flaconi e guanti. Altra roba sanitaria che non riconosco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M02",
          "sender": "nico",
          "text": "Poi le taniche. E confezioni d'acqua, parecchie.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B02-M03",
          "sender": "nico",
          "text": "Presa una cosa alla volta non saprei cosa obiettare. Ma insieme fanno una quantità di roba che non mi aspettavo.",
          "delayMs": 1200,
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
          "text": "Non posso fermarmi a guardare, entra ed esce gente.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B03-M02",
          "sender": "nico",
          "text": "Non so quanta roba ci sia di preciso, cosa contengano le taniche o a cosa servano quei medicinali.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B03-M03",
          "sender": "nico",
          "text": "So che non sembra la scorta di cerotti di un agriturismo.",
          "delayMs": 1200,
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
          "text": "Magari si preparano a qualche emergenza. Qui sono isolati, può avere senso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B04-M02",
          "sender": "nico",
          "text": "Potrebbero essere prepper, gente che fa scorte per paura che succeda qualcosa.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B04-M03",
          "sender": "nico",
          "text": "È la spiegazione migliore che mi viene. Non mi entusiasma neanche questa.",
          "delayMs": 1200,
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
          "text": "Mi verrebbe da chiedere a cosa serve tutto, ma continuo a sentire Marta che mi dice di smetterla.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B05-M02",
          "sender": "nico",
          "text": "Quindi sposto le mie cose e cerco di non fissare la porta.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S06-B05-M03",
          "sender": "nico",
          "text": "Non sono portato per fare finta di niente. Avrai notato.",
          "delayMs": 1200,
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
          "text": "Ho lavorato un po' con Lea. Tovaglie e ceste da preparare per domani.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B01-M02",
          "sender": "nico",
          "text": "Lei almeno parla anche di cose che capisco. Mi sono rilassato un attimo.",
          "delayMs": 1200,
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
          "text": "Aveva un lavoro, un compagno, una casa. La famiglia.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B02-M03",
          "sender": "nico",
          "text": "Alla fine le ho chiesto perché avesse lasciato tutto.",
          "delayMs": 1200,
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
          "text": "Ha continuato a piegare la tovaglia. Non sembrava aspettare un'altra domanda.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M03",
          "sender": "nico",
          "text": "Gliel'ho fatta io. \"E adesso?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M04",
          "sender": "nico",
          "text": "\"Adesso almeno so perché mi sveglio la mattina.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B03-M05",
          "sender": "nico",
          "text": "Non mi è venuta nessuna battuta.",
          "delayMs": 1200,
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
          "text": "Poi ha aggiunto: \"Fuori ero libera di fare qualsiasi cosa. Non sapevo cosa farne.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B04-M02",
          "sender": "nico",
          "text": "Avrei voluto non capire cosa intendeva.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto se non le mancasse mai la vita di prima.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-A-R-M02",
          "sender": "nico",
          "text": "Ci ha pensato. \"Alcune persone sì. La vita, no.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-A-R-M03",
          "sender": "nico",
          "text": "È rimasta un momento con la tovaglia in mano, poi l'ha messa sulle altre.",
          "delayMs": 1200,
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
          "text": "\"Qui ti senti libera?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-B-R-M02",
          "sender": "nico",
          "text": "Ha sorriso. \"Più di prima.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-B-R-M03",
          "sender": "nico",
          "text": "Mi è venuto da guardare verso il cancello.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-B-R-M04",
          "sender": "nico",
          "text": "Lei ha seguito il mio sguardo. Siamo rimasti zitti tutti e due.",
          "delayMs": 1200,
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
          "text": "L'ho lasciata parlare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-C-R-M02",
          "sender": "nico",
          "text": "Dice che fuori passava il tempo a scegliere tra cose che non le interessavano davvero.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-C-R-M03",
          "sender": "nico",
          "text": "\"Qui almeno servo a qualcosa.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S07-C12-C-R-M04",
          "sender": "nico",
          "text": "Mi ha passato una tovaglia. Sembrava contenta di essere lì con quel lavoro da finire.",
          "delayMs": 1200,
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
          "text": "Sarebbe più facile se Lea fosse stupida. Potrei dirmi che si è fatta fregare e basta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B05-M02",
          "sender": "nico",
          "text": "Ma non lo è. E neanche Tommaso o Elia.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B05-M03",
          "sender": "nico",
          "text": "Mi ritrovo a pensare che forse loro abbiano capito qualcosa che a me manca.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S07-B05-M04",
          "sender": "nico",
          "text": "Poi mi ricordo dei miei documenti nell'armadio.",
          "delayMs": 1200,
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
          "text": "Ho trovato Marta fuori, sotto la tettoia tra i dormitori. Piove ancora, più piano.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B01-M02",
          "sender": "nico",
          "text": "Le ho chiesto se andasse tutto bene.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B01-M03",
          "sender": "nico",
          "text": "\"Non dormo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B01-M04",
          "sender": "nico",
          "text": "Sono rimasto con lei.",
          "delayMs": 1200,
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
          "text": "Dopo un po' mi ha chiesto: \"Non fai battute?\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M02",
          "sender": "nico",
          "text": "Le ho detto che ne avevo una, ma era brutta.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M03",
          "sender": "nico",
          "text": "\"Quindi come le altre.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B02-M04",
          "sender": "nico",
          "text": "Mi è scappato da ridere. Era la prima cosa normale che mi diceva da ore.",
          "delayMs": 1200,
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
          "text": "Poi: \"Cosa hai visto nel deposito?\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B03-M02",
          "sender": "nico",
          "text": "Non mi ha chiesto se c'ero stato. Sapeva già che avevo guardato.",
          "delayMs": 1200,
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
          "text": "Le ho raccontato tutto: medicinali, garze, guanti, flaconi. Le taniche, l'acqua e il resto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M02",
          "sender": "nico",
          "text": "Ha ascoltato senza interrompermi. Alla fine: \"Quanto materiale?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M03",
          "sender": "nico",
          "text": "Le ho detto che non avevo contato, ma che mi sembrava troppo per una scorta normale.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-A-R-M04",
          "sender": "nico",
          "text": "Ha annuito. Non era sorpresa.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto perché le interessasse tanto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M02",
          "sender": "nico",
          "text": "È rimasta zitta un momento. \"Voglio sapere cosa stanno preparando.\"",
          "delayMs": 2200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M03",
          "sender": "nico",
          "text": "\"Sì, anch'io. Ma tu cosa c'entri?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M04",
          "sender": "nico",
          "text": "Ha abbassato gli occhi. \"Di questo non voglio parlare.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-B-R-M05",
          "sender": "nico",
          "text": "Almeno stavolta era chiaro cosa non voleva dirmi.",
          "delayMs": 1200,
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
          "text": "Le ho parlato solo del materiale medico.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-C-R-M02",
          "sender": "nico",
          "text": "\"Solo quello?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-C13-C-R-M03",
          "sender": "nico",
          "text": "L'ha chiesto subito. Credo sapesse già che c'era dell'altro e aspettasse di sentirlo da me.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto se sapesse cos'è il Giorno Bianco.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B04-M02",
          "sender": "nico",
          "text": "\"Non abbastanza.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B04-M03",
          "sender": "nico",
          "text": "Non sembrava che stesse cercando di chiudere il discorso. Sembrava proprio che non sapesse abbastanza.",
          "delayMs": 1200,
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
          "text": "Le ho detto che ormai faccio fatica a pensare al cancello, ai documenti e al deposito come a tre cose separate.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B05-M02",
          "sender": "nico",
          "text": "\"Nemmeno io.\"",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B05-M03",
          "sender": "nico",
          "text": "Per la prima volta non ho dovuto tirarle fuori una risposta.",
          "delayMs": 1200,
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
          "text": "Siamo rimasti ancora un po' sotto la tettoia, senza parlare.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B06-M02",
          "sender": "nico",
          "text": "Mi faceva piacere starle vicino. Ma avevo anche voglia che mi dicesse che stavo esagerando, che c'era una spiegazione.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S08-B06-M03",
          "sender": "nico",
          "text": "Non l'ha fatto.",
          "delayMs": 1800,
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
          "text": "Giorno quattro. Ho trovato una presa per il telefono.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B01-M02",
          "sender": "nico",
          "text": "È in una stanzetta vicino all'ufficio: scatole, faldoni, moduli. Sembra un archivio amministrativo.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B01-M03",
          "sender": "nico",
          "text": "Non pensavo mi sarei emozionato davanti a una presa di corrente.",
          "delayMs": 1200,
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
          "text": "Devo lasciarlo attaccato qualche minuto. Aspetto qui.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B02-M02",
          "sender": "nico",
          "text": "Ci sono dei nomi sulle scatole.",
          "delayMs": 1200,
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
          "text": "Ne ho aperta una. È piena di lettere, decine.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B03-M02",
          "sender": "nico",
          "text": "Sulle buste ci sono nomi, destinatari, indirizzi.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B03-M03",
          "sender": "nico",
          "text": "Nessun francobollo.",
          "delayMs": 1200,
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
          "text": "Ho letto solo qualche pezzo. Non riesco a capire.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B04-M02",
          "sender": "nico",
          "text": "\"Quando riceverai questa lettera...\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B04-M03",
          "sender": "nico",
          "text": "\"Non essere triste...\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B04-M04",
          "sender": "nico",
          "text": "\"Non avrei potuto chiedere una famiglia migliore...\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B04-M05",
          "sender": "nico",
          "text": "\"Finalmente non ho più paura...\"",
          "delayMs": 1200,
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
          "text": "Ne ho aperta un'altra. È scritta nello stesso modo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-A-R-M02",
          "sender": "nico",
          "text": "Come se quando arriva, chi l'ha scritta non dovesse esserci più.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-A-R-M03",
          "sender": "nico",
          "text": "Basta, non ne voglio leggere altre.",
          "delayMs": 1200,
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
          "text": "Sì, le rimetto giù.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-B-R-M02",
          "sender": "nico",
          "text": "Mi sembra di stare leggendo qualcosa che non dovevo vedere.",
          "delayMs": 1200,
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
          "text": "Sto guardando solo nomi e date.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-C-R-M02",
          "sender": "nico",
          "text": "Sono persone diverse, scrivono ai familiari. Indirizzi diversi. Sembrano lettere recenti.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S09-C14-C-R-M03",
          "sender": "nico",
          "text": "Non è una scatola dimenticata qui da anni.",
          "delayMs": 1200,
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
          "text": "Sembrano lettere d'addio.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B05-M02",
          "sender": "nico",
          "text": "Vorrei scriverti un'altra cosa, ma è quello che sembrano.",
          "delayMs": 3000,
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
          "text": "La batteria è salita un po'. Stacco il telefono.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S09-B06-M02",
          "sender": "nico",
          "text": "Me ne vado prima che entri qualcuno.",
          "delayMs": 1200,
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
          "text": "Sono fuori. Ho il telefono e abbastanza batteria per pensarci un momento.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B01-M02",
          "sender": "nico",
          "text": "Continuo a ripetermi che quelle frasi possono voler dire altro. Erano per i familiari, non avevano francobolli...",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B01-M03",
          "sender": "nico",
          "text": "Tu come le leggeresti?",
          "delayMs": 1800,
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
          "text": "Sì, tipo un esercizio: scrivi una lettera come se stessi per morire, per capire cosa conta davvero.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-A-R-M02",
          "sender": "nico",
          "text": "O per lasciarti dietro la vecchia identità. Qui ne parlano di continuo.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-A-R-M03",
          "sender": "nico",
          "text": "È una cosa che fanno, no?",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-A-R-M04",
          "sender": "nico",
          "text": "Dimmi che non ce la stiamo inventando adesso.",
          "delayMs": 1200,
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
          "text": "Lo so. Quando le ho lette ho pensato la stessa cosa.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-B-R-M02",
          "sender": "nico",
          "text": "Ma se sono davvero lettere d'addio, queste persone a cosa stanno dicendo addio? Quando?",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-B-R-M03",
          "sender": "nico",
          "text": "Mi sembra assurdo perfino scrivertelo.",
          "delayMs": 1200,
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
          "text": "Sì, devo parlarne con Marta. Ormai sa che sto guardando e sa più cose di me.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-C15-C-R-M02",
          "sender": "nico",
          "text": "La cerco appena posso. Voglio vedere che faccia fa davanti a quelle lettere.",
          "delayMs": 1200,
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
          "text": "Continuo a cercare una spiegazione innocua. Magari è solo un esercizio: le scrivono, le conservano, alla fine del percorso le rileggono o le bruciano.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B02-M02",
          "sender": "nico",
          "text": "Penso alla gente che ho visto stamattina. Lavoravano, parlavano del pranzo.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B02-M03",
          "sender": "nico",
          "text": "Faccio fatica a immaginarli mentre preparano qualcosa di terribile.",
          "delayMs": 1200,
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
          "text": "Ieri probabilmente mi sarebbe bastata questa spiegazione.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S10-B03-M02",
          "sender": "nico",
          "text": "Oggi provo a crederci e continuo a tornare a quelle frasi.",
          "delayMs": 1200,
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
          "text": "Sono tornato dentro un momento. Mi era venuto il dubbio di aver lasciato la scatola fuori posto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B01-M02",
          "sender": "nico",
          "text": "Mi sono messo a sistemarla come se qualcuno dovesse controllare i millimetri.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B01-M03",
          "sender": "nico",
          "text": "È entrata Marta.",
          "delayMs": 1200,
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
          "text": "Mi ha visto con le lettere in mano e ha chiuso la porta.",
          "delayMs": 2000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B02-M02",
          "sender": "nico",
          "text": "Sembrava spaventata. Ma non sorpresa di trovarle qui.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto quali nomi intendesse.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B03-M03",
          "sender": "nico",
          "text": "Non mi ha risposto. Ha cominciato ad aprire scatole, veloce. Sembrava sapere quali scartare.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto: \"Marta, che cazzo stai cercando?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-A-R-M02",
          "sender": "nico",
          "text": "\"Una scatola vecchia.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-A-R-M03",
          "sender": "nico",
          "text": "\"Con dentro cosa?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-A-R-M04",
          "sender": "nico",
          "text": "\"Lasciami cercare, per favore.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-A-R-M05",
          "sender": "nico",
          "text": "Mi sono spostato. Non mi stava più guardando.",
          "delayMs": 1200,
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
          "text": "Le ho fatto spazio e ho cominciato ad aiutarla.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-B-R-M02",
          "sender": "nico",
          "text": "Le ho chiesto solo quali anni guardare. \"Due anni fa.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-B-R-M03",
          "sender": "nico",
          "text": "Sto controllando le date. Non mi ha ancora detto cosa cerca.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto se c'entrasse la persona della foto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-C-R-M02",
          "sender": "nico",
          "text": "Si è fermata con una mano sulla scatola.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-C-R-M03",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S11-C16-C-R-M04",
          "sender": "nico",
          "text": "Poi ha ripreso a cercare.",
          "delayMs": 1200,
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
          "text": "L'ha trovata. Una scatola più vecchia, polvere sui bordi, date di due anni fa.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B04-M02",
          "sender": "nico",
          "text": "Sta passando i nomi uno per uno.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B04-M03",
          "sender": "nico",
          "text": "Si è fermata su Anna.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto chi fosse.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B05-M02",
          "sender": "nico",
          "text": "Ha preso una delle carte. È rimasta a guardarla prima di rispondermi.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S11-B05-M03",
          "sender": "nico",
          "text": "\"Mia sorella.\"",
          "delayMs": 3000,
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
          "text": "Anna era sua sorella maggiore. Veniva qui già da anni.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B01-M02",
          "sender": "nico",
          "text": "All'inizio ogni tanto, poi sempre più spesso. Aveva smesso di vedere gli amici, lasciato il lavoro. Chiamava sempre meno a casa.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B01-M03",
          "sender": "nico",
          "text": "Alla fine si era trasferita all'Aurora.",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B01-M04",
          "sender": "nico",
          "text": "Marta me lo racconta senza quasi guardarmi. Tiene ancora le carte in mano.",
          "delayMs": 1200,
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
          "text": "È morta qui, due anni fa.",
          "delayMs": 2500,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B02-M02",
          "sender": "nico",
          "text": "Suicidio. È la versione ufficiale.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B02-M03",
          "sender": "nico",
          "text": "Non so cosa dirle.",
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
          "text": "La famiglia aveva parlato con Elia. Non aveva negato che Anna fosse morta.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B03-M02",
          "sender": "nico",
          "text": "Marta mi ha ripetuto le sue parole: aveva \"scelto di attraversare\".",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B03-M03",
          "sender": "nico",
          "text": "Attraversare. La stessa parola che gli ho sentito usare per il Giorno Bianco.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto cosa fosse successo. Non lo sa esattamente, è per questo che sta cercando.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B04-M02",
          "sender": "nico",
          "text": "La polizia aveva trattato la morte come un suicidio. La famiglia non aveva abbastanza per dimostrare altro, ma le spiegazioni della Comunità non tornavano.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B04-M03",
          "sender": "nico",
          "text": "\"Alla fine Anna non ci raccontava quasi più niente di quello che succedeva qui.\"",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B04-M04",
          "sender": "nico",
          "text": "Marta ha guardato di nuovo le carte. Non mi sembrava il momento di riempirla di domande.",
          "delayMs": 1200,
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
          "text": "Le ho detto che mi dispiace.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-A-R-M02",
          "sender": "nico",
          "text": "\"Lo so.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-A-R-M03",
          "sender": "nico",
          "text": "È rimasta vicina a me. Non ho aggiunto altro.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto se fosse per questo che continuava a tornare.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-B-R-M02",
          "sender": "nico",
          "text": "\"Sì. Voglio sapere cosa è successo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-B-R-M03",
          "sender": "nico",
          "text": "Stavolta mi ha guardato mentre rispondeva.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto perché non me l'avesse detto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-C-R-M02",
          "sender": "nico",
          "text": "\"Perché non sapevo se potevo fidarmi di te.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S12-C17-C-R-M03",
          "sender": "nico",
          "text": "Ci sono rimasto male. Anche sapendo quanto poco ci conosciamo.",
          "delayMs": 1200,
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
          "text": "È tornata più volte, fingendosi interessata all'Aurora. Parlava con le persone, guardava, cercava documenti.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M02",
          "sender": "nico",
          "text": "Le ho chiesto: \"Quindi tu non credi a questa roba?\"",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M03",
          "sender": "nico",
          "text": "\"No.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B05-M04",
          "sender": "nico",
          "text": "Mi sono sentito sollevato. Subito dopo mi sono vergognato di aver pensato anche a quello.",
          "delayMs": 1200,
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
          "text": "Ripenso alla foto. A tutte le volte che le ho chiesto di questo posto e lei ha cambiato discorso.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S12-B06-M02",
          "sender": "nico",
          "text": "Io cercavo di capire se le piacessi. Lei cercava qualcosa su sua sorella.",
          "delayMs": 1200,
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
          "text": "Adesso mi sta arrivando tutto il resto.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B01-M02",
          "sender": "nico",
          "text": "Prima riuscivo a pensare solo ad Anna. Ora guardo Marta e penso che lo sapeva, quando sono salito su quel pulmino.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B01-M03",
          "sender": "nico",
          "text": "Sono arrabbiato. Non so neanche da dove cominciare.",
          "delayMs": 1800,
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
          "text": "Le ho detto: \"Potevi dirmi che tua sorella era morta qui.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B02-M02",
          "sender": "nico",
          "text": "\"E tu potevi chiedermi qualcosa prima di decidere di venire. Ci conosciamo appena, Nico.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B02-M03",
          "sender": "nico",
          "text": "\"Ti sto dicendo che non lo sapevo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B02-M04",
          "sender": "nico",
          "text": "Stavamo cominciando a parlare uno sopra l'altra.",
          "delayMs": 1200,
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
          "text": "Le ho detto che sapeva benissimo che sarei venuto.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B03-M02",
          "sender": "nico",
          "text": "\"Non ti ho invitato.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B03-M03",
          "sender": "nico",
          "text": "È vero. Le avevo chiesto io se accettavano persone nuove, poi mi ero offerto di venire.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B03-M04",
          "sender": "nico",
          "text": "Me lo ricordo. Non è quello che sto cercando di dirle.",
          "delayMs": 1200,
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
          "text": "\"Lascia perdere chi ha invitato chi. Potevi avvertirmi che era pericoloso.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-A-R-M02",
          "sender": "nico",
          "text": "\"Non sapevo quanto.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-A-R-M03",
          "sender": "nico",
          "text": "\"Ma abbastanza da dover fingere di essere qui per un ritiro.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-A-R-M04",
          "sender": "nico",
          "text": "Non ha risposto. Ho dovuto fermarmi anch'io prima di alzare la voce.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto: \"Mi hai usato?\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-B-R-M02",
          "sender": "nico",
          "text": "\"Non all'inizio.\"",
          "delayMs": 2500,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-B-R-M03",
          "sender": "nico",
          "text": "Sono rimasto a guardarla. Speravo ancora che aggiungesse qualcosa.",
          "delayMs": 3000,
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
          "text": "Le ho chiesto perché le facesse comodo avermi qui.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-C-R-M02",
          "sender": "nico",
          "text": "Ci ha messo un po' a rispondere. \"Perché sei esterno. Non conosci nessuno, non devi niente a nessuno.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-C18-C-R-M03",
          "sender": "nico",
          "text": "Tutte cose vere. Mi ha fatto male sentirmi descritto così.",
          "delayMs": 1800,
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
          "text": "Poi ha detto: \"Quando ho capito che saresti venuto davvero, ho pensato che qualcuno fuori da questa storia potesse aiutarmi.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B04-M02",
          "sender": "nico",
          "text": "\"Quindi ti faceva comodo.\"",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B04-M03",
          "sender": "nico",
          "text": "\"Sì.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B04-M04",
          "sender": "nico",
          "text": "Non ha provato a giustificarsi. Io avrei quasi preferito litigare ancora.",
          "delayMs": 1200,
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
          "text": "Le ho chiesto se, sapendo quello che sappiamo adesso, avrebbe fatto qualcosa di diverso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B05-M02",
          "sender": "nico",
          "text": "\"Ti avrei detto di non venire.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B05-M03",
          "sender": "nico",
          "text": "\"Adesso è un po' tardi.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B05-M04",
          "sender": "nico",
          "text": "\"Lo so.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S13-B05-M05",
          "sender": "nico",
          "text": "Siamo rimasti lì. Non mi era passata, ma non sapevo cos'altro dirle.",
          "delayMs": 1200,
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
          "text": "Abbiamo ripreso a guardare le carte. C'è una lettera di Anna nella scatola vecchia, separata da quelle recenti.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B01-M02",
          "sender": "nico",
          "text": "Marta ha riconosciuto la grafia prima di leggere il nome.",
          "delayMs": 1800,
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
          "text": "Scrive alla famiglia, cerca di rassicurarli. All'inizio potrebbe essere una lettera normale.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B02-M02",
          "sender": "nico",
          "text": "Poi il tono cambia. Non so se stia salutando o cercando di spiegare qualcosa che non riesce a dire apertamente.",
          "delayMs": 1200,
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
          "text": "Parla di Elia. Dice che le ha ricordato che avere paura non significa voler tornare indietro.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B03-M02",
          "sender": "nico",
          "text": "Parla anche di una preparazione.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B03-M03",
          "sender": "nico",
          "text": "Due anni fa. Usavano già quella parola.",
          "delayMs": 1200,
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
          "text": "Più sotto c'è scritto \"prima attraversata\". Minuscolo, come se non ci fosse bisogno di spiegare cosa fosse.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B04-M02",
          "sender": "nico",
          "text": "Marta ha riletto la riga. Poi ancora.",
          "delayMs": 1800,
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
          "text": "C'è anche questa frase: \"Se funziona con noi\".",
          "delayMs": 5000,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B05-M02",
          "sender": "nico",
          "text": "Non riesco a smettere di guardarla.",
          "delayMs": 1200,
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
          "text": "Le ho detto: \"Sembra una prova.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-A-R-M02",
          "sender": "nico",
          "text": "Marta è rimasta a guardare il foglio. \"È quello che sto pensando anch'io.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-A-R-M03",
          "sender": "nico",
          "text": "Non sa cosa fosse. Ma ci siamo fermati sulla stessa frase.",
          "delayMs": 1200,
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
          "text": "Ho provato a dire che poteva essere un esercizio.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-B-R-M02",
          "sender": "nico",
          "text": "\"Anna è morta.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-B-R-M03",
          "sender": "nico",
          "text": "Mi sono fermato. Non volevo far finta che quella parte non ci fosse.",
          "delayMs": 2500,
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
          "text": "Le ho chiesto se sapesse cosa fosse la Prima Attraversata.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-C-R-M02",
          "sender": "nico",
          "text": "\"No. Avevo trovato dei riferimenti alla preparazione. Questo nome non l'avevo mai visto.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S14-C19-C-R-M03",
          "sender": "nico",
          "text": "Continua a leggere, ma non sembra trovare una spiegazione.",
          "delayMs": 1200,
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
          "text": "Per ora abbiamo questo: Anna aveva paura, Elia le parlava di andare avanti e c'era una preparazione per qualcosa chiamato Prima Attraversata.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B06-M02",
          "sender": "nico",
          "text": "Poi quel \"con noi\".",
          "delayMs": 1800,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B06-M03",
          "sender": "nico",
          "text": "Non \"con me\".",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S14-B06-M04",
          "sender": "nico",
          "text": "Chi altro c'era?",
          "delayMs": 1200,
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
          "text": "Le ho detto: \"Prendiamo questa roba e andiamo dalla polizia.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B01-M02",
          "sender": "nico",
          "text": "\"Come ci arriviamo?\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B01-M03",
          "sender": "nico",
          "text": "\"Usciamo.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B01-M04",
          "sender": "nico",
          "text": "Ha guardato verso il cancello. L'ho guardato anch'io.",
          "delayMs": 1200,
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
          "text": "Proviamo col telefono. Per una volta la batteria c'è.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B02-M02",
          "sender": "nico",
          "text": "Il campo no. Compare una tacca, poi sparisce prima che riesca a fare qualcosa.",
          "delayMs": 1200,
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
          "text": "Provo a chiamare adesso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-A-R-M02",
          "sender": "nico",
          "text": "È partita. Mi sembra di sentire una voce.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-A-R-M03",
          "sender": "nico",
          "text": "Niente, è caduta.",
          "delayMs": 2500,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-A-R-M04",
          "sender": "nico",
          "text": "Non sono riuscito a spiegare nulla.",
          "delayMs": 1200,
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
          "text": "Ci siamo spostati più in alto, dietro l'edificio. Per qualche secondo sono comparse due tacche.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-B-R-M02",
          "sender": "nico",
          "text": "Ho chiamato. È partita, poi è caduta prima che riuscissi a spiegare.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-B-R-M03",
          "sender": "nico",
          "text": "Continuo a guardare lo schermo. Non torna.",
          "delayMs": 1200,
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
          "text": "Ho provato a mandare: \"Se smetto di rispondere chiama aiuto. Aurora, valle.\"",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-C-R-M02",
          "sender": "nico",
          "text": "È rimasto in invio. Poi per un secondo è comparso inviato.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S15-C20-C-R-M03",
          "sender": "nico",
          "text": "Non so se sia arrivato. Non posso stare qui a contarci.",
          "delayMs": 1200,
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
          "text": "Proveremo ancora. I messaggi ogni tanto passano, una chiamata non riesce a reggere.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B03-M02",
          "sender": "nico",
          "text": "Ma non posso girare mezz'ora col telefono in mano. Se lo vedono, rischio di perdere anche questo.",
          "delayMs": 1200,
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
          "text": "Le ho detto che dobbiamo andarcene. Adesso.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B04-M02",
          "sender": "nico",
          "text": "\"Voglio sapere cos'era la Prima Attraversata.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B04-M03",
          "sender": "nico",
          "text": "\"Marta, Anna è morta.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S15-B04-M04",
          "sender": "nico",
          "text": "\"Lo so. È per questo che voglio saperlo.\"",
          "delayMs": 1200,
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
          "text": "Marta mi ha chiesto un giorno. Uno solo.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B01-M02",
          "sender": "nico",
          "text": "Dice che se c'è altro sulla Prima Attraversata sarà nell'archivio privato, quello vicino all'ufficio di Elia.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B01-M03",
          "sender": "nico",
          "text": "Nella stanza di prima non troveremo abbastanza.",
          "delayMs": 1800,
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
          "text": "Le ho detto di no.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B02-M02",
          "sender": "nico",
          "text": "Abbiamo trovato lettere che sembrano d'addio. Sua sorella è morta qui. Non ci ridanno i documenti, il cancello è chiuso e non riusciamo nemmeno a chiamare aiuto.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B02-M03",
          "sender": "nico",
          "text": "Non voglio un'altra spiegazione. Voglio andarmene.",
          "delayMs": 1800,
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
          "text": "Mi ha detto: \"Tu puoi provare ad andartene. Io resto.\"",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B03-M02",
          "sender": "nico",
          "text": "Non mi ha chiesto di restare con lei.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B03-M03",
          "sender": "nico",
          "text": "Avrei quasi preferito che lo facesse.",
          "delayMs": 1200,
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
          "text": "Dimmi di no. Sul serio.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B04-M02",
          "sender": "nico",
          "text": "Dimmi che devo lasciarla qui e provare a uscire.",
          "delayMs": 1200,
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
          "text": "Lo so. Hai ragione: se rimango bloccato non aiuto nessuno.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-A-R-M02",
          "sender": "nico",
          "text": "Sto cercando di immaginarmi mentre esco e lei resta qui da sola.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-A-R-M03",
          "sender": "nico",
          "text": "Non ci riesco.",
          "delayMs": 3000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-A-R-M04",
          "sender": "nico",
          "text": "Mi dispiace. Ti ho chiesto un consiglio e non riesco a seguirlo.",
          "delayMs": 1200,
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
          "text": "Un giorno, poi fuori insieme.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-B-R-M02",
          "sender": "nico",
          "text": "Detto da te sembra quasi ragionevole. Non so se ringraziarti.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-B-R-M03",
          "sender": "nico",
          "text": "Va bene. Un giorno.",
          "delayMs": 1200,
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
          "text": "Ci ho provato. Le ho detto che quello che può trovare non vale il rischio di restare qui.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-C-R-M02",
          "sender": "nico",
          "text": "\"Per te.\"",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-C-R-M03",
          "sender": "nico",
          "text": "Non ha aggiunto altro. Io avevo ancora pronta mezza frase e non sono riuscito a finirla.",
          "delayMs": 1200,
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
          "text": "Sì, lo so che sono un idiota.",
          "delayMs": 0,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-D-R-M02",
          "sender": "nico",
          "text": "Speravo avessi un argomento che mi facesse venire voglia di lasciarla qui.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S16-C21-D-R-M03",
          "sender": "nico",
          "text": "Questo lo conoscevo già.",
          "delayMs": 1200,
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
          "text": "Le do un giorno. La aiuto a trovare quello che cerca, poi ce ne andiamo.",
          "delayMs": 4000,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B05-M02",
          "sender": "nico",
          "text": "Gliel'ho detto proprio così: un giorno, poi fuori.",
          "delayMs": 1200,
          "delivery": "live"
        },
        {
          "id": "A2-S16-B05-M03",
          "sender": "nico",
          "text": "Sto cercando di crederci anch'io.",
          "delayMs": 1200,
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
