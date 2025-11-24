# Portfolio Website

React + TypeScript + Vite で構築されたポートフォリオサイトです。

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example` を `.env` にコピーし、必要な値を設定してください。

```bash
cp .env.example .env
```

`.env` ファイルに以下を設定：

- `VITE_FORMSPREE_ENDPOINT`: FormspreeのエンドポイントURL
- `VITE_RECAPTCHA_SITE_KEY`: Google reCAPTCHA v3のサイトキー

### 3. 開発サーバーの起動

```bash
npm run dev
```

### 4. ビルド

```bash
npm run build
```

## デプロイ

### Vercel へのデプロイ（推奨）

1. [Vercel](https://vercel.com) にアカウントを作成
2. GitHubリポジトリを接続
3. 環境変数を設定：
   - `VITE_FORMSPREE_ENDPOINT`
   - `VITE_RECAPTCHA_SITE_KEY`
4. デプロイ

### その他のデプロイオプション

- **Netlify**: `netlify.toml` を追加してデプロイ可能
- **GitHub Pages**: `vite.config.ts` の `base` を設定してデプロイ可能
- **Firebase Hosting**: Firebase CLI を使用してデプロイ可能

## お問い合わせフォームの設定

### Formspree の設定

1. [Formspree](https://formspree.io/) にアカウントを作成
2. 新しいフォームを作成
3. 発行されたエンドポイントURLを `.env` の `VITE_FORMSPREE_ENDPOINT` に設定
4. Formspreeの設定で、reCAPTCHA v3のシークレットキーを設定（オプション）

### Google reCAPTCHA v3 の設定

1. [Google reCAPTCHA](https://www.google.com/recaptcha/admin/create) でサイトキーを作成
2. reCAPTCHAタイプは「reCAPTCHA v3」を選択
3. ドメインを登録（例: `localhost`, `yourdomain.com`）
4. 発行されたサイトキーを `.env` の `VITE_RECAPTCHA_SITE_KEY` に設定
5. Formspreeを使用する場合、シークレットキーもFormspreeの設定に追加

## 迷惑メール対策

このアプリでは以下の迷惑メール対策を実装しています：

1. **reCAPTCHA v3**: ユーザーの行動を分析し、ボットを検出
2. **ハニーポット**: 人間には見えない隠しフィールドでボットを検出
3. **バリデーション**: クライアント側での入力検証
4. **レート制限**: Formspreeが自動的にレート制限を実施

## 技術スタック

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- Lucide React Icons

