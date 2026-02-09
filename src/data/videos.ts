export type Video = {
  id: string;
  title: string;
  duration: string;
  category: string;
  thumbnailUrl: string;
  mediaUrl: string;
  description: string;
};

export type Category = {
  slug: string;
  name: string;
  iconUrl: string;
  videos: Video[];
};

export const categories: Category[] = [
  {
    slug: 'social-media-ai',
    name: 'Social Media AI',
    iconUrl: 'https://media.samasatthi.com/icons/learn-ai/04-social-media-ai.png',
    videos: [
      {
        id: 'sm-1',
        title: 'AI Motivational Reel Banao Free Mein',
        duration: '3:42',
        category: 'Social Media AI',
        thumbnailUrl: 'https://v3b.fal.media/files/b/oA877b29/TC9Jbr_MBN0eJm5Mwhc2.png',
        mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
        description: 'Create cinematic motivational reels with AI tools and templates.',
      },
      {
        id: 'sm-2',
        title: 'Social Media Ke Liye Facts Video Banao',
        duration: '4:10',
        category: 'Social Media AI',
        thumbnailUrl: 'https://v3b.fal.media/files/b/oA877b29/7h7WSculPFwQtQVUoBz.png',
        mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
        description: 'Generate quick facts videos optimized for short-form platforms.',
      },
      {
        id: 'sm-3',
        title: 'Instagram Ka Naya AI Feature',
        duration: '2:36',
        category: 'Social Media AI',
        thumbnailUrl: 'https://v3b.fal.media/files/b/oA877b29/6TDpgh_xrEN1Sr1F3rq.png',
        mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
        description: 'Explore the newest Instagram AI features for creators.',
      },
    ],
  },
  {
    slug: 'ai-income',
    name: 'AI Income',
    iconUrl: 'https://media.samasatthi.com/icons/learn-ai/05-ai-income.png',
    videos: [
      {
        id: 'income-1',
        title: 'Yeh Free AI Tool Se Paise Kamao',
        duration: '5:12',
        category: 'AI Income',
        thumbnailUrl: 'https://v3b.fal.media/files/b/oA877b29/SK5TdIG5x5Tc-KG29U.png',
        mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-20s.mp4',
        description: 'Step-by-step guide to monetize a free AI tool.',
      },
      {
        id: 'income-2',
        title: 'AI Clone Se Paise Kamao',
        duration: '6:03',
        category: 'AI Income',
        thumbnailUrl: 'https://v3b.fal.media/files/b/oA88e3e8/MuPkcktSazw3lmT0JGJ.png',
        mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-30s.mp4',
        description: 'Create AI clones to scale content production for clients.',
      },
      {
        id: 'income-3',
        title: 'Pictory AI Se Youtube Side Income Banao',
        duration: '4:48',
        category: 'AI Income',
        thumbnailUrl: 'https://v3b.fal.media/files/b/oA877b2f/uOV2zrTv8yrsXW3v5nKX2.png',
        mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-5mb.mp4',
        description: 'Use Pictory AI workflows to produce quick YouTube videos.',
      },
    ],
  },
  {
    slug: 'ai-essentials',
    name: 'AI Essentials',
    iconUrl: 'https://media.samasatthi.com/icons/learn-ai/07-ai-essentials.png',
    videos: [
      {
        id: 'essentials-1',
        title: '50 Lakh Ki AI Course Bilkul Free',
        duration: '8:05',
        category: 'AI Essentials',
        thumbnailUrl: 'https://v3b.fal.media/files/b/oA877b29/BhkweJb1D0L7oiuL4XdSo.png',
        mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-20s.mp4',
        description: 'A curated overview of a free, premium AI course collection.',
      },
      {
        id: 'essentials-2',
        title: 'Google Ka AI Course 100% Free',
        duration: '7:40',
        category: 'AI Essentials',
        thumbnailUrl: 'https://v3b.fal.media/files/b/oA877b2a/3rE_mJr2af5XMIxExuV_.png',
        mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
        description: 'Jump into Google’s best AI learning resources.',
      },
      {
        id: 'essentials-3',
        title: 'Data Annotation Projects WFH Ke Liye',
        duration: '5:50',
        category: 'AI Essentials',
        thumbnailUrl: 'https://v3b.fal.media/files/b/oA877b3a/36455BBrDfYDfWJBbyzh.png',
        mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
        description: 'Find and complete data annotation projects from home.',
      },
    ],
  },
];

export const allVideos = categories.flatMap((category) => category.videos);
