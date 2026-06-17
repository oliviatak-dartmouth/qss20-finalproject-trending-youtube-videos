import './index.css'
import {
  BarChart, Bar, XAxis, YAxis, Cell, LabelList,
  ResponsiveContainer, ReferenceLine, ErrorBar,
  Tooltip, CartesianGrid
} from 'recharts'

// ── DATA ──────────────────────────────────────────────────────────────────────

const viewsBySentiment = [
  { label: 'Neutral',  views: 1.416, color: '#FBBF24' },
  { label: 'Negative', views: 1.159, color: '#F87171' },
  { label: 'Positive', views: 1.115, color: '#34D399' },
]

const regressionData = [
  { label: 'Positive titles', coef: -0.063, low: 0.042, high: 0.042 },
  { label: 'Negative titles', coef: -0.048, low: 0.042, high: 0.042 },
]

const categoryData = [
  { name: 'Film & Animation',     views: 2.43, sentiment: 'pos' },
  { name: 'Music',                views: 2.41, sentiment: 'pos' },
  { name: 'Sports',               views: 1.84, sentiment: 'neu' },
  { name: 'Entertainment',        views: 1.60, sentiment: 'neu' },
  { name: 'News & Politics',      views: 1.49, sentiment: 'neg' },
  { name: 'Comedy',               views: 1.47, sentiment: 'neu' },
  { name: 'People & Blogs',       views: 1.27, sentiment: 'neu' },
  { name: 'Howto & Style',        views: 1.18, sentiment: 'pos' },
  { name: 'Gaming',               views: 1.15, sentiment: 'neu' },
  { name: 'Autos & Vehicles',     views: 1.08, sentiment: 'neu' },
  { name: 'Pets & Animals',       views: 1.02, sentiment: 'pos' },
  { name: 'Travel & Events',      views: 0.99, sentiment: 'pos' },
  { name: 'Science & Technology', views: 0.87, sentiment: 'neu' },
  { name: 'Education',            views: 0.77, sentiment: 'neu' },
]

// Average VADER compound score by category (arousal level)
const arousalByCategory = [
  { name: 'News & Politics', score: -0.12, color: '#F87171' },
  { name: 'Autos & Vehicles',score:  0.01, color: '#FBBF24' },
  { name: 'Gaming',          score:  0.01, color: '#FBBF24' },
  { name: 'Sports',          score:  0.02, color: '#FBBF24' },
  { name: 'Science & Tech',  score:  0.02, color: '#FBBF24' },
  { name: 'Film & Animation',score:  0.03, color: '#FBBF24' },
  { name: 'Education',       score:  0.04, color: '#FBBF24' },
  { name: 'Music',           score:  0.05, color: '#FBBF24' },
  { name: 'Entertainment',   score:  0.05, color: '#FBBF24' },
  { name: 'Travel & Events', score:  0.07, color: '#34D399' },
  { name: 'People & Blogs',  score:  0.07, color: '#34D399' },
  { name: 'Pets & Animals',  score:  0.11, color: '#34D399' },
  { name: 'Howto & Style',   score:  0.13, color: '#34D399' },
  { name: 'Comedy',          score:  0.16, color: '#34D399' },
]

