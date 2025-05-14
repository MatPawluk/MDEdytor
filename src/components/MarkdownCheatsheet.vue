<template>
    <div class="cheatsheet-container">
      <div class="cheatsheet">
        <div class="cheatsheet-header">
          <h1>Ściągawka Markdown</h1>
          <p>Szybki przewodnik po składni Markdown</p>
        </div>
        
        <div class="cheatsheet-content">
          <section class="section">
            <h2>Nagłówki</h2>
            <div class="example-grid">
              <div class="example-code">
                <pre># Nagłówek 1</pre>
                <pre>## Nagłówek 2</pre>
                <pre>### Nagłówek 3</pre>
                <pre>#### Nagłówek 4</pre>
                <pre>##### Nagłówek 5</pre>
                <pre>###### Nagłówek 6</pre>
              </div>
              <div class="example-preview">
                <h1>Nagłówek 1</h1>
                <h2>Nagłówek 2</h2>
                <h3>Nagłówek 3</h3>
                <h4>Nagłówek 4</h4>
                <h5>Nagłówek 5</h5>
                <h6>Nagłówek 6</h6>
              </div>
            </div>
          </section>
          
          <section class="section">
            <h2>Formatowanie tekstu</h2>
            <div class="example-grid">
              <div class="example-code">
                <pre>*Kursywa* lub _Kursywa_</pre>
                <pre>**Pogrubienie** lub __Pogrubienie__</pre>
                <pre>**_Pogrubienie i kursywa_**</pre>
                <pre>~~Przekreślenie~~</pre>
              </div>
              <div class="example-preview">
                <p><em>Kursywa</em> lub <em>Kursywa</em></p>
                <p><strong>Pogrubienie</strong> lub <strong>Pogrubienie</strong></p>
                <p><strong><em>Pogrubienie i kursywa</em></strong></p>
                <p><del>Przekreślenie</del></p>
              </div>
            </div>
          </section>
          
          <section class="section">
            <h2>Listy</h2>
            <div class="example-grid">
              <div class="example-code">
                <pre>
  1. Element listy numerowanej
  2. Drugi element
     1. Podlista
     2. Kolejny element
  </pre>
                <pre>
  - Element listy nienumerowanej
  - Drugi element
    - Podpunkt
    - Kolejny podpunkt
  </pre>
              </div>
              <div class="example-preview">
                <ol>
                  <li>Element listy numerowanej</li>
                  <li>Drugi element
                    <ol>
                      <li>Podlista</li>
                      <li>Kolejny element</li>
                    </ol>
                  </li>
                </ol>
                <ul>
                  <li>Element listy nienumerowanej</li>
                  <li>Drugi element
                    <ul>
                      <li>Podpunkt</li>
                      <li>Kolejny podpunkt</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <section class="section">
            <h2>Linki i obrazy</h2>
            <div class="example-grid">
              <div class="example-code">
                <pre>[Tekst linku](https://example.com)</pre>
                <pre>[Link z tytułem](https://example.com "Tytuł")</pre>
                <pre>![Tekst alternatywny](url-obrazka.jpg)</pre>
              </div>
              <div class="example-preview">
                <p><a href="https://example.com">Tekst linku</a></p>
                <p><a href="https://example.com" title="Tytuł">Link z tytułem</a></p>
                <p><img src="https://via.placeholder.com/320x180" alt="Przykładowy obraz" /></p>
              </div>
            </div>
          </section>
          
          <section class="section">
            <h2>Cytaty blokowe</h2>
            <div class="example-grid">
              <div class="example-code">
                <pre>
  > Cytat blokowy
  > Kolejna linia cytatu
  >
  > > Zagnieżdżony cytat
  </pre>
              </div>
              <div class="example-preview">
                <blockquote>
                  <p>Cytat blokowy
                  <br>Kolejna linia cytatu</p>
                  <blockquote>
                    <p>Zagnieżdżony cytat</p>
                  </blockquote>
                </blockquote>
              </div>
            </div>
          </section>
          
          <section class="section">
            <h2>Kod</h2>
            <div class="example-grid">
              <div class="example-code">
                <pre>`Kod w linii`</pre>
                <pre>
  ```
  // Blok kodu
  function przykład() {
    return "Witaj, świecie!";
  }
  ```</pre>
              </div>
              <div class="example-preview">
                <p><code>Kod w linii</code></p>
                <pre><code>// Blok kodu
  function przykład() {
    return "Witaj, świecie!";
  }</code></pre>
              </div>
            </div>
          </section>
          
          <section class="section">
            <h2>Tabele</h2>
            <div class="example-grid">
              <div class="example-code">
                <pre>
  | Nagłówek 1 | Nagłówek 2 | Nagłówek 3 |
  |------------|------------|------------|
  | Komórka 1  | Komórka 2  | Komórka 3  |
  | Wiersz 2   | Dane       | Wartość    |
  </pre>
              </div>
              <div class="example-preview">
                <table>
                  <thead>
                    <tr>
                      <th>Nagłówek 1</th>
                      <th>Nagłówek 2</th>
                      <th>Nagłówek 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Komórka 1</td>
                      <td>Komórka 2</td>
                      <td>Komórka 3</td>
                    </tr>
                    <tr>
                      <td>Wiersz 2</td>
                      <td>Dane</td>
                      <td>Wartość</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          <section class="section">
            <h2>Linie poziome</h2>
            <div class="example-grid">
              <div class="example-code">
                <pre>---</pre>
                <pre>***</pre>
                <pre>___</pre>
              </div>
              <div class="example-preview">
                <hr />
                <p>Wszystkie trzy zapisy dają ten sam efekt - linię poziomą.</p>
              </div>
            </div>
          </section>
          
          <section class="section">
            <h2>Lista zadań</h2>
            <div class="example-grid">
              <div class="example-code">
                <pre>
  - [x] Zadanie wykonane
  - [ ] Zadanie do zrobienia
  - [ ] ~~Zadanie anulowane~~
  </pre>
              </div>
              <div class="example-preview">
                <ul class="task-list">
                  <li class="task-list-item">
                    <input type="checkbox" checked disabled /> Zadanie wykonane
                  </li>
                  <li class="task-list-item">
                    <input type="checkbox" disabled /> Zadanie do zrobienia
                  </li>
                  <li class="task-list-item">
                    <input type="checkbox" disabled /> <del>Zadanie anulowane</del>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <section class="section">
            <h2>Automatyczne linki</h2>
            <div class="example-grid">
              <div class="example-code">
                <pre>&lt;https://example.com&gt;</pre>
                <pre>&lt;user@example.com&gt;</pre>
              </div>
              <div class="example-preview">
                <p><a href="https://example.com">https://example.com</a></p>
                <p><a href="mailto:user@example.com">user@example.com</a></p>
              </div>
            </div>
          </section>
          
          <section class="section">
            <h2>Znak ucieczki</h2>
            <div class="example-grid">
              <div class="example-code">
                <pre>\*To nie będzie kursywą\*</pre>
                <pre>\# To nie będzie nagłówkiem</pre>
              </div>
              <div class="example-preview">
                <p>*To nie będzie kursywą*</p>
                <p># To nie będzie nagłówkiem</p>
              </div>
            </div>
          </section>
          
          <section class="section">
            <h2>Przydatne wskazówki</h2>
            <ul class="tips-list">
              <li>Zawsze zostawiaj pustą linię przed i po blokach treści (nagłówkach, listach, cytatach itd.)</li>
              <li>Dla lepszej czytelności używaj wcięcia w złożonych listach</li>
              <li>W tabelach możesz wyrównać tekst używając dwukropka w linii separatora:
                <code>|:---| (do lewej), |:---:| (wyśrodkowanie), |---:| (do prawej)</code>
              </li>
              <li>Aby dodać nową linię bez tworzenia nowego akapitu, dodaj dwie spacje na końcu linii</li>
            </ul>
          </section>
        </div>
        
        <div class="cheatsheet-footer">
          <button class="back-button" @click="goBack">Wróć do edytora</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goBack = () => {
    router.push('/');
  };
  </script>
  
  <style scoped>
  .cheatsheet-container {
    flex: 1;
    overflow-y: auto;
    width: 100%;
    background-color: var(--bg-main);
  }
  
  .cheatsheet {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: var(--bg-main);
    color: var(--text-color);
    font-family: 'Roboto', sans-serif;
  }
  
  .cheatsheet-header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
  }
  
  .cheatsheet-header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--accent-color);
  }
  
  .cheatsheet-header p {
    font-size: 1.2rem;
    color: var(--text-light);
  }
  
  .cheatsheet-content {
    margin-bottom: 40px;
  }
  
  .section {
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--border-color);
  }
  
  .section h2 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--accent-color);
    display: inline-block;
  }
  
  .example-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .example-code {
    background-color: var(--bg-editor);
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
  }
  
  .example-code pre {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    font-family: 'Roboto Mono', monospace;
    color: var(--text-color);
  }
  
  .example-code pre + pre {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dashed var(--border-color);
  }
  
  .example-preview {
    padding: 15px;
    background-color: var(--bg-sidebar);
    border-radius: 5px;
    overflow-x: auto;
  }
  
  .tips-list {
    padding-left: 20px;
  }
  
  .tips-list li {
    margin-bottom: 15px;
    line-height: 1.5;
  }
  
  .task-list {
    list-style-type: none;
    padding-left: 0;
  }
  
  .task-list-item {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .task-list-item input {
    margin-right: 10px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table th, table td {
    border: 1px solid var(--border-color);
    padding: 8px;
    text-align: left;
  }
  
  table th {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .cheatsheet-footer {
    margin-top: 40px;
    text-align: center;
    padding-bottom: 40px;
  }
  
  .back-button {
    background-color: var(--accent-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .back-button:hover {
    background-color: var(--accent-hover);
  }
  
  @media (max-width: 768px) {
    .example-grid {
      grid-template-columns: 1fr;
    }
    
    .cheatsheet-header h1 {
      font-size: 2rem;
    }
    
    .section h2 {
      font-size: 1.5rem;
    }
  }
  </style>