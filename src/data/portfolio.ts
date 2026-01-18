export type SkillIconKey =
  | "html5"
  | "css3"
  | "laravel"
  | "filament"
  | "livewire"
  | "vue_js"
  | "jquery"
  | "php"
  | "inertia"
  | "alpine"
  | "wordpress"
  | "tailwind"
  | "firebase"
  | "javascript"
  | "hubspot"
  | "google_api"
  | "github"
  | "gitlab"
  | "stripe"
  | "amazon_chime"
  | "react"
  | "nextjs";

// Material Symbolsアイコンマッピング
export const skillIconMap: Record<SkillIconKey, string> = {
  html5: "code",
  css3: "style",
  laravel: "settings_applications",
  filament: "dashboard_customize",
  livewire: "bolt",
  vue_js: "view_module",
  jquery: "code_blocks",
  php: "terminal",
  inertia: "sync_alt",
  alpine: "flash_on",
  wordpress: "article",
  tailwind: "palette",
  firebase: "local_fire_department",
  javascript: "code",
  hubspot: "hub",
  google_api: "api",
  github: "account_tree",
  gitlab: "storage",
  stripe: "payments",
  amazon_chime: "videocam",
  react: "web",
  nextjs: "arrow_forward",
};

export interface SkillSummary {
  name: string;
  iconKey: SkillIconKey;
  rating: number;
}

export const skillsData: SkillSummary[] = [
  // 星5（先頭に配置）
  { name: "HTML5", iconKey: "html5", rating: 5 },
  { name: "CSS3", iconKey: "css3", rating: 5 },
  { name: "Laravel", iconKey: "laravel", rating: 5 },
  { name: "Filament", iconKey: "filament", rating: 5 },
  { name: "Livewire", iconKey: "livewire", rating: 5 },
  { name: "Vue.js", iconKey: "vue_js", rating: 5 },
  { name: "jQuery", iconKey: "jquery", rating: 5 },
  { name: "PHP", iconKey: "php", rating: 5 },
  // 星4
  { name: "Inertia", iconKey: "inertia", rating: 4 },
  { name: "Alpine.js", iconKey: "alpine", rating: 4 },
  { name: "WordPress", iconKey: "wordpress", rating: 4 },
  { name: "GitHub", iconKey: "github", rating: 4 },
  { name: "GitLab", iconKey: "gitlab", rating: 4 },
  { name: "Stripe", iconKey: "stripe", rating: 4 },
  // 星3
  { name: "Tailwind CSS", iconKey: "tailwind", rating: 3 },
  { name: "Firebase", iconKey: "firebase", rating: 3 },
  { name: "JavaScript", iconKey: "javascript", rating: 3 },
  { name: "HubSpot API", iconKey: "hubspot", rating: 3 },
  { name: "Google API", iconKey: "google_api", rating: 3 },
  // 星2
  { name: "React.js", iconKey: "react", rating: 2 },
  { name: "Next.js", iconKey: "nextjs", rating: 2 },
  { name: "Amazon Chime", iconKey: "amazon_chime", rating: 2 },
];

export interface SkillDetail {
  name: string;
  icon: SkillIconKey;
  experience: string;
  rating: number;
}

