export default function fakeApi(
  _payload: unknown
): Promise<{ type: 'success' | 'error'; message: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5
        ? resolve({ type: 'success', message: 'OK' })
        : reject({ type: 'error', message: 'Server error' });
    }, 900);
  });
}

