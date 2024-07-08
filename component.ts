// paragraph.ts
import innerHTML from "./component.html?raw"
import styles from "./component.scss?inline"

let sheet = new CSSStyleSheet()
sheet.replaceSync(styles)

let template = document.createElement("template")
template.innerHTML = innerHTML

customElements.define(
  "mavis-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" })
      shadow.appendChild(template.content.cloneNode(true))

      shadow.adoptedStyleSheets.push(sheet)
    }
  }
)
