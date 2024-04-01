import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem component tests', () => {
  const title = 'Magnum PI';
  const url = 'https://media0.giphy.com/media/8Bl2AfBSAkzCc8dqQQ/giphy.gif?cid=1c21bd180zimt4ltf9ky2kifk7tpewr3el7ikxfwjhsm1bd5&ep=v1_gifs_search&rid=giphy.gif&ct=g';
  test('must mutch the snapshot', () => {
    const { container } = render(
      <GifItem
        title={title}
        url={url}
      />
    );

    expect(container).toMatchSnapshot();
  });
  
  test('must show the image with the provided url and alt', () => {
    render(
      <GifItem
        title={title}
        url={url}
      />
    );
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);

  });

  test('must show the component title', () => {
    render(
      <GifItem
        title={title}
        url={url}
      />
    );
    expect(screen.getByText(title)).toBeTruthy();

  });

})