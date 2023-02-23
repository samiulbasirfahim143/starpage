/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"ftbk0IxjawxXR3iC","label":"reddit","bookmarks":[{"id":"EQM1zjQ1ngtuNIof","label":"r/startpages","url":"https://www.reddit.com/r/startpages/"},{"id":"sRUHCibgQuLQkUh7","label":"r/typescript","url":"https://www.reddit.com/r/typescript/"},{"id":"WJbp9J0jkMmPs5TM","label":"r/reactjs","url":"https://www.reddit.com/r/reactjs/"}]},{"id":"DnMkJLYQ6601e3PI","label":"design tools","bookmarks":[{"id":"LNhmfaBkQIPigfzn","label":"pixlrx","url":"https://pixlr.com/x/"},{"id":"9TbAcDB8y7z2dU6J","label":"image enlarger","url":"https://bigjpg.com/en"},{"id":"Wn4TgODxTn1Gxos3","label":"haikei","url":"https://app.haikei.app/"},{"id":"HYApkf72wgeXfaAK","label":"css gradients","url":"https://larsenwork.com/easing-gradients/"}]},{"id":"yRy688X7AoaFb4MS","label":"worth reading","bookmarks":[{"id":"U9ci5iz3Ad1CyJLk","label":"happy hues","url":"https://www.happyhues.co/"},{"id":"qZUh70EBUTM6O9Eu","label":"styled-components","url":"https://www.joshwcomeau.com/react/demystifying-styled-components/"},{"id":"FCTW4qI5JPxAvG4Z","label":"react docs","url":"https://reactjs.org/docs/getting-started.html"}]},{"id":"wWpxVRnO6CLiunq9","label":"sources","bookmarks":[{"id":"YsOPETScWzqYk7IX","label":"icons","url":"https://feathericons.com/"},{"id":"HQZT5Vh0GtmlD4NP","label":"gif","url":"https://designyoutrust.com/2019/05/the-chill-and-retro-motion-pixel-art-of-motocross-saito/"},{"id":"qJnwTUDmqm7rpz87","label":"@startpage","url":"https://prettycoffee.github.io/startpage"},{"id":"LWoYo5voGUmhvneg","label":"author","url":"https://prettycoffee.github.io/"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
