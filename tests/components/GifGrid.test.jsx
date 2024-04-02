import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid tests', () => {
  const category = 'One Punch';

  test('must initially show loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  });
  
  test('must show items when images are loaded with useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'Saitama',
        url: 'foo://'
      },
      {
        id: 'cde',
        title: 'PI',
        url: 'foo://pi'
      },

    ]
    useFetchGifs.mockReturnValue({
      images: gifs, 
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
  

});