import { getLatestContent } from '../content'

describe('Content Library', () => {
  describe('getLatestContent', () => {
    it('should return an array', () => {
      const result = getLatestContent()
      expect(Array.isArray(result)).toBe(true)
    })

    it('should limit results to specified number', () => {
      const result = getLatestContent(3)
      expect(result.length).toBeLessThanOrEqual(3)
    })

    it('should return items with required fields', () => {
      const result = getLatestContent(1)
      if (result.length > 0) {
        const item = result[0]
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('date')
        expect(item).toHaveProperty('type')
        expect(item).toHaveProperty('url')
      }
    })

    it('should sort items by date (newest first)', () => {
      const result = getLatestContent()
      if (result.length > 1) {
        for (let i = 0; i < result.length - 1; i++) {
          const currentDate = new Date(result[i].date)
          const nextDate = new Date(result[i + 1].date)
          expect(currentDate.getTime()).toBeGreaterThanOrEqual(nextDate.getTime())
        }
      }
    })

    it('should include type field with valid values', () => {
      const result = getLatestContent()
      result.forEach(item => {
        expect(['blog', 'episode']).toContain(item.type)
      })
    })
  })
})
