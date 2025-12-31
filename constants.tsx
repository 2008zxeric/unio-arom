
import { ScentItem } from './types';

export const ASSETS = {
  // 元 (Yuan) - 植物灵魂：采用专业芳疗图鉴风格
  galbanum: 'https://images.unsplash.com/photo-1596715611218-9bb215f4c891?auto=format&fit=crop&q=80&w=1200', // 白松香 (Ferula) 黄色花序
  chamomile: 'https://images.unsplash.com/photo-1557124816-e9b7d5440de2?auto=format&fit=crop&q=80&w=1200', // 蓝洋甘菊花苞微距
  plai: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=1200', // 普赖(姜类)根茎切面
  sandalwood: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?auto=format&fit=crop&q=80&w=1200', // 澳洲檀香高级木质纹理
  neroli: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=1200', // 苦橙花白色花蕾
  vetiver: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200', // 岩兰草/大地与根系

  // 和 (He) - 宁静处方：模拟情绪氛围
  solar: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=1200', // 日晖 (温暖能量)
  abyssal: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200', // 深渊 (静谧靛蓝)
  forest: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200', // 林间 (冷杉光影)
  digital: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200', // 尘嚣 (极简云雾)

  // 境 (Jing) - 器物材质：实验室美学
  basalt: 'https://images.unsplash.com/photo-1621327017866-ca458f70d970?auto=format&fit=crop&q=80&w=1200', // 玄石
  nebula: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=1200', // 星云玻璃
  crystal: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80&w=1200', // 晶棱

  gcmsPlaceholder: 'https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&q=80&w=600',
  heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-smoke-drifting-over-black-background-4075-large.mp4',
  heroFallback: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1920'
};

