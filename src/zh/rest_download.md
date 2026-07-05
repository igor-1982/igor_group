# REST 下载

[← 返回首页](./index.md)

---

## 关于 REST

**REST**（Rust-based Electronic Structure Theory）是全球首个完全基于 Rust 语言的电子结构软件包。

**源代码与文档：** [gitee.com/restgroup](https://gitee.com/restgroup)

---

## 安装

### Conda 安装

[![Conda](https://anaconda.org/restgroup/rest/badges/latest_release_date.svg)](https://anaconda.org/restgroup/rest)

```bash
conda create -n rest python=3.11 -c conda-forge
conda activate rest
conda install rest -c restgroup -c mokit -c conda-forge
```

### 可用镜像

#### 当前版本：v2026.01

| 项目 | 详情 |
|---|---|
| **版本** | 2026.01（第三届 REST Workshop） |
| **发布日期** | 2026 年 7 月 4 日 |
| **Docker 镜像** | `rest_2026.01.tar.xz`（约 700 MB）— [下载](https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/docker/rest_workshop_remote_260702.tar.xz) |
| **Apptainer/Singularity 镜像** | `rest_2026.01.sif`（约 700 MB）— [下载](https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/apptainer/rest_workshop_remote_260704.sif) |

#### 历史版本

**v2025.01（第二届 REST Workshop）**

- **Docker：** `rest_2025.01.tar.gz`（约 1.6 GB）— [下载](https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/docker/rest_2025.01.tar.gz)
- **Apptainer/Singularity：** `rest_2025.01.sif`（约 1.6 GB）— [下载](https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/apptainer/rest_2025.01.sif)

---

## 快速安装

#### Conda
```bash
conda create -n rest python=3.11 -c conda-forge
conda activate rest
conda install rest -c restgroup -c mokit -c conda-forge
```

#### Docker
```bash
wget -O rest_2026.01.tar.xz "https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/docker/rest_workshop_remote_260702.tar.xz"
docker load < rest_2026.01.tar.xz
```

#### Apptainer/Singularity
```bash
wget -O rest_2026.01.sif "https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/apptainer/rest_workshop_remote_260704.sif"
singularity exec rest_2026.01.sif rest --version
```

---

## 引用

> Li, Z.; Gao, T.; Wang, S.; et al. REST: Embracing the Rust Programming Language for Modern Electronic Structure Theory. *Chin. J. Chem. Phys.* **2025**. DOI: [10.1063/1674-0068/cjcp2510156](https://doi.org/10.1063/1674-0068/cjcp2510156)

[← 返回首页](./index.md)
