# YouTube Trending Video Sentiment Analysis

**QSS 20 Final Project | Olivia Tak | Spring 2026**
Website here: https://website2-five-mauve.vercel.app/

## Research Question

Does the emotional tone and arousal of YouTube trending video titles predict their virality?

## Project Summary

This project examines whether the emotional tone of a YouTube video title can predict how viral it gets. I used VADER sentiment analysis to score each title in two ways: arousal (how emotionally intense the title is, regardless of positive or negative direction) and sentiment label (positive, negative, or neutral). I then compared these scores against view counts, likes, and comments across 12,176 unique trending videos from 2023. The analysis tests whether Berger and Milkman's (2012) arousal-virality hypothesis — established in a sharing-based context — holds on YouTube, where content is amplified algorithmically based on watch time.

## Repository Structure

```
code/       — numbered notebooks in run order
data/       — raw and processed datasets (not tracked in git; see Data section below)
output/     — saved figures (.png)
```

## Notebooks

| Notebook | What it does | Takes in | Outputs |
|----------|-------------|----------|---------|
| [00_load_clean.ipynb](code/00_load_clean.ipynb) | Loads raw data, inspects structure, filters to 2023, deduplicates by video ID, log-transforms view/like/comment counts, maps category IDs to names | `data/US_youtube_trending_data.csv`, `data/US_category_id.json` | `data/df_2023_clean.csv` |
| [01_analyze.ipynb](code/01_analyze.ipynb) | Applies VADER sentiment analysis to titles; computes arousal scores and sentiment labels; produces sample characterization table; runs t-tests, Pearson and Spearman correlations, and OLS regression controlling for content category, channel activity, and days trending | `data/df_2023_clean.csv` | `data/df_2023_sentiment.csv`, `output/fig_regression.png`, `output/table1_sample_characterization.png`, `output/table2_results_summary.png` |
| [02_visualize.ipynb](code/02_visualize.ipynb) | Generates all exploratory and results figures: scatter plots, boxplots, category breakdowns, sentiment comparison charts, heatmap, sentiment composition by category | `data/df_2023_sentiment.csv` | `output/fig1_arousal_distribution.png` through `output/fig10_top_trending.png` |

## Data

The dataset is the [Trending YouTube Video Statistics](https://www.kaggle.com/datasets/rsrishav/youtube-trending-video-dataset) by rsrishav on Kaggle. It is not included in this repo because the file is too large. To run the notebooks, download `US_youtube_trending_data.csv` and `US_category_id.json` from Kaggle and place them in the `data/` folder.

**Key fields used:** `title`, `view_count`, `likes`, `comment_count`, `trending_date`, `categoryId`, `channelId`, `video_id`

## How to Run

Run the notebooks in order:

1. `code/00_load_clean.ipynb`
2. `code/01_analyze.ipynb`
3. `code/02_visualize.ipynb`

## Key Findings

- Neutral-titled videos outperform emotionally charged ones on all virality metrics (views, likes, comments), even after controlling for content category, channel activity, and days on the trending page in an OLS regression
- The continuous arousal score is negatively correlated with log views (Pearson r = -0.045), meaning more emotionally intense titles are associated with slightly fewer views
- Days on the trending page does not differ meaningfully by sentiment group
- Category is a stronger predictor of virality than sentiment — Film & Animation, Music, and Entertainment have the highest average view counts regardless of title tone
- These findings run counter to Berger and Milkman's (2012) prediction that high-arousal content should be more viral, suggesting the mechanism may differ on algorithmically-driven platforms
