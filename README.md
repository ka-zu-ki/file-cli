# file-cli
## 概要
コマンドライン入力を介して操作するアプリ

使用可能なパッケージは以下の通り
- MTools: 計算を行うパッケージ
- CCTools: さまざまな国の通貨を変換するパッケージ（開発中）

## 使い方
### MTools
```
$ MTools [command] [args]
```
command一覧
- add
- subtract
- multiply
- divide
- exp
- log
- abs
- sqrt
- round
- ceil
- floor

### CCTools
```
$ CCTools [command] [optional arg]
```
command一覧
- showAvailableLocales
- showDenominations
- convert

## 学んだこと
連結リスト

## FileSystem(実装予定)
木構造、連結リストでLinuxコマンドのような機能を実装する
command一覧
```
touch
mkdir
ls
cd
pwd
print
setContent
rm
mv
cp
```