// ── TOOLTIP ───────────────────────────────────────────────────────────────────
const Tip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: '#fff', border: '1px solid #DDD5C8',
      borderRadius: 8, padding: '0.55rem 0.85rem',
      fontSize: '0.8rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <p style={{ fontWeight: 700, marginBottom: 3 }}>{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.fill || p.stroke || '#333' }}>
          {p.name}: {typeof p.value === 'number' ? p.value.toFixed(3) : p.value}
        </p>
      ))}
    </div>
  )
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      {/* ── NAV ── */}
      <nav>
        <div className="nav-logo">
          <div className="yt-btn" />
          YouTube Virality Study
        </div>
        <ul className="nav-links">
          <li><a href="#question">Question</a></li>
          <li><a href="#data">Data</a></li>
          <li><a href="#method">Method</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#takeaway">Takeaway</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <div className="section-wrap-paper">
        <div className="hero">

          <div className="hero-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Olivia Tak · QSS 20 · Dartmouth College · 2026</span>
          </div>

          <div className="hero-layout">
            {/* LEFT COLUMN */}
            <div>
              <h1>
                Does emotional language help a YouTube video{' '}
                <em>go viral?</em>
              </h1>
              <p className="hero-sub">
                12,176 trending US videos. Sentiment analysis on every title.
                One result that goes against what most people expect.
              </p>

              <div className="sent-legend">
                <p className="legend-label">Sentiment across the full dataset</p>
                <div className="sent-track">
                  <div className="seg-neg" />
                  <div className="seg-neu" />
                  <div className="seg-pos" />
                </div>
                <div className="legend-items">
                  <span className="legend-item">
                    <span className="legend-dot" style={{ background: '#FBBF24' }} />
                    <span style={{ color: '#D97706' }}>Neutral 54.9%</span>
                  </span>
                  <span className="legend-item">
                    <span className="legend-dot" style={{ background: '#34D399' }} />
                    <span style={{ color: '#059669' }}>Positive 22.8%</span>
                  </span>
                  <span className="legend-item">
                    <span className="legend-dot" style={{ background: '#F87171' }} />
                    <span style={{ color: '#DC2626' }}>Negative 22.3%</span>
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hero-right">
              <div className="sticky">
                <span className="sticky-label">key finding</span>
                <p>
                  Neutral titles average 1.42M views. Positive and negative titles both come in lower, at 1.11M and 1.16M. The gap holds after controlling for category, channel size, and days on trending.
                </p>
              </div>

              <div className="stat-row">
                <div>
                  <div className="sr-num" style={{ color: '#E8184D' }}>12,176</div>
                  <div className="sr-lbl">trending videos analyzed</div>
                </div>
              </div>
              <div className="stat-row">
                <div>
                  <div className="sr-num" style={{ color: '#D97706' }}>54.9%</div>
                  <div className="sr-lbl">of titles are neutral in tone</div>
                </div>
              </div>
              <div className="stat-row">
                <div>
                  <div className="sr-num">15</div>
                  <div className="sr-lbl">content categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TORN DIVIDER into dark paper section */}
      <div
        className="torn-top"
        style={{ background: '#F0EBE3' }}
      />

      {/* ── SECTION 01: THE QUESTION ── */}
      <div style={{ background: '#F0EBE3' }}>
        <div className="section" id="question">
          <div className="section-header">
            <span className="section-num">01</span>
            <div>
              <p className="section-eyebrow">The Question</p>
              <h2 className="section-title">Does emotional language drive views on YouTube?</h2>
              <p className="section-body">
                A widely cited 2012 study showed that emotionally charged New York Times articles spread more. On social platforms, outrage and excitement tend to travel. But YouTube is different. Its algorithm optimises for watch time, not shares. This project tests whether the emotional virality patterns that hold on Twitter and Facebook show up on YouTube too.
              </p>
            </div>
          </div>

          <div className="hyp-grid">
            <div className="hyp-card expected">
              <span className="hyp-tag">Prior research says</span>
              <h3>Emotional content spreads more</h3>
              <p>
                Studies of article sharing on Twitter and NYT found that high-arousal content (outrage, awe, excitement) consistently gets more clicks and shares.
              </p>
            </div>
            <div className="vs-circle">VS</div>
            <div className="hyp-card found">
              <span className="hyp-tag">This study found</span>
              <h3 style={{ color: '#D97706' }}>Neutral titles win on YouTube</h3>
              <p>
                After controlling for content category, channel size, and trending duration, neutral titles still come out ahead on view counts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TORN DIVIDER back to light paper */}
      <div
        className="torn-top"
        style={{ background: '#FAF7F3' }}
      />

      {/* ── SECTION 02: THE DATA ── */}
      <div className="section-wrap-paper">
        <div className="section" id="data">
          <div className="section-header">
            <span className="section-num">02</span>
            <div>
              <p className="section-eyebrow">The Data</p>
              <h2 className="section-title">12,176 trending videos, one sentiment score each</h2>
              <p className="section-body">
                The dataset covers US trending YouTube videos from 2023. Every row is a unique video with its title, category, channel, view count, and how many days it spent on the trending list. Sentiment was assigned using VADER, a lexicon built for short social media text.
              </p>
            </div>
          </div>

          {/* Sentiment split cards */}
          <div className="grid-3">
            <div className="sent-card neu">
              <span className="sc-pct" style={{ color: '#D97706' }}>54.9%</span>
              <span className="sc-name" style={{ color: '#D97706' }}>Neutral</span>
              <p className="sc-desc">
                VADER compound score between -0.05 and +0.05. The majority of trending titles fall here. Example: "Manchester City vs Chelsea Highlights".
              </p>
            </div>
            <div className="sent-card pos">
              <span className="sc-pct" style={{ color: '#059669' }}>22.8%</span>
              <span className="sc-name" style={{ color: '#059669' }}>Positive</span>
              <p className="sc-desc">
                Compound score above 0.05. Common in Comedy, Howto &amp; Style, and Music. Example: "Best Dog Moments of 2023 (Incredibly Cute!)".
              </p>
            </div>
            <div className="sent-card neg">
              <span className="sc-pct" style={{ color: '#DC2626' }}>22.3%</span>
              <span className="sc-name" style={{ color: '#DC2626' }}>Negative</span>
              <p className="sc-desc">
                Compound score below -0.05. Concentrated in News &amp; Politics. Example: "Senate Republicans Unveil Tax Bill Plan".
              </p>
            </div>
          </div>

          {/* Arousal by category */}
          <div className="chart-card">
            <div className="tape" />
            <p className="chart-title">Average emotional arousal by category (VADER compound score)</p>
            <p className="chart-sub">Negative scores = more negative language on average; positive = more positive. Neutral zone is roughly -0.05 to +0.05.</p>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart
                data={arousalByCategory}
                layout="vertical"
                margin={{ top: 4, right: 64, bottom: 4, left: 130 }}
              >
                <CartesianGrid horizontal={false} stroke="#EEE8DF" />
                <XAxis
                  type="number" domain={[-0.18, 0.22]}
                  tickFormatter={v => v.toFixed(2)}
                  tick={{ fontSize: 11, fill: '#A09080' }}
                  axisLine={false} tickLine={false}
                />
                <YAxis
                  type="category" dataKey="name" width={128}
                  tick={{ fontSize: 11, fill: '#6B6058' }}
                  axisLine={false} tickLine={false}
                />
                <Tooltip content={<Tip />} />
                <ReferenceLine x={0} stroke="#C0B8B0" strokeDasharray="4 3" />
                <Bar dataKey="score" radius={[0, 5, 5, 0]} name="Avg VADER score" maxBarSize={18}>
                  {arousalByCategory.map((d, i) => (
                    <Cell key={i} fill={d.color} />
                  ))}
                  <LabelList
                    dataKey="score"
                    position="right"
                    formatter={v => v.toFixed(2)}
                    style={{ fontSize: 11, fill: '#6B6058', fontWeight: 600 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="chart-insight">
              <span className="ci-icon">💡</span>
              <span className="ci-text">News &amp; Politics is the clear outlier: the only category with a negative average score. Comedy and Howto &amp; Style are the most emotionally positive. This is why category fixed effects matter. Comparing News to Comedy without controls would mislead the results.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 03: THE METHOD ── */}
      <div className="section-wrap-white">
        <div className="section" id="method">
          <div className="section-header">
            <span className="section-num">03</span>
            <div>
              <p className="section-eyebrow">The Method</p>
              <h2 className="section-title">VADER scoring, then a regression to hold everything else constant</h2>
              <p className="section-body">
                Two stages: first, assign each title a sentiment score. Second, run a regression so we are comparing videos in the same content category, not Comedy against News.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            {[
              { n: '01', title: 'Score', body: 'Every title is run through VADER, a sentiment tool built for short social-media text. It returns a compound score from -1 (most negative) to +1 (most positive), picking up on punctuation, caps, and slang.' },
              { n: '02', title: 'Bucket', body: 'Scores above 0.05 are positive, below -0.05 are negative, everything between is neutral. These thresholds follow VADER\'s recommended cutoffs.' },
              { n: '03', title: 'Regress', body: 'View counts are log-transformed and regressed on sentiment, with content category and days on trending held constant. Neutral is the reference group, so the coefficients show how positive and negative titles compare to neutral ones within the same category.' },
            ].map(({ n, title, body }) => (
              <div key={n} style={{
                display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                background: 'var(--white)', border: '1px solid var(--border)',
                borderRadius: 10, padding: '1rem 1.3rem', boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ flexShrink: 0, width: 60 }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', fontWeight: 700, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{n}</div>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.25rem', lineHeight: 1.1, color: 'var(--text)', marginTop: '0.1rem' }}>{title}</div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.75, paddingTop: '0.1rem' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 04: RESULTS ── */}
      <div style={{ background: '#F0EBE3' }}>
        <div className="section" id="results">
          <div className="section-header">
            <span className="section-num">04</span>
            <div>
              <p className="section-eyebrow">Results</p>
              <h2 className="section-title">Neutral wins in the raw numbers, and the regression agrees</h2>
              <p className="section-body">
                The raw averages already point in one direction. The regression makes the result harder to wave away.
              </p>
            </div>
          </div>

          {/* Raw averages */}
          <div className="chart-card">
            <div className="tape" />
            <p className="chart-title">Average views by sentiment (millions)</p>
            <p className="chart-sub">Raw averages, no controls applied</p>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart
                data={viewsBySentiment}
                margin={{ top: 20, right: 24, bottom: 4, left: 8 }}
              >
                <CartesianGrid vertical={false} stroke="#EEE8DF" />
                <XAxis
                  dataKey="label"
                  tick={{ fontSize: 13, fill: '#6B6058', fontWeight: 600 }}
                  axisLine={false} tickLine={false}
                />
                <YAxis
                  domain={[0, 2]} tickFormatter={v => `${v}M`}
                  tick={{ fontSize: 11, fill: '#A09080' }}
                  axisLine={false} tickLine={false}
                />
                <Tooltip content={<Tip />} />
                <Bar dataKey="views" radius={[6, 6, 0, 0]} name="Avg views (M)" maxBarSize={90}>
                  {viewsBySentiment.map((d, i) => (
                    <Cell key={i} fill={d.color} />
                  ))}
                  <LabelList
                    dataKey="views"
                    position="top"
                    formatter={v => `${v}M`}
                    style={{ fontSize: 13, fontWeight: 700, fill: '#6B6058' }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="chart-insight">
              <span className="ci-icon">💡</span>
              <span className="ci-text">Neutral titles average 27% more views than positive and 22% more than negative in raw terms. This is before any controls. The next chart tests whether it survives regression.</span>
            </div>
          </div>

          {/* Regression coefficients */}
          <div className="chart-card">
            <div className="tape" />
            <p className="chart-title">Regression coefficients versus neutral (log views)</p>
            <p className="chart-sub">Both emotional categories are below zero. Error bars show 95% confidence intervals.</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={regressionData}
                margin={{ top: 20, right: 40, bottom: 4, left: 16 }}
              >
                <CartesianGrid vertical={false} stroke="#EEE8DF" />
                <XAxis
                  dataKey="label"
                  tick={{ fontSize: 13, fill: '#6B6058', fontWeight: 600 }}
                  axisLine={false} tickLine={false}
                />
                <YAxis
                  domain={[-0.14, 0.04]}
                  tick={{ fontSize: 11, fill: '#A09080' }}
                  axisLine={false} tickLine={false}
                />
                <Tooltip content={<Tip />} />
                <ReferenceLine y={0} stroke="#C0B8B0" strokeDasharray="4 3" />
                <Bar dataKey="coef" radius={[4, 4, 0, 0]} name="Coefficient" maxBarSize={90}>
                  <Cell fill="#34D399" />
                  <Cell fill="#F87171" />
                  <ErrorBar dataKey="low" direction="y" stroke="#6B6058" strokeWidth={1.5} width={7} />
                  <LabelList
                    dataKey="coef"
                    position="insideTop"
                    formatter={v => v.toFixed(3)}
                    style={{ fontSize: 12, fontWeight: 700, fill: '#fff' }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="chart-insight">
              <span className="ci-icon">💡</span>
              <span className="ci-text">Both bars sit below the zero line, meaning emotional titles underperform neutral even within the same category. The confidence intervals do not cross zero for positive titles, making that finding statistically reliable.</span>
            </div>
          </div>

          {/* Callout */}
          <div className="corr-card">
            <div>
              <div className="corr-num">-0.045</div>
              <div className="corr-sub">correlation: sentiment arousal vs log-views</div>
            </div>
            <p className="corr-text">
              The correlation between a title's emotional intensity and its view count is -0.045. Small in absolute terms, but negative. More emotional language does not mean more views. The direction is the whole point.
            </p>
          </div>
        </div>
      </div>

      {/* TORN DIVIDER */}
      <div
        className="torn-top"
        style={{ background: '#FAF7F3' }}
      />

      {/* ── SECTION 05: WHAT IT MEANS ── */}
      <div className="section-wrap-paper">
        <div className="section" id="takeaway">
          <div className="section-header">
            <span className="section-num">05</span>
            <div>
              <p className="section-eyebrow">What It Means</p>
              <h2 className="section-title">The YouTube algorithm is not Twitter</h2>
              <p className="section-body">
                Platform design changes what content spreads. These findings push back against a one-size-fits-all theory of emotional virality.
              </p>
            </div>
          </div>

          <div className="conclusion-box">
            <span className="cb-label">bottom line</span>
            <p>
              Emotional language in a YouTube title does not boost views. If anything, it predicts slightly fewer. Whether that is because neutral titles convert curiosity into watch time more reliably, or because creators who write neutral titles simply make better content, this dataset cannot say for certain. What it does say is that the "go viral with emotion" playbook looks weaker on a watch-time-optimised platform than on a share-optimised one.
            </p>
          </div>

          <div className="limits-card">
            <p className="limits-label">Limitations</p>
            <p>
              This dataset covers 2023 only, and VADER misses sarcasm and context-dependent tone. Future work could extend to thumbnail sentiment, comment language, or more recent data.
            </p>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer>
        <p>
          <strong>Does Emotional Language Drive YouTube Views?</strong>
          &nbsp;&middot;&nbsp; QSS 20 Final Project &nbsp;&middot;&nbsp; Dartmouth College 2026
        </p>
        <p style={{ marginTop: '0.4rem' }}>
          Data: <a href="https://www.kaggle.com/datasets/rsrishav/youtube-trending-video-dataset" target="_blank" rel="noopener noreferrer">Kaggle US Trending YouTube Statistics</a> &nbsp;&middot;&nbsp;
          Sentiment: VADER &nbsp;&middot;&nbsp;
          Built with React + Recharts
        </p>
      </footer>
    </>
  )
}