export const DATABASE: Record<string, ScentItem> = {
  iran_galbanum: {
    id: 'iran_galbanum', category: 'yuan', name: '雅兹德', location: '伊朗 · YAZD', x: 58, y: 38, visited: true, accent: '#2C3E28', isPopular: true,
    hero: ASSETS.galbanum, herb: '白松香', herbEn: 'Galbanum', shortDesc: '波斯荒漠的智性清醒',
    narrative: '强烈、苦涩且带有泥土感的绿意。Ferula 植物分泌的树脂，是大脑在高压环境下的冷却剂。',
    benefits: ['切断焦虑', '智性专注'],
    gcmsReport: ASSETS.gcmsPlaceholder
  },
  sa_chamomile: {
    id: 'sa_chamomile', category: 'yuan', name: '纳马夸兰', location: '南非 · NAMAQUALAND', x: 51, y: 72, visited: true, accent: '#1C39BB',
    hero: ASSETS.chamomile, herb: '海角洋甘菊', herbEn: 'Cape Chamomile', shortDesc: '纳马夸兰的蓝色宽恕',
    narrative: '罕见的深蓝色精油含有极高的母菊天蓝烃。它能抚慰那些由于失眠而红肿的感官神经。',
    benefits: ['深度助眠', '极速镇静'],
    gcmsReport: ASSETS.gcmsPlaceholder
  },
  thai_plai: {
    id: 'thai_plai', category: 'yuan', name: '清迈', location: '泰国 · CHIANG MAI', x: 74, y: 52, visited: true, accent: '#D4AF37',
    hero: ASSETS.plai, herb: '普赖', herbEn: 'Plai', shortDesc: '雨林理疗师',
    narrative: '泰式按摩的灵魂根茎。具有穿透性的辛辣感，能深入肌肉缝隙，驱散久坐的沉重感。',
    benefits: ['久坐缓解', '循环激活'],
    gcmsReport: ASSETS.gcmsPlaceholder
  },
  australia_sandalwood: {
    id: 'australia_sandalwood', category: 'yuan', name: '卡尔古利', location: '澳洲 · KALGOORLIE', x: 82, y: 78, visited: true, accent: '#8B4513',
    hero: ASSETS.sandalwood, herb: '澳洲檀香', herbEn: 'Sandalwood', shortDesc: '旷野的沉静力量',
    narrative: '时间的重量。干燥、温暖、木质。相比东印度檀香，它多了一份旷野的粗犷与坦荡。',
    benefits: ['冷静思考', '长效定香'],
    gcmsReport: ASSETS.gcmsPlaceholder
  },
  madagascar_neroli: {
    id: 'madagascar_neroli', category: 'yuan', name: '诺西贝', location: '马达加斯加 · NOSY BE', x: 55, y: 65, visited: true, accent: '#F4D03F',
    hero: ASSETS.neroli, herb: '橙花', herbEn: 'Neroli', shortDesc: '阳光下的精神绸缎',
    narrative: '极致纯净的苦橙花瓣，带着苦涩的柑橘清香。它如同在精神废墟上铺开的一层绸缎。',
    benefits: ['心率平衡', '忧郁驱散'],
    gcmsReport: ASSETS.gcmsPlaceholder
  },
  haiti_vetiver: {
    id: 'haiti_vetiver', category: 'yuan', name: '莱凯', location: '海地 · LES CAYES', x: 28, y: 50, visited: true, accent: '#4B3621',
    hero: ASSETS.vetiver, herb: '岩兰草', herbEn: 'Vetiver', shortDesc: '深陷泥土的安稳',
    narrative: '“宁静之油”。其复杂的根系在地底深处构建了最稳固的安全感。',
    benefits: ['注意力定锚', '焦虑阻断'],
    gcmsReport: ASSETS.gcmsPlaceholder
  },
  solar_wake: {
    id: 'solar_wake', category: 'he', name: '日晖', visited: true, accent: '#FFA500', isPopular: true,
    hero: ASSETS.solar, herb: '日晖处方', herbEn: 'Solar Wake', shortDesc: '脑力过载后的晨间重启',
    narrative: '温暖柑橘属与黑胡椒的能量激发。',
    benefits: ['多巴胺激发', '意志唤醒']
  },
  abyssal_calm: {
    id: 'abyssal_calm', category: 'he', name: '深渊', visited: true, accent: '#001F3F',
    hero: ASSETS.abyssal, herb: '深渊处方', herbEn: 'Abyssal Calm', shortDesc: '意识边缘的深度下潜',
    narrative: '幽蓝、寂静。含有极高母菊天蓝烃，模拟深海环境的情绪压舱石。',
    benefits: ['快速入眠', '深度修复']
  },
  forest_echo: {
    id: 'forest_echo', category: 'he', name: '林间', visited: true, accent: '#2C3E28',
    hero: ASSETS.forest, herb: '林间处方', herbEn: 'Forest Echo', shortDesc: '瓦尔登湖般的智性留白',
    narrative: '潮湿的泥土与冷杉，重建精神林场。',
    benefits: ['冷静专注', '负氧离子感']
  },
  digital_detox: {
    id: 'digital_detox', category: 'he', name: '尘嚣', visited: true, accent: '#95A5A6',
    hero: ASSETS.digital, herb: '尘嚣处方', herbEn: 'Digital Detox', shortDesc: '屏蔽多余的视觉噪音',
    narrative: '轻盈醛香，清除碎片化社交焦虑。',
    benefits: ['感官屏蔽', '呼吸舒张']
  },
  basalt_block: {
    id: 'basalt_block', category: 'jing', name: '玄石', visited: true, accent: '#333333',
    hero: ASSETS.basalt, herb: '黑火山岩扩香', herbEn: 'Basalt Block', shortDesc: '大地深处的缓慢呼吸',
    narrative: '死火山天然多孔石材。',
    benefits: ['原始材质', '长效扩香']
  },
  nebula_glass: {
    id: 'nebula_glass', category: 'jing', name: '星云', visited: true, accent: '#F0F3F4',
    hero: ASSETS.nebula, herb: '星云玻璃扩香', herbEn: 'Nebula Glass', shortDesc: '实验室流体美学',
    narrative: '手工吹制高硼硅玻璃。',
    benefits: ['极致纯净', '流体美学']
  },
  crystal_prism: {
    id: 'crystal_prism', category: 'jing', name: '晶棱', visited: true, accent: '#FFFFFF',
    hero: ASSETS.crystal, herb: '晶棱水晶扩香', herbEn: 'Crystal Prism', shortDesc: '光影交织的感官折射',
    narrative: '高纯度白水晶簇，将气味与物理光影结合。',
    benefits: ['高能震动', '艺术摆件']
  }
};
