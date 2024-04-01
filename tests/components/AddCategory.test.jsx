import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('AddCategory tests', () => {
  test('must change input box value', () => {
    render(<AddCategory onNewCategory={() => { }} />);

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Saitama' } });
    expect(input.value).toBe('Saitama');

  });

  test('must call onNewCategory if the inputs has a value', () => {
    const inputValue = 'Saitama';
    render(<AddCategory onNewCategory={() => { }} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: 'Saitama' } });

    fireEvent.submit(form);

    expect(input.value).toBe('');

  });
})