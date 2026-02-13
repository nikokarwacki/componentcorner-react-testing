import { render, screen } from '@testing-library/react'
import HomePage from '../HomePage'

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />)
  })

  it('displays welcome text', () => {
    render(<HomePage />)
    expect(screen.getByText(/welcome to componentcorner/i)).toBeInTheDocument()
  })
})
