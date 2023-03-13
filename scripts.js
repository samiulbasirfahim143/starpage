/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {
  "/": "/",
  deepl: "https://deepl.com/",
  reddit: "https://reddit.com/",
  maps: "https://maps.google.com/",
}
const engine = "duckduckgo"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = (value) => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = (value) => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = (event) => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [
  {
    id: "DnMkJLYQ6601e3PI",
    label: "social media",
    bookmarks: [
      {
        id: "LNhmfaBkQIPigfzn",
        label: "facebook",
        url: "https://www.facebook.com/",
      },
      {
        id: "9TbAcDB8y7z2dU6J",
        label: "discord",
        url: "https://discord.com/app",
      },
      {
        id: "EQM1zjQ1ngtuNIof",
        label: "r/unixporn",
        url: "https://www.reddit.com/r/unixporn/",
      },
      {
        id: "EQM1zjQ1ngtuNIof",
        label: "r/ProgrammerHumor",
        url: "https://www.reddit.com/r/ProgrammerHumor/",
      },
      {
        id: "EQM1zjQ1ngtuNIof",
        label: "r/linuxmemes",
        url: "https://www.reddit.com/r/linuxmemes/",
      },
    ],
  },
  {
    id: "wWpxVRnO6CLiunq9",
    label: "programming",
    bookmarks: [
      {
        id: "YsOPETScWzqYk7IX",
        label: "github",
        url: "https://github.com/samiulbasirfahim?tab=repository",
      },
      {
        id: "HQZT5Vh0GtmlD4NP",
        label: "programming-hero",
        url: "https://web.programming-hero.com/dashboard",
      },
      {
        id: "LWoYo5voGUmhvneg",
        label: "stackoverflow",
        url: "https://stackoverflow.com/",
      },
      {
        id: "9q3vfhm7l33rus21toc8fndupq76itje",
        label: "nixos-search",
        url: "https://search.nixos.org/packages",
      },
      {
        id: "9q3vfhm7l33rus21toc8fndupq76itje",
        label: "w3-school",
        url: "https://www.w3schools.com/",
      },
    ],
  },
  {
    id: "yRy688X7AoaFb4MS",
    label: "google",
    bookmarks: [
      {
        id: "U9ci5iz3Ad1CyJLk",
        label: "youtube",
        url: "https://www.youtube.com/",
      },
      {
        id: "qZUh70EBUTM6O9Eu",
        label: "gmail",
        url: "https://mail.google.com/mail/u/0/#inbox",
      },
      {
        id: "qZUh70EBUTM6O9Eu",
        label: "drive",
        url: "https://drive.google.com/drive/u/0/my-drive",
      },
      {
        id: "qZUh70EBUTM6O9Eu",
        label: "map",
        url: "https://www.google.com/maps",
      },
      {
        id: "qZUh70EBUTM6O9Eu",
        label: "translate",
        url: "https://translate.google.com",
      },
    ],
  },
]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = (title) => {
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

const createBookmarkList = (bookmarks) => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach((li) => ul.append(li))
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
  bookmarks
    .map(createGroup)
    .forEach((group) => bookmarksContainer.append(group))
}

injectBookmarks()
