export const HOME_NAVIGATION_INTENT_KEY = 'portfolioHomeNavigationIntent';

export const markHomeNavigationIntent = () => {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.setItem(HOME_NAVIGATION_INTENT_KEY, 'internal');
};

export const consumeHomeNavigationIntent = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const intent = window.sessionStorage.getItem(HOME_NAVIGATION_INTENT_KEY);
  window.sessionStorage.removeItem(HOME_NAVIGATION_INTENT_KEY);

  return intent === 'internal';
};
