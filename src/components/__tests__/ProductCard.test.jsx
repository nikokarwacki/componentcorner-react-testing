import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../ProductCard'

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>)
}

describe('ProductCard', () => {
  const product = {
    id: 1,
    name: 'Test Product',
    price: 19.99,
  }

  it('renders product name and price', () => {
    renderWithRouter(<ProductCard product={product} addToCart={() => {}} />)

    expect(screen.getByText(/test product/i)).toBeInTheDocument()
    expect(screen.getByText(/19\.99/)).toBeInTheDocument()
  })

  it('renders Add to Cart button', () => {
    renderWithRouter(<ProductCard product={product} addToCart={() => {}} />)

    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
  })

  it('calls addToCart when button is clicked', async () => {
    const user = userEvent.setup()
    const mockAddToCart = vi.fn()

    renderWithRouter(<ProductCard product={product} addToCart={mockAddToCart} />)

    await user.click(screen.getByRole('button', { name: /add to cart/i }))
    expect(mockAddToCart).toHaveBeenCalled()
  })
})
