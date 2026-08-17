// Each project: { title, period, context, description, tech: [], links: [{label, url}], featured }
// context = course/lab/advisor for academic, or just a short tagline for personal.
// featured: true surfaces it on the Home page.

export const academicProjects = [
  {
    title: 'Fairness Interventions in Automated Essay Scoring',
    period: 'Mar 2026 - Jun 2026',
    context: 'CSEN 346 - Natural Language Processing',
    description:
      'Fine-tuned a Longformer-based essay scoring model and evaluated two debiasing methods (adversarial debiasing via GRL, and orthogonal projection) across five demographic attributes; built the HuggingFace dataset pipeline for cross-model evaluation and co-authored the paper.',
    tech: ['Python', 'PyTorch', 'HuggingFace', 'NLP'],
    links: [
      { label: 'Repo', url: 'https://github.com/SCU-CSEN346/Analyzing-Demographic-Biases' },
      { label: 'Paper', url: 'https://github.com/SCU-CSEN346/Analyzing-Demographic-Biases/blob/main/paper/AES-Paper.pdf' },
      { label: 'Poster', url: 'https://github.com/SCU-CSEN346/Analyzing-Demographic-Biases/blob/main/paper/AES-Poster.pdf' },
    ],
    featured: true,
  },
  {
    title: 'Recreating and Exploring Improvements to mrDiff',
    period: 'Jan 2026 - Mar 2026',
    context: 'CSEN 342 - Deep Learning',
    description:
      'Replicated the mr-Diff architecture from an ICLR 2024 paper on time series forecasting with diffusion models, diagnosed a performance gap through systematic ablations, and closed it with targeted fixes (continuous mixup masking, corrected LeakyReLU slope, GPU transfer optimizations).',
    tech: ['Python', 'PyTorch', 'Deep Learning', 'Diffusion Models'],
    links: [
      { label: 'Repo', url: 'https://github.com/karthiktamiledu/Recreating-and-Attempting-to-Improve-mrDiff' },
    ],
    featured: true,
  },
  {
    title: 'Accessible Virtual Tours',
    period: 'Sep 2023 - Jul 2024',
    context: 'SCU HCI Lab',
    description:
      'Built an interactive 3D virtual museum tour for the SCU de Saisset Museum in Matterport, enriching the experience with embedded videos, voiceovers, slideshows, and contextual information beyond what the physical space allows.',
    tech: ['Matterport', 'HCI'],
    links: [
      { label: 'Paper', url: 'https://scholarcommons.scu.edu/cseng_senior/306/' },
    ],
    featured: false,
  },
];

export const personalProjects = [];
