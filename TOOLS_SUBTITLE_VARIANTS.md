# 🎨 Variantes de Subtitles pour Tools

## 📖 Concept

Chaque outil peut maintenant avoir **plusieurs variantes de subtitle**. À chaque génération de post, le système sélectionne **aléatoirement** une variante parmi celles disponibles pour chaque outil.

## 🏗️ Structure

### Avant (un seul subtitle)
```javascript
{
  id: "admitted",
  title: "Admitted",
  subtitle: "un seul texte fixe",  // ❌ Toujours le même
  position: 2
}
```

### Maintenant (variantes multiples)
```javascript
{
  id: "admitted",
  title: "Admitted",
  subtitles: [  // ✅ Array de variantes
    "première version du texte...",
    "deuxième version du texte...",
    "troisième version du texte..."
  ],
  position: 2
}
```

## 🎯 Fonctionnement

Quand un post "Tools" est généré :

1. **Pour chaque outil**, le système :
   - Lit le tableau `subtitles[]`
   - Sélectionne **aléatoirement** un index
   - Utilise ce subtitle pour le screen

2. **Résultat** : Chaque génération peut avoir des textes différents pour le même outil !

## 📝 Exemple Complet - Outil "Admitted"

```javascript
{
  id: "admitted",
  title: "Admitted",
  subtitles: [
    // Variante 1 - Focus sur l'aspect abordable
    "lowkey a life-saver if you can't drop thousands of $$$ on a counselor.\n\ntheir essay review tool is super detailed, like they'll grade you and give line-by-line feedback instead of just vague \"this could be stronger\" comments.\n\nalso has a grading feature that shows where your essay stands and is pretty affordable",
    
    // Variante 2 - Focus sur la qualité du feedback
    "honestly the best tool if you're on a budget. gives you AI-powered feedback that's actually specific, not generic bs.\n\nthey literally grade your essay and show you exactly where you're losing points. way better than asking your english teacher for the 5th time",
    
    // Variante 3 - Comparaison prix/valeur
    "this saved me so much money. instead of paying $200+/hr for a counselor, i got detailed line-by-line feedback for like $20.\n\nthe grading system is super helpful too, shows you where your essay actually stands compared to accepted students",
    
    // Variante 4 - Angle "secret weapon"
    "my secret weapon for essays. the AI actually understands what AOs are looking for.\n\ngives you a score + breakdown of what's working and what's not. way more actionable than generic advice",
    
    // Variante 5 - Témoignage personnel
    "used this for all 15 of my supplemental essays. saved me hundreds of hours of second-guessing.\n\nthe instant feedback helped me iterate way faster than waiting days for my counselor to respond"
  ],
  position: 2
}
```

## 🎲 Probabilité

Si tu as 5 variantes pour "Admitted" :
- Chaque variante a **20% de chance** d'être sélectionnée (1/5)
- Plus tu ajoutes de variantes, plus de diversité dans les posts
- Chaque outil peut avoir un **nombre différent** de variantes

## 💡 Stratégies de Variantes

### 1. **Angles Différents**
Varie l'angle de présentation :
```javascript
subtitles: [
  "focus sur le prix bas...",
  "focus sur la qualité...",
  "focus sur la rapidité...",
  "focus sur les résultats..."
]
```

### 2. **Tons Différents**
Varie le ton du message :
```javascript
subtitles: [
  "ton casual et relatable...",
  "ton plus sérieux et informatif...",
  "ton enthousiaste et motivant...",
  "ton franc et direct..."
]
```

### 3. **Longueurs Différentes**
Varie la longueur :
```javascript
subtitles: [
  "version courte en 2 lignes",
  "version moyenne avec détails",
  "version longue avec contexte et bénéfices"
]
```

### 4. **Points Forts Différents**
Mets en avant différents features :
```javascript
subtitles: [
  "met en avant le grading system",
  "met en avant le line-by-line feedback",
  "met en avant les essays d'exemples",
  "met en avant le rapport qualité/prix"
]
```

## ✅ Comment Ajouter des Variantes

