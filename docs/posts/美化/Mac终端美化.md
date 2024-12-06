---
title: Mac Terminal 美化
date: 2024-12-05
tags:
  - Terminal
  - 美化
  - Mac
---

<!-- # Mac Terminal 美化 -->

## 环境需求

1. MacOS
2. 已安装 Homebrew
3. 已安装 Git

## 工具安装

1. 安装 zsh

```sh
brew install zsh
```

2. 安装 on-my-zsh

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

3. 安装 iTerm2

```sh
brew install iterm2
```

4. 安装主题 Powerlevel10k

```sh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

5. 设置主题

```sh
vi -/ .zshrc
```

打开编辑器找到 ZSH_THEME
设置为 ZSH_THEME="powerlevel10k/powerlevel10k"
执行 exec $SHELL
执行 p10k configure 配置各种参数

## 插件推荐

1. zsh-autosuggestions：自动补全常用指令
2. zsh-ayntax-highlighting：指令颜色高亮
3. zsh-z：快速打开常用和最近使用的文件夹

## FAQ

1.  vscode 无法正常显示图标

```json
// 打开设置 json 文件
// 加入下面这一句
{
  "terminal.integrated.fontFamily": "MesloLGS NF"
}
```
