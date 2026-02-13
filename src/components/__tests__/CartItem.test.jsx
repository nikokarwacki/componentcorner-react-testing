import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import CartItem from '../CartItem'

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>)
}

describe('CartItem', () => {
  const item = { id: 7, name: 'Cart Thing', quantity: 2, price: 5.0 }

  it('renders item name and remove button', () => {
    renderWithRouter(<CartItem item={item} onRemove={() => {}} />)

    expect(screen.getByText(/cart thing/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument()
  })

  it('renders item price (if shown)', () => {
    renderWithRouter(<CartItem item={item} onRemove={() => {}} />)

    // Flexible: matches "$5", "5.00", "$5.00", etc.
    expect(screen.getByText(/5(\.00)?/)).toBeInTheDocument()
  })

  it('calls onRemove with item.id when Remove is clicked', async () => {
    const user = userEvent.setup()
    const onRemove = vi.fn()

    renderWithRouter(<CartItem item={item} onRemove={onRemove} />)

    await user.click(screen.getByRole('button', { name: /remove/i }))
    expect(onRemove).toHaveBeenCalledWith(item.id)
  })
})
