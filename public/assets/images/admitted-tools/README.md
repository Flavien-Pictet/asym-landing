# Admitted Tools Images Structure

This directory contains background images for the **Tools** category posts. Each tool/resource has its own subdirectory with images that will be randomly selected as backgrounds for that specific tool.

## Directory Structure

```
admitted-tools/
├── reddit/          # Images for r/ApplyingToCollege (Position 5)
├── prepscholar/     # Images for PrepScholar Blog (Position 4)
├── collegeguy/      # Images for College Essay Guy (Position 3)
└── admitted/        # Images for Admitted (Position 2)
```

## How It Works

When a **Tools** post is generated:

1. **Screen 1**: Hook - "ranking college app resources that got me into Stanford"
   - Uses a random image from `admitted-hooks/general/`

2. **Screen 2**: Tool #5 - r/ApplyingToCollege
   - Uses a random image from `admitted-tools/reddit/`
   - Text overlay: "5. r/ApplyingToCollege" + description

3. **Screen 3**: Tool #4 - PrepScholar Blog
   - Uses a random image from `admitted-tools/prepscholar/`
   - Text overlay: "4. PrepScholar Blog" + description

4. **Screen 4**: Tool #3 - College Essay Guy
   - Uses a random image from `admitted-tools/collegeguy/`
   - Text overlay: "3. College Essay Guy" + description

5. **Screen 5**: Tool #2 - Admitted (always in position 2 as requested)
   - Uses a random image from `admitted-tools/admitted/`
   - Text overlay: "2. Admitted" + description

6. **Screen 6**: Caption card (no image)

## Adding Images

To add images for a tool:

1. Navigate to the tool's subdirectory (e.g., `admitted-tools/reddit/`)
2. Add your image files (`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`)
3. **Important**: Make sure each background image includes the logo/branding of that specific tool
4. The system will randomly select one image from the tool's folder each time

## Generation Probability

- **Tools posts**: 20% chance when clicking "Generate New Post"
- **Regular posts** (tips/hooks): 80% chance

## Tool Resources Configuration

The tools are defined in `AdmittedClient.jsx`:

```javascript
const toolsResources = [
  {
    id: "reddit",              // Must match folder name
    title: "r/ApplyingToCollege",
    subtitle: "...",
    position: 5                // Display order
  },
  // ... other tools
]
```

To add a new tool:
1. Create a new folder in `admitted-tools/` with the tool's ID
2. Add the tool configuration in `AdmittedClient.jsx` in the `toolsResources` array
3. Add images to the new folder

## Example Workflow

1. Designer creates 5-10 background images for each tool
2. Each image should prominently feature the tool's logo/branding
3. Images are saved in the appropriate subfolder
4. System automatically maps the correct background to each tool when generating

