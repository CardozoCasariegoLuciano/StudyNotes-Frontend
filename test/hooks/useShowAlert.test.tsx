import { render, renderHook, screen, waitFor } from '@testing-library/react';
import {ReactElement} from 'react';
import { act } from 'react-dom/test-utils';
import { useShowAlert } from '../../src/hooks/useShowAlert';

describe('useShowAlert tests cases', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('Should show the initial values', () => {
    const { result } = renderHook(() => useShowAlert());

    expect(result.current.alertText).toBe('');
    expect(result.current.isVisible).toBeFalsy();
  });

  test('alertText and isVisible mush change durin initial time', () => {
    const time = 500;
    const text = 'TEST';

    const { result } = renderHook(() => useShowAlert(time));

    act(() => {
      result.current.showModal(text);
    });

    expect(result.current.alertText).toBe(text);
    expect(result.current.isVisible).toBeTruthy();

    act(() => {
      jest.advanceTimersByTime(time);
    });

    expect(result.current.alertText).toBe('');
    expect(result.current.isVisible).toBeFalsy();
  });

  test('ShowAlert mush display the alert component', async () => {
    const time = 500;
    const text = 'TExT';

    const { result } = renderHook(() => useShowAlert(time));

    act(() => {
      result.current.showModal(text);
    });

    const temp = result.current.showAlert();
    render(temp as ReactElement);

    expect(temp).toMatchSnapshot();
  });
});
