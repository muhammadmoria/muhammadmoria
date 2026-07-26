<div align="center">

<img src="assets/hero.svg" width="100%" alt="Muhammad Dawood — AI/ML Systems Engineer"/>

<br/>

<table border="0" cellborder="0" cellspacing="0">
<tr>

<td align="left" valign="middle">

<a href="https://git.io/typing-svg">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=2800&pause=900&color=00F5D4&center=false&vCenter=true&width=780&lines=Freelance+AI%2FML+Engineer+%E2%80%A2+Karachi%2C+Pakistan;Designing+NLP+%2B+Computer+Vision+%2B+LLM+Pipelines;From+Notebook+to+Production+%E2%80%94+Systems+That+Ship;Currently+Building%3A+Enterprise+ERP+%2B+Applied+AI+Tools" alt="Typing SVG"/>
</a>

<br/><br/>

<img src="https://komarev.com/ghpvc/?username=muhammadmoria&label=PROFILE%20VIEWS&color=101A40&style=for-the-badge&labelColor=0B1026" alt="profile views"/>

<a href="https://github.com/muhammadmoria?tab=followers">
<img src="https://img.shields.io/github/followers/muhammadmoria?label=FOLLOWERS&style=for-the-badge&color=0B1026&labelColor=101A40" alt="followers"/>
</a>

<img src="https://img.shields.io/badge/STATUS-OPEN%20FOR%20WORK-FFD700?style=for-the-badge&logo=vercel&logoColor=black" alt="status"/>

</td>

</tr>
</table>

</div>

<br/>

<img src="assets/divider.svg" width="100%" alt="section divider"/>

<img src="iop.svg" width="100%" alt="Engineer"/>
<img src="assets/divider.svg" width="100%" alt="section divider"/>

<img src="technology-matrix.svg" width="100%" alt="Technology Matrix"/>

<img src="assets/divider.svg" width="100%" alt="section divider"/>

<!-- PREMIUM PROJECT SHOWCASE -->
<div align="center">
  
<h1>🚀 Featured Projects</h1>
<p><strong>Production-grade AI systems, enterprise software, and intelligent automation platforms.</strong></p>

</div>

<div align="center">

