export type Video = {
  id: string;
  title: string;
  duration: string;
  category: string;
  thumbnailUrl: string;
  mediaUrl: string;
  mediaType: 'MP4' | 'YOUTUBE';
  sourceUrl?: string;
  description: string;
};

export type Category = {
  slug: string;
  name: string;
  iconUrl: string;
  videos: Video[];
};

const mp4Samples = [
  'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
  'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
  'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
  'https://samplelib.com/lib/preview/mp4/sample-20s.mp4',
  'https://samplelib.com/lib/preview/mp4/sample-30s.mp4',
  'https://samplelib.com/lib/preview/mp4/sample-5mb.mp4',
];

const durationPool = ['2:36', '3:08', '3:42', '4:10', '4:48', '5:12', '6:03', '7:40'];

const buildVideo = (
  id: string,
  title: string,
  category: string,
  thumbnailUrl: string,
  sourceUrl: string,
  index: number,
): Video => ({
  id,
  title,
  duration: durationPool[index % durationPool.length],
  category,
  thumbnailUrl,
  mediaUrl: mp4Samples[index % mp4Samples.length],
  mediaType: 'MP4',
  sourceUrl,
  description: `Explore ${category} workflows with ${title}.`,
});

export const categories: Category[] = [
  {
    slug: 'social-media-ai',
    name: 'Social Media AI',
    iconUrl: 'https://media.samajsaathi.com/icons/learn-ai/04-social-media-ai.png',
    videos: [
      buildVideo(
        'social-media-ai-_HL7l_62bUc',
        'AI Motivational Reel Banao Free Mein',
        'Social Media AI',
        'https://v3b.fal.media/files/b/0a877b29/TC9Jbr_MBN0eJm5Mwhc2.png',
        'https://youtube.com/embed/_HL7l_62bUc',
        0,
      ),
      buildVideo(
        'social-media-ai-avZd1bSvqyE',
        'Social Media Ke Liye Facts Video Banao',
        'Social Media AI',
        'https://v3b.fal.media/files/b/0a877b28/7hy7WSculPFwQtcVu0BzN.png',
        'https://youtube.com/embed/avZd1bSvqyE',
        1,
      ),
      buildVideo(
        'social-media-ai-meVTqNn1P5A',
        'Instagram Ka Naya AI Feature',
        'Social Media AI',
        'https://v3b.fal.media/files/b/0a877b2a/T6DpgH_xrEN15r1f3rqu-.png',
        'https://youtube.com/embed/meVTqNn1P5A',
        2,
      ),
      buildVideo(
        'social-media-ai-x3LsfGSP-Hk',
        'Ab Meta AI Karega Aapki Photo Edit',
        'Social Media AI',
        'https://v3b.fal.media/files/b/0a877b29/Joql9g8WnlzhXj5sDCfN5.png',
        'https://youtube.com/embed/x3LsfGSP-Hk',
        3,
      ),
      buildVideo(
        'social-media-ai-lfDxSj9xnmI',
        'AI Se Reel Banaye 1 Minute Mein',
        'Social Media AI',
        'https://v3b.fal.media/files/b/0a877b29/F5qaMZqTNvp4Z9KmprqEV.png',
        'https://youtube.com/embed/lfDxSj9xnmI',
        4,
      ),
      buildVideo(
        'social-media-ai-LX598gRezv4',
        'Instagram AI Character Kaise Banaye',
        'Social Media AI',
        'https://v3b.fal.media/files/b/0a877b28/r_1g2P1AnedS4SSN89vwG.png',
        'https://youtube.com/embed/LX598gRezv4',
        5,
      ),
      buildVideo(
        'social-media-ai-BDN_N-mAbkU',
        'Trending 3D AI Photo Kaise Banaye',
        'Social Media AI',
        'https://v3b.fal.media/files/b/0a877b28/rKMuPZJCl1S9wIpP-knMt.png',
        'https://youtube.com/embed/BDN_N-mAbkU',
        6,
      ),
      buildVideo(
        'social-media-ai-ogAG6GcmHjQ',
        'Social Media Content Ke Liye Best AI Tools',
        'Social Media AI',
        'https://v3b.fal.media/files/b/0a877b29/M-Gw4R2hoRC29el9zQ-uI.png',
        'https://youtube.com/embed/ogAG6GcmHjQ',
        7,
      ),
      buildVideo(
        'social-media-ai-mobK-kGDxWo',
        'AI Tools Se Asani Se Content Creator Bano',
        'Social Media AI',
        'https://v3b.fal.media/files/b/0a877b29/9kGHRX9Gj9OcEJwBuVDt1.png',
        'https://youtube.com/embed/mobK-kGDxWo',
        8,
      ),
      buildVideo(
        'social-media-ai-6ZqxfoJ3Vk',
        'AI Ki Madad Se Faceless Videos Banao',
        'Social Media AI',
        'https://v3b.fal.media/files/b/0a877b28/y9MpZDuI2z1kZV_mNA2Qd.png',
        'https://youtube.com/embed/6ZqxfoJ3Vk',
        9,
      ),
    ],
  },
  {
    slug: 'ai-income',
    name: 'AI Income',
    iconUrl: 'https://media.samajsaathi.com/icons/learn-ai/05-ai-income.png',
    videos: [
      buildVideo(
        'ai-income-TpW3QxwADgE',
        'Yeh Free AI Tool Se Paise Kamao',
        'AI Income',
        'https://v3b.fal.media/files/b/0a877b2e/SK5TdlG5x5Tc-KG29U_Jm.png',
        'https://youtube.com/embed/TpW3QxwADgE',
        10,
      ),
      buildVideo(
        'ai-income-Wi9cKN6Fg1E',
        'AI Clone Se Paise Kamao',
        'AI Income',
        'https://v3b.fal.media/files/b/0a883ea8/MuPkcktStazw3ImTOJGI_m.png',
        'https://youtube.com/embed/Wi9cKN6Fg1E',
        11,
      ),
      buildVideo(
        'ai-income-mkGhOo_oB4o',
        'Pictory AI Se Youtube Side Income Bann Sakta Hai?',
        'AI Income',
        'https://v3b.fal.media/files/b/0a877b2f/uOV2zrTv8yrsXW3v5nKX2.png',
        'https://youtube.com/embed/mkGhOo_oB4o',
        12,
      ),
      buildVideo(
        'ai-income-k-aVj_Geyvc',
        'DesiVocal Se Bharpur Paise Kamao',
        'AI Income',
        'https://v3b.fal.media/files/b/0a877b2e/MBiZLEvaN7FdmVqUDZcJR.png',
        'https://youtube.com/embed/k-aVj_Geyvc',
        13,
      ),
      buildVideo(
        'ai-income-gUDRMsW3v1U',
        'AI Se WordPress Plugin Banakar Paise Kamao',
        'AI Income',
        'https://v3b.fal.media/files/b/0a877b2f/RWn-4G0cCcDogRcsUuZHY.png',
        'https://youtube.com/embed/gUDRMsW3v1U',
        14,
      ),
      buildVideo(
        'ai-income-I93GvazYTuc',
        'Quick Money AI Se Kamao',
        'AI Income',
        'https://v3b.fal.media/files/b/0a877b2e/owJQOWUFlWuxa7HZuageT.png',
        'https://youtube.com/embed/I93GvazYTuc',
        15,
      ),
      buildVideo(
        'ai-income-ibI3RRJN0Wg',
        'AI Hindi Story Se Youtube Pe Paise Kamao',
        'AI Income',
        'https://v3b.fal.media/files/b/0a883f60/F8LDntc6q7xMdyJfjC17W.png',
        'https://youtube.com/embed/ibI3RRJN0Wg',
        16,
      ),
      buildVideo(
        'ai-income-TPtAAW3LSP4',
        'Kya Hum AI Se Active Income Bana Sakta Hai?',
        'AI Income',
        'https://v3b.fal.media/files/b/0a877b2e/B7yW2SjAclyMReSqcYSfM.png',
        'https://youtube.com/embed/TPtAAW3LSP4',
        17,
      ),
      buildVideo(
        'ai-income-JrbFF30SHzc',
        'Fiverr Par AI Se Paise Kamao',
        'AI Income',
        'https://v3b.fal.media/files/b/0a883ea7/LOY5sDu5YgN2GaPpJXg5J.png',
        'https://youtube.com/embed/JrbFF30SHzc',
        18,
      ),
      buildVideo(
        'ai-income-VKpgO2FVXa0',
        'AI Tool Se Side Business Shuru Karo!',
        'AI Income',
        'https://v3b.fal.media/files/b/0a877b2e/GuuKXPXsea-n1IM1VW6jt.png',
        'https://youtube.com/embed/VKpgO2FVXa0',
        19,
      ),
    ],
  },
  {
    slug: 'ai-essentials',
    name: 'AI Essentials',
    iconUrl: 'https://media.samajsaathi.com/icons/learn-ai/07-ai-essentials.png',
    videos: [
      buildVideo(
        'ai-essentials-DzCWyUCr9LQ',
        '50 Lakh Ki AI Course Bilkul Free!',
        'AI Essentials',
        'https://v3b.fal.media/files/b/0a877b39/BhkweJb1D0L7oiuL4XdSo.png',
        'https://youtube.com/embed/DzCWyUCr9LQ',
        20,
      ),
      buildVideo(
        'ai-essentials-kmHt5BHXYvU',
        'Google Ka AI Course 100% Free',
        'AI Essentials',
        'https://v3b.fal.media/files/b/0a877b3a/3rE_mrJr2af5XMJxEXuV_.png',
        'https://youtube.com/embed/kmHt5BHXYvU',
        21,
      ),
      buildVideo(
        'ai-essentials-_w07HdQxuIw',
        'Nvidia Ka Free Generative AI Course',
        'AI Essentials',
        'https://v3b.fal.media/files/b/0a877b3a/oD30ARDLlEDQxinlqQvwZ.png',
        'https://youtube.com/embed/_w07HdQxuIw',
        22,
      ),
      buildVideo(
        'ai-essentials-ua-NkDcLneo',
        'Data Annotation Projects WFH Ke Liye',
        'AI Essentials',
        'https://v3b.fal.media/files/b/0a877b3a/36455BIBrDfyDFwJBbyzh.png',
        'https://youtube.com/embed/ua-NkDcLneo',
        23,
      ),
      buildVideo(
        'ai-essentials-sAz94JQ6v4w',
        '5 Best Free AI Skills Courses',
        'AI Essentials',
        'https://v3b.fal.media/files/b/0a877b39/U9h2KU6HwQ1BX45INCy0y.png',
        'https://youtube.com/embed/sAz94JQ6v4w',
        24,
      ),
      buildVideo(
        'ai-essentials-5kQdqXsmnBc',
        'Indian Government Ka AI Course',
        'AI Essentials',
        'https://v3b.fal.media/files/b/0a877b39/zBWHk56rKEmLqmbWXN9N6.png',
        'https://youtube.com/embed/5kQdqXsmnBc',
        25,
      ),
      buildVideo(
        'ai-essentials-IoslCQQ4lcE',
        'Lakhon Kamao Yeh Course Karke',
        'AI Essentials',
        'https://v3b.fal.media/files/b/0a877b39/ZHWjXBXcErWgNiR2fz2na.png',
        'https://youtube.com/embed/IoslCQQ4lcE',
        26,
      ),
      buildVideo(
        'ai-essentials-SxtDXU_rM1s',
        'Crowdgen Platform Ka AI Training Jobs',
        'AI Essentials',
        'https://v3b.fal.media/files/b/0a877b3a/O9KNgQYUNIXrTjvwZWEmE.png',
        'https://youtube.com/embed/SxtDXU_rM1s?feature=share',
        27,
      ),
      buildVideo(
        'ai-essentials-gcOFJSc-lWs',
        'EY Aur Microsoft Ka Free AI Course',
        'AI Essentials',
        'https://v3b.fal.media/files/b/0a877b3a/o4DNA97xHC1BixuETJS_J.png',
        'https://youtube.com/embed/gcOFJSc-lWs',
        28,
      ),
    ],
  },
];

export const allVideos = categories.flatMap((category) => category.videos);
