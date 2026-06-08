# Agentic Analysis: Website Generation Workflow
## QSS20 Final Project: YouTube Trending Video Sentiment Analysis

**Student:** Olivia Tak
**Tool:** Claude Code / CoWork

---

**Q:** ok i need to make a website. look at my paper, my jupyter notebook, Final Deliverables file. i want to make it social media colour coded and have it be creative, but also professional enough for a coding project that i should be able to show employers. i dont want it to be too text heavy. it has to be live and linkable by the Sunday June 7 deadline. suggested stack is React and Vercel

**A:** Read all project files. Your project is about YouTube virality and sentiment analysis, neutral titles outperform emotional ones, which flips the expected hypothesis. Built a full React site with a dark YouTube-inspired theme: black background, YouTube red accents, sentiment color coding (yellow = neutral, green = positive, red = negative), five sections following the question to data to method to results to takeaway structure, all key figures embedded, big stat callouts (1.42M neutral vs 1.16M negative), and fixed responsive nav. Deployed live to https://website2-five-mauve.vercel.app.

---

**Q:** i dont know if i want it to be so dark. i want it to be slightly social media themes and colour coded.

**A:** Redesigned to a light social-media palette: off-white base with a subtle pink-to-blue gradient on the hero, white cards with soft drop shadows, hot pink brand accent (#FF0055), frosted glass nav, and sentiment color coding (amber/emerald/red) that pops much harder against light backgrounds. Redeployed to the same URL.

---

**Q:** don't use any em-dash in the writing. don't use any claude specific writing or language. make it human natural writing style. also make sure the website isnt overloaded with information and explains everything sequentially and simply. this might be too complicated. also dont implement this without asking or duplicating and making a new website, but using the figures we have, are we able to remake the figures within the website itself rather than using my own figures?

**A:** Yes, all the key figures can be rebuilt as live interactive Recharts charts directly in the site using the numbers from the paper. The main bar chart (avg views by sentiment: 1.42M / 1.16M / 1.11M), the OLS regression coefficient plot, the category views chart, and the sentiment composition chart can all be recreated. This means the charts match the site color scheme exactly, have hover tooltips, and look crisper than embedded PNGs at any screen size. Proposed plan before touching anything: fix the writing, rebuild the four key charts in Recharts, cut each section down, keep it strictly sequential. Asked for confirmation before implementing.

---

**Q:** and also i want it to be a great website that i can show to employers and its impressive. don't want it to seem fake and AI generated. its ok if the text is not short but it should just make sense and should be interesting to read. you don't need to use over-dramatic text. and yes go ahead but remember for all the new tables and new updates. can you make a duplicate website in vercel just so i have this version saved too

**A:** Created a backup of the current version as a separate Vercel project at https://yt-virality-v1.vercel.app, which is fixed and will not change. Then rebuilt the main site with all figures recreated as interactive Recharts charts, natural writing with no em-dashes and no AI-style phrasing, and each section reading like a researcher explaining their work to someone curious but not technical.

---

**Q:** ok perfect we will be working on new version now onwards. on the top most line where it says "QSS 20 · Dartmouth College · 2023" can we turn the 2023 to 2026. also for subheaders like "01 — The Question" can we make it not so small (because thats very telling of claude generated websites) and also remove em dash from there and use a colon. also what ways do you have to make the website more creative and fun to represent social media? for example maybe like a scrap book idea? or have the youtube button logo somewhere or just make it more creative. also i do think it is slightly text heavy. remember my professor wants someone to be able to gauge this website in a couple minutes. also do you think the background colour and main text of the website (black and white) is slightly dull. what ways do you have to change it? discuss with me before making any changes

**A:** Held all changes while discussing. Proposed three creative directions: (A) YouTube-native feel with stat cards styled like video thumbnails, a red play button logo in the nav, and section dividers that look like a YouTube progress bar; (B) Data zine / editorial look with big pull-quote numbers, alternating column layouts, and section backgrounds that shift color as you scroll; (C) Scrapbook / collage with cards at slight rotations, sticky-note style callouts, and texture. On the black and white question: yes, it is flat. Options include a warm cream base (#FAFAF5), tinted sections where each section gets a subtle wash of its own color, or a dark hero with light body. Recommended A or B or a mix, and asked which direction resonated before touching anything.

---

**Q:** can you show me a sample of the 3 directions in preview without actually deploying to website. i just want to get a visual idea of what options you are suggesting.

**A:** Fixed the viewport issue first (it was defaulting to 2px wide). Then created three standalone HTML mockup files served from the public folder so they could be previewed locally at localhost:5173. Direction A: dark, YouTube red accents, play button logo mark in nav, thumbnail-style cards with color top-bars, progress bar divider. Direction B: warm cream background, serif headline font (DM Serif Display), asymmetric two-column hero layout, dark finding card. Direction C: white background, tricolor gradient hero (pink/amber/green), sentiment-colored stat cards, color-coded pills used as a legend throughout.

---

**Q:** where do i see this?

**A:** The screenshots only show on my end. Open your browser and go to these three URLs while the dev server is running: Direction A at localhost:5173/mockup-a.html, Direction B at localhost:5173/mockup-b.html, Direction C at localhost:5173/mockup-c.html.

---

**Q:** i dont like any of these. if i had to pick i would pick b. but i still am not getting that scrapbooky, creative feeling

**A:** Understood. B is the right base but it needs more personality. Proposed a Direction D: B's editorial warmth plus scrapbook accents, slightly tilted cards, sticky note callouts, washi tape strips on the cards, and handwritten font (Caveat) used only for short labels. Built a new mockup-d.html to preview.

---

**Q:** try it and give me a sample. yes this is better but its a little bit too much like it still needs to be academic and professional

**A:** Built Direction E: pulled back significantly on the scrapbook elements to keep it feeling serious. Warm paper background, DM Serif Display for the big headline, sticky note for the key finding with just a slight tilt and a folded corner, Caveat handwriting font used sparingly only for the key finding label and date line, clean stat rows, YouTube play button in the nav, sentiment color band as a visual legend, ghost section numbers for depth. Directed to open mockup-e.html in the browser to scroll through the full thing.

---

**Q:** i think i liked option D better. i dont like the tilted stuff tho. and things sometimes seem all over the place. the website should be scrapbooky design but should feel intentional and well-designed

**A:** Totally clear: D's personality but structured and intentional. No rotations, everything on a clean grid. The scrapbook feeling comes from the materials (paper, tape, sticky notes, handwriting font) not from chaos. Built Direction F: warm paper background (#F2EDE4), sticky note sits clean in the grid with just the folded corner as the personality detail, Caveat only for short labels (never body text), DM Serif Display for big headlines, torn paper edge between hero and sections for texture, ghost section numbers in the background, YouTube play button in the nav. Everything straight, everything on a clean grid.

---

**Q:** i like it. but make sure all fonts are readable. i feel like the curly one may not be readable. build out the whole website and keep in mind aesthetics and professionalism

**A:** Used Caveat only at 1rem+ size with font-weight 600-700, only for short labels and eyebrows, never for body text or important information. Inter for all body text. Built out the full five-section site in Direction F style with Recharts charts and deployed to Vercel. Site live with: warm paper background throughout, sticky note for key finding in hero, sentiment color bar, three sentiment cards with washi-tape top strips, two Recharts charts in the data section, a four-step method section, the two main result charts, and a conclusion sticky note in the takeaway section.

---

**Q:** for the limitations at the end can you change it to this dataset considers only year 2023

**A:** Updated and redeployed. The limitations section now reads "This dataset considers only year 2023."

---

**Q:** can you add my name Olivia Tak to the top header QSS 20 · Dartmouth College · 2026

**A:** Done. The header now reads "Olivia Tak · QSS 20 · Dartmouth College · 2026."

---

**Q:** also for the charts, rather than just having them there, can we not show what the chart means or takeaways from the chart? it can even be a one liner. also for the dataset link at the bottom there is no hyperlink. also it is a little odd right now that one page holds content that is lagging to the next page. also why did we pick sentiment breakdown of video categories rather than the arousal breakdown? also are we mentioning likes or comments count at all? can we mention it somewhere?

**A:** Addressed all five at once: (1) added a one-liner insight under each chart with a lightbulb marker explaining the takeaway; (2) made the Kaggle dataset name in the footer a clickable link; (3) increased section padding so sections fill the viewport cleanly without bleeding into the next; (4) swapped the stacked sentiment breakdown chart for an average VADER compound score by category chart, which is directly tied to the regression and shows exactly why category fixed effects are needed (News and Politics clearly negative, Comedy clearly positive); (5) added four engagement stat cards to the data section showing 1.24M avg views, 74K avg likes, 8.5K avg comments, and a 6% like-to-view ratio.

---

**Q:** also how would i make the website public if i had to? also for the background colour maybe its a little too dark? remember not to use any em-dash in text. the current website have em dashes. is there any ways to make the website better, more simpler, better design/creativity.

**A:** On making it public: it already is public. Anyone with the link can open it. For a custom domain, buy one from a registrar like Namecheap (~$10/year) and add it in Vercel project settings. Then scanned the full codebase and removed all em-dashes. Lightened the background from #F2EDE4 to #F7F2EA and section backgrounds from #E8E0D2 to #EDE8DF. Redeployed with both fixes. Also proposed six design ideas to discuss before touching anything: cutting the chart count since the arousal-by-category chart tells a more interesting story than the views-by-category one; bigger bolder section titles; a full-width key number moment as a visual pause between sections; lighter more minimal cards relying only on shadow and spacing; a scroll progress indicator in the nav; and consolidating the method section into a simpler numbered list. Asked which of these were of interest before implementing any of them.

---

**Q:** im also not a huge fan of this specific cursive font used in some places. are there other font options we could explore?

**A:** Proposed four alternatives to Caveat, each suited to the same accent role (eyebrows, step labels, sticky note labels): (1) Space Mono, a monospace typewriter-code feel that fits a data analysis project naturally and is very popular in data portfolios; (2) Courier Prime, a refined version of Courier New with typewriter warmth but more human than Space Mono; (3) Syne, a geometric modern sans that feels editorial and magazine-like; (4) Instrument Serif in italic, refined and understated, like a handwritten note but legible and polished. Personal recommendation was Space Mono because it reinforces the data and code project angle without looking decorative.

---

**Q:** can you show me the options

**A:** Built a preview showing all four font options side by side. A (Space Mono): tight monospace, very data/code energy, step labels and "key finding" tag look like terminal output. B (Courier Prime): warmer typewriter feel, slightly more relaxed but still structured. C (Syne): modern geometric sans, most magazine/editorial, clean and confident. D (Instrument Serif): italic serif, the most elegant and understated, closest in feel to old Caveat but much more readable.

---

**Q:** are there any cursive options? i like A the most.

**A:** Built a new preview showing Space Mono alongside the best readable cursive alternatives: A (Space Mono) as the current favourite, B (Dancing Script) the most flowing and elegant cursive, C (Satisfy) bolder and more vintage-script with a lot of personality, D (Kalam) the most casual looking like actual handwriting on a sticky note. Also suggested a possible mix: Space Mono for step numbers and section eyebrows, and Dancing Script or Satisfy just for the sticky note labels where a handwritten touch feels most natural.

---

**Q:** lets go with option A (Space Mono). also my prof's requirements were that the site tells the story end-to-end: question to data to method to result to takeaway. Embed key figures so a visitor can grasp the project in 2-3 minutes. do you think our current website has too much going on? maybe unnecessary graphs not needed? can we make a website plan and i can see what to include and what to remove or shorten.

**A:** Read all project files again for context before making the plan. Produced a full content audit: Hero (keep as-is, sticky note and sentiment bar are doing real work); 01 The Question (keep, already lean, the VS card tells the story fast); 02 The Data (keep the three sentiment cards, cut the engagement stats row and the views-by-category chart, keep the arousal-by-category chart since it directly explains why category controls were needed); 03 The Method (shorten significantly, replace four step cards and VADER explainer box with a simple three-line summary); 04 Results (keep both charts, they are the central result and the rigorous result, keep the correlation callout); 05 What It Means (cut the three explanation cards, keep the conclusion sticky note and two-sentence limitations). Summarized the proposed cuts clearly and asked for review before implementing anything.

---

**Q:** ok i want to remove the engagement stats row and the views by category chart. keep the arousal chart. simplify the method section to three steps. keep both result charts. shorten the takeaway. and swap the font to Space Mono throughout.

**A:** Implemented all the approved changes: swapped Caveat for Space Mono throughout all labels and eyebrows, removed the engagement stat cards, removed the views by category bar chart, replaced the four method cards and VADER explainer box with three plain horizontal rows (Score, Bucket, Regress), removed the three explanation cards in the takeaway section, shortened limitations to two sentences. Built and deployed. The page now tells the story in a straight line: hero to question to data snapshot plus one chart to three-step method to two key figures to conclusion.

---

**Q:** ok is this good to submit?

**A:** Did a final factual review against the paper and README before confirming. Found two errors: the data section said "2017 to 2018" but the actual dataset used was 2023 data, and the footer linked to the wrong Kaggle dataset (should be rsrishav/youtube-trending-video-dataset). Fixed both and redeployed. Final checklist confirmed: public URL, correct story flow (question to data to method to results to takeaway), both key figures embedded, two to three minute read, name and course visible, correct dataset year, correct dataset link, no em-dashes.

