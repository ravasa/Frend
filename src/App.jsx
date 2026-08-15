function AxaMark({ inverse = false }) {
  return (
    <div className={`axa-mark${inverse ? ' axa-mark--inverse' : ''}`} aria-label="AXA">
      <span className="axa-mark__slash" aria-hidden="true" />
      <span className="axa-mark__word">AXA</span>
    </div>
  )
}

function App() {
  return (
    <main className="page-shell">
      <section className="component-preview" aria-labelledby="component-title">
        <p className="eyebrow">Product component</p>
        <h1 id="component-title">AXA Logo</h1>
        <p className="description">Brand mark variations for partner and co-branding surfaces.</p>

        <div className="logo-set" role="list" aria-label="AXA logo variants">
          <div className="logo-option" role="listitem">
            <AxaMark />
            <span className="logo-option__label">Primary</span>
          </div>
          <div className="logo-option" role="listitem">
            <AxaMark inverse />
            <span className="logo-option__label">Inverse</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App