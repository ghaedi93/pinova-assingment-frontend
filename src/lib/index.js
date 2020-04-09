export function checkStatus(res) {
  let i = 0;
  let truePage;
  let result;
  const showEmailPhoneScreen = res.showEmailPhoneScreen;
  const showTermsAndCondition = res.showTermsAndCondition;
  const showWelcomeScreen = res.showWelcomeScreen;
  const pages = {
    showEmailPhoneScreen,
    showTermsAndCondition,
    showWelcomeScreen,
  };
  for (i in pages) {
    if (pages[i] === true) {
      truePage = i;
      break;
    }
  }
  switch (truePage) {
    case "showEmailPhoneScreen":
      result = "EmailPhoneScreen";
      break;
    case "showTermsAndCondition":
      result = "TermsAndCondition";
      break;
    case "showWelcomeScreen":
      result = "WelcomeScreen";
      break;
    default:
  }
  return result;
}
