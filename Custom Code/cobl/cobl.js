class CoblElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const lang = this.getAttribute("lang") || "plaintext";
        const codeContent = this.textContent.trim();

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
            <style>
                pre {
                    background: #222;
                    color: #fff;
                    padding: 10px;
                    border-radius: 5px;
                    overflow-x: auto;
                }
                code {
                    font-family: monospace;
                }
            </style>
            <pre><code class="language-${lang}">${codeContent}</code></pre>
            <script>hljs.highlightAll();</script>
        `;
    }
}

customElements.define("cobl", CoblElement);
