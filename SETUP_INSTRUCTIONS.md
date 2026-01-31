# 🚀 Google Sheets Setup - Instructions

## Configuration Complète ✅

Ce projet est configuré pour gérer plusieurs applications (Taller, Redflagz) avec leurs propres Google Sheets.

---

## 📋 Vérification de la Configuration

### 1. Vérifier que le service account a accès aux sheets

Pour **Redflagz** :
- Ouvrir : https://docs.google.com/spreadsheets/d/16So-fKWbfmwqkXKt-fROlF4kBsfvuYJ0JfGSayWYkG8
- Vérifier que `taller-form-sync@causal-inquiry-449401-r7.iam.gserviceaccount.com` est dans les partages avec droits "Editor"

Pour **Taller** :
- Ouvrir : https://docs.google.com/spreadsheets/d/10Eootm4BxfHNAJrNpNMlHU3Jur_O-GgjjczoUTmuDiI
- Vérifier que `taller-form-sync@causal-inquiry-449401-r7.iam.gserviceaccount.com` est dans les partages avec droits "Editor"

### 2. Structure des Headers dans Google Sheets

Les deux sheets doivent avoir ces colonnes (ligne 1) :

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Full Name | PayPal Username | TikTok Username | Discord Username | Date Signed | App ID | Contract Type | Has Signature |

### 3. Tester localement

```bash
# 1. Installer les dépendances (si pas déjà fait)
npm install

# 2. Démarrer le serveur
npm run dev

# 3. Ouvrir dans le navigateur :
# - Redflagz : http://localhost:3000/redflagz-agreement
# - Taller : http://localhost:3000/taller-agreement
```

### 4. Tester une soumission

1. Remplir tous les champs du formulaire
2. Signer dans le champ signature
3. Cliquer sur "Submit Agreement"
4. Vérifier dans le Google Sheet correspondant qu'une nouvelle ligne a été ajoutée

---

## 🔧 Variables d'Environnement

Le fichier `.env.local` contient :

```env
# Service Account (partagé)
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}

# Taller
TALLER_SPREADSHEET_ID=...
TALLER_SHEET_NAME=Creators 2.0

# Redflagz
REDFLAGZ_SPREADSHEET_ID=...
REDFLAGZ_SHEET_NAME=Agreements

# Admin
ADMIN_PASSWORD=...
```

⚠️ **Important** : Ce fichier est dans `.gitignore` et ne doit JAMAIS être commité !

---

## 🆕 Ajouter une Nouvelle App

Pour ajouter une nouvelle app (ex: "NewApp") :

### 1. Créer un nouveau Google Sheet
- Créer une nouvelle feuille Google Sheets
- Ajouter les headers (voir structure ci-dessus)
- Partager avec le service account (droits Editor)
- Copier l'ID du spreadsheet

### 2. Ajouter les variables d'environnement dans `.env.local`
```env
NEWAPP_SPREADSHEET_ID=votre_spreadsheet_id
NEWAPP_SHEET_NAME=Sheet1
```

### 3. Ajouter la configuration dans `src/lib/appsConfig.js`
```javascript
newapp: {
	id: 'newapp',
	name: 'NewApp',
	displayName: 'NewApp',
	company: 'Votre Compagnie',
	route: '/newapp-agreement',
	colors: {
		primary: '#3B82F6',
		primaryHover: '#2563EB',
		accent: '#DBEAFE',
	},
	contracts: {
		default: {
			// Configuration du contrat
		},
	},
	sheets: {
		spreadsheetId: process.env.NEWAPP_SPREADSHEET_ID,
		sheetName: process.env.NEWAPP_SHEET_NAME || 'Agreements',
	},
},
```

### 4. Créer la page
Créer `src/app/newapp-agreement/page.js` en copiant le pattern de Taller ou Redflagz.

---

## 🐛 Dépannage

### Erreur : "Configuration error: No spreadsheet configured"
- Vérifier que `.env.local` existe à la racine du projet
- Vérifier que les variables d'environnement sont correctement définies
- Redémarrer le serveur de dev

### Erreur : "Permission denied"
- Vérifier que le service account a bien accès au Google Sheet
- Vérifier que les droits sont "Editor" (pas "Viewer")

### Erreur : "Spreadsheet not found"
- Vérifier l'ID du spreadsheet dans `.env.local`
- Vérifier que le sheet existe et est accessible

---

## 📞 Support

Pour toute question, contacter l'équipe technique.