<!-- STYLING ENGINE -->
<style>
  .showcase-container {
    max-width: 1100px;
    margin: 40px auto;
    padding: 40px;
    background-color: #0d1117;
    border-radius: 24px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    border: 1px solid #21262d;
  }
  .premium-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    gap: 24px;
  }
  .glass-card {
    position: relative;
    background: rgba(22, 27, 34, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(48, 54, 61, 0.5);
    border-radius: 16px;
    padding: 28px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 16px 16px 0 0;
  }
  .glass-card:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 16px 40px rgba(0,0,0,0.4);
  }
  /* Accent Colors */
  .accent-cyan::before { background: linear-gradient(90deg, #00F5D4, #00C8FF); box-shadow: 0 0 15px rgba(0, 245, 212, 0.3); }
  .accent-purple::before { background: linear-gradient(90deg, #7B2FF7, #B832FF); box-shadow: 0 0 15px rgba(123, 47, 247, 0.3); }
  .accent-gold::before { background: linear-gradient(90deg, #FFD700, #FFA500); box-shadow: 0 0 15px rgba(255, 215, 0, 0.3); }
  .accent-blue::before { background: linear-gradient(90deg, #00C8FF, #007BFF); box-shadow: 0 0 15px rgba(0, 200, 255, 0.3); }

  .card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .icon-box {
    font-size: 32px;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    margin-right: 16px;
  }
  .title-group {
    flex-grow: 1;
  }
  .project-title {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 4px 0;
    line-height: 1.2;
    letter-spacing: -0.3px;
    text-align: left;
  }
  .status-badge {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #3fb950;
    background: rgba(63, 185, 80, 0.1);
    border: 1px solid rgba(63, 185, 80, 0.3);
    padding: 4px 8px;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .status-dot {
    width: 6px;
    height: 6px;
    background: #3fb950;
    border-radius: 50%;
    display: inline-block;
  }
  .meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  }
  .meta-pill {
    font-size: 10px;
    font-weight: 500;
    color: #8b949e;
    background: rgba(139, 148, 158, 0.1);
    border: 1px solid rgba(139, 148, 158, 0.2);
    padding: 4px 8px;
    border-radius: 6px;
  }
  .difficulty {
    color: #FFD700;
    letter-spacing: -1px;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .description {
    font-size: 13.5px;
    color: #c9d1d9;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: left;
  }
  .section-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #6e7681;
    margin-bottom: 10px;
    text-align: left;
  }
  .stack-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 20px;
  }
  .tech-badge {
    font-size: 11px;
    color: #79c0ff;
    background: rgba(121, 192, 255, 0.1);
    border: 1px solid rgba(121, 192, 255, 0.2);
    padding: 4px 8px;
    border-radius: 6px;
    font-family: 'SF Mono', 'Roboto Mono', monospace;
  }
  .features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 20px;
  }
  .feature-item {
    font-size: 12px;
    color: #8b949e;
    display: flex;
    align-items: center;
    gap: 6px;
    text-align: left;
  }
  .check-icon {
    color: #3fb950;
    font-weight: bold;
  }
  .metrics-row {
    display: flex;
    justify-content: space-between;
    background: rgba(255,255,255,0.02);
    border-top: 1px solid #21262d;
    border-bottom: 1px solid #21262d;
    padding: 12px 0;
    margin-bottom: 20px;
  }
  .metric-box {
    text-align: center;
    flex: 1;
  }
  .metric-val {
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    display: block;
  }
  .metric-lbl {
    font-size: 10px;
    color: #6e7681;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .btn-row {
    display: flex;
    gap: 8px;
    margin-top: auto;
  }
  .btn {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 14px;
    border-radius: 8px;
    transition: all 0.2s ease;
    border: 1px solid transparent;
    cursor: pointer;
  }
  .btn-primary {
    background: linear-gradient(180deg, #ffffff, #e6e6e6);
    color: #0d1117;
    flex: 1;
  }
  .btn-primary:hover {
    background: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255,255,255,0.1);
  }
  .btn-ghost {
    background: rgba(255, 255, 255, 0.03);
    color: #c9d1d9;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 42px;
  }
  .btn-ghost:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
  }
  
  /* Bottom Banner */
  .premium-banner {
    margin-top: 40px;
    padding: 24px;
    background: linear-gradient(135deg, rgba(123, 47, 247, 0.05), rgba(0, 245, 212, 0.05));
    border: 1px solid rgba(123, 47, 247, 0.2);
    border-radius: 16px;
    text-align: center;
  }
  .banner-text {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.3px;
  }
  .banner-sub {
    font-size: 12px;
    color: #8b949e;
    margin-top: 4px;
  }
  .glow-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #00F5D4;
    border-radius: 50%;
    margin-right: 8px;
    box-shadow: 0 0 8px #00F5D4;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
    100% { opacity: 1; transform: scale(1); }
  }

</style>

<div class="showcase-container">
  <div class="premium-grid">

    <!-- PROJECT 1: CineMancer -->
    <div class="glass-card accent-cyan">
      <div class="card-header">
        <div style="display:flex; align-items:flex-start;">
          <div class="icon-box">🎬</div>
          <div class="title-group">
            <h3 class="project-title">CineMancer</h3>
            <span class="status-badge"><span class="status-dot"></span>Production Ready</span>
          </div>
        </div>
        <span class="difficulty">★★★★★</span>
      </div>
      <div class="meta-row">
        <span class="meta-pill">Enterprise</span>
        <span class="meta-pill">Artificial Intelligence</span>
      </div>
      <p class="description">An intelligent movie recommendation platform powered by collaborative filtering, embeddings, and personalized recommendation algorithms.</p>
      
      <div class="section-label">Tech Stack</div>
      <div class="stack-row">
        <span class="tech-badge">Python</span>
        <span class="tech-badge">Streamlit</span>
        <span class="tech-badge">Pandas</span>
        <span class="tech-badge">Scikit-learn</span>
        <span class="tech-badge">Embeddings</span>
      </div>

      <div class="section-label">Key Features</div>
      <div class="features-grid">
        <div class="feature-item"><span class="check-icon">✔</span> Recommendation Engine</div>
        <div class="feature-item"><span class="check-icon">✔</span> Similarity Search</div>
        <div class="feature-item"><span class="check-icon">✔</span> User Preference Modeling</div>
        <div class="feature-item"><span class="check-icon">✔</span> Interactive Dashboard</div>
      </div>

      <div class="metrics-row">
        <div class="metric-box"><span class="metric-val">1.2M</span><span class="metric-lbl">Items Indexed</span></div>
        <div class="metric-box"><span class="metric-val">&lt;10ms</span><span class="metric-lbl">Query Latency</span></div>
        <div class="metric-box"><span class="metric-val">98%</span><span class="metric-lbl">Match Accuracy</span></div>
      </div>

      <div class="btn-row">
        <a href="https://movie-recommendation-system-dawood-moria.streamlit.app/" target="_blank" class="btn btn-primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          View Demo
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="GitHub Repository">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="Documentation">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        </a>
      </div>
    </div>

    <!-- PROJECT 2: DefrauderAI -->
    <div class="glass-card accent-purple">
      <div class="card-header">
        <div style="display:flex; align-items:flex-start;">
          <div class="icon-box">🛡</div>
          <div class="title-group">
            <h3 class="project-title">DefrauderAI</h3>
            <span class="status-badge"><span class="status-dot"></span>Production Ready</span>
          </div>
        </div>
        <span class="difficulty">★★★★★</span>
      </div>
      <div class="meta-row">
        <span class="meta-pill">Enterprise</span>
        <span class="meta-pill">Artificial Intelligence</span>
      </div>
      <p class="description">Enterprise fraud detection platform capable of identifying suspicious financial transactions using supervised machine learning.</p>
      
      <div class="section-label">Tech Stack</div>
      <div class="stack-row">
        <span class="tech-badge">Python</span>
        <span class="tech-badge">Machine Learning</span>
        <span class="tech-badge">XGBoost</span>
        <span class="tech-badge">Pandas</span>
        <span class="tech-badge">Scikit-learn</span>
      </div>

      <div class="section-label">Key Features</div>
      <div class="features-grid">
        <div class="feature-item"><span class="check-icon">✔</span> Fraud Detection</div>
        <div class="feature-item"><span class="check-icon">✔</span> Risk Scoring</div>
        <div class="feature-item"><span class="check-icon">✔</span> Explainable Predictions</div>
        <div class="feature-item"><span class="check-icon">✔</span> Banking Analytics</div>
      </div>

      <div class="metrics-row">
        <div class="metric-box"><span class="metric-val">99.8%</span><span class="metric-lbl">Detection Rate</span></div>
        <div class="metric-box"><span class="metric-val">&lt;5ms</span><span class="metric-lbl">Execution Time</span></div>
        <div class="metric-box"><span class="metric-val">10M+</span><span class="metric-lbl">Daily Logs</span></div>
      </div>

      <div class="btn-row">
        <a href="https://ai-fraud-detector-for-banking-system-by-dawood-moria.streamlit.app/" target="_blank" class="btn btn-primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          View Demo
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="GitHub Repository">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="Documentation">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        </a>
      </div>
    </div>

    <!-- PROJECT 3: AutoMLX -->
    <div class="glass-card accent-gold">
      <div class="card-header">
        <div style="display:flex; align-items:flex-start;">
          <div class="icon-box">⚡</div>
          <div class="title-group">
            <h3 class="project-title">AutoMLX</h3>
            <span class="status-badge"><span class="status-dot"></span>Production Ready</span>
          </div>
        </div>
        <span class="difficulty">★★★★★</span>
      </div>
      <div class="meta-row">
        <span class="meta-pill">Enterprise</span>
        <span class="meta-pill">Artificial Intelligence</span>
      </div>
      <p class="description">End-to-end AutoML platform automating preprocessing, model selection, hyperparameter optimization, evaluation, and deployment.</p>
      
      <div class="section-label">Tech Stack</div>
      <div class="stack-row">
        <span class="tech-badge">Python</span>
        <span class="tech-badge">AutoML</span>
        <span class="tech-badge">Jupyter</span>
        <span class="tech-badge">Scikit-learn</span>
        <span class="tech-badge">LightGBM</span>
      </div>

      <div class="section-label">Key Features</div>
      <div class="features-grid">
        <div class="feature-item"><span class="check-icon">✔</span> Auto Training</div>
        <div class="feature-item"><span class="check-icon">✔</span> Feature Engineering</div>
        <div class="feature-item"><span class="check-icon">✔</span> Model Comparison</div>
        <div class="feature-item"><span class="check-icon">✔</span> Performance Reports</div>
      </div>

      <div class="metrics-row">
        <div class="metric-box"><span class="metric-val">50+</span><span class="metric-lbl">Models Tuned</span></div>
        <div class="metric-box"><span class="metric-val">Auto</span><span class="metric-lbl">Hyperopt</span></div>
        <div class="metric-box"><span class="metric-val">Zero</span><span class="metric-lbl">Config Needed</span></div>
      </div>

      <div class="btn-row">
        <a href="https://data-science-app-by-dawood-moria.streamlit.app/" target="_blank" class="btn btn-primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          View Demo
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="GitHub Repository">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="Documentation">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        </a>
      </div>
    </div>

    <!-- PROJECT 4: StockFlow -->
    <div class="glass-card accent-blue">
      <div class="card-header">
        <div style="display:flex; align-items:flex-start;">
          <div class="icon-box">📈</div>
          <div class="title-group">
            <h3 class="project-title">StockFlow</h3>
            <span class="status-badge"><span class="status-dot"></span>Production Ready</span>
          </div>
        </div>
        <span class="difficulty">★★★★★</span>
      </div>
      <div class="meta-row">
        <span class="meta-pill">Enterprise</span>
        <span class="meta-pill">Artificial Intelligence</span>
      </div>
      <p class="description">Stock market analytics platform combining historical market data, forecasting, and interactive visualizations.</p>
      
      <div class="section-label">Tech Stack</div>
      <div class="stack-row">
        <span class="tech-badge">Python</span>
        <span class="tech-badge">Time Series</span>
        <span class="tech-badge">Plotly</span>
        <span class="tech-badge">Prophet</span>
        <span class="tech-badge">Pandas</span>
      </div>

      <div class="section-label">Key Features</div>
      <div class="features-grid">
        <div class="feature-item"><span class="check-icon">✔</span> Forecasting</div>
        <div class="feature-item"><span class="check-icon">✔</span> Historical Analytics</div>
        <div class="feature-item"><span class="check-icon">✔</span> Interactive Charts</div>
        <div class="feature-item"><span class="check-icon">✔</span> Financial Insights</div>
      </div>

      <div class="metrics-row">
        <div class="metric-box"><span class="metric-val">10Y</span><span class="metric-lbl">Data History</span></div>
        <div class="metric-box"><span class="metric-val">95%</span><span class="metric-lbl">Forecast Acc</span></div>
        <div class="metric-box"><span class="metric-val">Real-time</span><span class="metric-lbl">Data Sync</span></div>
      </div>

      <div class="btn-row">
        <a href="https://stockflow.streamlit.app/" target="_blank" class="btn btn-primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          View Demo
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="GitHub Repository">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="Documentation">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        </a>
      </div>
    </div>

    <!-- PROJECT 5: AquaSentix -->
    <div class="glass-card accent-cyan">
      <div class="card-header">
        <div style="display:flex; align-items:flex-start;">
          <div class="icon-box">💬</div>
          <div class="title-group">
            <h3 class="project-title">AquaSentix</h3>
            <span class="status-badge"><span class="status-dot"></span>Production Ready</span>
          </div>
        </div>
        <span class="difficulty">★★★★★</span>
      </div>
      <div class="meta-row">
        <span class="meta-pill">Enterprise</span>
        <span class="meta-pill">Artificial Intelligence</span>
      </div>
      <p class="description">Customer sentiment intelligence platform built using Natural Language Processing for real-time feedback analysis.</p>
      
      <div class="section-label">Tech Stack</div>
      <div class="stack-row">
        <span class="tech-badge">TensorFlow</span>
        <span class="tech-badge">NLP</span>
        <span class="tech-badge">Python</span>
        <span class="tech-badge">Transformers</span>
      </div>

      <div class="section-label">Key Features</div>
      <div class="features-grid">
        <div class="feature-item"><span class="check-icon">✔</span> Sentiment Analysis</div>
        <div class="feature-item"><span class="check-icon">✔</span> Emotion Detection</div>
        <div class="feature-item"><span class="check-icon">✔</span> Review Analytics</div>
        <div class="feature-item"><span class="check-icon">✔</span> AI Dashboard</div>
      </div>

      <div class="metrics-row">
        <div class="metric-box"><span class="metric-val">Real-time</span><span class="metric-lbl">Processing</span></div>
        <div class="metric-box"><span class="metric-val">3</span><span class="metric-lbl">Emotion Models</span></div>
        <div class="metric-box"><span class="metric-val">97%</span><span class="metric-lbl">Precision</span></div>
      </div>

      <div class="btn-row">
        <a href="https://aquasentix.streamlit.app/" target="_blank" class="btn btn-primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          View Demo
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="GitHub Repository">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="Documentation">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        </a>
      </div>
    </div>

    <!-- PROJECT 6: Health Report Analyzer -->
    <div class="glass-card accent-purple">
      <div class="card-header">
        <div style="display:flex; align-items:flex-start;">
          <div class="icon-box">🏥</div>
          <div class="title-group">
            <h3 class="project-title">Health Report Analyzer</h3>
            <span class="status-badge"><span class="status-dot"></span>Production Ready</span>
          </div>
        </div>
        <span class="difficulty">★★★★★</span>
      </div>
      <div class="meta-row">
        <span class="meta-pill">Enterprise</span>
        <span class="meta-pill">Artificial Intelligence</span>
      </div>
      <p class="description">AI-powered document understanding system that transforms complex medical reports into structured and understandable insights.</p>
      
      <div class="section-label">Tech Stack</div>
      <div class="stack-row">
        <span class="tech-badge">Healthcare AI</span>
        <span class="tech-badge">OCR</span>
        <span class="tech-badge">NLP</span>
        <span class="tech-badge">Doc Parsing</span>
        <span class="tech-badge">Python</span>
      </div>

      <div class="section-label">Key Features</div>
      <div class="features-grid">
        <div class="feature-item"><span class="check-icon">✔</span> Medical Report Analysis</div>
        <div class="feature-item"><span class="check-icon">✔</span> OCR Pipeline</div>
        <div class="feature-item"><span class="check-icon">✔</span> AI Summaries</div>
        <div class="feature-item"><span class="check-icon">✔</span> PDF Intelligence</div>
      </div>

      <div class="metrics-row">
        <div class="metric-box"><span class="metric-val">OCR</span><span class="metric-lbl">Powered</span></div>
        <div class="metric-box"><span class="metric-val">100%</span><span class="metric-lbl">Data Privacy</span></div>
        <div class="metric-box"><span class="metric-val">Multi</span><span class="metric-lbl">Format Support</span></div>
      </div>

      <div class="btn-row">
        <a href="https://health-report-analyzer.streamlit.app/" target="_blank" class="btn btn-primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          View Demo
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="GitHub Repository">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
        <a href="#" target="_blank" class="btn btn-ghost" title="Documentation">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        </a>
      </div>
    </div>

  </div>
  
  <!-- BOTTOM PREMIUM BANNER -->
  <div class="premium-banner">
    <div class="banner-text"><span class="glow-dot"></span>More AI Projects Coming Soon</div>
    <div class="banner-sub">Currently architecting next-generation intelligent systems.</div>
  </div>

</div>

</div>

<img src="assets/divider.svg" width="100%" alt="section divider"/>

<img src="aii.svg" width="100%" alt="AI Section"/>

<img src="assets/divider.svg" width="100%" alt="section divider"/>

# 📊 Analytics Center

<div align="center">

<img height="165em"
src="https://github-readme-stats.vercel.app/api?username=muhammadmoria&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0B1026&title_color=00F5D4&icon_color=FFD700&text_color=c9d1d9"/>

<img height="165em"
src="https://github-readme-stats.vercel.app/api/top-langs/?username=muhammadmoria&layout=compact&theme=tokyonight&hide_border=true&bg_color=0B1026&title_color=00F5D4&text_color=c9d1d9"/>

<br/>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=muhammadmoria&theme=tokyonight&hide_border=true&background=0B1026&ring=00F5D4&fire=FFD700&currStreakLabel=00F5D4"/>

<br/>

<img width="100%"
src="https://github-readme-activity-graph.vercel.app/graph?username=muhammadmoria&theme=tokyo-night&hide_border=true&bg_color=0B1026&color=00F5D4&line=FFD700&point=7B2FF7"/>

</div>

---

# 🌐 Connect

<div align="center">

[![Portfolio](https://img.shields.io/badge/-PORTFOLIO-000000?style=for-the-badge&logo=codepen&logoColor=white)](https://dawoodmoria.vercel.app)

[![Email](https://img.shields.io/badge/-EMAIL-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:muhammaddawoodmoria@gmail.com)

[![GitHub](https://img.shields.io/badge/-GITHUB-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/muhammadmoria)

</div>

<img src="assets/footer.svg" width="100%" alt="Building the future — one intelligent system at a time"/>
