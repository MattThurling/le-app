export function hiddenEmail() {
  const encodedEmail = 'aGVsbG9AbGFyZ2VlbmdsaXNoLmNvbQ=='
  const decodedEmail = {
    text: atob(encodedEmail),
    link: `mailto:${atob(encodedEmail)}`,
  }
  return decodedEmail
}
