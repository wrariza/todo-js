import yo from 'yo-yo'

const nav = (title, items) => {
  return yo`
  <nav class="teal">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">${title}</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        ${items.map(function (item) {
          return yo`
            <li><a href="${item.url}">${item.name}</a></li>
          `
        })}
      </ul>
    </div>
  </nav>`
}

module.exports = nav
