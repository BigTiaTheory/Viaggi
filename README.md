# Viaggi

App per organizzare l'itinerario dei viaggi giorno per giorno, con sincronizzazione in tempo reale tra più persone (Firebase Firestore, piano gratuito).

## File
- `index.html` – l'app
- `firebase-config.js` – QUI incolli i dati del tuo progetto Firebase
- `firestore.rules` – regole di sicurezza da incollare in Firebase
- `manifest.webmanifest`, `sw.js`, icone – installazione sulla home e uso offline

## Configurazione (una sola volta)
1. Vai su https://console.firebase.google.com e crea un progetto (puoi disattivare Google Analytics).
2. Menu **Build → Firestore Database → Create database**: scegli una regione europea (es. `eur3`) e la modalità produzione.
3. Scheda **Regole**: cancella il contenuto, incolla quello di `firestore.rules` e premi **Pubblica**.
4. **Impostazioni progetto** (ingranaggio) → **Le tue app** → icona web `</>` → registra l'app (senza Hosting) e copia l'oggetto `firebaseConfig`.
5. Apri `firebase-config.js` su GitHub (matita per modificare) e sostituisci i valori con quelli copiati. Salva con **Commit changes**.
6. Carica su GitHub anche gli altri file aggiornati (sostituendo quelli vecchi).

## Condividere un viaggio
- Apri il viaggio → **👥 Condividi** → invia il link o il codice.
- Dall'altro telefono, nell'app installata: **👥 Unisciti con un codice** e incolla il codice.
