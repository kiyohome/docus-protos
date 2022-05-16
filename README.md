# docus-protos

フレームワークやライブラリなどのドキュメント作成をすぐに始められるように[Docusaurus v2](https://docusaurus.io/)で作成したサンプルプロジェクトです。

次の機能をセットアップ済みです。

- [Docs-only mode](https://docusaurus.io/docs/docs-introduction#docs-only-mode)
- [Internationalization](https://docusaurus.io/docs/i18n/introduction)
- [Versioning](https://docusaurus.io/docs/versioning)
- [Deploying to GitHub Pages](https://docusaurus.io/docs/deployment#deploying-to-github-pages)
- [Triggering deployment with GitHub Actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions)

こちらもセットアップしたかったのですが[サンプルのドキュメントは対象に含まれていない](https://docsearch.algolia.com/docs/who-can-apply/)ので未実施です。

- [Using Algolia DocSearch](https://docusaurus.io/docs/search#using-algolia-docsearch)
  - こちらを見ると簡単に強力な検索機能を追加できそうです。
    - [Docusaurus v2のページにAlgolia DocSearchを導入する](https://qiita.com/tetunori_lego/items/b050cac1a2b7fc5a1b18)


### インストール

```
$ yarn
```

### ローカル開発

ローカル開発では多言語を同時に確認できません。
enの開発は次のコマンドで行います。

```
$ yarn start
```

このコマンドはローカルの開発サーバーを起動しブラウザウィンドウを開きます。
サーバーを再起動することなく、ほとんどの変更はすぐに反映されます。

jaの開発は次のコマンドで行います。

```
$ yarn start --locale ja
```

### 多言語の動作確認

```
$ yarn build
```

このコマンドはbuildディレクトリに静的コンテンツを生成します。

```
$ yarn serve
```

このコマンドはbuildディレクトリの静的コンテンツを配信します。
これで多言語を含めた全てのコンテンツを同時に確認できます。

### デプロイ

このリポジトリにはGitHub Pagesへの自動デプロイを行うGitHub Actionsの設定が含まれています。
mainブランチにプッシュすると自動でデプロイされます。
Pagesへの自動デプロイを行う場合は、リポジトリのSettings＞Actions＞General＞Workflow permissionsで「Read and write permissions」を選択してください。

手動でデプロイしたい場合は次のコマンドで行います。

SSHを使う場合：

```
$ USE_SSH=true yarn deploy
```

SSHを使わない場合：

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

このコマンドは静的コンテンツを生成してgh-pagesブランチにプッシュします。
