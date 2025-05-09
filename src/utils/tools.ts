export interface Language {
  name: string
  iconName: string
  className?: string
}

export const tools: Record<string, Language> = {
  autocad: {
    name: 'AutoCAD',
    iconName: 'autocad-light'
  },
  photoshop: {
    name: 'Photoshop',
    iconName: 'photoshop'
  },
  illustrator: {
    name: 'Illustrator',
    iconName: 'illustrator'
  },
  excel: {
    name: 'Excel',
    iconName: 'file-type-excel'
  }
}

export const getLanguage = (tool: string): Language => {
  return tools[tool] || tools['autocad']
}
