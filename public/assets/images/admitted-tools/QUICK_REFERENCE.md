# 🚀 Quick Reference - Tools Category

## Checklist pour Ajouter des Images

- [ ] Crée tes screenshots avec les logos visibles
- [ ] Place-les dans les bons dossiers :
  - `reddit/` → r/ApplyingToCollege screenshots
  - `prepscholar/` → PrepScholar screenshots  
  - `collegeguy/` → College Essay Guy screenshots
  - `admitted/` → Admitted screenshots
- [ ] Teste en cliquant plusieurs fois sur "Generate New Post"
- [ ] Vérifie que chaque outil affiche la bonne image

## Ordre d'Affichage (Tools Post)

| Screen | Position | Outil | Dossier Image |
|--------|----------|-------|---------------|
| 1 | Hook | "ranking college app resources..." | `admitted-hooks/general/` |
| 2 | #5 | r/ApplyingToCollege | `admitted-tools/reddit/` |
| 3 | #4 | PrepScholar Blog | `admitted-tools/prepscholar/` |
| 4 | #3 | College Essay Guy | `admitted-tools/collegeguy/` |
| 5 | #2 | **Admitted** ⭐ | `admitted-tools/admitted/` |
| 6 | Caption | (hashtags) | aucune image |

## Textes des Tools

### 5. r/ApplyingToCollege
```
this subreddit is like the wild west of admissions, you'll see everything from 
chance-me posts to niche questions you won't find elsewhere.

its super useful for quick takes, but the comparison culture + negativity can 
get messy and toxic
```

### 4. PrepScholar Blog
```
PrepScholar has guides on everything: essays, test prep, APs, college lists.

super organized and reliable if you're just starting out, but it can also 
feel a bit generic.

still one of the better free foundations out there
```

### 3. College Essay Guy
```
this dude is the goat, his free guides + brainstorming exercises make it way 
easier to start instead of staring at a blank doc.

i used his stuff to structure my essays and it helped a ton, only downside is 
his guides aren't that personalized
```

### 2. Admitted
```
lowkey a life-saver if you can't drop thousands of $$$ on a counselor.

their essay review tool is super detailed, like they'll grade you and give 
line-by-line feedback instead of just vague "this could be stronger" comments.

also has a grading feature that shows where your essay stands and is pretty 
affordable
```

## Probabilités de Génération

- 20% → Post "Tools" (5 screens)
- 80% → Post normal "Tips/Hooks" (6 screens)

## Formats d'Images Supportés

✅ `.jpg` `.jpeg` `.png` `.gif` `.webp`

## Exemple de Nommage

```
admitted-tools/
├── reddit/
│   ├── reddit-screenshot-1.jpg
│   ├── reddit-screenshot-2.jpg
│   └── reddit-screenshot-3.jpg
├── prepscholar/
│   ├── prepscholar-1.png
│   └── prepscholar-2.png
├── collegeguy/
│   ├── ceg-1.jpg
│   └── ceg-2.jpg
└── admitted/
    ├── admitted-app-1.jpg
    ├── admitted-app-2.jpg
    └── admitted-app-3.jpg
```

## Point Clé 🔑

**Chaque dossier = Un outil**

Le système mappe automatiquement :
- `toolsResources[].id` → `admitted-tools/{id}/`

Exemple : `id: "reddit"` → cherche dans `admitted-tools/reddit/`

