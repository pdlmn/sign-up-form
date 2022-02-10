const toggleTheme = (e) => {
  const root = document.querySelector(':root')
  const isDark = (root.className === 'dark')
  const theme = (isDark) ? 'light' : 'dark'
  root.className = theme
  e.currentTarget
    .querySelector('span')
    .textContent = (isDark) ? 'dark' : 'light'
}

document.querySelector('#theme-toggler').addEventListener('click', toggleTheme)
