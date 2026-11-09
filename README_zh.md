# AelosEmbodied

[English](README.md) | 简体中文


乐聚 Aelos Embodied 人形机器人开发资料库，包含积木式动作编程工程、ARtag 视觉定位案例、传感器示例与舞蹈动作素材。

Aelos Embodied（乐聚 Aelos EM）是面向具身智能教学与科研的双足人形机器人。程序在乐聚 **aelos_edu** 桌面软件中编写，该软件同时支持积木块与 Python；机器人运行基于 ROS 的控制器，动作则作为独立文件记录并单独下载。本仓库整理了配套的四个 IDE 工程、课程资料以及动作/舞蹈素材。

仓库中的代码是 IDE 生成产物，并非可独立构建的 SDK：`.js`、`.lua` 与 `main.py` 由 `aelos_edu` 2.1.5 及以上版本生成；每个工程真正可编辑的源文件是 `test.xml` 中的 Blockly 积木程序，`.abe` 只保存工程元信息。

## 目录结构

| 路径 | 内容 |
| --- | --- |
| `code/EM_demo/` | ARtag 视觉伺服抱箱工程：两个航点、胸部摄像头对齐，导入 20 个搬运动作模块 |
| `code/EM_default/` | 乐聚出厂内置工程（中文版，2025-03-22 镜像）：手柄可选择播放的表演合集 |
| `code/EM_serialcheck/` | 串口连接检查脚手架，仅保留一个 `Hands_up`（举手）动作积木 |
| `code/try/` | `aelos_edu` 2.2.8 生成的空工程骨架 |
| `doc/` | 使用手册 V1.0.1、三个课程 PPT（视觉、ARtag、传感器）及 ARtag 打印页 |
| `src/aelos_舞蹈动作文件/` | 动作与音频素材库：29 个寓言/古诗动作、34 个音乐舞蹈动作、13 个新版舞蹈脚本 |

## 工程说明

### EM_demo —— ARtag 视觉引导抱箱

本仓库的主工程。胸部摄像头读取 ARtag 位姿，程序以 bang-bang 方式依次校正：先修正偏航角（±10°），再修正左右偏移（±0.03 m），最后前进至标签距离小于 0.07 m，再迈步并放下方块。名为「地点1」「地点2」的两个过程分别对齐 11 号与 12 号标签，中间以两次「大幅度抱箱子左转」衔接。`main.py` 记录了这段控制逻辑，精简后如下：

```python
if artag_port.get_specifies_tag(11, 'chest')[0] != 1000:
    tag_x   = artag_port.get_specifies_tag(11, 'chest')[0]
    tag_y   = artag_port.get_specifies_tag(11, 'chest')[1]
    tag_yaw = artag_port.get_specifies_tag(11, 'chest')[2] + 90
    if tag_yaw > 10:      base_action.action('抱块小左转')
    elif tag_yaw < -10:   base_action.action('抱块小右转')
    elif tag_y > 0.03:    base_action.action('抱块小左侧移')
    elif tag_y < -0.03:   base_action.action('抱块小右侧移')
    elif tag_x > 0.07:    base_action.action('抱块向前慢走半步2')
    else:                 base_action.action('抱块前进一步2'); base_action.action('放下方块'); break
```

`import/` 下导入了 20 个动作模块，包括抱起、放下、抱块走步、侧移、转向与「翻墙1」；`src/` 保留了最终靠近阶段手工调整的两个动作脚本。

### EM_default —— 出厂表演工程

2025-03-22 镜像自带的中文内置工程。`while(true)` 循环读取手柄，四个按键分别触发带音乐的动作（鞠躬、俯卧撑、展翅、左脚射门），另外两个按键触发导入的整段舞蹈（少年、科目三）。工程内嵌了七个导入动作，Lua 动作库以可读文本提交。积木只生成机器人端 Lua 程序，未包含 ROS/Python 导出。

### EM_serialcheck 与 try

`EM_serialcheck` 是厂商的串口连接检查工程（EM串口连接检查），仅保留一个 `Hands_up`（举手）动作模块，没有工作区文件，用于确认 IDE 能否通过串口与机器人通信。`try` 是 2.2.8 的空工程，只有一个未连接的 `start` 积木；它的 `lib.lua` 是 IDE 为新工程生成的运行库可读版本。

## 动作与音频素材

`src/aelos_舞蹈动作文件/` 属于厂商/社区素材包，而非工程源码。**29 个寓言与古诗动作**（丑小鸭、小红帽、江雪、登鹳雀楼等，含中英文版本）与 **34 个音乐舞蹈脚本**（小苹果、江南style、最炫民族风、let it go、ppap 等；素材包标称 32 个，含两个变体）均以 `.src` 脚本、配套 `.mp3` 配乐和单页动作列表 PDF 的形式提供。`新版舞蹈/` 另有 **13 个较新脚本**，包括科目三、APT、你要跳舞吗和勇气大爆发（同时保留了积木程序截图）。

