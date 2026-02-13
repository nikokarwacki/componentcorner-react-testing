import { render } from '@testing-library/react'
import App from '../App'

describe('App cart localStorage persistence', () => {
  beforeEach(() => {
    vi.restoreAllMocks()

    const store = {}

    vi.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation((key) => {
      return store[key] ?? null
    })

    vi.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation((key, value) => {
      store[key] = String(value)
    })

    vi.spyOn(window.localStorage.__proto__, 'removeItem').mockImplementation((key) => {
      delete store[key]
    })
  })

  it('renders and reads from localStorage on startup', () => {
    window.localStorage.getItem.mockReturnValueOnce(
      JSON.stringify([{ id: 1, name: 'Stored Item', quantity: 1 }])
    )

    render(<App />)
    expect(window.localStorage.getItem).toHaveBeenCalled()
  })

  it('writes cart to localStorage', () => {
    render(<App />)
    expect(window.localStorage.setItem).toHaveBeenCalled()
  })
})
