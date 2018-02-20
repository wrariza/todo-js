import '../styles/main.sass'
import nav from './templates/nav'
import items from './Core/routers'

const header = nav('TODO', items)
document.body.appendChild(header)