export const skillsDetailData: SkillDetail[] = [
  // 星5（経験3年）
  { name: "HTML5", icon: "html5", experience: "経験 3年以上", rating: 5 },
  { name: "CSS3", icon: "css3", experience: "経験 3年以上", rating: 5 },
  { name: "Laravel", icon: "laravel", experience: "経験 2年以上", rating: 5 },
  { name: "Filament", icon: "filament", experience: "経験 2年以上", rating: 5 },
  { name: "Livewire", icon: "livewire", experience: "経験 2年以上", rating: 5 },
  { name: "Vue.js", icon: "vue_js", experience: "経験 2年以上", rating: 5 },
  { name: "jQuery", icon: "jquery", experience: "経験 3年以上", rating: 5 },
  { name: "PHP", icon: "php", experience: "経験 3年以上", rating: 5 },
  // 星4
  { name: "Inertia", icon: "inertia", experience: "経験 2年以上", rating: 4 },
  { name: "Alpine.js", icon: "alpine", experience: "経験 2年以上", rating: 4 },
  { name: "WordPress", icon: "wordpress", experience: "経験 2年以上", rating: 4 },
  { name: "GitHub", icon: "github", experience: "経験 2年以上", rating: 4 },
  { name: "GitLab", icon: "gitlab", experience: "経験 2年以上", rating: 4 },
  { name: "Stripe", icon: "stripe", experience: "経験 2年以上", rating: 4 },
  // 星3（経験2年）
  { name: "Tailwind CSS", icon: "tailwind", experience: "経験 2年", rating: 3 },
  { name: "Firebase", icon: "firebase", experience: "経験 2年", rating: 3 },
  { name: "JavaScript", icon: "javascript", experience: "経験 2年", rating: 3 },
  { name: "HubSpot API", icon: "hubspot", experience: "経験 2年", rating: 3 },
  { name: "Google API", icon: "google_api", experience: "経験 2年", rating: 3 },
  // 星2
  { name: "React.js", icon: "react", experience: "経験 1年以上", rating: 2 },
  { name: "Next.js", icon: "nextjs", experience: "経験 1年以上", rating: 2 },
  { name: "Amazon Chime", icon: "amazon_chime", experience: "経験 1年以上", rating: 2 },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const projectsData: Project[] = [
  {
    title: "医療美容サロン管理システム",
    description:
      "ドクター診察・チケット販売/譲渡・在庫・定期便・発送までを一元管理。マルチテナント認証設計、Stripe Connect決済、CSV入出力、Google Calendar連携、AWS(S3/CloudFront)構成を担当。",
    image:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1400&q=80",
    tags: [
      "PHP 8.2",
      "Laravel 12",
      "Livewire v3",
      "Stripe Connect",
      "OAuth",
      "Google Calendar API",
      "AWS S3",
      "AWS CloudFront",
      "PHPUnit 11",
      "GitLab",
    ],
  },
  {
    title: "観光ガイド請求書発行・ガイド報告管理システム",
    description:
      "観光ガイドの案件/ホテル/料金/報告/請求書（当日・月末）を管理。請求書PDFの生成〜ダウンロード導線、メール自動化、OpenAI連携を含む設計〜実装を担当（xserverでのドメイン設定・デプロイまで対応）。",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1400&q=80",
    tags: [
      "PHP 8.2",
      "Laravel 12",
      "Livewire v3",
      "Alpine.js 3",
      "Filament 3",
      "Dompdf",
      "Google API Client",
      "PHPUnit 11",
      "GitHub",
    ],
  },
  {
    title: "撮影用レンタルスタジオのECサイト",
    description:
      "既存Next.jsプロジェクトの一部機能をLaravelへ切り出し。オーナー側管理画面とユーザー側ECの画面/フォーム設計、Firebase Auth/Firestore連携、実装まで担当（xserverでのドメイン設定・デプロイまで対応）。",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    tags: [
      "PHP 8.2",
      "Laravel 12",
      "Livewire v3",
      "Alpine.js 3",
      "Next.js 14",
      "SendGrid",
      "Firebase Auth",
      "Tailwind CSS",
      "Vercel",
      "CI/CD (Git-based)",
      "GitLab",
    ],
  },
  {
    title: "歯科衛生士向けマッチングサイト",
    description:
      "医院側管理画面（スカウト/求人作成/メッセージ/ポイント購入・課金）と求職者向けマッチングの詳細設計〜実装を担当。多段ステップ登録、求人検索/詳細、スワイプ式カードUI、性格タイプ診断を実装。",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80",
    tags: [
      "PHP 8.2",
      "Laravel 11",
      "Laravel Cashier",
      "Stripe",
      "Filament 3",
      "Vue 3 (Inertia)",
      "LINE SDK",
      "AWS S3",
      "GitLab",
    ],
  },
  {
    title: "映像通話・ライブ配信／録画管理システム",
    description:
      "ビデオ通話/ライブ配信/録画、HLS→MP4変換・録画ZIP作成などのファイル運用、業務管理画面（テナントログイン/CSV出力）に加え、2段階認証・権限・AWSリソース・テスト整備などの設計〜実装を担当。",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    tags: [
      "PHP 8.2",
      "Laravel 11",
      "Laravel Fortify",
      "Laravel Sanctum",
      "Pest",
      "Vue 3 (Inertia)",
      "TinyMCE",
      "Amazon IVS",
      "Amazon Chime SDK",
      "AWS S3",
      "AWS Lambda",
      "Amazon EventBridge",
      "ECS/ECR",
      "GitLab",
    ],
  },
  {
    title: "税理士業界向け求人マッチングサイト",
    description:
      "雇用者側（求人登録/スカウト/チャット/課金/コンテンツ）と求職者側（求人検索/詳細/応募・問い合わせ/マイページ/お気に入り）の基本〜詳細設計、実装を担当。xserverでのドメイン設定・デプロイまで対応。",
    image:
      "https://images.unsplash.com/photo-1554224155-3a58922a22c3?auto=format&fit=crop&w=1400&q=80",
    tags: [
      "PHP 8.2",
      "Laravel 11",
      "Laravel Cashier",
      "Stripe",
      "Filament 3",
      "reCAPTCHA",
      "HubSpot",
      "AWS S3",
      "GitLab",
    ],
  },
];

export interface ExperienceEntry {
  title: string;
  period: string;
  achievements: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    title: "バックエンドエンジニア, Backend Engineering.",
    period: "2023 - 現在",
    achievements: [
      "Web系Sler企業で正社員として様々な案件に参画。",
      "モダンな技術スタックに触れながらフロントエンド・バックエンドを幅広く担当。",
      "基本設計・要件定義・開発・テスト・リリース・運用保守と幅広い経験を積んでいます。",
      "AIを使用してテスト駆動・要件駆動開発にも着手しています。",
    ],
  },
  {
    title: "コーダー・フロントエンドエンジニア, frontend Engineering.",
    period: "2020 - 2022",
    achievements: [
      "社内SEとして、様々なWebサイトの構築・運用を担当。",
      "業務効率化を目的に、ツールの開発・運用を担当。",
      "HTML, CSS, JavaScriptを使用して、レスポンシブなランディングページを作成。",
      "WordPressを使用して、カスタマイズされたサイトを構築。",
    ],
  },
];

