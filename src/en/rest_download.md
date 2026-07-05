# REST Downloads

[← Back to Homepage](./index.md)

---

## About REST

**REST** (Rust-based Electronic Structure Theory) is the first electronic structure package built entirely in Rust.

**Source code & docs:** [gitee.com/restgroup](https://gitee.com/restgroup)

---

## Install

### Conda Install

[![Conda](https://anaconda.org/restgroup/rest/badges/latest_release_date.svg)](https://anaconda.org/restgroup/rest)

```bash
conda create -n rest python=3.11 -c conda-forge
conda activate rest
conda install rest -c restgroup -c mokit -c conda-forge
```

### Ready Image

#### Current Version: v2026.01

| Item | Detail |
|---|---|
| **Version** | 2026.01 (3rd REST Workshop Edition) |
| **Release Date** | July 4, 2026 |
| **Docker Image** | `rest_2026.01.tar.xz` (~700 MB) — [Download](https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/docker/rest_workshop_remote_260702.tar.xz) |
| **Apptainer/Singularity Image** | `rest_2026.01.sif` (~700 MB) — [Download](https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/apptainer/rest_workshop_remote_260704.sif) |

#### Historical Versions

**v2025.01 (2nd REST Workshop Edition)**

- **Docker:** `rest_2025.01.tar.gz` (~1.6 GB) — [Download](https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/docker/rest_2025.01.tar.gz)
- **Apptainer/Singularity:** `rest_2025.01.sif` (~1.6 GB) — [Download](https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/apptainer/rest_2025.01.sif)

---

## Quick Install

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

## Citation

> Li, Z.; Gao, T.; Wang, S.; et al. REST: Embracing the Rust Programming Language for Modern Electronic Structure Theory. *Chin. J. Chem. Phys.* **2025**. DOI: [10.1063/1674-0068/cjcp2510156](https://doi.org/10.1063/1674-0068/cjcp2510156)

[← Back to Homepage](./index.md)
