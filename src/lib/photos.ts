// Maps person/story ids to dropped-in photos automatically.
// See src/assets/photos/README.md for how to add images.

const personModules = import.meta.glob<{ default: string }>(
  '../assets/photos/people/*.{jpg,jpeg,png,webp}',
  { eager: true },
)
const storyModules = import.meta.glob<{ default: string }>(
  '../assets/photos/stories/*.{jpg,jpeg,png,webp}',
  { eager: true },
)
const heroModules = import.meta.glob<{ default: string }>(
  '../assets/photos/hero/*.{jpg,jpeg,png,webp}',
  { eager: true },
)
const techModules = import.meta.glob<{ default: string }>(
  '../assets/photos/tech/*.{jpg,jpeg,png,webp}',
  { eager: true },
)

function buildMap(modules: Record<string, { default: string }>) {
  const map: Record<string, string> = {}
  for (const path in modules) {
    const filename = path.split('/').pop() ?? ''
    const id = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '')
    map[id] = modules[path].default
  }
  return map
}

const personPhotos = buildMap(personModules)
const storyPhotos = buildMap(storyModules)
const techPhotos = buildMap(techModules)

export function personPhoto(id: string): string | undefined {
  return personPhotos[id]
}

export function storyPhoto(id: string): string | undefined {
  return storyPhotos[id]
}

export function techPhoto(id: string): string | undefined {
  return techPhotos[id]
}

export function heroPhoto(): string | undefined {
  const [first] = Object.values(heroModules)
  return first?.default
}
