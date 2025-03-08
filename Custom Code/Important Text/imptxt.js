class ImportElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const content = this.textContent.trim();

        this.shadowRoot.innerHTML = `
            <style>
                span {
                    font-weight: bold;
                    font-size: 1.25em; /* 0.25x larger */
                    transition: background-color 0.5s, color 0.5s;
                    padding: 2px 5px;
                    border-radius: 5px;
                }
                @keyframes highlight {
                    0% { background-color: yellow; color: black; }
                    100% { background-color: transparent; color: inherit; }
                }
            </style>
            <span id="important-text">${content}</span>
        `;

        this.highlight();
    }

    highlight() {
        const text = this.shadowRoot.getElementById("important-text");

        setInterval(() => {
            text.style.animation = "highlight 5s ease-in-out";
            setTimeout(() => {
                text.style.animation = "";
            }, 5000);
        }, 15000);
    }
}

customElements.define("imptxt", ImportElement);
