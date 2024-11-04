# frontend

## URL

| env   | URL                                             |
| ----- | ----------------------------------------------- |
| prod  |  |
| dev   |  |
| local | http://localhost:3000/                          |

## 環境構築

### ライブラリのインストール

```bash
$ pnpm install
```

もしpnpmコマンドがなければ

```bash
$ npm install -g pnpm@9.12.3
```

でインストールしておいてください

### ローカルで起動する

下記のコマンドでapps配下のアプリケーションをすべて起動します。

```bash
$ pnpm dev
```

任意のアプリケーションだけ起動したいときは

```bash
$ cd apps/sampleApp
$ pnpm dev
```

で起動できます。
