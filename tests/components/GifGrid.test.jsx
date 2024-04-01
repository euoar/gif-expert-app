import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('GifGrid tests', () => {
  const category = 'One Punch';
  test('must initially show loading', () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  });
  
  test('must show items when images are loaded with useFetchGifs', () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  });

});