### Étape 1 : Trouve l'outil dans `AdmittedClient.jsx`

Cherche dans `toolsResources` :
```javascript
const toolsResources = [
  // ... autres outils
  {
    id: "ton-outil",
    title: "Nom de l'Outil",
    subtitles: [
      "variante existante..."
    ],
    position: X
  }
]
```

### Étape 2 : Ajoute ta nouvelle variante

```javascript
{
  id: "ton-outil",
  title: "Nom de l'Outil",
  subtitles: [
    "variante existante...",
    "ta nouvelle variante ici...",  // ← Ajoute ici
    "encore une autre variante..."  // ← Et ici
  ],
  position: X
}
```

### Étape 3 : Teste

1. Génère plusieurs posts "Tools"
2. Observe les différentes variantes qui apparaissent
3. Ajuste selon tes préférences

## 🎨 Template pour Ajouter une Variante

```javascript
// Template standard (3 paragraphes)
"[accroche/opinion en une ligne]\n\n[détails/bénéfices en 1-2 lignes]\n\n[point final/conclusion en une ligne]"

// Exemple appliqué
"this tool is underrated af\n\nhelps you structure your essays with templates and examples from real admits. saves you from staring at a blank page for hours\n\nonly downside is it can feel a bit cookie-cutter if you follow it too literally"
```

## 📊 Recommandations

| Nombre de Variantes | Effet |
|---------------------|-------|
| 1 variante | Pas de diversité (comme avant) |
| 2-3 variantes | Diversité minimale, bon pour commencer |
| 4-6 variantes | **Optimal** - bon équilibre diversité/gestion |
| 7-10 variantes | Très haute diversité, excellent pour scaling |
| 10+ variantes | Maximum de diversité, peut être difficile à maintenir |

## 🔧 Code Technique (Référence)

La sélection aléatoire se fait ici :

```javascript
const toolScreens = sortedTools.map((tool, index) => {
  // Sélection aléatoire d'un subtitle
  const randomSubtitle = tool.subtitles[
    Math.floor(Math.random() * tool.subtitles.length)
  ]
  
  return {
    screen: index + 2,
    title: tool.title,
    subtitle: randomSubtitle,  // ← Subtitle aléatoire utilisé ici
    image: selectToolImage(tool.id)
  }
})
```

## 💪 Exemple Complet - Tous les Outils avec Variantes

```javascript
const toolsResources = [
  {
    id: "reddit",
    title: "r/ApplyingToCollege",
    subtitles: [
      "version 1 pour reddit...",
      "version 2 pour reddit...",
      "version 3 pour reddit..."
    ],
    position: 5
  },
  {
    id: "prepscholar",
    title: "PrepScholar Blog",
    subtitles: [
      "version 1 pour prepscholar...",
      "version 2 pour prepscholar..."
    ],
    position: 4
  },
  {
    id: "collegeguy",
    title: "College Essay Guy",
    subtitles: [
      "version 1 pour collegeguy...",
      "version 2 pour collegeguy...",
      "version 3 pour collegeguy...",
      "version 4 pour collegeguy..."
    ],
    position: 3
  },
  {
    id: "admitted",
    title: "Admitted",
    subtitles: [
      "version 1 pour admitted...",
      "version 2 pour admitted...",
      "version 3 pour admitted...",
      "version 4 pour admitted...",
      "version 5 pour admitted..."
    ],
    position: 2
  }
]
```

## 🎯 Cas d'Usage

### Scénario 1 : A/B Testing
"Je veux tester quel angle convertit le mieux"
→ Ajoute 2-3 variantes avec des angles différents

### Scénario 2 : Diversité de Contenu
"Je veux que mes posts ne se ressemblent pas trop"
→ Ajoute 5-7 variantes par outil

### Scénario 3 : Ciblage d'Audience
"Je veux parler à différents profils d'étudiants"
→ Variantes pour différentes situations (budget, GPA, deadlines, etc.)

---

**Note** : Tu peux mélanger les stratégies ! Un outil peut avoir 3 variantes tandis qu'un autre en a 8. C'est totalement flexible. 🚀

