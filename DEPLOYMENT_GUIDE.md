# デプロイ・設定ガイド

## 環境変数の設定

### 開発環境（ローカル）

`.env`ファイルをプロジェクトルートに作成：

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mvgngknr
VITE_RECAPTCHA_SITE_KEY=YOUR_SITE_KEY
```

**重要**: `.env`を変更した後は、開発サーバーを再起動（`npm run dev`）

### 本番環境（Vercel）

1. Vercelダッシュボード → プロジェクト選択
2. 「Settings」→「Environment Variables」
3. 環境変数を追加して「Save」
4. **再デプロイ**（「Deployments」→「Redeploy」）

## reCAPTCHA v3 の設定

1. [Google reCAPTCHA](https://www.google.com/recaptcha/admin/create) でサイトキー取得
2. タイプ: 「reCAPTCHA v3」を選択
3. ドメイン: `localhost`, `your-project.vercel.app`, 独自ドメインを追加
4. サイトキーを`.env`とVercelの環境変数に設定

## Formspree のメール送信

- **送信先**: Formspreeアカウントの「Linked Emails」に登録されたメールアドレス
- フォーム送信時に自動でメールが届きます

## Vercel の再デプロイ

### 方法1: ダッシュボード（推奨）
「Deployments」→ 最新デプロイ → 「...」→ 「Redeploy」

### 方法2: GitHubにプッシュ
```bash
git push origin main
```
自動で再デプロイされます

## トラブルシューティング

### 環境変数が反映されない
- 開発環境: サーバーを再起動
- 本番環境: Vercelで再デプロイ

### reCAPTCHAエラー
- 環境変数が正しく設定されているか確認
- ドメインがreCAPTCHAに登録されているか確認

### メールが届かない
- Formspreeの「Linked Emails」を確認
- スパムフォルダを確認