`.src` 是纯文本格式：刚度与速度行、`MOTORA`–`MOTORE` 舵机角度、`WAIT` 与 `DELAY`。IDE 可将其导入为自定义动作，Python 端则通过 `base_action.action('<动作名>')` 调用。素材合计 76 个脚本、72 段音频。这些素材未声明开源许可证。

## 文档

| 文件 | 内容 |
| --- | --- |
| `Aelos Embodied使用手册V1.0.1版-基于镜像1.0.pdf` | 65 页官方手册：`aelos_edu` 界面、串口与 Wi-Fi 连接、下载与运行、自定义动作、手柄、传感器、视觉、Python 编辑、TongVerse 及刷镜像 |
| `Aelos_EM视觉使用.pptx` | 20 页：头部与胸部摄像头、RGB 与 HSV、取色器 HSV 采样、视觉积木及按坐标窗口对齐 |
| `Ar_tag码标签使用.pptx` | 15 页：ARtag 编码、`ar_track_alvar`、X/Y/yaw 几何关系及对齐/导航练习 |
| `传感器的使用.pptx` | 16 页：LED、触摸、光敏与温湿度传感器、ID1/ID2 端口及生成的 Python 示例 |
| `ARtag打印文件.pdf` | 单页可打印 ARtag（0–8 号，4 cm × 4 cm） |

文档均为中文，属于乐聚课程资料，未声明开源许可证。

## 工具链与代码生成

- **机器人**：Aelos Embodied 双足平台，D-Robotics RDK X5 控制器运行 Ubuntu，内含 ROS 1 风格的 `catkin_ws` 与 `aelos_smart_ros` 包。头部摄像头水平向前，胸部摄像头约 45° 向下，回传画面均为 640×480。内置地磁传感器、两个磁吸传感器端口（ID1/ID2）、扬声器与麦克风，以及 2.4 GHz 手柄链路（信道 1–99）。
- **IDE**：Windows/macOS 上的 `aelos_edu` 2.1.5 及以上版本，中文界面。新建工程时必须选择机器人型号 **Aelos Embodied**。
- **部署**：动作函数通过 USB 串口下载，Python 代码通过 Wi-Fi 下载；断开串口后由机器人运行已存工程。离线 Lua 下载不支持传感器与视觉积木。
- **代码生成**：积木可生成机器人端 Lua（`MOTOrigid16`、`HKEY()`、`DelayMs`），或生成 ROS 路径的 `main.py`（`base_action`、`artag_port`、`sensor_port`、`nodes`）。视觉与 ARtag 积木只有可用的 Python 生成器，其 Lua 生成器为空实现，因此 `EM_demo` 附带了 `main.py`。
- **仿真**：乐聚基于 Isaac Sim 的 Sim2Real 平台 TongVerse（Linux + Docker）在手册中有说明，但未包含在本仓库中。

## 快速开始

1. 从乐聚支持页面安装 `aelos_edu` 2.1.5 或更新版本，打开工程目录。`.abe`、`test.xml` 与 `user*Action.js` 需放在一起，生成的动作模块之间互相引用。
2. 新建工程时选择机器人型号 Aelos Embodied；型号不匹配会导致串口连接失败。
3. 通过 USB 串口下载动作函数，通过 Wi-Fi 下载 Python 代码，断开串口后再点击运行。
4. 通过导入动作使用 `.src` 脚本；在 U 盘模式下把对应 `.mp3` 复制到机器人，即可配合音乐表演。
5. 程序无法启动时，先用串口检查工程确认链路，再核对工程对应的 IDE 版本。

## 说明与限制

- 三个工程的 IDE 版本不同：`EM_demo` 为 2.1.6，`EM_default` 为 2.2.1，脚手架为 2.2.8，请用匹配的 `aelos_edu` 版本打开。
- `EM_demo/main.lua`、`lib.lua`、`Actionlib.lua` 是供机器人运行时使用的 Lua 5.3 字节码；仅 `Temp*.lua` 模板、`CustomAction.lua` 与 `Musics.lua` 是可读文本。
- `EM_serialcheck` 没有工作区文件，`try` 只有一个空 `start` 积木，两者属于脚手架而非可运行工程。
- `.abe` 记录了原始编写路径（厂商 SD 卡、工程师桌面、本地下载目录），打开时 IDE 可能询问工程位置。
- 资料中没有自由度、负载、电池等硬件规格，具体参数请以乐聚官方为准。
- 课程 PPT 与 Aelos Pro 动作包属于乐聚/社区素材，未声明开源许可证，本仓库不为其重新授权。
- 仓库约 350 MB，其中大部分为 `.mp3` 音频素材。
