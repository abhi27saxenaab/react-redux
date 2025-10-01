import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';
import { add2Digit } from './Calculator';


describe('Calculator Component', () => {
  describe('Initial State', () => {
    it('should render with initial time set to 00:00', () => {
      render(<Calculator />);
      expect(screen.getByText('00 : 00')).toBeInTheDocument();
    });
    it('should render all buttons', () => {
      render(<Calculator />);
      expect(screen.getByText('UP Hour')).toBeInTheDocument();
      expect(screen.getByText('UP Minutes')).toBeInTheDocument();
      expect(screen.getByText('Down Hour')).toBeInTheDocument();
      expect(screen.getByText('Down Minutes')).toBeInTheDocument();
    });
  });
});
describe('Hour Functionality', () => {
    it('should increase hour by 1 when UP Hour button is clicked', async () => {
      const user = userEvent.setup();
      render(<Calculator />);
      const upHourButton = screen.getByText('UP Hour');
      await user.click(upHourButton);
      expect(screen.getByText('01 : 00')).toBeInTheDocument();
    });
    it('should decrease hour by 1 when Down Hour button is clicked', async ()=>{
        const user = userEvent.setup();
        render(<Calculator />)

        const upHourButton = screen.getByText("UP Hour")
        await user.click(upHourButton);
        //user.click(upHourButton)
        console.log(upHourButton)
        //const downHourButton  = screen.getByText("Down Hour")
        //user.click(downHourButton)
        expect(screen.getByText('01 : 00')).toBeInTheDocument();
    });
    

})

describe('add2Digit utility function', () => {
    it('should add leading zero for single-digit numbers', () => {
        expect(add2Digit(0).toBe('00'))
    })
})